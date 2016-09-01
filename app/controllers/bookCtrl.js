"use strict";

app.controller("bookCtrl", function ($scope, GuideStorage){
  GuideStorage.getGuideList()
  .then(function(bookCollection){
  $scope.books = bookCollection.guides;
  });
});
