export const toCallPokeAPI = async () => {
  /*
    const response = await axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then((res) => {
    	return res.data.results;
    })
    .then((results) => {
    	return Promise.all(results.map((res) => axios.get(res.url)));
    });

    */

  try {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0")
      .then((res) => {
        //console.log(res)
        return res.json();
      })
      .then((res) => {
        //console.log(res)
        return res.results;
      })
      .then((res) => {
        return res.map((r) => r.url);
      })
      .then((resp) =>
        Promise.all(
          resp.map(async (url) => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
          })
        )
      );

  

    return  result
  } catch (error) {
    console.log(error);
  }
};
