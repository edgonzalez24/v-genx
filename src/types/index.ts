export interface ConfigOptions {
  vue2: boolean;
  vue3: boolean;
  composition: boolean;
  ts: boolean;
  unitTest: string;
  unitTestExt: string;
}

export type Framework = 'vue2' | 'vue3';
