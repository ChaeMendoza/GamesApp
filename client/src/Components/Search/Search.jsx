import React, {useState} from "react";
import Lupa from "../../Images/lupa.png";
import styles from "./Search.module.css";
import {useDispatch} from "react-redux";
import {searchVideogames} from "../../Redux/actions";

function Search() {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
        console.log(name);
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchVideogames(name));
    }

    return (
        <div className={styles.container}>
            <input className={styles.input} type='text' onChange={(e) => handleInputChange(e)} />
            <button className={styles.btn} type='submit'  onClick={(e) => handleSubmit(e)}>
                <img className={styles.lupa} src={Lupa} alt='img not found'/>
            </button>
        </div>
    )
}

export default Search