"use strict";

app.factory("GuideStorage", ($q, $http) => {
  let getGuideList = () => {
    return $q((resolve,reject) => {
      $http.get("../data/guides.json")
      .success((bookCollection) => {
        resolve(bookCollection);
      })
      .error((error) => {
        reject(error);
      });
    });
  };
  return {getGuideList};
});
