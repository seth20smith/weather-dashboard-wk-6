
$("#current-date").text(moment().format("MMM Do , YYYY"))


  document.querySelector("#search-button").addEventListener("click", function(event) {
    var cityName = $("#search-value").val()

var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=6d1d7721cce65133dca83415077d7208&units=imperial" 
var forecast_url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=6d1d7721cce65133dca83415077d7208&units=imperial"
    console.log(cityName)
    console.log("click");

                    // iconurl
var iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
$('#current-weather-icon').attr('src', iconurl);
console.log(data)

                // current weather   
fetch (url)
.then(response => response.json())

.then(data => {$("#temp").text(data.main.temp)
$("#wind").text(data.wind.speed)
$("#current-city").text(data.name)
$("#humidity").text(data.main.humidity)
$("#current-weather-icon").text(data.weather[0].icon)
})



                // uv index
var uv_url = "https://api.openweathermap.org/data/2.5/onecall?lat="+data.coord.lat+"&"+"lon="+data.coord.lon + "&appid=6d1d7721cce65133dca83415077d7208&units=imperial" 
                //console.log(uv_url)  


fetch (uv_url)
.then(index => index.json())
.then(uv => $("#uv-index").text(uv.current.uvi))


// var getElementById("uv-index");

// if (uvi > 6){
//     .style.backgroundColor = "red";
// }
// if (uvi >= 3 && uvi <= 5) {
//    .style.backgroundColor = "orange";
// }
// if (uvi < 3) {
//    .style.backgroundColor = "green";
// }

// forcast weather

fetch (forecast_url)
console.log(forecast_url) 
.then(future => future.json())
 
        //1 - 11/14
.then(future => {$("#temp-one").text(future.main.temp)
$("#wind-one").text(future.wind.speed)
$("#humidity-one").text(future.main.humidity)
$("#icon-day-one").text(futureweather[0].icon)
})
        //2 - 11/15
.then(future => {$("#temp-two").text(future.main.temp)
$("#wind-two").text(future.wind.speed)
$("#humidity-two").text(future.main.humidity)
$("#icon-day-two").text(future.weather[0].icon)
})

        //3 - 11/16
.then(future => {$("#temp-three").text(future.main.temp)
$("#wind-three").text(future.wind.speed)
$("#humidity-three").text(future.main.humidity)
$("#icon-day-three").text(future.weather[0].icon)
})
        //4 - 11/17
.then(future => {$("#temp-four").text(future.main.temp)
$("#wind-four").text(future.wind.speed)
$("#humidity-four").text(future.main.humidity)
$("#icon-day-four").text(future.weather[0].icon)
})

        //5 - 11/18
.then(future => {$("#temp-five").text(future.main.temp)
$("#wind-five").text(future.wind.speed)
$("#humidity-five").text(future.main.humidity)
$("#icon-day-five").text(future.weather[0].icon)
});
//

// set local storage

// function history(){
//      var input = document.getElementById("searchArea")
//}

//    var usersContainer = document.getElementById("localstorage.setItem");
//    var  = document.getElementById('localstorage.getItem');


})