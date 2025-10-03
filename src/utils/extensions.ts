import path from 'path';

export const getFileExtension = (templateFile: string, typescript: boolean) => {
  if (typescript) return '.ts';
  return path.extname(templateFile);
};
