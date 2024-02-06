inputObj = {
    "name": "John",
    "age": 35,
    "gender:": "Male",
    "temp": 90

}

rulesObj = [{
    "lhs": "temp",
    "rhs": 90,
    "operator": "lt",
    "rule number": 1
},
{

    "lhs": "temp",
    "rhs": 110,
    "operator": "gt",
    "rule number": 2
}
]
///console.log(inputObj, rulesObj)

function rulesFunc(inputObj, rulesObj) {
    rulesObj.forEach(item => {
        console.log(item)

    })
}
rulesFunc(inputObj, rulesObj)

