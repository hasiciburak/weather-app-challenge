
// Weather code mapping based on WMO Weather Interpretation Codes
export const getWeatherInfo = (weathercode: number) => {
    // Clear sky
    if (weathercode === 0) {
      return { condition: "Clear", icon: "/icon-sunny.webp" };
    }
    // Mainly clear, partly cloudy, and overcast
    if (weathercode >= 1 && weathercode <= 3) {
      return { condition: "Partly Cloudy", icon: "/icon-partly-cloudy.webp" };
    }
    // Fog and depositing rime fog
    if (weathercode >= 45 && weathercode <= 48) {
      return { condition: "Fog", icon: "/icon-fog.webp" };
    }
    // Freezing drizzle (check before regular drizzle)
    if (weathercode >= 56 && weathercode <= 57) {
      return { condition: "Freezing Drizzle", icon: "/icon-drizzle.webp" };
    }
    // Drizzle
    if (weathercode >= 51 && weathercode <= 55) {
      return { condition: "Drizzle", icon: "/icon-drizzle.webp" };
    }
    // Freezing rain (check before regular rain)
    if (weathercode >= 66 && weathercode <= 67) {
      return { condition: "Freezing Rain", icon: "/icon-rain.webp" };
    }
    // Rain
    if (weathercode >= 61 && weathercode <= 65) {
      return { condition: "Rain", icon: "/icon-rain.webp" };
    }
    // Snow fall
    if (weathercode >= 71 && weathercode <= 77) {
      return { condition: "Snow", icon: "/icon-snow.webp" };
    }
    // Rain showers
    if (weathercode >= 80 && weathercode <= 82) {
      return { condition: "Rain Showers", icon: "/icon-rain.webp" };
    }
    // Snow showers
    if (weathercode >= 85 && weathercode <= 86) {
      return { condition: "Snow Showers", icon: "/icon-snow.webp" };
    }
    // Thunderstorm
    if (weathercode >= 95 && weathercode <= 99) {
      return { condition: "Thunderstorm", icon: "/icon-storm.webp" };
    }
    // Default to overcast
    return { condition: "Overcast", icon: "/icon-overcast.webp" };
  };