import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={"/logo.svg"} alt="Weather Now" width={200} height={100} />
    </header>
  );
};

export default Header;
