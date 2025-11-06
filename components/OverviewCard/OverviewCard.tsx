"use client";

import Image from "next/image";
import { useWeatherQuery } from "@/hooks/useWeatherQuery";
import { useLocation, useUnit } from "@/stores/useWeatherStore";
import styles from "./OverviewCard.module.scss";
import { getWeatherInfo } from "@/utils/functions";

// Dummy weather data
const dummyWeatherData = {
  current_weather: {
    temperature: 20,
    weathercode: 0,
  },
};

const OverviewCard = () => {
  const location = useLocation();
  const unit = useUnit();

  const { temperature, weathercode } = dummyWeatherData.current_weather;
  const { condition, icon } = getWeatherInfo(weathercode);
  const temperatureUnit = unit === "celsius" ? "°C" : "°F";
  const displayTemperature =
    unit === "celsius" ? temperature : (temperature * 9) / 5 + 32;

  return (
    <div className={styles.overviewCard}>
      <div className={styles.backgroundImage}>
        <Image
          src="/bg-today-large.svg"
          alt=""
          fill
          className={styles.bgLarge}
          priority
        />
        <Image
          src="/bg-today-small.svg"
          alt=""
          fill
          className={styles.bgSmall}
          priority
        />
      </div>

      <div className={styles.content}>
        <div className={styles.weatherInfo}>
          <div className={styles.locationSection}>
            <p className={`text-preset-4 ${styles.location}`}>
              Berlin, Germany
            </p>

            <p className={`text-preset-6 ${styles.condition}`}>
              Tuesday, Aug 5, 2025
            </p>
          </div>

          <div className={styles.temperatureSection}>
            <div className={styles.iconSection}>
              <Image
                src={icon}
                alt={condition}
                width={120}
                height={120}
                className={styles.weatherIcon}
                priority
              />
            </div>

            <p className={`text-preset-1 ${styles.temperature}`}>
              {Math.round(displayTemperature)} {temperatureUnit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
