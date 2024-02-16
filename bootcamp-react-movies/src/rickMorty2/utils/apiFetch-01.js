export const fetchMorty1 = async (url) => {
  let allCharacters = [];

  const response = await fetch(`${url}`);
  const data = await response.json();

  //console.log(data);
  const characters = data.results;
  //console.log(characters)
  const next = data.info.next;
  //console.log(next)

  characters.forEach((data) => {
    allCharacters.push(data);
  });

  return [allCharacters, next];
};
