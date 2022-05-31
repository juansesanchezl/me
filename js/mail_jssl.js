const btn = document.getElementById("send_mail_btn");
send_mail_btn.addEventListener("click", sendEmail);
function sendEmail() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var name = fname + " " + lname;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
	//console.log(name + " " + email + " " + subject + " " + message);

	var data = {
		service_id: 'service_i02s0s8',
		template_id: 'template_im8eywj',
		user_id: 'HWweiIm_WRHecHode',
		template_params: {
			'from_name':name,
			'to_name':'Juan Sebastian',
			'from_subject':subject,
			'message': name + " " + message + " " + email,
			'reply_to': email
		}
	};
	
	$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json'
	}).done(function() {
		alert('Your mail is sent!');
		document.getElementById("fname").value = "";
		document.getElementById("lname").value = "";
		document.getElementById("email").value = "";
		document.getElementById("subject").value = "";
		document.getElementById("message").value = "";
	}).fail(function(error) {
		alert('Oops... ' + JSON.stringify(error));
	});
}



// code fragment


//"Only elasticemail is supported as an SMTP host. To open an account please visit https://elasticemail.com/account#/create-account?r=20b444a2-b3af-4eb8-bae7-911f6097521c"