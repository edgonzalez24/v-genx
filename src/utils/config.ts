import fs from 'fs';
import path from 'path';

export const loadConfig = (): any => {
  const configPath = path.join(process.cwd(), 'vgenx.config.json');

  if (!fs.existsSync(configPath)) {
    return {};
  }

  try {
    const content = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(content);
  } catch (error: any) {
    throw new Error(
      `Error reading config file at ${configPath}: ${error.message}`
    );
  }
}
