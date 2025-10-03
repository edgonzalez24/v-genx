#!/usr/bin/env node
import { program } from 'commander';
import { generate } from '../commands/generate';

program
  .command('g <type> <name>')
  .option('--vue2', 'Generate Vue 2 code')
  .option('--vue3', 'Generate Vue 3 code')
  .option('--composition', 'Using the Composition API (Vue 3 only)')
  .option('--ts', 'Use TypeScript')
  .action(generate);

program.parse(process.argv);
