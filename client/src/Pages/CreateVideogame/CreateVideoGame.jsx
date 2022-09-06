import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postVideogame, getGenres } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CreateVideoGame.module.css";

function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = "Debes ingresar un nombre";
    } else if (!input.description) {
        errors.description = "Debes ingresar una descripción";
    }
    return errors;
}

export default function VideogameCreate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector((state) => state.genres);
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platforms: [],
    });

    //BORRAR GENRES AGREGADOS CREANDO EL VIDEOJUEGO
    function handleDelete(el) {
        setInput({
            ...input,
            genres: input.genres.filter((genre) => genre !== el),
        });
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );

        console.log(input);
    }

    function handleSelect(e) {
        setInput({
            ...input,
            genres: [...input.genres, e.target.value],
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postVideogame(input));
        alert("VideoJuego Creado");
        setInput({
            name: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platforms: [],
        });
        history.push("/home");
    }

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    //PLATAFORMAS
    const randomPlatforms = [
        "PC",
        "PS2",
        "PS3",
        "PS4",
        "XBOX",
        "SWITCH",
        "XBOX ONE",
        "NINTENDO DS",
        "NINTENDO 64",
        "NINTENDO WII",
        "NINTENDO SWITCH",
        "NINTENDO GAMECUBE",
    ];

    return (
        <div>
            <Link to="/home">
                <button className={styles.btn}>Back</button>
            </Link>
            <h1 className={styles.title}>CREATE YOUR VIDEO GAME!</h1>
            <div className={styles.content}>
                <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.campo}>
                        <label className={styles.label}>Name:</label>
                        <input
                            className={styles.input}
                            type="text"
                            value={input.name}
                            name="name"
                            onChange={(e) => handleChange(e)}
                        ></input>
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className={styles.campo}>
                        <label className={styles.label}>Description:</label>
                        <input
                            className={styles.input}
                            type="text"
                            value={input.description}
                            name="description"
                            onChange={(e) => handleChange(e)}
                        ></input>
                        {errors.description && <p className="error">{errors.description}</p>}
                    </div>
                    <div className={styles.campo}>
                        <label className={styles.label}>release date:</label>
                        <input
                            className={styles.input}
                            type="date"
                            value={input.released}
                            name="released"
                            onChange={(e) => handleChange(e)}
                        ></input>
                    </div>
                    <div className={styles.campo}>
                        <label className={styles.label}>Rating:</label>
                        <input
                            className={styles.input}
                            type="text"
                            value={input.rating}
                            name="rating"
                            onChange={(e) => handleChange(e)}
                        ></input>
                    </div>
                    <div className={styles.campo}>
                        <label className={styles.label}>Genres</label>
                        <select onChange={(e) => handleSelect(e)}>
                            {genres.map((genres) => (
                                <option key={genres.id} value={genres.name}>
                                    {genres.name}
                                </option>
                            ))}
                        </select>
                        <ul>
                            <li>{input.genres.map((el) => el + " ,")}</li>
                        </ul>
                    </div>
                    {input.genres.map((el) => (
                        <div>
                            <p>{el}</p>
                            <button onClick={() => handleDelete(el)}>
                                X
                            </button>
                        </div>
                    ))}
                    <div className={styles.campo}>
                        <label className={styles.label}>Platforms:</label>
                        <div>
                            {randomPlatforms.map((P) => (
                                <div className={styles.checks} key={P}>
                                    <input type="checkbox" name="platforms" value={P}></input>
                                    <label className={styles.label} name={P}>{P}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className={styles.btn} type="submit">
                        Create Video Game
                    </button>
                </form>
            </div>
        </div>
    );
}