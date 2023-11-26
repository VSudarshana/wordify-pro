const fetchRandomWord = async () => {
  const response = await fetch('https://random-words-api-to-telegram.vercel.app/');
  const json = await response.json();
  const randomWord = json[0].word;
  const defin = json[0].definition;
  document.getElementById('word').innerHTML = randomWord;
  document.getElementById('definition').innerHTML = defin;
};

fetchRandomWord();
