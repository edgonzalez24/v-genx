import { ConfigOptions } from '@/types/index.js';
import { handleError } from '@/utils/error.js'

export const buildConfigOptions = (config: any): ConfigOptions  => {
  try {
    if (!config?.framework) {
      throw new Error('Invalid config: missing "framework" section');
    }
  } catch (err) {
    handleError(err);
  }


  const { framework, language, testing } = config;

  const options: ConfigOptions = {
    vue2: Number(framework.version) === 2,
    vue3: Number(framework.version) === 3,
    composition: framework?.composition,
    ts: Boolean(language?.typescript),
    unitTest: testing?.unit?.runner,
    unitTestExt: testing?.unit?.ext || 'spec',
  };

  return options;
}
