import React, { useEffect } from "react";
import Head from "next/head";

export default function Vue2() {
  useEffect(() => {
    // После монтирования компонента добавляем скрипт Vue
    const script = document.createElement("script");
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.src = "/vue2/index-Dyf_Mqs-.js"; // Скрипт вашего Vue приложения
    document.body.appendChild(script);

    return () => {
      // Удаляем скрипт при размонтировании
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/vue2/index-CQ_KuISd.css" />
      </Head>
      <div id="app"></div>
    </>
  );
}
