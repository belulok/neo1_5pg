import { Client, Intents } from 'discord.js';

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', ()=> console.log('The bot is up and running!'));

bot.login('OTM0Njc4MTMxNDg5NTA1Mjgx.GHRTwZ.y0DCQuAXvrlQBRnPOP7Rt3AGfVNrtDLUSNgQoA');