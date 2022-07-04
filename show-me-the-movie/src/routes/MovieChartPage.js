import Header from "../components/Header"
import Menu from "../components/Menu"
import MovieChart from "../components/MovieChartPage/MovieChart";
import Text from "../components/MovieChartPage/Text"

function MovieDetail() {
    return (
        <div>
            <Header />
            <Menu />
            <Text />
            <MovieChart/>
        </div>
    );
}

export default MovieDetail;