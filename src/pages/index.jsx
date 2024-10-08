import React from "react";
import Head from "next/head";
import styles from "./home.module.scss";


export default function Home() {
  return (
    <>
      <Head>
        <title>Gamechanger - Product Web</title>
      </Head>
      <div className={styles.wrapper}>
        <div className="container">
          <header>
            <div>
              <img
                src="/assets/icons/logo.png"
                alt="Gamechanger - Prodcut Web png"
              />
              <h1>
                Gamechanger <br /> product web
              </h1>
            </div>
            <button>
              <img
                src="/assets/icons/soundBtn.svg"
                alt="Gamechanger - Prodcut Web png"
              />
            </button>
          </header>
          <main>
            <h2>
              Выберите услугу
              <span className={styles.bounsedDots}>.</span>
              <span className={styles.bounsedDots}>.</span>
              <span className={styles.bounsedDots}>.</span>
            </h2>
            <ul>
              <li>
                <button className={styles.greenPixelBtn}>Лендинг</button>
              </li>
            </ul>
          </main>
        </div>
      </div>
    </>
  );
}
