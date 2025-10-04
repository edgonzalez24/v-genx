import fs from 'fs-extra';
import ejs from 'ejs';
import path from 'path';
import { GenerateOptions } from '../types/options';
import { getTemplatePath, getOutputPath } from '../src/utils/path';
import { getFileExtension } from '../src/utils/extensions';

export const generate = async (
  type: string,
  name: string,
  options: GenerateOptions
): Promise<void> => {
  const { composition, ts = false } = options;
  const templateFile = getTemplatePath(type, options);
  const ext = getFileExtension(templateFile, (ts && type !== 'component'));
  const { outputFile } = getOutputPath(type, name, ext);

  await fs.ensureDir(path.dirname(outputFile));

  const content = await ejs.renderFile(templateFile, { name, composition });

  await fs.writeFile(outputFile, content);
};
