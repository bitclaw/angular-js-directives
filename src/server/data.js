module.exports = {
  people: getPeople()
};

function getPeople() {
  return {
    name: 'Luke Skywalker',
    address: {
      street: 'PO Box 123',
      city: 'A secret rebel base.',
      planet: 'Yavin 4'
    },
    friends: [
      'Han',
      'Leia',
      'Chewbacca'
    ]
  };
}
