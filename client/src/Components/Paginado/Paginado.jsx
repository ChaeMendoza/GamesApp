import React from "react";
import styles from "./Paginado.module.css";

export default function Paginado({ videogamesPerPage, videogames, paginado }) {
    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil(videogames / videogamesPerPage); i++) {
        pageNumbers.push(i + 1);
    }
    return (
        <nav className={styles.paginacion}>
            {pageNumbers && pageNumbers.map((number) => (
                <div key={number} className={styles.item}>
                    <button className={styles.btn} onClick={() => paginado(number)}>{number}</button>;
                </div>
            ))}
        </nav>
    );
}