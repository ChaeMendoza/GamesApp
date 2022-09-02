import React, {useEffect, useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import VideoGamesCard from "../../Components/VideoGamesCard/VideoGamesCard";
import {useDispatch, useSelector} from "react-redux";
import {
    getVideoGames,
    getGenres,
} from "../../Redux/actions";
import Paginado from "../../Components/Paginado/Paginado";

function Home (){
    const dispatch = useDispatch()
    const videogames = useSelector((state) => state.videogames);
    const [videogamesPerPage] = useState(15);
   


    useEffect(() => {
        dispatch(getVideoGames());
        dispatch(getGenres());
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <Paginado
                videogamesPerPage={videogamesPerPage}
                videogames={videogames.length}
            />
            <VideoGamesCard />
        </div>
    )
}

export default Home