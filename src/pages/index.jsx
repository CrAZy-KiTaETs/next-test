import React from "react";
import Head from "next/head";
import styles from "./home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/components/store/mainSlicer";

export default function Home() {
  const value = useSelector((state) => state.mainData.value);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Gamechanger - Product Web</title>
      </Head>
      <div className={styles.wrapper}>
        <div className="container">
          <h1>Count: {value}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
      </div>
    </>
  );
}
