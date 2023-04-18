let szam = 0;

let szamlalo = document.getElementById("szamlalo");

const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");

increase.addEventListener("click", () => {

    szam++;
    szamlalo.innerHTML = szam;
    console.log(szam);

    if(szam > 0){

        szamlalo.classList.add("green");
        szamlalo.classList.remove("red");
    }
    else if(szam < 0){

        szamlalo.classList.add("red");
        szamlalo.classList.remove("green");
    }
    else{

        szamlalo.classList.remove("green");
        szamlalo.classList.remove("red");
    }

})

reset.addEventListener("click", () => {

    szam = 0;
    szamlalo.innerHTML = szam;

    if(szam > 0){

        szamlalo.classList.add("green");
        szamlalo.classList.remove("red");
    }
    else if(szam < 0){

        szamlalo.classList.add("red");
        szamlalo.classList.remove("green");
    }
    else{

        szamlalo.classList.remove("green");
        szamlalo.classList.remove("red");
    }
})

decrease.addEventListener("click", () => {

    szam--;
    szamlalo.innerHTML = szam;

    if(szam > 0){

        szamlalo.classList.add("green");
        szamlalo.classList.remove("red");
    }
    else if(szam < 0){

        szamlalo.classList.add("red");
        szamlalo.classList.remove("green");
    }
    else{

        szamlalo.classList.remove("green");
        szamlalo.classList.remove("red");
    }
})

