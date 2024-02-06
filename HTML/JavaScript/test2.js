/*function display(){

    document.getElementById('demo').innerHTML="Displaying My Name:"
}

const myObject=`{

    "School": "MHSS",
    "Name":"Abin",
    "Roll No:": 12

}`

const anotherObject=`{
    ${myObject}
    "School": "BEMP",
    "Name": "Arjun",
    "Roll No:": 15
}`

let parsedJSON=JSON.parse(myObject)


//console.log(myObject);
console.log(parsedJSON); 

localStorage.setItem("id", "2");
localStorage.setItem("token", "abc");
localStorage.setItem("Name", "Javed")

document.write(localStorage.getItem("id"));
document.write(localStorage.getItem("token"));
document.write(localStorage.getItem("Name"));
localStorage.removeItem("id")

console.log(localStorage.key(1));
localStorage.clear();

let obj ={ name: "Javed",
    age: 25
}

localStorage.setItem("data", JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("data")))

const input = document.querySelector("input");
const loginBtn = document.querySelector("#login");
const logoutBtn = document.querySelector("#logout");
const h2 = document.querySelector("h2");


loginBtn.onclick = () => {

    if (input.value) {
        localStorage.setItem("token", input.value)
        h2.innerText="Welcome User"
    }
};

logoutBtn.onclick= () =>{
    if(input.value) {
        localStorage.clear();
        location.reload();
    }
    
};*/



