
// var globalItems;

var paymentMethod = document.getElementById("paystackPayment");

function payWithPaystack(){
	var getItems = JSON.parse(localStorage.getItem('userArrMethod'));
	console.log(getItems);
	for(var i = 0; i < getItems.length; i++){

	var handler = PaystackPop.setup({
		key: "pk_test_b280dc919e76f9680c90575336282c044e1848f", //put your public key here
		email:`${getItems[i].email}`, //put your customer's email here
		amount: `${getItems[i].realAmount}`, //amount the customer's is supposed to pay
		metadata:{
			custom_fields: [
				{
					display_name: `${getItems[i].name}`,
					variable_name: "mobile_number",
					value: `${getItems[i].phone}`
				}
			]
		},
		callback: function(response){
			// after the transaction have been completed
			// make post call to the server to verify payment
			// using transaction reference as post data
			$.post("verify.php", {reference:response.reference},function(status){
				if (status == "success")
					// successful transaction
					alert(`transaction successful, ${getItems[i].name}`);
				 else
					alert(response)
				
			});
			alert('success. transaction ref is' + response); //transaction
		},
		onClose: function(){
			// when the user close the payment modal
			alert('transaction cancelled');
		}
	});
	
	handler.openIframe()
	}

	
};


paymentMethod.addEventListener("click", payWithPaystack);
paymentMethod.addEventListener("click", downloadImage);


// console.log(globalItems);

	function downloadImage(){
		var getItems = JSON.parse(localStorage.getItem('userArrMethod'));
		console.log(getItems);
		for(var i = 0; i < getItems.length; i++){
			var downloadLink = getItems[i].noteImage;
			var link = document.createElement('a');
			link.href = downloadLink;
			link.download = "image.jpg";

			link.click();
		}
	}

