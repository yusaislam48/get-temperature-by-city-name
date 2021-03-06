const inputLocation = document.getElementById('inputLocation');

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(){
    console.log(inputLocation.value);
    getWeather(inputLocation);
})


function getWeather(inputLocation){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputLocation.value+'&appid=19f107ff6c2d0da705f7206ed97c731d')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const tempValue = Math.round(data.main.temp - 273.15);
            document.getElementById('locationName').innerText = data.name;
            document.getElementById('tempValue').innerText = tempValue;
            document.getElementById('description').innerText = data.weather[0].description;

            document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        })

        .catch(error => {
            alert('Wrong city name!')
            document.getElementById('locationName').innerText = 'Wrong city name!';
            document.getElementById('tempValue').innerText = 00;
            document.getElementById('description').innerText = "";
        })
}
