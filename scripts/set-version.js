#!/usr/bin/env node
const program = require('commander');
const git = require('git-rev');
const replace = require('replace-in-file');

function getSHA() {
  return new Promise((Resolve, Reject) => {
    git.short(sha => {
      if (!sha) {
        Reject('No SHA');
      }
      Resolve(sha);
    })
  })
}

program
  .arguments('<branch>')
  .action(async branch => {
    const sha = await getSHA();
    const date = new Date();
    const dateString = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
    const buildVersion = `${dateString}_${branch}-${sha}`;
    const options = {
      files: `src/environments/environment.prod.ts`,
      from: /version: '(.*)'/g,
      to: "version: '" + buildVersion + "'"
    };
    replace(options)
      .then(changes => {
        console.log('Versions Updated %i files: %s', changes.length, buildVersion);
      })
      .catch(error => {
        console.error('An error occurred', error);
      })
  });

program.parse(process.argv);
