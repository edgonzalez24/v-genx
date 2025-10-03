import fs from 'fs-extra';
import ejs from 'ejs';
import chalk from 'chalk';
import { GenerateOptions, Framework } from '../types/options';
import { getTemplatePath, getOutputPath } from '../src/utils/path';
import { getFileExtension } from '../src/utils/extensions';

export const generate = async (
  type: string,
  name: string,
  options: GenerateOptions
): Promise<void> => {
  const { composition, ts = false, vue2 = true } = options;

  const framework: Framework = vue2 ? 'vue2' : 'vue3';

  const templateFile = getTemplatePath(type, options);
  const ext = getFileExtension(templateFile, ts);
  const { outputDir, outputFile } = getOutputPath(type, name, ext);

  await fs.ensureDir(outputDir);

  const content = await ejs.renderFile(templateFile, { name, composition });

  await fs.writeFile(outputFile, content);

  console.log(chalk.green('Generado:'), {
    type,
    name,
    framework,
    composition: !!composition,
    typescript: !!ts,
  });
};
