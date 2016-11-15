class SearchController {
  constructor(searchService) {
    this.searchService = searchService;
    this.searchResults = [];
  }

  updateResults (search) {
    this.searchResults = this.searchService.updateResults(search, this.searchableItems);
  }
}

export default SearchController;
