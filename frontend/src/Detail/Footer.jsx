import * as React from "react";
import styles from "../styles/Footer.module.css";


const Footer = () => {

    return (
        <>
            <div  className={styles.footer} >
                    <p ><a className={styles.info}
                           href="tel:+7-8352-20-12-00">+7-8352-20-12-00</a>
                    </p>
                    <p>
                    <a href="https://t.me/chzsa21">
                        <img
                            className={styles.telegram}
                            src="http://127.0.0.1:8000/static/images/telegram.svg"
                            alt="Logo"
                        />
                    </a>
                    </p>
                    <p>
                        <a href className={styles.info}> Мой Силант 2022
                        </a>
                    </p>
                </div>
        </>
    );
};

export { Footer };
