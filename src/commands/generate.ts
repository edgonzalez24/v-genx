import { generateFile } from '@/core/generator.js';

export const generate = async (type: string, name: string): Promise<void> => {
  try {
    await generateFile(type, name);
  } catch (error: any) {
    process.exit(1);
  }
};