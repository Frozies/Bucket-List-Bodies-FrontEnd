import TopAppBar from "../components/TopAppBar";
import AdminHome from "./AdminHome";
import {useState} from "react";


/*todo:
            -   Header
            -   Mobile Styling
            -   Multi page routing
            -   Footer
            -   Header and Footer app bars
            -   What are the other pages.
            */

export default function Home() {
    const [title, setTitle] = useState("Bucket List Bodies");
  return (
    <div>
        <TopAppBar pageTitle={title} />
        <AdminHome/>
        {/*<footer className={styles.footer}>
            Hello World!
        </footer>*/}
    </div>
  )
}
