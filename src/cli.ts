#!/usr/bin/env node
import { program } from 'commander';
import { generate } from '@/commands/generate.js';

program
  .command('g <type> <name>')
  .action(generate);

program.parse(process.argv);
