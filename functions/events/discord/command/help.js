// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.users['@0.2.0'].dms.create({
  recipient_id: context.params.event.member.user.id, // required
  content: [
    `please send help, <@!${context.params.event.member.user.id}>!`,
 
  ].join('\n'),
});