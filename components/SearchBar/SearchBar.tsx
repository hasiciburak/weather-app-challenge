import Image from "next/image";
import styles from "./SearchBar.module.scss";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

type SearchBarProps = {
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "className">;
  buttonProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    children?: React.ReactNode;
  };
};

const SearchBar = ({ buttonProps, inputProps }: SearchBarProps) => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchInput}>
        <Image
          src="/icon-search.svg"
          alt="Search"
          width={20}
          height={20}
          className={styles.searchIcon}
        />
        <input
          className={`text-preset-5-medium ${styles.searchInputField}`}
          {...inputProps}
        />
      </div>
      <button className={styles.searchButton} {...buttonProps}>
        {(buttonProps && buttonProps.children) || "Search"}
      </button>
    </div>
  );
};

export default SearchBar;
