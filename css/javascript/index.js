function updateTime() {


    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        losAngelesTime = moment().tz("America/Los_Angeles");

        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM D YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format("hh:mm:ss [<small>] A[</small>]");
    }


    let parisElement = document.querySelector("#paris");
    if (parisElement) {
        let parisDateElement = parisElement.querySelector(".date");
        let parisTimeElement = parisElement.querySelector(".time");
        parisTime = moment().tz("Europe/Paris");

        parisDateElement.innerHTML = parisTime.format("MMMM D YYYY");
        parisTimeElement.innerHTML = parisTime.format("hh:mm:ss [<small>] A[</small>]");
    }
}
function updatecity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", "").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElememt = document.querySelector("#cities");
    
    citiesElememt.innerHTML = ` 
   <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date"> ${cityTime.format("MMMM D YYYY")}</div>
    </div>
    <div class="time"> ${cityTime.format("hh:mm:ss" )} <small>${cityTime.format(
        "A"
    )} </small>  </div>

</div> 
`;
}


updateTime();
setInterval(updateTime, 1000)  
  
let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updatecity);
    
    
    

