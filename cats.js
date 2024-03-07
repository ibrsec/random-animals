


const btnCats = document.getElementById("btn-cats");
const btnDogs = document.getElementById("btn-dogs");
const imgContainer_cats = document.querySelector("#img-container_cats");
const imgContainer_dogs = document.querySelector("#img-container_dogs");
const baseUrl_cats = "https://api.thecatapi.com/v1/images/search?limit=10";
const baseUrl_dogs = "https://api.thedogapi.com/v1/images/search?limit=10";

// const spinners = document.querySelector("#spinners");
const spinnersCats = document.querySelector("#spinners-cats");
const spinnersDogs = document.querySelector("#spinners-dogs");



const getData  = (url,container) => {
    fetch(url)
    .then((response)=> response.json())
    .then((data) => {
        
        document.getElementById("favicon").href = data[Math.floor(Math.random() * 10)].url

    console.log(data);

        // spinners.style.display = "none";
        spinnersCats.style.display = "none";
        spinnersDogs.style.display = "none";

        data.forEach(item => {
            sendToDom(item,container); 
        });



    })
    .catch((error)=> console.log(error))



}

getData(baseUrl_cats,imgContainer_cats);
getData(baseUrl_dogs,imgContainer_dogs);

const sendToDom = (data,container) => {

        let div =  document.createElement("div");
        div.classList.add("col-12", "col-sm-6","col-md-6", "col-lg-4","col-xl-3" );
        div.style.height = "200px";
    
        let img = document.createElement("img");
        img.src = data.url;
        img.classList.add("w-100", "h-100", "object-fit-cover", "rounded-2", "shadow" );
        img.alt = data.id;
        
        div.appendChild(img);
        container.appendChild(div)

        


}

btnCats.addEventListener("click", () => {

    spinnersCats.style.display = "flex";
    imgContainer_cats.textContent = "";
    getData(baseUrl_cats,imgContainer_cats);
});

btnDogs.addEventListener("click", () => {
    
    spinnersDogs.style.display = "flex";
    imgContainer_dogs.textContent = "";
    getData(baseUrl_dogs,imgContainer_dogs);
});