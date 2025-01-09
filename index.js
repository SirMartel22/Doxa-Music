 

// header responsiveness script

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
	dropDownMenu.classList.toggle('open');
	const isOpen = dropDownMenu.classList.contains('open');

	toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa fa-bars";
}


//redirect to download page after clicking download button
let downloadRedirect = document.getElementById("downloadScore");

downloadRedirect.addEventListener("click", () => {
	window.location.href = "download.html";
});


// contact form manipulation 
const subscribeBtn = document.getElementById('subscribeBtn');

subscribeBtn.addEventListener('click', () => {
	const form = document.querySelector('#email');
	console.log(form.value);
	if(form.value.length < 1){
		alert("form input can't be empty")
	} else{
		alert(` Thanks for subscribing @ ${form.value}`);
		const clearInpur = document.getElementById('email').value = "";
	}
})





