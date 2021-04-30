import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./styles.module.scss";
const currentDate = format(new Date(), "EEEEEE, d MMMM",{
  locale: ptBR,
});

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="podcastr" />
      <p>O melhor para ouvir, sempre</p>
      <span>{currentDate}</span>
    </header>
  );
}
