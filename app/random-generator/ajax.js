//Images

const icon = document.querySelector(".random-icon1");
const icon2 = document.querySelector(".random-icon2");
const icon3 = document.querySelector(".random-icon3");
const icon4 = document.querySelector(".random-icon4");
const icon5 = document.querySelector(".random-icon5");
const icon6 = document.querySelector(".random-icon6");

const nameIcon = document.querySelector(".first");
const emailIcon = document.querySelector(".email");
const ageIcon = document.querySelector(".age");
const countryIcon = document.querySelector(".country");
const phoneIcon = document.querySelector(".phone");
const loginIcon = document.querySelector(".login");

icon.addEventListener("mouseover", function () {
    icon.src = "./images/green/person.png";

    icon2.src = "./images/white/letter-white.png";
    icon3.src = "./images/white/calendar-white.png";
    icon4.src = "./images/white/location-white.png";
    icon5.src = "./images/white/phone-white.png";
    icon6.src = "./images/white/password-white.png";

    nameIcon.classList.remove("random-input-hidden");

    emailIcon.classList.add("random-input-hidden");
    ageIcon.classList.add("random-input-hidden");
    countryIcon.classList.add("random-input-hidden");
    phoneIcon.classList.add("random-input-hidden");
    loginIcon.classList.add("random-input-hidden");
})

icon2.addEventListener("mouseover", function () {
    icon2.src = "./images/green/email.png";

    icon.src = "./images/white/person-white.png";
    icon3.src = "./images/white/calendar-white.png";
    icon4.src = "./images/white/location-white.png";
    icon5.src = "./images/white/phone-white.png";
    icon6.src = "./images/white/password-white.png";

    emailIcon.classList.remove("random-input-hidden");

    nameIcon.classList.add("random-input-hidden");
    ageIcon.classList.add("random-input-hidden");
    countryIcon.classList.add("random-input-hidden");
    phoneIcon.classList.add("random-input-hidden");
    loginIcon.classList.add("random-input-hidden");
})

icon3.addEventListener("mouseover", function () {
    icon3.src = "./images/green/calendar.png";

    icon.src = "./images/white/person-white.png";
    icon2.src = "./images/white/letter-white.png";
    icon4.src = "./images/white/location-white.png";
    icon5.src = "./images/white/phone-white.png";
    icon6.src = "./images/white/password-white.png";

    ageIcon.classList.remove("random-input-hidden");

    nameIcon.classList.add("random-input-hidden");
    emailIcon.classList.add("random-input-hidden");
    countryIcon.classList.add("random-input-hidden");
    phoneIcon.classList.add("random-input-hidden");
    loginIcon.classList.add("random-input-hidden");
})

icon4.addEventListener("mouseover", function () {
    icon4.src = "./images/green/location.png";

    icon.src = "./images/white/person-white.png";
    icon2.src = "./images/white/letter-white.png";
    icon3.src = "./images/white/calendar-white.png";
    icon5.src = "./images/white/phone-white.png";
    icon6.src = "./images/white/password-white.png";

    countryIcon.classList.remove("random-input-hidden");

    nameIcon.classList.add("random-input-hidden");
    emailIcon.classList.add("random-input-hidden");
    ageIcon.classList.add("random-input-hidden");
    phoneIcon.classList.add("random-input-hidden");
    loginIcon.classList.add("random-input-hidden");
})

icon5.addEventListener("mouseover", function () {
    icon5.src = "./images/green/phone.png";

    icon.src = "./images/white/person-white.png";
    icon2.src = "./images/white/letter-white.png";
    icon3.src = "./images/white/calendar-white.png";
    icon4.src = "./images/white/location-white.png";
    icon6.src = "./images/white/password-white.png";

    phoneIcon.classList.remove("random-input-hidden");

    nameIcon.classList.add("random-input-hidden");
    emailIcon.classList.add("random-input-hidden");
    ageIcon.classList.add("random-input-hidden");
    countryIcon.classList.add("random-input-hidden");
    loginIcon.classList.add("random-input-hidden");
})

icon6.addEventListener("mouseover", function () {
    icon6.src = "./images/green/password.png";

    icon.src = "./images/white/person-white.png";
    icon2.src = "./images/white/letter-white.png";
    icon3.src = "./images/white/calendar-white.png";
    icon4.src = "./images/white/location-white.png";
    icon5.src = "./images/white/phone-white.png";

    loginIcon.classList.remove("random-input-hidden");

    nameIcon.classList.add("random-input-hidden");
    emailIcon.classList.add("random-input-hidden");
    ageIcon.classList.add("random-input-hidden");
    countryIcon.classList.add("random-input-hidden");
    phoneIcon.classList.add("random-input-hidden");
})




//API

// icon.addEventListener("click", function () {
//     getPerson(getData);
//     console.log("test1");
// })

const mainButton = document.querySelector(".random-button");

mainButton.addEventListener("click", function () {
    getPerson(getData);
    console.log("test1");
});


function getPerson(callBack) {
    console.log("Hey I'm function");

    const url = "https://randomuser.me/api/";
    const request = new XMLHttpRequest();

    request.open("GET", url, true);

    request.onload = function () {
        if (this.status === 200) {
            //info.textContent = this.responseText;
            callBack(this.responseText, showData)
        } else {
            console.log(this.statusText);
        }
    }

    request.onerror = function () {
        console.log("there was an error");
    }

    request.send();
}

function getData(response, callBack) {
    const data = JSON.parse(response);

    const {
        picture: { large },
        name: { first },
        name: { last },
        email,
        dob: { age },
        location: { street },
        login: { password },
        cell,
    } = data.results[0];

    //callBack(data);
    callBack(large, first, last, email, age, street, cell, password);
    console.log(data);
}

function showData(large, first, last, email, age, street, cell, password) {

    //console.log(data);
    document.querySelector(".photo").src = large;
    document.querySelector(".first").innerHTML = "<p>" + "Hello, you can call me: " + "</p>" + first + " " + last;
    document.querySelector(".email").innerHTML = "<p>" + "You can contact me at: " + "</p>" + email;
    document.querySelector(".age").innerHTML = "<p>" + "Don't tell anybody, my age is: " + "</p>" + age;
    document.querySelector(".country").innerHTML = "<p>" + "Where do I live: " + "</p>" + street.name + " " + street.number;
    document.querySelector(".phone").innerHTML = "<p>" + "My secret number: " + "</p>" + cell;
    document.querySelector(".login").innerHTML = "<p>" + "My password is: " + "</p>" + password;

}





// const button = document.querySelector(".testName");
// const buttonTest = document.querySelector(".testLastName");

// const wrapper = document.querySelector(".wrapper");

// const randomPerson = document.querySelector("random-person");


// button.addEventListener("mouseover", function () {
//     getData("https://randomuser.me/api/");
//     console.log("first name");
// })

// buttonTest.addEventListener("mouseover", function () {
//     getDataTest("https://randomuser.me/api/");
//     console.log("last name");
// })

// function getData(url) {
//     const request = new XMLHttpRequest();

//     request.open("GET", url, true);
//     //console.log(request);

//     request.onload = function () {
//         if (this.status === 200) {
//             const data = JSON.parse(this.responseText);
//             console.log(data);

//             let display = "";

//             data.results.forEach(function (person) {
//                 display += `
//                     <div class="person">
//                         <img class="random-image-js" src=${person.picture.large}></img>
//                         <div class="person-category">
//                             <p>Name: <br> ${person.name.first}</p>
//                         </div>


//                     </div>`
//             });

//             {/* <div class="person-category">
//                 <p>Name: <br> ${person.name.first}</p>
//                 <p>Last: <br> ${person.name.last}</p>
//                 <p>Phone number: <br> ${person.cell}</p>
//                 <p>Gender: <br> ${person.gender}</p>
//                 <p>Email: <br> ${person.email}</p>
//                 <p>Country: <br> ${person.location.country}</p>
//                 <p>City: <br> ${person.location.city}</p>
//             </div> */}

//             //randomPerson.innerHTML = display;

//             wrapper.innerHTML = display;

//         }
//         else {
//             console.log(this.statusText);
//         }
//     }

//     request.onerror = function () {
//         console.log("There was a mistake");
//     }

//     request.send();
// }

// function getDataTest(url) {
//     const request = new XMLHttpRequest();

//     request.open("GET", url, true);
//     //console.log(request);

//     request.onload = function () {
//         if (this.status === 200) {
//             const data = JSON.parse(this.responseText);
//             console.log(data);

//             let display = "";

//             data.results.forEach(function (person) {
//                 display += `
//                     <div class="person">
//                         <img class="random-image-js" src=${person.picture.large}></img>
//                         <div class="person-category">
//                             <p>Email: <br> ${person.email}</p>
//                         </div>
//                     </div>`
//             });

//             wrapper.innerHTML = display;

//         }
//         else {
//             console.log(this.statusText);
//         }
//     }

//     request.onerror = function () {
//         console.log("There was a mistake");
//     }

//     request.send();
// }