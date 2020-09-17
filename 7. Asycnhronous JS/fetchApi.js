/******************
* Fetch JS
*/

// This is tradational way of fetching API using then() & catch()

function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    .then(result => {
        //  console.log(result);
        return result.json();
    })
    .then(data => {
        // console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
    })
    .catch(error => console.log(error));
}
getWeather(2487956);
getWeather(44418);

// Using async & await

async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
        return data;
    } catch(error) {
        alert(error);
    }
}
getWeatherAW(2487956);
// console.log(getWeatherAW(2487956)); // This will not works, bcoz its processing asynchronous.
let dataLondon;
// This is right way to handle the return value from async function.
getWeatherAW(44418).then(data => {
    dataLondon = data
    console.log(dataLondon);
});


/******************
* Template -  fetch() using async & await
*/

/*
async function getWeatherTest(){
    const apiResult = await fetch("");
    const toJsonVal = await apiResult.json(); // Whole response is json. so first have to convert it.
    const value = toJsonVal.firstName();
    
    return value;
};
getWeatherTest().then(returnVal => console.log(returnVal));
*/