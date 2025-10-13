import { loadConfig } from '@/utils/config.js';
import { resolveTemplatePath, renderTemplate } from '@/core/template.js';
import { resolveOutputPath, writeOutput } from '@/core/output.js';
import { buildConfigOptions } from '@/core/options.js'

export const generateFile = async(type: string, name: string) => {
  const config = loadConfig();
  const options = buildConfigOptions(config);
  const templatePath = resolveTemplatePath(type, options);
  const outputPath = resolveOutputPath(type, name, options);
  const content = await renderTemplate(templatePath, {
    name,
    composition: options.composition,
  });
  if (options.unitTest) {
    await generateUnitTest(type, name, options);
  }
  await writeOutput(outputPath, content);
}


const generateUnitTest = async(
  type: string,
  name: string,
  options: ReturnType<typeof buildConfigOptions>
) => {
  const templatePath = resolveTemplatePath(`${type}.spec`, options);
  const outputPath = resolveOutputPath('test', name, options);

  const content = await renderTemplate(templatePath, {
    name,
    ts: options.ts,
  });

  await writeOutput(outputPath, content);
}