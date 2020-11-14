

// let request = new XMLHttpRequest();
// request.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics");
// request.send();
// request.onload = () => {
//     let data = request.response;
//     console.log(res);
//     JSON.parse(res).results
// }


//   var request = new XMLHttpRequest();


//   xmlhttp.onreadystatechange = function () {
//       var data = xmlhttp.responseText;
 
// //   };

// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       return this.responseText;
//     }
//   };
//   xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics", true);
//   xhttp.send();
// }

// console.log(loadDoc())

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML =
    this.getResponseHeader("Last-Modified");
  }
};
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
