import React from "react";
import "./styles/global.scss";
import styles from "../pages/styles/app.module.scss";

import Header from "../components/Header";
import Player from "../components/Player";
import { PlayerProviderContext } from "../contexts/PlayerContext";

function MyApp({ Component, pageProps }) {
  return(
    <PlayerProviderContext>
      <div className={styles.appWrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerProviderContext>
  );
}

export default MyApp;
