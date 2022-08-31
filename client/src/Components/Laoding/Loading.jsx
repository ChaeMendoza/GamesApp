import React from "react";
import Mario from "../../Images/mario.gif";
import styles from "./Loading.module.css";

function Loading() {
    return (
        <div className={styles.container}>
            <img src={Mario} alt='img not found'/>
            <h4 className={styles.title}>Loading...</h4>
        </div>
    )
}

export default Loading