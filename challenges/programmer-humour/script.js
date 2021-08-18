const addImg = document.getElementById("container");


fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        const img = document.createElement("img")
        img.src = data.img
        addImg.appendChild(img)

    }).catch((error) => {
        console.log(error);
    });