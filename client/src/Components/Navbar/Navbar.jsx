import React, { useState } from "react";
import Control from "../../Images/control.png";
import styles from "./Navbar.module.css";
import Search from "../Search/Search";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {filterCreated, filterVideogamesByGenre, orderByName} from "../../Redux/actions";




function Navbar() {
    const dispatch = useDispatch();
    const [, setOrden] = useState("");
    const genres = useSelector((state) => state.genres);

    // Filter by genre
    function handleFilterGenres(e) {
        console.log("a");
        dispatch(filterVideogamesByGenre(e.target.value));
        console.log(e.target.value);
    }

    // Filter A-Z
    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setOrden(`Ordenado ${e.target.value}`);
    }

    // Filter Created or Api
    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value));
    }

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
                    <Link to='/videogame'>
                        <button className={styles.btn}>New</button>
                    </Link>
                </div>
                <div className={styles.ordenar}>
                    <div className={styles.ordenarOpcion}>
                        <label>Order By Name</label>
                        <select onChange={(e) => handleSort(e)}>
                            <option value="desc">A-Z</option>
                            <option value="asc">Z-A</option>
                        </select>
                    </div>
                    <div className={styles.ordenarOpcion}>
                        <label>Order By Genre</label>
                        <select onChange={(e) => handleFilterGenres(e)}>
                            <option value="All">Todos</option>
                            {genres.map((genre) => (
                                <option key={genre.id} value={genre.name}>
                                    {genre.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.ordenarOpcion}>
                        <label>Order By Created</label>
                        <select onChange={(e) => handleFilterCreated(e)}>
                            <option value="All">Todos</option>
                            <option value="creados">Creado</option>
                            <option value="existente">Existente</option>
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