var container = document.querySelector(".container");
var jumbo = document.querySelector(".jumbo");
var thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
	//cek apa yg dklik adalah thumb
	if (e.target.className == "thumb") {
		jumbo.src = e.target.src;
		jumbo.classList.add("fade");
		setTimeout(function () {
			jumbo.classList.remove("fade");
		}, 500);

		thumbs.forEach(function (thumb) {
			//if(thumb.classList.contains("active")){
			//	thumb.classList.remove("active");
			//}
			thumb.className = "thumb";
		});

		e.target.classList.add("active");
	}
});