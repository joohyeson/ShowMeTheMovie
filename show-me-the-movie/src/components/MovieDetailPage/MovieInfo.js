import style from "./MovieInfo.module.css"

function MovieInfo() {
    return (
        <div className={style.contents}>
            <div className={style.movie_info}>
                <img src={'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_320.jpg'} style={{ marginRight:"30px"} } />
                <div className={style.movie_info_txt}>
                    <div className={style.movie_percent}>
                        <strong>탑건-매버릭</strong>
                        <p>Top Gun: Maverick</p>
                        <span>예매율 17.1% |</span>
                        <img src={'https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png'} />
                        <span>99%</span>
                    </div>
                    <div className={style.movie_spec}>
                        <p>감독 : 조셉 코신스키 / 배우 : 톰 크루즈 ,  마일즈 텔러 ,  제니퍼 코넬리</p>
                        <p>장르 : 액션 / 기본 : 12세 이상, 130분, 미국</p>
                        <p>개봉 : 2022.06.22</p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default MovieInfo;