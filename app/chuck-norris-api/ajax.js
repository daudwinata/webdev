const icon = document.querySelector(".chuck-icon");

const text = document.querySelector(".chuck-text");

const button = document.querySelector(".btn");

const chuckImage = document.querySelector(".chuck-image");

const chuckDance = document.querySelector(".chuck-dance");

button.addEventListener("click", function () {
    getData("https://api.chucknorris.io/jokes/random");
    chuckImage.className = "chuck-hidden";
    chuckDance.classList.add("show");
})

function getData(url) {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            console.log(data);

            icon.innerHTML = `
            <img src=${data.icon_url}></img>
            `;

            text.innerHTML = data.value;
        }
        else {
            console.log(this.statusText);
        }
    }

    request.onerror = function () {
        console.log("there was a mistake");
    }

    request.send();
}   