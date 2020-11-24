const getDataFromApi = () => {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

export default {
  getDataFromApi: getDataFromApi,
};
