"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerNavigation}>
        <Image src={"/logo.svg"} alt="Weather Now" width={200} height={100} />
        {/* TODO: Add Units Dropdown Selector Here */}
        <p>Units</p>
      </div>
      <div className={styles.headerTitle}>
        <h1 className={`text-preset-2 ${styles.headerTitleText}`}>
          How&apos;s the sky looking today?{" "}
        </h1>
      </div>

      <div>
        <SearchBar
          buttonProps={{ children: "Search" }}
          inputProps={{
            placeholder: "Search for a place...",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
