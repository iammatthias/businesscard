#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const fetch = require('node-fetch');

let settings = { method: 'Get' };

fetch('https://iammatthias.com/feedPost.json', settings)
  .then((res) => res.json())
  .then((json) => {
    var feedPost = JSON.parse(JSON.stringify(json));
    const postTitle = feedPost.items[0].title;
    const postURL = feedPost.items[0].url;

    fetch('https://iammatthias.com/feedPhoto.json', settings)
      .then((res) => res.json())
      .then((json) => {
        var feedPhoto = JSON.parse(JSON.stringify(json));
        const photoTitle = feedPhoto.items[0].title;
        const photoURL = feedPhoto.items[0].url;

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
          lastestPostSectionHeading: chalk.white.bold.underline('Latest Post'),
          lastestPostTitle: chalk.white.italic(`∵ ${postTitle}`),
          lastestPostURL: chalk.green(`∵ ${postURL}`),
          lastestPhotoSectionHeading: chalk.white.bold.underline(
            'Latest Gallery'
          ),
          lastestPhotoTitle: chalk.white.italic(`∵ ${photoTitle}`),
          lastestPhotoURL: chalk.green(`∵ ${photoURL}`),
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
        const lastestPostSection = `${data.lastestPostSectionHeading}`;
        const lastestPostTitle = `${data.lastestPostTitle}`;
        const lastestPostURL = `${data.lastestPostURL}`;
        const lastestPhotoSection = `${data.lastestPhotoSectionHeading}`;
        const lastestPhotoTitle = `${data.lastestPhotoTitle}`;
        const lastestPhotoURL = `${data.lastestPhotoURL}`;
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
          lastestPhotoSection +
          newline +
          lastestPhotoTitle +
          newline +
          lastestPhotoURL +
          newline +
          newline +
          lastestPostSection +
          newline +
          lastestPostTitle +
          newline +
          lastestPostURL;

        console.log(chalk.green(boxen(output, options)));
      });
  })
  .catch((err) => console.error(err));
