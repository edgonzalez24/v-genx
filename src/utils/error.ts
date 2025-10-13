export const handleError = (err: unknown): void => {
  let message = 'An unknown error occurred';

  if (err instanceof Error) {
    message = err.message;
  } else if (typeof err === 'string') {
    message = err;
  } else if (typeof err === 'object' && err !== null) {
    message = JSON.stringify(err);
  }
  console.error(`\x1b[31m✖ ${message}\x1b[0m`);

  process.exit(1);
}
