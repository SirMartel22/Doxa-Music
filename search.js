
// search engine
const search = document.getElementById("searchNote");
search.addEventListener("input", function(){
	let input = document.getElementById('searchNote').value.toLowerCase();
	let searchCard = document.querySelectorAll('.songs');
	let songName = document.getElementsByTagName("h3");
	let songListPallete = document.getElementById("songList");

	for (var i = 0; i < songName.length; i++) {

		let value = searchCard[i].getElementsByTagName('h3')[0];
		let title = value.innerHTML.toLowerCase();

		if(title.indexOf(input) > - 1 && songName[i] === value){
			searchCard[i].style.display = '';
		} else{
			searchCard[i].style.display = 'none';
		}
	}
	
});

//get the datails of the user for the purchase of the music note
const songList = document.getElementById("songList");
const customersForm = document.getElementById("customersForm");
const submitBtn = document.getElementById('paystackPayment');

// setting the form into display none when the button is clicked
customersForm.style.display = "none";


// Here i get the exact song note the user is looking for
const cards = document.querySelectorAll(".songs");
const buttons = document.querySelectorAll(".songs button");

//a global variable to store the exact song users clicked on
 let globalClickedCard;

	buttons.forEach((button) => {
		button.onclick = () =>{
			const clickedCard = button.closest('.songs');
			globalClickedCard = clickedCard;
			songList.style.display = "none";
			customersForm.style.display = "flex";
		};
	});


// clear input function
let clearInput = (input) =>{
	let inputClear = document.getElementsByClassName("clear");
	for(i = 0; i < inputClear.length; i++){
		inputClear[i].value = "";
	}
}

let searchCard = document.querySelectorAll('.songs');
var songName = document.getElementsByTagName('h3');
for(i = 0; i < songName.length; i++){
	var songTitle = searchCard[i].getElementsByTagName('h3')[0].innerHTML;
	var amount = searchCard[i].getElementsByTagName('h4')[0].innerHTML;

	// trying to add two zeros to the back of the amount without confusing the users and 
	// also be understandable by paystack program
	var realAmount = amount.concat("00");
}

// user array to be pushed into the local storage
let userArr = [];

// form submission button
submitBtn.addEventListener("click", function(){
	// get the values of the user
	let name = document.getElementById("subscribersName").value;
	let email = document.getElementById("subscribersEmail").value;
	let phone = document.getElementById("subscribersPhone").value; 

	// check if the following conditions are met
	if(name < 1 || email < 1 || phone < 1){
		alert("Kindly input valid data");
		return;
	}

	console.log(globalClickedCard);
	var realTitle = globalClickedCard.getElementsByTagName("h3")[0].innerHTML;
	var noteImage = globalClickedCard.getElementsByTagName('img')[0].currentSrc;

	// convert the details of the users into an object
	let userObj = {name, email, phone, realTitle, noteImage, realAmount};
	console.log(userObj);
	
	// alert the user for successful form submission
	alert(`Submitted successfully ${name}`);
	
	//push user object into an array
	userArr.push(userObj);
	
	// clear the input after submission
	clearInput();	

	// push into the local storage
	localStorage.setItem("userArrMethod", JSON.stringify(userArr));
	console.log(userArr);
});
