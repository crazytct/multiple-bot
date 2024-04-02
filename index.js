const { Client, GatewayIntentBits } = require('discord.js');

// Define configurations for each bot
const botsConfig = [
  {
    token: (process.env.token) , // Replace with your bot's token
    watching: 'the stars',
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent, // Include if you need message content
    ],
  },
  {
    token: (process.env.token) , // Replace with your bot's token
    watching: 'the moon',
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent, // Include if you need message content
    ],
  },
  // Add more bot configurations as needed
];

// Function to initialize and start each bot
botsConfig.forEach((botConfig) => {
  const bot = new Client({ intents: botConfig.intents });

  bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} and watching ${botConfig.watching}!`);
    bot.user.setActivity(botConfig.watching, { type: 'WATCHING' });
  });

  bot.on('messageCreate', (message) => {
    // Prevent bot from responding to its own messages
    if (message.author.bot) return;

    // Respond to the "!ping" command as an example
    if (message.content === '!ping') {
      message.reply('Pong!');
    }
    
    // Add additional commands as needed
  });

  // Log in the bot with its token
  bot.login(botConfig.token);
});
