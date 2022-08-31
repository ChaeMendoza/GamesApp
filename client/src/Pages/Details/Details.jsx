import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../Redux/actions";
import { useEffect } from "react";
import styles from "./Details.module.css";
import LoadingAlternative from "../../Components/LoadingAlternative/LoadingAlternative";

export default function Detail(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const myVideogame = useSelector((state) => state.detail);
    console.log(myVideogame);

    return (
        <div>
            {Object.entries(myVideogame).length > 0 ? (
                <div>
                    <h1 className={styles.title}>{myVideogame.name}</h1>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <h2 className={styles.color}>
                                <span className={styles.span}>Genre:</span>{" "}
                                {!myVideogame.createdInDb
                                    ? myVideogame.genres + " "
                                    : myVideogame.genres.map((el) => el.name + " ")}
                            </h2>
                            <p className={styles.color}>
                                <span className={styles.span}>Description:</span><br /> {myVideogame.description.replace(/(<([^>]+)>)/gi, "")}
                            </p>
                            <p className={styles.color}><span className={styles.span}>Release date:</span> {myVideogame.released}</p>
                        <p className={styles.color}><span className={styles.span}>Rating:</span> {myVideogame.rating}</p>
                            <p className={styles.color}>
                                <span className={styles.span}>Platforms:</span>{" "}
                                {!myVideogame.createdInDb
                                    ? myVideogame.platforms + " "
                                    : myVideogame.platforms.map((el) => el.name + " ")}
                            </p>
                        </div>
                        <img
                            className={styles.img}
                            src={myVideogame.img ? myVideogame.img : myVideogame.image}
                            alt=""
                            width="300px"
                            height="250px"
                        />

                    </div>
                </div>
            ) : (
                <LoadingAlternative></LoadingAlternative>
            )}
            <Link to="/home">
                <button className={styles.btn}>Volver</button>
            </Link>
        </div>
    );
}