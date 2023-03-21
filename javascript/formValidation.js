const form = document.querySelector("form");
const thankYou = document.querySelector(".thank-you");
const contactText = document.querySelector(".contact-text");

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const status = document.forms['contact-form'].elements.status;
const problem = document.getElementById('problem');

const nameError = document.getElementById('error-hint-name');
const emailError = document.getElementById('error-hint-email');
const messageError = document.getElementById('error-hint-message');
const statusError = document.getElementById('error-hint-status');
const problemError = document.getElementById('error-hint-problem');

const isNameValid = () => name.value.length > 0;
const isEmailValid = () => {
	return email.checkValidity() && email.value.length > 0;
}
const isMessageValid = () => message.value.length > 0;
const isStatusValid = () => status.value.length > 0;
const isProblemValid = () => problem.value.length > 0;

const send = document.getElementById('send');

const nameValidateInput = () => {
	nameError.style.visibility = isNameValid() ? 'hidden' : 'unset';
}

const emailValidateInput = () => {
	emailError.style.visibility = isEmailValid() ? 'hidden' : 'unset';
}

const messageValidateInput = () => {
	messageError.style.visibility = isMessageValid() ? 'hidden' : 'unset';
}

const statusValidateCheck = () => {
	statusError.style.visibility = isStatusValid() ? 'hidden' : 'unset';
}

const problemValidateCheck = () => {
	problemError.style.visibility = isProblemValid() ? 'hidden' : 'unset';
}

name.addEventListener('input', nameValidateInput);
email.addEventListener('input', emailValidateInput);
message.addEventListener('input', messageValidateInput);
status.forEach((elm) => {
	elm.addEventListener('input', statusValidateCheck);
}) 
problem.addEventListener('input', problemValidateCheck);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delay() {
	await sleep(3000);
	thankYou.classList.add("th-hidden");
	form.classList.remove("th-hidden");
	contactText.classList.remove("th-hidden");
	HTMLFormElement.prototype.reset.call(form);
}	

send.addEventListener("click", (e) => {
	e.preventDefault();
	
	nameValidateInput();
	emailValidateInput();
	messageValidateInput();
	statusValidateCheck();
	problemValidateCheck();
	
	let noError = true;
	noError &&= isNameValid();
	noError &&= isEmailValid();
	noError &&= isMessageValid();
	noError &&= isStatusValid();
	noError &&= isProblemValid();
	
	if (noError) {
		form.submit();
		thankYou.classList.remove("th-hidden");
		form.classList.add("th-hidden");
		contactText.classList.add("th-hidden");
		
		let name = document.getElementById('name');
		let email = document.getElementById('email');
		let message = document.getElementById('message');
		let status = document.forms['contact-form'].elements.status;
		let problem = document.getElementById('problem');
			
		name = name.value;
		email = email.value;
		message = message.value;
		status = status.value;
		problem = problem.value;
		
		if (localStorage.getItem('contact') === null) {
			localStorage.setItem('contact', JSON.stringify([]));
		}
		
		let contact = JSON.parse(localStorage.getItem('contact'));
		contact.push({name, email, status, problem, message});
		localStorage.setItem('contact', JSON.stringify(contact));

		delay();
	}
});

form.addEventListener("reset", (e) => {
	thankYou.classList.add("th-hidden");
	
	nameError.style.visibility = "hidden";
	emailError.style.visibility = "hidden";
	messageError.style.visibility = "hidden";
	statusError.style.visibility = "hidden";
	problemError.style.visibility = "hidden";
	
	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let message = document.getElementById('message');
	let status = document.forms['contact-form'].elements.status;
	let problem = document.getElementById('problem');
			
	name = name.value;
	email = email.value;
	message = message.value;
	status = status.value
	problem = problem.value;
});

