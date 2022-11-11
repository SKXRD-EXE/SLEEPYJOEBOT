const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": true,
  "embeds": [
    {
      "type": "rich",
      "title": `Sleepy Joes joke`,
      "description": `What has two legs and cant ride a bike *walks off as his dementia sets in*`,
      "color": 0xff0000,
      "image": {
        "url": `https://cdn.discordapp.com/attachments/756872846311161918/1040745851611533332/biden-falling-off-a-bicycle-acegif-1.gif`,
        "height": 0,
        "width": 0
      }
    }
  ]
});