const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5d5c0bfdb5msh1ec3101702f3ad3p1d8630jsnaaa7d0650489',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
async function getData(){
try {
	const response = await fetch(url, options);
	const result = await response.text();
    var data = JSON.parse(result);
    var temp = data.current.temp_c;
	var doam = data.current.humidity;
	var wdr = data.current.wind_dir;
    document.getElementById('temp').innerHTML = temp;
	document.getElementById('doam').innerHTML = doam;
	document.getElementById('wdr').innerHTML = wdr;
} catch (error) {
	console.error(error);
}
}
getData();