import Link from "next/link";
// import { useParams } from "react-router-dom";

//STYLES
import styles from "../styles/codeblockData.module.css";

//ICONS
import { BsArrowLeft } from "react-icons/bs";

export default function CodeblockData() {
  // const params = useParams();
  // const id = params.id;

  return (
    <div>
      <div className={styles.header}>
        <Link href={"/"}>
          <BsArrowLeft className={styles.returnIcon} />
        </Link>
        <h1></h1>
      </div>
      <div className={styles.codeBlock}>
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
      </div>
    </div>
  );
}
