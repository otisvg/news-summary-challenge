
function fetchData() {
  fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?q=&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance")
  .then(response => {    
      if (!response.ok){
      throw Error("Error")
  }
      return response.json();
  })
  .then(data => {
    console.log(data);
     const articles = data.response.results
     .map(article => {
      return `
         <div class="news">
         <p><img src="${article.webUrl}" alt=${article.webTitle}" /></p>
          <h3>Headline: ${article.webTitle}</h3>
          <p><a href=${article.webUrl} target="${article.webUrl}">Full Story:</a></p>
         </div>
         `
     })
     .join('');
     document.querySelector('#app').insertAdjacentHTML('afterbegin', articles) 
  }).catch(error => {   
      console.log(error)
  });
}

fetchData();
