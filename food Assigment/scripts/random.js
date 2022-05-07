
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();



import { getData,append } from "../scripts/fetch.js";

let parent = document.getElementById("data")

// parent.style.marginLeft="600px";
// p.style.fontSize = "22px";

// let search=document.getElementById("search").value;

let response =await getData(`https://www.themealdb.com/api/json/v1/1/random.php`)


console.log("response",response)


// // display(response,parent)

append(response,parent)





