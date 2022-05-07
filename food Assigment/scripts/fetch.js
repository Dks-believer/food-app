const getData = async (url) => {
    try {
       let res = await fetch(url)

       let data = await res.json()

       //let data1 = data.meals;

       return data.meals

    }
    catch (error) {
       
        console.log("Error",error);

    }
};

//data

const append =  (data , parent )=>{

    data.forEach(({strMeal,strMealThumb,strArea,idMeal}) => {

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("id","foodImage")
    img.src = strMealThumb;

    let p1 = document.createElement("p");
    p1.innerText = strMeal;

    let p2 = document.createElement("p");
    p2.innerText = strArea;

    let p3 = document.createElement("p");
    p3.innerText = idMeal;
    let btn=document.createElement("button");
    btn.innerText="Buy Now"
    btn.setAttribute("id","btn")

    div.append(img,p1,p2,p3,btn);

    parent.append(div);

   })

 }


   export {getData,append};