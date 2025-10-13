import fs from 'fs-extra';
import path from 'path';
import { loadConfig } from '@/utils/config.js';
import { ConfigOptions } from '@/types/index.js';

export const resolveOutputPath = (
  type: string,
  name: string,
  options: ConfigOptions
): string => {
  const config = loadConfig();
  const ext = getFileExtension(type, options);

  const baseDir =
    config.paths?.[type] ??
    (type === 'component' ? 'src/components' : `src/${type}s`);

  const outputDir = path.isAbsolute(baseDir)
    ? baseDir
    : path.join(process.cwd(), baseDir);

  const fileName = `${name}${type === 'test' ? `.${options.unitTestExt}` : ''}${ext}`;
  return path.join(outputDir, fileName);
}

export const writeOutput = async(
  outputPath: string,
  content: string
): Promise<void> => {
  await fs.ensureDir(path.dirname(outputPath));
  await fs.writeFile(outputPath, content);
}

const getFileExtension = (type: string, options: ConfigOptions): string => {
  if (type === 'component') return '.vue';
  return options.ts ? '.ts' : '.js';
}
