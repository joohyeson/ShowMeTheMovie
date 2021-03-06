import style from "./MovieChart_main.module.css"
import Slider from 'react-slick';
import MovieChartImage from "./MovieChartImage_main";
import { Link } from "react-router-dom"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
const {onClick } = props;
return (
    <div className={style.next_arrow} onClick={onClick}>
        <span>&gt;</span>
    </div>
);
}

function SamplePrevArrow(props) {
const {  onClick } = props;
return (
    <div className={style.prev_arrow} onClick={onClick}>
        <span>&lt;</span>
    </div>
);
}

function MovieChart() {

    const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    };

    return (
        <div className={style.contents}>
            <div className={style.txt}>
                <h2>무비차트</h2>
                
                <Link to={`${process.env.PUBLIC_URL}/movies`}>
                <button>
                    <span>전체보기</span>
                    <span>&gt;</span>                       
                </button>
                </Link>
            </div>
            
            <div className={style.chart}>
                <Slider {...settings}>
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
                </Slider>
            </div>
        </div>
    )
}

export default MovieChart;