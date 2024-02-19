import { Outlet } from "react-router";
import styles from "./App.module.scss";

function App() {
  return (
    <main className={styles.wrapper}>
      <Outlet />
    </main>
  )
}

export default App
