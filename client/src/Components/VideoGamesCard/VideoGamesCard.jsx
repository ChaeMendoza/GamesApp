import React from "react";
import {useSelector} from "react-redux";
import Loading from "../Laoding/Loading";
import styles from "./VideoGames.module.css";
import {Link} from "react-router-dom";

function VideoGamesCard() {
    let videogames = useSelector(state => state.videogames)
    return (
        <div className={styles.container}>
            {
                videogames.length === 0 ? <Loading /> : videogames.map((videogames) => {
                    return <Link to={`videogame/${videogames.id}`}>
                        <div className={styles.card} key={videogames.id}>
                            <img className={styles.image} src={videogames.image} alt='img not found'/>
                            <h3 className={styles.title}>{videogames.name}</h3>
                            <p className={styles.description}>Rating: {videogames.rating}</p>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}

export default VideoGamesCard