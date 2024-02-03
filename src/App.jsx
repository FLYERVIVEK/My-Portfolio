import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { BodySpace } from "./components/BodySpace/BodySpace";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <BodySpace />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
