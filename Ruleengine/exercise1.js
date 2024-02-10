let myArr = [
    {
        a: 1,
        b: 2
    },
    {
        a: 3,
        b: 4
    },
    {
        a: 5,
        b: 7
    }
];

myArr.forEach(element => {
    let result = sum(element.a,element.b)
    console.log(result);

});

function sum(x,y) {
    return x+y ;
};
