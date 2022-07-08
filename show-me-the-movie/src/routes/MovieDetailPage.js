import Header from "../components/Header"
import Menu from "../components/Menu"
import CommentLayout from "../components/MovieDetailPage/CommentLayout";
import DetailGraph from "../components/MovieDetailPage/DetailGraph";
import MovieInfo from "../components/MovieDetailPage/MovieInfo"
import MovieText from "../components/MovieDetailPage/MovieText";

function MovieDetailPage() {
    return (<div>
        <Header />
        <Menu />
        <MovieInfo />
        <MovieText />
        <DetailGraph />
        <CommentLayout/>
    </div>);
}

export default MovieDetailPage;