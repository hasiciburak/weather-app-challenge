"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchWeatherData, weatherKeys } from "@/services/weatherApi";
import { useWeatherStore } from "@/stores/useWeatherStore";

/**
 * Custom hook that combines TanStack Query with Zustand
 *
 * This hook:
 * 1. Uses TanStack Query for data fetching, caching, and synchronization
 * 2. Syncs the query state with Zustand store for global state management
 * 3. Provides a unified interface for components
 */
export function useWeatherQuery() {
  const { location, unit, setTemperature, setLocation, setLoading, setError } =
    useWeatherStore();
  const queryClient = useQueryClient();

  // TanStack Query for data fetching
  const {
    data: weatherData,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: weatherKeys.location(location, unit),
    queryFn: () => fetchWeatherData(location, unit),
    enabled: !!location && location.trim().length > 0,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    setLoading(isLoading || isFetching);
  }, [isLoading, isFetching, setLoading]);

  useEffect(() => {
    if (weatherData) {
      setTemperature(weatherData.current_weather.temperature);
    }
  }, [weatherData, setTemperature]);

  useEffect(() => {
    if (isError && error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } else {
      setError(null);
    }
  }, [isError, error, setError]);

  const fetchWeather = async (newLocation?: string) => {
    if (newLocation && newLocation !== location) {
      setLocation(newLocation);
      await queryClient.invalidateQueries({
        queryKey: weatherKeys.location(location, unit),
      });
      return queryClient.refetchQueries({
        queryKey: weatherKeys.location(newLocation, unit),
      });
    }
    return refetch();
  };

  useEffect(() => {
    if (location) {
      queryClient.invalidateQueries({
        queryKey: weatherKeys.location(location, unit),
      });
    }
  }, [unit, queryClient, location]);

  return {
    weatherData,
    isLoading,
    isError,
    error,
    isFetching,
    refetch: fetchWeather,
    location,
    unit,
  };
}
