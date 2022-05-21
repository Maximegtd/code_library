import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>
        Bienvenue dans <span className={styles.codeSpan}>Code</span>
        <span className={styles.blockSpan}>Block</span>, le site qui réfléchit à
        votre place!
      </h1>
      <input placeholder="Rechercher" />
    </div>
  );
}
