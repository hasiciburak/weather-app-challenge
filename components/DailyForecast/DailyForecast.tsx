import ForecastCard from "../ForecastCard/ForecastCard";
import OverviewCard from "../OverviewCard/OverviewCard";
import styles from "./DailyForecast.module.scss";

const DailyForecast = () => {
  return (
    <div>
      <OverviewCard />
      <div className={styles.advancedForecast}>
        <ForecastCard label="Feels Like" value={20} unit="°" />
        <ForecastCard label="Humidity" value={20} unit="%" />
        <ForecastCard label="Wind" value={20} unit="km/h" />
        <ForecastCard label="Precipitation" value={0} unit="in" />
      </div>
      <h2>Daily Forecast</h2>
    </div>
  );
};

export default DailyForecast;
