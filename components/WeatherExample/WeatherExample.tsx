"use client";

import { useWeatherQuery } from "@/hooks/useWeatherQuery";
import { useUnit } from "@/stores/useWeatherStore";
import styles from "./WeatherExample.module.scss";

/**
 * Example component demonstrating TanStack Query + Zustand integration
 */
export default function WeatherExample() {
  const { weatherData, isLoading, isError, error, refetch, isFetching } =
    useWeatherQuery();
  const unit = useUnit();

  if (isLoading) {
    return <div className={styles.container}>Loading weather data...</div>;
  }

  if (isError) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <p>Error: {error?.message || "Failed to fetch weather"}</p>
          <button onClick={() => refetch()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button onClick={() => refetch()}>Refresh</button>
    </div>
  );
}
