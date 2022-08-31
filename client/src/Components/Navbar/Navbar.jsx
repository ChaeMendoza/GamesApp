import React from "react";
import Control from "../../Images/control.png";
import styles from "./Navbar.module.css";
import Search from "../Search/Search";

function Navbar() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                VideoGames App
                <img className={styles.control} src={Control} alt='img not found'/>
            </h2>
            <hr />
            <div className={styles.padre}>
                <div className={styles.botones}>
                    <button className={styles.btn}>Reset</button>
                    <button className={styles.btn}>New</button>
                </div>
                <div className={styles.ordenar}>
                    <div className={styles.ordenarOpcion}>
                        <label>Order By Name</label>
                        <select>
                            <option>Default</option>
                            <option>A - Z</option>
                            <option>Z - A</option>
                        </select>
                    </div>
                    <div className={styles.ordenarOpcion}>
                        <label>Order By Genre</label>
                        <select>
                            <option>Default</option>
                            <option>Action</option>
                            <option>RPG</option>
                            <option>Shooter</option>
                            <option>Adventure</option>
                            <option>Puzzle</option>
                            <option>Racing</option>
                            <option>Sport</option>
                        </select>
                    </div>
                    <div className={styles.ordenarOpcion}>
                        <label>Order By Created</label>
                        <select>
                            <option>Default</option>
                            <option>API</option>
                            <option>DataBase</option>
                        </select>
                    </div>
                </div>
                <div>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Navbar