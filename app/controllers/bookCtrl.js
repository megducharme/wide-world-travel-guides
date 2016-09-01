"use strict";

app.controller("bookCtrl", function ($scope, $q, $http){

  let getBookList = () => {
    return $q((resolve, reject) => {
    $http.get("../data/guides.json")
    .success((bookCollection) => {
      resolve(bookCollection);
      });
    });
  };

getBookList().then(function(bookCollection){
  $scope.books = bookCollection.guides;

});
});
