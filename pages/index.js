import Codeblock from "../components/Codeblock";
import Header from "../components/Header";

//STYLES
import styles from "../styles/Home.module.css";

export default function Home() {
  const codeblockArray = [
    {
      id: 1,
      title: "C'est un titre",
      codeBlock: "C'est le code",
      tag: ["arbre", "ia"],
    },
    {
      id: 2,
      title: "titre 2",
      codeBlock: "content 2",
      tag: ["oui", "non"],
    },
    {
      id: 3,
      title: "titre 3",
      codeBlock: "content 3",
      tag: ["la", "bas"],
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.content}>
        {codeblockArray.map((c) => (
          <Codeblock id={c.id} title={c.title} codeBlock={c.codeBlock} />
        ))}
      </div>
    </div>
  );
}
