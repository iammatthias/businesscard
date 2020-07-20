#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const fetch = require('node-fetch');

let settings = { method: 'Get' };

fetch('https://iammatthias.com/feed.json', settings)
  .then((res) => res.json())
  .then((json) => {
    var feed = JSON.parse(JSON.stringify(json));
    const postTitleA = feed.items[0].title;
    const postURLA = feed.items[0].url;
    const postTitleB = feed.items[1].title;
    const postURLB = feed.items[1].url;
    const postTitleC = feed.items[2].title;
    const postURLC = feed.items[2].url;
    const postTitleD = feed.items[3].title;
    const postURLD = feed.items[3].url;

    // Pull in our modules
    const chalk = require('chalk');
    const boxen = require('boxen');

    // Define options for Boxen
    const options = {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
    };

    // Text + chalk definitions
    const data = {
      name: chalk.white('Matthias Jordan ∴'),
      handle: chalk.cyan('iammatthias'),
      description: chalk.white.italic.underline(
        'Photographer & Growth Marketer'
      ),
      work: chalk.white('Omnichannel Marketing Manager @ Aspiration'),
      twitter: chalk.cyan('twitter.com/iammatthias'),
      github: chalk.cyan('github.com/iammatthias'),
      linkedin: chalk.cyan('linkedin.com/in/iammatthias'),
      web: chalk.cyan('iammatthias.com'),
      aMusic: chalk.cyan('music.apple.com/profile/iammatthias'),
      npx: chalk.white('npx iammatthias'),
      labelWork: chalk.white.bold('Current:'),
      labelTwitter: chalk.white.bold('Twitter:'),
      labelGitHub: chalk.white.bold('GitHub:'),
      labelLinkedIn: chalk.white.bold('LinkedIn:'),
      labelAppleMusic: chalk.white.bold('Apple Music:'),
      labelWeb: chalk.white.bold('Web:'),
      labelCard: chalk.white.bold('Card:'),
      lastestHeading: chalk.white.bold.underline('Latest'),
      lastestTitleA: chalk.white(`${postTitleA}`),
      lastestURLA: chalk.green(`${postURLA}`),
      lastestTitleB: chalk.white(`${postTitleB}`),
      lastestURLB: chalk.green(`${postURLB}`),
      lastestTitleC: chalk.white(`${postTitleC}`),
      lastestURLC: chalk.green(`${postURLC}`),
      lastestTitleD: chalk.white(`${postTitleD}`),
      lastestURLD: chalk.green(`${postURLD}`),
      list: chalk.white('∵'),
    };

    // Actual strings we're going to output
    const newline = '\n';
    const heading = `${data.name} ${data.handle}`;
    const description = `${data.description}`;
    const working = `    ${data.labelWork}  ${data.work}`;
    const twittering = `    ${data.labelTwitter}  ${data.twitter}`;
    const githubing = `     ${data.labelGitHub}  ${data.github}`;
    const linkedining = `   ${data.labelLinkedIn}  ${data.linkedin}`;
    const listening = `${data.labelAppleMusic}  ${data.aMusic}`;
    const webing = `        ${data.labelWeb}  ${data.web}`;
    const lastestHeading = `${data.lastestHeading}`;
    const lastestTitleA = `${data.list} ${data.lastestTitleA}`;
    const lastestURLA = `${data.list} ${data.lastestURLA}`;
    const lastestTitleB = `${data.list} ${data.lastestTitleB}`;
    const lastestURLB = `${data.list} ${data.lastestURLB}`;
    const lastestTitleC = `${data.list} ${data.lastestTitleC}`;
    const lastestURLC = `${data.list} ${data.lastestURLC}`;
    const lastestTitleD = `${data.list} ${data.lastestTitleD}`;
    const lastestURLD = `${data.list} ${data.lastestURLD}`;
    const carding = `${data.labelCard}  ${data.npx}`;

    // Put all our output together into a single variable so we can use boxen effectively
    const output =
      heading +
      newline +
      newline +
      description +
      newline +
      newline +
      webing +
      newline +
      newline +
      working +
      newline +
      twittering +
      newline +
      githubing +
      newline +
      linkedining +
      newline +
      listening +
      newline +
      newline +
      lastestHeading +
      newline +
      newline +
      lastestTitleA +
      newline +
      lastestURLA +
      newline +
      lastestTitleB +
      newline +
      lastestURLB +
      newline +
      lastestTitleC +
      newline +
      lastestURLC +
      newline +
      lastestTitleD +
      newline +
      lastestURLD;

    console.log(chalk.green(boxen(output, options)));
  })
  .catch((err) => console.error(err));
