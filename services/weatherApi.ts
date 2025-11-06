export type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: {
    time: string;
    interval: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    is_day: string;
    weathercode: string;
  };
  current_weather: {
    time: string;
    interval: number;
    temperature: number;
    windspeed: number;
    winddirection: number;
    is_day: number;
    weathercode: number;
  };
};

export type WeatherApiResponse = {
  data: WeatherData;
  success: boolean;
};

export async function fetchWeatherData(
  location: string,
  unit: "celsius" | "fahrenheit"
): Promise<WeatherData> {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  console.log("RESPONSE RESULT", await response.json());
  return response.json();
}

// Query key factory for better organization
export const weatherKeys = {
  all: ["weather"] as const,
  location: (location: string, unit: "celsius" | "fahrenheit") =>
    [...weatherKeys.all, location, unit] as const,
};
