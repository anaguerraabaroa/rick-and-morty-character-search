// localStorage

const setInLocalStorage = (
  filterName,
  filterSpecies,
  filterStatus,
  filterGender
) => {
  const filters = {
    name: filterName.toLowerCase(),
    species: filterSpecies.toLowerCase(),
    status: filterStatus.toLowerCase(),
    gender: filterGender,
  };
  localStorage.setItem("filters", JSON.stringify(filters));
};

const getFromLocalStorage = () => {
  const dataLocalStorage = JSON.parse(localStorage.getItem("filters"));
  return dataLocalStorage !== null
    ? dataLocalStorage
    : {
        name: "",
        species: "all",
        status: "all",
        gender: [],
      };
};

export { setInLocalStorage, getFromLocalStorage };
