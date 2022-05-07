const navbar=()=>{
    return `

    
    <div id="navImg">
        <a href="name.html">
            <img src="https://6amtech.com/assets/front-end/img/logo2.png" alt=""></a>
    </div>

    <div id="home">
        <a href="index.html">Home</a>

    </div>

    <div id="the_day">
        <a href="reciepe.html">Reciepe of the day</a>
        <a id="random" href="random.html">Random Food</a>
    </div>

    <div id="login">
        <a href="signup.html">Signup</a>
        <a href="login.html">Login</a>
    </div>

    <a href="search.html"><input oninput="debounce(main ,1000)" type="text" id="search" placeholder="search by Name"></a>

    



    `;

    
}

export default navbar;