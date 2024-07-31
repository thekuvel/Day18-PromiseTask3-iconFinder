let searchDivContainer = document.querySelector("#searchDiv");
let displayContainer = document.querySelector("#icon-infoBox");

//API's
let API = "https://icon.horse/icon/";

//Create Information box
const infoBox = document.createElement("div");
infoBox.innerHTML +=`
<img id="display-img" src="https://icon.horse/icon/google.com" alt="logo">
<p>URL: <span id="display-url">https://icon.horse/icon/google.com</span></p>
<p>Domain Name: <span id="display-name">google.com</span></p>
`
displayContainer.append(infoBox);

// Create Form
const formElement = document.createElement("form");
formElement.className = "search-Form";
formElement.innerHTML += `
<input type="text"
value=""
placeholder="amazon.com"
id="url-Input">
<button id="get-btn"
>Get Icon</button>
`
searchDivContainer.append(formElement);

//Get Input
let url = document.getElementById("url-Input").value;


//Search
const getButton = document.getElementById("get-btn")

getButton.addEventListener("click", (e)=>{
    e.preventDefault();
    let inputURL = document.getElementById("url-Input").value;
    //call GET api
    getIcon(API,inputURL);
})

async function getIcon(API,inputURL){
    try{
        res = await fetch(`${API}${inputURL}`,{
            method : "GET"
        });
        
        //update display infobox
        updateInfo(res,inputURL);
    }catch(error){
        console.log(error);
    }
    
}

//Update info box
function updateInfo(res,inputURL){
    console.log(res,inputURL)
    console.log(res.url,inputURL)
    let displayImage = document.getElementById("display-img");
    displayImage.src = res.url;
    let displayURL = document.getElementById("display-url");
    displayURL.innerHTML = res.url;
    let displayName = document.getElementById("display-name");
    displayName.innerHTML = inputURL;
}