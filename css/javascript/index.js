function updateTime() {
      // South Africa
      let southAfricaElement = document.querySelector("#south-africa");
      if (southAfricaElement) {
        let southAfricaDateElement = southAfricaElement.querySelector(".date");
        let southAfricaTimeElement = southAfricaElement.querySelector(".time");
        let southAfricaTime = moment().tz("Africa/Johannesburg");

        southAfricaDateElement.innerHTML = southAfricaTime.format("MMMM D YYYY");
        southAfricaTimeElement.innerHTML = southAfricaTime.format(
          "hh:mm:ss [<small>]A[</small>]"
        );
      }

      // Paris
      let parisElement = document.querySelector("#paris");
      if (parisElement) {
        let parisDateElement = parisElement.querySelector(".date");
        let parisTimeElement = parisElement.querySelector(".time");
        let parisTime = moment().tz("Europe/Paris");

        parisDateElement.innerHTML = parisTime.format("MMMM D YYYY");
        parisTimeElement.innerHTML = parisTime.format(
          "hh:mm:ss [<small>]A[</small>]"
        );
      }
    }

    function loadHome() {
      let citiesElement = document.querySelector("#cities");
      citiesElement.innerHTML = `
        <div class="city" id="south-africa">
          <div>
            <h2>🇿🇦 South Africa</h2>
            <div class="date"></div>
          </div>
          <div class="time"></div>
        </div>

        <div class="city" id="paris">
          <div>
            <h2>🇫🇷 Paris</h2>
            <div class="date"></div>
          </div>
          <div class="time"></div>
        </div>
      `;

      updateTime(); // render immediately
    }

    function updateCity(event) {
      let cityTimeZone = event.target.value;

      if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess(); // detect current location
      }

      if (cityTimeZone) {
        let cityName = cityTimeZone.replace("_", " ").split("/")[1];
        let cityTime = moment().tz(cityTimeZone);
        let citiesElement = document.querySelector("#cities");

        // choose flag
        let flag = "🌍";
        if (cityTimeZone.includes("Africa/Johannesburg")) flag = "🇿🇦";
        if (cityTimeZone.includes("Europe/London")) flag = "🇬🇧";
        if (cityTimeZone.includes("Europe/Paris")) flag = "🇫🇷";
        if (cityTimeZone.includes("America/New_York")) flag = "🇺🇸";
        if (cityTimeZone.includes("Pacific/Auckland")) flag = "🇳🇿";

        citiesElement.innerHTML = `
          <div class="city">
            <div>
              <h2>${flag} ${cityName}
                <a href="#" onclick="loadHome()" style="font-size:14px; margin-left:10px;">🏠 Home</a>
              </h2>
              <div class="date">${cityTime.format("MMMM D YYYY")}</div>
            </div>
            <div class="time">
              ${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small>
            </div>
          </div>
        `;
      }
    }

    // load default view
    loadHome();
    setInterval(updateTime, 1000);

    let citiesSelectElement = document.querySelector("#city");
    citiesSelectElement.addEventListener("change", updateCity);
    
    
    

