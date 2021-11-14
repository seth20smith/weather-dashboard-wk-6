
$("#current-date").text(moment().format("MMM Do , YYYY"))


  document.querySelector("#search-button").addEventListener("click", function(event) {
    var cityName = $("#search-value").val()

var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=6d1d7721cce65133dca83415077d7208&units=imperial" 
var forecast_url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=6d1d7721cce65133dca83415077d7208&units=imperial"
    console.log(cityName)
    console.log("click");

                // current weather   
fetch (url)
.then(response => response.json())

.then(data => {$("#temp").text(data.main.temp)


                    // iconurl
var iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
$('#current-weather-icon').attr('src', iconurl);
    console.log(data)

$("#wind").text(data.wind.speed)
$("#current-city").text(data.name)
$("#humidity").text(data.main.humidity)
$("#current-weather-icon").text(data.weather[0].icon)


              // uv index
 var uv_url = "https://api.openweathermap.org/data/2.5/onecall?lat="+data.coord.lat+"&"+"lon="+data.coord.lon + "&appid=6d1d7721cce65133dca83415077d7208&units=imperial" 
              //console.log(uv_url)  

fetch (uv_url)
.then(index => index.json())
.then(uv => {
    $("#uv-index").text(uv.current.uvi)
    
    
if (parseFloat(uv.current.uvi) > 5){
    $("#uv-index").css("background-color", "red")
}
if (parseFloat(uv.current.uvi) >= 3 && uv.current.uvi <= 5) {
   $("#uv-index").css("background-color", "orange")
}
if (parseFloat(uv.current.uvi) < 3) {
   $("#uv-index").css("background-color", "green")
}
})
})


// forcast weather

fetch (forecast_url)
.then(future => future.json())
        //1 - 11/14
.then(future1 => {console.log(future1)
        //icon 
    let iconurl = "http://openweathermap.org/img/w/" + future1.list[4].weather[0].icon + ".png"; 
$("#day-one").text(moment().add(1, 'days').format("MMM Do , YYYY"))    
    $('#icon-day-one').attr('src', iconurl);
$("#temp-one").text(future1.list[4].main.temp) 
$("#wind-one").text(future1.list[4].wind.speed) 
$("#humidity-one").text(future1.list[4].main.humidity)
$("#icon-day-one").text(future1.list[4].weather[0].icon)
     //2 - 11/15
    iconurl = "http://openweathermap.org/img/w/" + future1.list[12].weather[0].icon + ".png";
$("#day-two").text(moment().add(2, 'days').format("MMM Do , YYYY"))        
    $('#icon-day-two').attr('src', iconurl);
$("#temp-two").text(future1.list[12].main.temp)
$("#wind-two").text(future1.list[12].wind.speed)
$("#humidity-two").text(future1.list[12].main.humidity)
$("#icon-day-two").text(future1.list[12].weather[0].icon) 
    //3 - 11/16
     iconurl = "http://openweathermap.org/img/w/" + future1.list[20].weather[0].icon + ".png";
$("#day-three").text(moment().add(3, 'days').format("MMM Do , YYYY"))    
     $('#icon-day-three').attr('src', iconurl);
$("#temp-three").text(future1.list[20].main.temp)
$("#wind-three").text(future1.list[20].wind.speed)
$("#humidity-three").text(future1.list[20].main.humidity)
$("#icon-day-three").text(future1.list[20].weather[0].icon)
//4 - 11/17
     iconurl = "http://openweathermap.org/img/w/" + future1.list[28].weather[0].icon + ".png";
$("#day-four").text(moment().add(4, 'days').format("MMM Do , YYYY"))    
     $('#icon-day-four').attr('src', iconurl);
$("#temp-four").text(future1.list[28].main.temp)
$("#wind-four").text(future1.list[28].wind.speed)
$("#humidity-four").text(future1.list[28].main.humidity)
$("#icon-day-four").text(future1.list[28].weather[0].icon)
     //5 - 11/18
     iconurl = "http://openweathermap.org/img/w/" + future1.list[36].weather[0].icon + ".png";
$("#day-five").text(moment().add(5, 'days').format("MMM Do , YYYY"))         
     $('#icon-day-five').attr('src', iconurl);
$("#temp-five").text(future1.list[36].main.temp)
$("#wind-five").text(future1.list[36].wind.speed)
$("#humidity-five").text(future1.list[36].main.humidity)
$("#icon-day-five").text(future1.list[36].weather[0].icon)

});



// set local storage

localStorage.setItem(cityName, cityName)

})




let keys = Object.keys(localStorage)
// let test = localStorage.getItem(cityName)
console.log(keys)
for (let i = 0; i < keys.length; i++) {
    $(".city-btns").append("<li><button class='btn-list-search'>"+keys[i]+"</button></li>")
    
}

$(".btn-list-search").on("click", function(event) {

    var cityName = $(this).text()

var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=6d1d7721cce65133dca83415077d7208&units=imperial" 
var forecast_url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=6d1d7721cce65133dca83415077d7208&units=imperial"
    console.log(cityName)
    console.log("click");

                // current weather   
fetch (url)
.then(response => response.json())

.then(data => {$("#temp").text(data.main.temp)


                    // iconurl
var iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
$('#current-weather-icon').attr('src', iconurl);
    console.log(data)

$("#wind").text(data.wind.speed)
$("#current-city").text(data.name)
$("#humidity").text(data.main.humidity)
$("#current-weather-icon").text(data.weather[0].icon)


              // uv index
              var uv_url = "https://api.openweathermap.org/data/2.5/onecall?lat="+data.coord.lat+"&"+"lon="+data.coord.lon + "&appid=6d1d7721cce65133dca83415077d7208&units=imperial" 
              //console.log(uv_url)  

fetch (uv_url)
.then(index => index.json())
.then(uv => {
    $("#uv-index").text(uv.current.uvi)
    
    
if (parseFloat(uv.current.uvi) > 5){
    $("#uv-index").css("background-color", "red")
}
if (parseFloat(uv.current.uvi) >= 3 && uv.current.uvi <= 5) {
   $("#uv-index").css("background-color", "orange")
}
if (parseFloat(uv.current.uvi) < 3) {
   $("#uv-index").css("background-color", "green")
}
})
})
// forcast weather

fetch (forecast_url)
.then(future => future.json())
        //1 - 11/14
.then(future1 => {console.log(future1)
        //icon 
    let iconurl = "http://openweathermap.org/img/w/" + future1.list[4].weather[0].icon + ".png"; 
    $('#icon-day-one').attr('src', iconurl);
$("#temp-one").text(future1.list[4].main.temp) 
$("#wind-one").text(future1.list[4].wind.speed) 
$("#humidity-one").text(future1.list[4].main.humidity)
$("#icon-day-one").text(future1.list[4].weather[0].icon)
     //2 - 11/15
    iconurl = "http://openweathermap.org/img/w/" + future1.list[12].weather[0].icon + ".png";
    $('#icon-day-two').attr('src', iconurl);
$("#temp-two").text(future1.list[12].main.temp)
$("#wind-two").text(future1.list[12].wind.speed)
$("#humidity-two").text(future1.list[12].main.humidity)
$("#icon-day-two").text(future1.list[12].weather[0].icon) 
    //3 - 11/16
     iconurl = "http://openweathermap.org/img/w/" + future1.list[20].weather[0].icon + ".png";
     $('#icon-day-three').attr('src', iconurl);
$("#temp-three").text(future1.list[20].main.temp)
$("#wind-three").text(future1.list[20].wind.speed)
$("#humidity-three").text(future1.list[20].main.humidity)
$("#icon-day-three").text(future1.list[20].weather[0].icon)
//4 - 11/17
     iconurl = "http://openweathermap.org/img/w/" + future1.list[28].weather[0].icon + ".png";
     $('#icon-day-four').attr('src', iconurl);
$("#temp-four").text(future1.list[28].main.temp)
$("#wind-four").text(future1.list[28].wind.speed)
$("#humidity-four").text(future1.list[28].main.humidity)
$("#icon-day-four").text(future1.list[28].weather[0].icon)
     //5 - 11/18
     iconurl = "http://openweathermap.org/img/w/" + future1.list[36].weather[0].icon + ".png";
     $('#icon-day-five').attr('src', iconurl);
$("#temp-five").text(future1.list[36].main.temp)
$("#wind-five").text(future1.list[36].wind.speed)
$("#humidity-five").text(future1.list[36].main.humidity)
$("#icon-day-five").text(future1.list[36].weather[0].icon)

});

})