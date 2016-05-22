var complaintsArray = new Array();
var complaintsObject = storage.global.complaints;
for (var key in complaintsObject) {
  complaintsArray.push(complaintsObject[key]);
}
if (request.parameters.borough) {
  return complaintsArray.filter(function(element) {
    return element.borough === request.parameters.borough;
  });
} else {
  return complaintsArray;
}