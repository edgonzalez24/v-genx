export const getFileExtension = (templateFile: string, ts: boolean): string => {
  if (templateFile.endsWith('.vue')) return '.vue';
  return ts ? '.ts' : '.js';
};
