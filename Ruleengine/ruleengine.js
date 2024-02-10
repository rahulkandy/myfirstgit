let inputObj = {
    "name": "John",
    "gender": "Male",
    "age": 50,
    "temp": 121
}
//console.log(inputObj);
//Rules
let rulesObj = [{
    "lhs": "temp",
    "rhs": 90,
    "operator": "gt",
    "ruleNumber": 1
},
{
    "lhs": "temp",
    "rhs": 110,
    "operator": "lt",
    "ruleNumber": 2
}];
//console.log(rulesObj);
validate(inputObj, rulesObj);
function validate(x, y) {
    //console.log(x);
    //console.log(y);
    let validationresults = new Array(); // declare validationresults as Array
    y.forEach((item) => {
        let newRulesObj = {
            "lhs": x[item.lhs],
            "rhs": item.rhs,
            "operator": item.operator
        };
        var result = evaluateRule(newRulesObj);
        validationresults.push({ "rulenumber": item.ruleNumber, "result": result });

        /* switch (item.operator) {
             case "gt":
                 //console.log(item.operator);
                 var lhs = x[item.lhs];
                 //console.log(lhs);
                 var rhs = item.rhs;
                 var result = lhs > rhs;
                 //console.log(result);
                 validationresults.push({ "rulenumber": item.ruleNumber, "result": result })
                 break;
             case "lt":
                 var lhs = x[item.lhs];
                 var rhs = item.rhs;
                 var result = lhs < rhs;
                 //console.log(item.operator);
                 validationresults.push({ "rulenumber": item.ruleNumber, "result": result });
                 break;
         }*/
    }
    );
    console.log(validationresults);
}
function evaluateRule(rule) {
    switch (rule.operator) {
        case "gt":
            return (rule.lhs > rule.rhs);
            break;
        case "lt":
            return (rule.lhs < rule.rhs);
            break;
    }
}
