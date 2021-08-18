const addImg = document.getElementById("add-images");
const ulElement = document.getElementById("ul-img")

addImg.addEventListener("click", function() {

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            return response.json();
        })
        .then(data => {
            const addLi = document.createElement("li");
            const Img = document.createElement("img")
            Img.className = "dog-img"
            Img.src = data.message;

            ulElement.appendChild(addLi);
            addLi.appendChild(Img)


        }).catch((error) => {
            console.log(error);
        });






})