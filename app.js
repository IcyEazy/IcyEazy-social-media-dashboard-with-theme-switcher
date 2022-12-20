let toggleBtn = document.querySelector("input"),
    body = document.querySelector("body"),
    followers = document.querySelectorAll(".follows"),
    overviews = document.querySelectorAll(".over-cont"),
    toggleBckgrd = document.querySelector(".slider"),
    modeName = document.getElementById("mode-name"),
    textCol = document.querySelectorAll(".col-txt");

toggleBtn.addEventListener("click", function(){
    if(toggleBtn.checked){
        // console.log("white")
        body.classList.toggle("body-color");
        followers.forEach(f => {
            f.style.backgroundColor = "hsl(227, 47%, 96%)"
            f.style.boxShadow = "10px 10px 5px 0px white"
            f.addEventListener("mouseover", function(){
                f.style.backgroundColor = "hsl(225, 23%, 90%)"
            });
            f.addEventListener("mouseout", function(){
                f.style.backgroundColor = "hsl(227, 47%, 96%)"
            });
        });
        overviews.forEach(o => {
            o.style.backgroundColor = "hsl(227, 47%, 96%)"
            o.style.boxShadow = "10px 10px 5px 0px white"
            o.addEventListener("mouseover", function(){
                o.style.backgroundColor = "hsl(225, 23%, 90%)"
            });
            o.addEventListener("mouseout", function(){
                o.style.backgroundColor = "hsl(227, 47%, 96%)"
            });
        });
        toggleBckgrd.style.backgroundImage = "none"
        toggleBckgrd.style.backgroundColor = "hsl(230, 22%, 74%)"
        toggleBckgrd.classList.toggle("color");
        modeName.innerText = "White"
        textCol.forEach(t => t.style.color = "black")
    }
    else{
        // console.log("dark")
        body.classList.toggle("body-color");
        followers.forEach(f => {
            f.style.backgroundColor = "hsl(228, 28%, 20%)"
            f.style.boxShadow = "10px 10px 5px 0px rgba(0,0,0,0.05)"
            f.addEventListener("mouseover", function(){
                f.style.backgroundColor = "hsl(229, 36%, 24%)"
            });
            f.addEventListener("mouseout", function(){
                f.style.backgroundColor = "hsl(228, 28%, 20%)"
            });
        });
        overviews.forEach(o => {
            o.style.backgroundColor = "hsl(228, 28%, 20%)"
            o.style.boxShadow = "10px 10px 5px 0px rgba(0,0,0,0.05)"
            o.addEventListener("mouseover", function(){
                o.style.backgroundColor = "hsl(229, 36%, 24%)"
            });
            o.addEventListener("mouseout", function(){
                o.style.backgroundColor = "hsl(228, 28%, 20%)"
            });
        });
        toggleBckgrd.style.backgroundColor = "none"
        toggleBckgrd.style.backgroundImage = "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
        toggleBckgrd.classList.toggle("color");
        modeName.innerText = "Dark"
        textCol.forEach(t => t.style.color = "white")
    }
});