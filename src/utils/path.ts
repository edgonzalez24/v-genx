import path from 'path';
import fs from 'fs';
import { GenerateOptions } from '../../types/options';

export const getTemplatePath = (type: string, options: GenerateOptions) => {
  const { vue2, vue3, composition, ts } = options;

  if (vue2 && vue3) {
    throw new Error('You cannot select Vue 2 and Vue 3 at the same time.');
  }
    

  let frameworkFolder: string = 'vue2';
  if (vue2) {
    frameworkFolder = 'vue2';
  }

  if(vue3) {
    frameworkFolder = 'vue3';
  }

  let templateFileName: string;
  if (type === 'component') {
    if (vue2) {
      templateFileName = 'component.vue';
    } else {
      templateFileName = composition
        ? `component-composition${ts ? '-ts' : ''}.vue`
        : 'component-options.vue';
    }
  } else {
    templateFileName = `${type}.js`;
  }

  return path.join(
    __dirname,
    `../templates/${frameworkFolder}`,
    templateFileName
  );
};

const loadConfig = () => {
  const configPath = path.join(process.cwd(), 'vgenx.config.json');
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  }
  return {};
}

export const getOutputPath = (type: string, name: string, ext: string) => {
  const config = loadConfig();

  const baseDir =
    config.paths?.[type] ??
    (type === 'component' ? 'src/components' : `src/${type}s`);

  const outputDir = path.isAbsolute(baseDir)
    ? baseDir
    : path.join(process.cwd(), baseDir);
    
  return { outputFile: path.join(outputDir, `${name}${ext}`) };
};
