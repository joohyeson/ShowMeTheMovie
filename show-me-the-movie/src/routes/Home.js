import { useEffect, useState } from "react";

import Header from "../components/Header"
import Menu from "../components/Menu"
import Movie from '../components/Movie'

function Home() {

    return (
        <div>
            <Header />
            <Menu/>
        </div>
        
    );
    // const [loading, setLoading] = useState(true);
    // const [movies, setMovies] = useState([]);
    // const getMovies = async () => {
    // const response = await fetch(
    //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // );

    // const json = await response.json();
    // setMovies(json.data.movies);
    // setLoading(false);
    // }
    
    // useEffect(() => {
    // getMovies();
    // }, [])
    // console.log(movies);
    // return (<div>{loading ? <h1>Loading..</h1> : <div>{movies.map((movie) => (
    // <Movie
    //         key={movie.id} medium_cover_image={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} id={movie.id} />
    // ))}</div>}</div>);
}

export default Home;