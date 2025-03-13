
let searchCity = document.getElementById("search");
let city = document.getElementById('cityName');
let temperature = document.getElementById('temperature')
let weatherDiscription = document.getElementById("weatherDiscription");
let humidity =document.getElementById("humidity");
let wind =document.getElementById("wind");
const dataInput = document.getElementById("form");

dataInput.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(searchCity.value != ''){
      let element = document.querySelector('.load');
      element.classList.remove('opacity-0');
    const homeBG = document.querySelector('.home');
      homeBG.classList.add('hidden')
      setTimeout(() => {
        if (element) element.classList.add('opacity-0');
        
      }, 1500);
      searchWather(); 
    }
    return searchCity.value = ""
})



let id = "0b07df741c940a2dd51919d417e3f892";
let url ="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + id;

const searchWather =()  =>{
  fetch(url + '&q=' + searchCity.value)
    .then(response => response.json())
    .then(data => {
      if(data.cod === 200){
        city.innerText = data.name;
        document.getElementById('flag').src = `https://flagsapi.com/${data.sys.country}/shiny/64.png`;
        temperature.innerText = Math.floor(data.main.temp)
        document.getElementById("tempImg").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
         weatherDiscription.innerText = data.weather[0].description;
        humidity.innerText = data.main.humidity;
        wind.innerText = data.wind.speed;
      }else{
        let element = document.querySelector('.notfund');
      element.classList.remove('hidden')
      }
    })
    
}
const searchBarShow = () => {
    document.getElementsByTagName("form")[0].classList.add("hoverFrom");
    document.getElementById('click').style.opacity = "0";
    document.getElementById('click').style.transition = "0.7s";
  };
  const removeClass = () => {
    document.getElementsByTagName("form")[0].classList.remove("hoverFrom");
    document.getElementById('click').style.opacity = "1";
    document.getElementById('click').style.transition = "0.3s";
  };