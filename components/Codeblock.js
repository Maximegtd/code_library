import { Button } from "reactstrap";

//ICONS
import { RiFileCopyLine } from "react-icons/ri";

//SYTLES
import styles from "../styles/codeblock.module.css";
import Link from "next/link";

export default function Codeblock({ id, title, codeBlock }) {
  return (
    <div className={styles.block}>
      <div className={styles.blockTitle}>
        <h1>
          {title}
          <Link href={`/CodeblockData`}>
            <Button className={styles.seeMoreButton}>Voir plus</Button>
          </Link>
        </h1>
      </div>
      <div className={styles.content}>
        <p>{codeBlock}</p>
        <button className={styles.copyButton}>
          <RiFileCopyLine className={styles.copyIcon} />
        </button>
      </div>
    </div>
  );
}
