const animals_button = document.getElementById('animals-button');

animals_button.addEventListener('click', getRandomAnimal);

const showAnimals = document.querySelector('.results');
const showAnimalsResults = document.querySelector('.result');

const animalsError = document.getElementById('error-hint-animals');

function getRandomAnimal() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				showAnimals.classList.add("th-hidden");
				showAnimalsResults.classList.add("th-hidden");
				getRandomAnimal();
			}
			else {
				animals_result.innerHTML = `<img src=${data.url} alt="animal" />`;
				showAnimals.classList.remove("th-hidden");
				showAnimalsResults.classList.remove("th-hidden");
			}
		})
	.catch(err => animalsError.style.visibility = 'unset');
		animalsError.style.visibility = 'hidden';
};