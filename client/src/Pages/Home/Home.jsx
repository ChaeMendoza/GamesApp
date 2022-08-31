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
    const [, setOrden] = useState("");
    const genres = useSelector((state) => state.genres);
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage] = useState(15);
    const indexOfLastVideogame = currentPage * videogamesPerPage;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const currentVideoGames = videogames.slice(
        indexOfFirstVideogame,
        indexOfLastVideogame
    );

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getVideoGames());
        dispatch(getGenres());
    }, [dispatch]);

    // Filter by genre
    /*function handleFilterGenres(e) {
        console.log("a");
        dispatch(filterVideogamesByGenre(e.target.value));
        console.log(e.target.value);
    }

    // Filter A-Z
    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }

    // Filter Created or Api
    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value));
    }*/

    return (
        <div>
            <Navbar />
            <Paginado
                videogamesPerPage={videogamesPerPage}
                videogames={videogames.length}
                paginado={paginado}
            />
            <VideoGamesCard />
        </div>
    )
}

export default Home