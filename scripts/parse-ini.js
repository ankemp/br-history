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
    const f = ini.parse(fs.readFileSync(file, 'utf-8'));
    await jsonWrite('src/assets/locale/en.json', f);
  });

program.parse(process.argv);
