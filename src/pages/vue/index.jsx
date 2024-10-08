import React, { useEffect } from 'react';
import Head from "next/head";

export default function Vue2() {
    useEffect(() => {
        // После монтирования компонента добавляем скрипт Vue
        const script = document.createElement('script');
        script.type = 'module';
        script.crossOrigin = 'anonymous';
        script.src = '/vue/index-C1EGazzD.js'; // Скрипт вашего Vue приложения
        document.body.appendChild(script);
    
        return () => {
          // Удаляем скрипт при размонтировании
          document.body.removeChild(script);
        };
      }, []);
    
  return (
    <>
    <Head>
    <link rel="stylesheet" href="/vue/index-BaMTLMsk.css" />
    </Head>
    <div id='app'>

    </div>
    </>
  )
}
