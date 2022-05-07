import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar()


import { getData,append } from "../scripts/fetch.js";

let parent =document.getElementById("data")

// let parent2=document.getElementById("showFood")

let search=document.getElementById("search").value;

let res=await getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);

// console.log(res);

append(res,parent)