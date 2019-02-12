function toCelsius(tempKelvin) {
	return Math.round(tempKelvin - 273.15);
}

function showData(data) {
	document.getElementById("location").innerHTML = data.name + ', ' + data.sys.country;
	document.getElementById("temperature").innerHTML = toCelsius(data.main.temp) + ' &deg;C';
	document.getElementById("weather").innerHTML = data.weather[0].main + ' (' + data.weather[0].description + ')';
	document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
	document.getElementById('clouds').innerHTML = data.clouds.all + ' %';
	document.getElementById("weather forecast").style.display = "block";

}

