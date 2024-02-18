import styles from "./App.module.scss";
import { LoginPage } from "./LoginPage";

function App() {
  return (
    <main className={styles.wrapper}>
      <LoginPage />
    </main>
  )
}

export default App
