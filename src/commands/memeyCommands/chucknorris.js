const { GenericCommand } = require('../../models');

module.exports = new GenericCommand(
  async ({ Memer, addCD }) => {
    const data = await Memer.http.get('http://api.icndb.com/jokes/random');

    await addCD();
    return {
      title: '👊 Seyuj Annen 👊',
      description: data.body.value.joke.replace(/&quot;/g, '"').replace("Chuck Norris", "Annen")
    };
  }, {
    triggers: ['annen', 'seyuj', 'seyujannen'],
    description: 'Let\'s learn about God',
    perms: ['embedLinks']
  }
);
