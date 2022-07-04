import style from "./MovieChart.module.css"
import MovieChartImage from "./MovieChartImage";

function MovieChart() {
    return (
        <div className={style.contents}>
            {/* 그리드 레이아웃만 설정 */}
            <div className={style.grid}>
                <MovieChartImage />
                <MovieChartImage />
                <MovieChartImage />
                <MovieChartImage />
                <MovieChartImage />
                <MovieChartImage />
                <MovieChartImage />
                <MovieChartImage />
                <MovieChartImage />
                <MovieChartImage />
                <MovieChartImage />
                <MovieChartImage/>
            </div>
        </div>
    );
}

export default MovieChart;