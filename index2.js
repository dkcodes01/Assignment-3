const arr = [120,60,899].reduce((t,s)=>(t+s),0);
console.log(arr);

const students = ["dk","ravi","ram","kiran","vijay"];
const pass = students.find((s)=> s=="kiran")
if(pass)
    console.log("found");
else
    console.log("not found")

const makegreet = (greet) => (name) =>
{
    return greet +" "+ name 
}
let d = makegreet("Hello")("asha")
console.log(d);

async function loaduser() {
    try{
        const res = await fetch ("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        const result = users.map((x)=>x.name)
        console.log(result);
        console.log(users)
    }
    catch(error){
        console.log("couldn't load");
    }
    
    
}
loaduser();