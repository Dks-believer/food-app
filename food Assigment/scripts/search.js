// import navbar from "../components/navbar.js";
// document.getElementById("navbar").innerHTML=navbar()

// var timerid;

// let food=document.getElementById("food");

// let parent =document.getElementById("parent");

// const searchFood=async(e)=>{
//     event.preventDefault();

//     try{
//         let input=document.getElementById("search").value;
//         let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)

//         let data=await res.json();
//         console.log(data);

//         let food=data.meals;
//         return food

//     }catch(err){
//         console.log(err)
//     }
// }

// const appendFood=(data)=>{
//     food.innerHTML=null;

//     data.forEach((elem)=>{
//         div2=document.createElement("div");
//     div2.setattribute("id","div2")

//     let p=document.createElement("p");
//     p.setAttribute("id","p")
//     p.innerText=elem.strMeal

//     let img=document.createElement("img");
//     img.setAttribute("id","fImage")
//     img.src=elem.strMealThumb;


//     div3=document.createElement("div");

//     let hr=document.createElement("hr");
//     hr.setAttribute("id","hr")

//     div2.append(img,p)

//     div3.append(div2,hr)


//     p.addEventListener("click",function(){
//         searchFood(elem)
//     })
//     food.append(div3);

//     });
// }

// const search=(elem)=>{
//     let searchArr=[];
//     searchArr.push(elem);
//     console.log(searchArr);
//     display(searchArr);
// }

// const display=(searchArr)=>{
//     parent.innerHTML=null;
//     searchArr.map((elem)=>{
//         let div=document.createElement("div");
//         let img=document.createElement("img");

//         img.setAttribute("id","foodImg");
//         img.src=elem.strMealThumb

//         let p1 = document.createElement("p");
//         p1.innerText = ele.strMeal;



//         let p2 = document.createElement("p");
//         p2.innerText = ele.strArea;

//         let p3 = document.createElement("p");
//         p3.innerText = ele.idMeal;

//         div.append(img,p1,p2,p3);

//         parent.append(div);



//     })
// }

// const  main =async()=>{
//     try {
//         let data = await serchfood();

//         if(data===undefined)
//         {
//             return false;
//         }

//         appendfood(data)
//     }
//     catch(err) {
//         console.error("Error",err)
//     }
// }

// const debounce=(func, delay)=>{
//     //console.log("timerid",timerid)

//     //timerid=2;
//     if(timerid){
//         clearTimeout(timerid);//innerHTML=null

//     }

//     timerid=setTimeout(()=>{
//         func()//still the main() function running
//     },delay);

// }

// console.log(1==="1")


var timerid;
let food = document.querySelector('#food');
let parent = document.querySelector('#parent');

 const serchfood = async ()=>{

try{
let input = document.getElementById("serch").value

let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`); 

let data = await res.json()
let arr_of_food= data.meals

return arr_of_food

// appendmovies(arr_of_movies)
}
catch(err){
   console.error("Error",err)
}

} 



const appendfood=(data)=>{
 food.innerHTML = null;

 //optization

 data.forEach((ele)=>{

     div2 = document.createElement("div");
     div2.setAttribute("id","div2")

     let p = document.createElement("p");
     p.setAttribute("id","p");

     p.innerText=ele.strMeal;
     p.style.color = "blue"
     p.style.fontSize = "22px";
     p.style.textAlign="center";
     p.style.fontWeight = "bold";
     
     div3 = document.createElement("div")
  
 
     let img = document.createElement("img");
     img.setAttribute("id","fImage")
     img.src = ele.strMealThumb;

     let hr= document.createElement("hr");
     hr.setAttribute("id","hr")

     
      div2.append(img,p);
      div3.append(div2,hr)

      



      p.addEventListener("click", function() {
       Search(ele)
     })
     food.append(div3)
 });
}


const Search=(ele)=>{
let searchArr = [];
searchArr.push(ele);
console.log(searchArr)
display(searchArr)

}

const display=(searchArr)=>{
parent.innerHTML=null;
searchArr.map((ele)=>{
    
  let div = document.createElement("div");

  let img = document.createElement("img");
  img.setAttribute("id","foodImage")
  img.src = ele.strMealThumb;

  let p1 = document.createElement("p");
  p1.innerText = ele.strMeal;

  let p2 = document.createElement("p");
  p2.innerText = ele.strArea;

  let p3 = document.createElement("p");
  p3.innerText = ele.idMeal;

  div.append(img,p1,p2,p3);

  parent.append(div);
})
}

 const  main =async()=>{
 try {
     let data = await serchfood();

     if(data===undefined)
     {
         return false;
     }

     appendfood(data)
 }
 catch(err) {
     console.error("Error",err)
 }
}

const debounce=(func, delay)=>{
 //console.log("timerid",timerid)

 //timerid=2;
 if(timerid){
     clearTimeout(timerid);//innerHTML=null

 }

 timerid=setTimeout(()=>{
     func()//still the main() function running
 },delay);

}