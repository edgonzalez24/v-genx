import path from 'path';
import fs from 'fs';
import ejs from 'ejs';
import { ConfigOptions } from '@/types/index.js';
import { handleError } from '@/utils/error.js';

export const resolveTemplatePath = (
  type: string,
  options: ConfigOptions
): string => {
    try {
      const { vue2, vue3, composition, ts, unitTest } = options;
      if(!vue2 && !vue3) {
        throw new Error('Unsupported Vue version');
      }

      let frameworkFolder:string = '';
      if (type === 'component') {
        frameworkFolder = vue3 ? 'vue3' : 'vue2';
      } else {
        frameworkFolder = unitTest;
      }

      const templatesBase = path.join(
        __dirname,
        `../templates/${frameworkFolder}`
      );

      let templateFileName: string;

      if (type === 'component') {
        templateFileName = getComponentTemplateFile(vue2, composition, ts);
      } else {
        templateFileName = 'index.ts';
      }

      const templateFilePath = path.join(templatesBase, templateFileName);

      if (!fs.existsSync(templateFilePath)) {
        throw new Error(`Template not found: ${templateFilePath}`);
      }

      return templateFilePath;
    } catch(err) {
      handleError(err);
      return '';
    }
};

export const renderTemplate = async(
  templatePath: string,
  data: Record<string, any>
): Promise<string> => {
  try {
    return await ejs.renderFile(templatePath, data, { async: true });
  } catch (error: any) {
    throw new Error(
      `Error rendering template ${templatePath}: ${error.message}`
    );
  }
}

export const getComponentTemplateFile = (vue2: boolean, composition: boolean, ts: boolean): string => {
  if (vue2)  {
    return 'component.vue';
  };

  if (composition) {
    return `component-composition${ts ? '-ts' : ''}.vue`;
  } else {
    return 'component-options.vue';
  }
}