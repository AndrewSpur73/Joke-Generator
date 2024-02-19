const endpoint = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw';

const getJoke = () => new Promise((resolve, reject) => {
  fetch(endpoint, {
    method: 'Get',
    headers: {
      'Type-Content': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getJoke;
