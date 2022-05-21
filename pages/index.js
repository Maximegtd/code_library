import Codeblock from "../components/Codeblock";
import Header from "../components/Header";

//STYLES
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Codeblock></Codeblock>
        <Codeblock></Codeblock>
        <Codeblock></Codeblock>
        <Codeblock></Codeblock>
      </div>
    </div>
  );
}
