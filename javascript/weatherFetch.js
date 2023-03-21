let input = document.querySelector('.input_text');
let main = document.querySelector('#city-name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
let pressure = document.querySelector('.pressure');
let wind = document.querySelector('.wind');
let humidity = document.querySelector('.humidity');

let button = document.querySelector('.submit');

const weatherError = document.getElementById('error-hint-weather');
const showWeather = document.querySelector(".weather-background");

button.addEventListener('click', function(name){
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&lang=pl&appid=d1763453bb8296fd64aab129b6fa1143')
		.then(response => response.json())
		.then(data => {
			let tempValue = data['main']['temp'];
			let nameValue = data['name'];
			let descValue = data['weather'][0]['description'];
			let cloudsValue = data['clouds']['all'];
			let pressureValue = data['main']['pressure'];
			let windValue = data['wind']['speed'];
			let humidityValue = data['main']['humidity'];

			main.innerHTML = nameValue;
			desc.innerHTML = "Aktualna pogoda: " + descValue;
			temp.innerHTML = "Temperatura: " + parseFloat(tempValue - 273.15).toFixed(1) + " &#8451;";
			clouds.innerHTML = "Stopień zachmurzenia: " + cloudsValue + " %";
			pressure.innerHTML = "Ciśnienie atmosferyczne: " + pressureValue + " hPa";
			wind.innerHTML = "Prędkość wiatru: " + windValue + " m/s";
			humidity.innerHTML = "Wilgotność: " + humidityValue + " %";
			input.value = "";
			
			showWeather.classList.remove("th-hidden");
		})
	.catch(err => weatherError.style.visibility = 'unset');
		weatherError.style.visibility = 'hidden'
		showWeather.classList.add("th-hidden");
});