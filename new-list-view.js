
class NewsListView {
  constructor(newsList = new NewsList) {
    this.newsListJSON = newsList.getDataFromAPI();
  }

  formatToHTML() {
    this.newsListJSON.forEach(news => {
      console.log(news.headline)
    });
  }
}