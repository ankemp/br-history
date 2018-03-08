#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');
const ini = require('ini')
const jsonfile = require('jsonfile')

function jsonWrite(file, obj) {
  return new Promise((Resolve, Reject) => {
    jsonfile.writeFile(file, obj, (err) => {
      if (!err) {
        Resolve();
      }
      Reject(err)
    })
  })
}

program
  .arguments('<file>')
  .action(async file => {
    const path = `./locale/${file}`
    const f = ini.parse(fs.readFileSync(path, 'utf-8'));
    await jsonWrite('./src/assets/i18n/en.json', f);
  });

program.parse(process.argv);
