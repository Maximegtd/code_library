import {BsFillTrashFill, BsPen, BsFillPlayFill} from 'react-icons/bs';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.divMain}>
      <div className={styles.divFirst}>
        <h1>Bienvenue dans Code Block, le site qui réfléchit à votre place!</h1>
        <input className={styles.research} placeholder='Rechercher' BsFillShieldSlashFill />
      </div>

      <div className={styles.divBlock}>
        Convoque tous les ouvriers que tu pourras trouver… Fais creuser les
        fondations là-bas… Là on fera une grande allée avec plein de statues qu'on
        appellera « La grande allée avec plein de statues »… Là-bas, les jardins,
        avec des oliviers, des orangeades, des saules pleureurs, des soles
        meunières… Et là-bas, le palais, luxuriant, magnifique, chamarré avec une
        grande cour où il y aura plein de danseuses qui pourront danser… et juste
        là un petit géranium. Ouais, ça va être bien, ça va être très bien même…
        Bon, bien sûr, y faut imaginer.
      </div>

      <div className={styles.divBlock}>
        Convoque tous les ouvriers que tu pourras trouver… Fais creuser les
        fondations là-bas… Là on fera une grande allée avec plein de statues qu'on
        appellera « La grande allée avec plein de statues »… Là-bas, les jardins,
        avec des oliviers, des orangeades, des saules pleureurs, des soles
        meunières… Et là-bas, le palais, luxuriant, magnifique, chamarré avec une
        grande cour où il y aura plein de danseuses qui pourront danser… et juste
        là un petit géranium. Ouais, ça va être bien, ça va être très bien même…
        Bon, bien sûr, y faut imaginer.
      </div>

      <button><BsPen /></button>
      <button><BsFillTrashFill /></button>
    </div>
  );
}
