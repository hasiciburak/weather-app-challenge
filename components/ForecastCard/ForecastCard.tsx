import styles from "./ForecastCard.module.scss";

type ForecastCardProps = {
  label: string;
  value: string | number;
  unit?: string;
};

const ForecastCard = ({ label, value, unit }: ForecastCardProps) => {
  return (
    <div className={styles.forecastCard}>
      <p className={`text-preset-6 ${styles.label}`}>{label}</p>
      <p className={`text-preset-3 ${styles.value}`}>
        {value} {unit}
      </p>
    </div>
  );
};

export default ForecastCard;
