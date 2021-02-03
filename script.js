const inputLocation = document.getElementById('inputLocation');
const apiId = '19f107ff6c2d0da705f7206ed97c731d';

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(){
    console.log(inputLocation.value);
    getWeather();
})


function getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputLocation.value+'&appid=19f107ff6c2d0da705f7206ed97c731d')
        .then(res => res.json())
        .then(data => {
            console.log(data.weather);
        })
}
