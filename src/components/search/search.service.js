class SearchService {
  updateResults(search, searchableItems) {
    let regex = new RegExp(search, "gi");

    let searchResults = searchableItems.filter((item) => {
      return regex.test(item.name);
    });

    return searchResults;
  }
}

export default SearchService;
