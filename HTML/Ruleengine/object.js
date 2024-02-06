let empDetails = [{
    "Name": "A1",
    "Age": 30,
    "Gender": "Male",
    "Designation": "A",
    "TagNo": 1
},
{
    "Name": "A2",
    "Age": 50,
    "Designation": "B",
    "Gender": "Male",
    "TagNo": 2
},
{
    "Name": "A3",
    "Age": 25,
    "Designation": "C",
    "Gender": "Male",
    "TagNo": 3
}];
generalUpdate("Gender", 3, "Female")
//generalUpdate("Designation", 1, "xyz")
//generalUpdate("Age",3,55);
/*function updateAge(Agee,TagNumber){
empDetails.forEach(element => {    //console.log(element)

    if (element.TagNo==TagNumber){
        element.Age=Agee
    }});
}*/
function generalUpdate(propertyName, tagNumber, propertyValue) {
    empDetails.forEach((element) => {
        if (element.TagNo == tagNumber) {
            element[propertyName] = propertyValue
        }
    });
}
console.log(empDetails);
