const { Client, Intents } = require('discord.js');

// Create a configuration for your bots with their respective tokens
const botsConfig = [
  { token: 'MTIyNTExNjAzNTcwMzc2NzEyMA.GjMCpP.RXJ2JzcZIWgDCuLUE1rfdbiyADawW4KZQXLXIs', intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] },
  { token: 'MTIyNTExNjA4NDc2MDM1MDcyMA.GQ8rQH.Ak2lWwbDZROd7ycIUQyPWxfhFpnOY7TcHRAmtE', intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] },
  // Add more bot configurations if needed
];

// Function to create a bot client and set up listeners
function createBot(botConfig) {
  const bot = new Client({ intents: botConfig.intents });

  bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });

  bot.on('messageCreate', message => {
    if (message.author.bot) return;
    
    // Here you can set up your command handling for each bot
    if (message.content === '!ping') {
      message.reply('Pong!');
    }
    // Add more commands as needed
  });

  bot.login(botConfig.token);
}

// Initialize each bot
botsConfig.forEach(createBot);
