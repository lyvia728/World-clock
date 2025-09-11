function updateTime() {


    let southAfricaElement = document.querySelector("#south-africa");
    if (southAfricaElement) {
        let southAfricaDateElement = southAfricaElement.querySelector(".date");
        let southAfricaTimeElement = southAfricaElement.querySelector(".time");
        southAfricaTime = moment().tz("Africa/South_Africa");

        southAfricaDateElement.innerHTML = southAfricaTime.format("MMMM D YYYY");
        southAfricaTimeElement.innerHTML = southAfricaTime.format("hh:mm:ss [<small>] A[</small>]");
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
    if (cityTimeZone === "current") {
        cityTimeZone = moment().tz.guesss();
    }



    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
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
    
    
    

