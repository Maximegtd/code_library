import { Button } from "reactstrap";

//ICONS
import { RiFileCopyLine } from "react-icons/ri";

//SYTLES
import styles from "../styles/codeblock.module.css";
import Link from "next/link";

export default function Codeblock() {
  return (
    <div className={styles.block}>
      <div className={styles.blockTitle}>
        <h1>
          CODEBLOCK TITLE
          <Link href={"/CodeblockData"}>
            <Button className={styles.seeMoreButton}>Voir plus</Button>
          </Link>
        </h1>
      </div>
      <div className={styles.content}>
        <p>
          Convoque tous les ouvriers que tu pourras trouver… Fais creuser les
          fondations là-bas… Là on fera une grande allée avec plein de statues
          qu'on appellera « La grande allée avec plein de statues »… Là-bas, les
          jardins, avec des oliviers, des orangeades, des saules pleureurs, des
          soles meunières… Et là-bas, le palais, luxuriant, magnifique, chamarré
          avec une grande cour où il y aura plein de danseuses qui pourront
          danser… et juste là un petit géranium. Ouais, ça va être bien, ça va
          être très bien même… Bon, bien sûr, y faut imaginer.
        </p>
        <button className={styles.copyButton}>
          <RiFileCopyLine className={styles.copyIcon} />
        </button>
      </div>
    </div>
  );
}
