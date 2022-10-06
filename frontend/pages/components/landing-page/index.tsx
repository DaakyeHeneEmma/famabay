import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import UserInput from "../component-pages/input";
import Time from "../component-pages/time";

const Landing_Page: NextPage = () => {
  return (
      <>
        <Head>
          <title>famabay</title>{" "}
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="landing" content="powered by famabay.inc" />
        </Head>
          <div className={styles.centre_pane}>
            <Time />
          </div>
          <div className={styles.centre_pane}>ATTENDENCE SYSTEM</div>
          <hr style={{"color":"white"}}/>
          <UserInput />
      </>
  );
};

export default Landing_Page;
