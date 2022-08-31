import React from "react";
import styles from "./LandingPage.module.css";
import Control from "../../Images/control.png";
import Imagen from "../../Images/videogame.png";
import {Link} from "react-router-dom";

function LandingPage() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                VideoGames App
                <img className={styles.control} src={Control} alt='img not found'/>
            </h2>
            <div className={styles.center}>
                <div className={styles.izquierda}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />
                        when an unknown printer took a galley of type and scrambled <br /> it to make a type specimen book.<br/>
                        It has survived not only five centuries, but also the leap into electronic<br /> typesetting, remaining essentially unchanged.</p>
                </div>
                <div className={styles.derecha}>
                    <img src={Imagen} alt='img not found' />
                </div>
            </div>
            <Link to='/home'>
                <button className={styles.btn}>START</button>
            </Link>
        </div>
    )
}

export default LandingPage