//dom
var div=document.createElement("div");
div.setAttribute("class","container");

var title=document.createElement("h1");
title.setAttribute("class","title");
title.innerHTML="Rest Country Weather"
var row=document.createElement("div");
row.setAttribute("class","row");




var rest_url="https://restcountries.com/v3.1/all";

async function api(){

    var result= await fetch("https://restcountries.com/v3.1/all");
    var data=await result.json();
 try{
     for(let i=0;i<250;i++){

      

      var lat=data[i].latlng[0];
      var lng=data[i].latlng[1];
      var col=document.createElement("div");
      col.setAttribute("class","col");
      col.innerHTML+=`<div class="card" style="width: 18rem;">
      <img src="${data[i].flags.png}" class="card-img-top" alt="${data[i].name.common}">
      <div class="card-body">
        <h5 class="card-title">${data[i].name.common}</h5>
        <p class="card-text"><b>Capital:</b>${data[i].capital}<br><b>Region: </b>${data[i].region}<br><b>Country Code:</b>${data[i].altSpellings[0]} </p>
       <div class="country-data" lat="${lat}" lng="${lng}" display="inline-block"> </div>
        <button onclick="myFunction()" class="btn btn-primary">Check for Weather</button>
      </div>
    </div>`
  
    row.append(col);
   
     }
    }
    catch(err){
      console.error(err);
    }
    
}
api();


div.append(title,row);
document.body.append(div);

var value=document.getElementsByClassName("country-data")


async function Weather(e){
var a=await fetch(rest_url);
var b=await a.json();
try{
for(let i=0;i<250;i++){
var parent=e.item([i]);
var lat=parent.getAttribute("lat")
var lng=parent.getAttribute("lng");
res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e0ee1dd6795f5e9d8e33ebb87e4f2074`);
res1= await res.json();


var temp=res1.main.temp;
var degree=res1.wind.deg;
var humidity=res1.main.humidity;
var weather=res1.weather[0].description;





function myFunction(){
  return alert(`Temperature: ${temp} 
  Humidity: ${humidity}  
  Degree: ${degree}°C
  Weather: ${weather}`);
}
myFunction()

}




}
catch(err){
  console.error(err);
}

}
Weather(value);
