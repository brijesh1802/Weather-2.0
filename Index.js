async function weather() {
    try {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".main").style.display = "none";
        let city = document.querySelector(".city").value;
        let url = `http://api.weatherstack.com/current?access_key=364d6d51203295e9507c57d800116804&query=${city}`;
        // Make an API call to get the weather data
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        // Check if the API call was successful
        if (!response.ok || !data.location) {
            document.querySelector(".error").style.display = "flex";
            document.querySelector(".main").style.display = "none";
        } else {
             // If successful, update the HTML file with the weather data
            document.querySelector(".main").style.display = "flex";
            document.querySelector(".error").style.display = "none";

            let img = document.querySelector(".weatheri");
            document.querySelector(".cityn").innerHTML = data.location["name"];
            document.querySelector(".temp").innerHTML = data.current.temperature;
            document.querySelector(".weather").innerHTML =
                data.current.weather_descriptions;
            document.querySelector(".weatheri").innerHTML =
                data.current.weather_icons;
            document.querySelector(".windinfo").innerHTML = data.current.wind_speed;
            document.querySelector(".huminfo").innerHTML = data.current.humidity;
            document.querySelector(".prepinfo").innerHTML = data.current.precip;

            let wd = data.current.weather_descriptions;
            if (wd == "Sunny") {
                img.src = "./Images/sunny.png";
            } else if (wd == "Light Rain Possible") {
                img.src = "./Images/lghtrain.png";
            } else if (wd == "Partly Cloudy") {
                img.src = "./Images/partly_cloudy.png";
            } else if (wd == "Light Snow") {
                img.src = "/Images/lightsnow.png";
            } else {
                img.src = "./Images/clear.png";
            }
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
