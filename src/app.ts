import { App, LogLevel } from '@slack/bolt';
import dotenv from 'dotenv';

dotenv.config();

const app = new App({
  appToken: process.env.SLACK_APP_TOKEN,
  token: process.env.SLACK_BOT_TOKEN,
  logLevel: LogLevel.WARN,
  socketMode: true
});

app.message(/.*/, async ({ message }) => {
  await console.log(message);
});

app.message('hi', async ({ say }) => {
  await say(`Hello!`);
});

app.event('app_mention', async ({ say }) => {
  await say(`Shut up.`);
});

app.message(/.*<@UC734HMC4>.*/, async ({ say }) => {
  await say(`He is busy.`);
});

app.message('help', async ({ client, message }) => {
  await client.chat.postMessage({
    channel: 'CC6JF4EDN',
    // eslint-disable-next-line
    // @ts-ignore message.user does not exist on type
    text: `<@${message.user}> is asking for help in <#${message.channel}>.`
  });
});

app.event('reaction_added', async ({ client, payload }) => {
  await client.chat.postMessage({
    // eslint-disable-next-line
    // @ts-ignore payload.item.channel does not exist on type
    channel: payload.item.channel,
    text: `:${payload.reaction}:`
  });
});

(async () => {
  await app.start();
  console.log('⚡️ Bolt app is running!');
})();
