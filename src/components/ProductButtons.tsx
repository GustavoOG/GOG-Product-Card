import React from "react";
import { ProductContext } from "./ProductCard";
import { useCallback } from 'react'
import styles from "../styles/styles.module.css";
import { useContext } from "react";
import { ProductImageProps } from "../interfaces/interfaces";


export const ProductButtons = ({ className, style }: ProductImageProps) => {

  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style} >
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
