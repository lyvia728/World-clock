function updateTime() {


    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM D YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("hh:mm:ss [<small>]A[</small>]");



    let parisElement = document.querySelector("#paris");
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM D YYYY");
    parisTimeElement.innerHTML = parisTime.format("hh:mm:ss [<small>]A[</small>]");

}

updateTime();
  setInterval(updateTime, 1000)  
    
    
    

