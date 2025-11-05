import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type WeatherState = {
  temperature: number | null;
  location: string;
  unit: "celsius" | "fahrenheit";
  isLoading: boolean;
  error: string | null;

  setTemperature: (temp: number) => void;
  setLocation: (location: string) => void;
  setUnit: (unit: "celsius" | "fahrenheit") => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
};

const initialState = {
  temperature: null,
  location: "",
  unit: "celsius" as const,
  isLoading: false,
  error: null,
};

export const useWeatherStore = create<WeatherState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setTemperature: (temp) =>
          set({ temperature: temp }, false, "setTemperature"),
        setLocation: (location) => set({ location }, false, "setLocation"),
        setUnit: (unit) => set({ unit }, false, "setUnit"),
        setLoading: (loading) =>
          set({ isLoading: loading }, false, "setLoading"),
        setError: (error) => set({ error }, false, "setError"),
        reset: () => set(initialState, false, "reset"),
      }),
      {
        name: "weather-storage",
        partialize: (state) => ({
          location: state.location,
          unit: state.unit,
        }),
      }
    ),
    {
      name: "WeatherStore",
    }
  )
);

export const useTemperature = () =>
  useWeatherStore((state) => state.temperature);
export const useLocation = () => useWeatherStore((state) => state.location);
export const useUnit = () => useWeatherStore((state) => state.unit);
export const useIsLoading = () => useWeatherStore((state) => state.isLoading);
export const useError = () => useWeatherStore((state) => state.error);
