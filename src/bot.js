import { config } from 'dotenv';
config({ path: '.env' });

import { Client, Intents } from 'discord.js';

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', ()=> console.log('The bot is up and running!'));

bot.login(process.env.BOT_TOKEN);