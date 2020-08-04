export const getCityFromStates = (states, cityName) => {
    let city = null;
    for (let key in states) {
        const state = states[key];
        const { cities } = state;
        city = cities.find(city => city.name.toLowerCase() === cityName.toLowerCase())
        if (city) {
            break;
        }
    }

    return city;
}