import style from "./MovieChart.module.css"

function MovieChartImage() {
    return (
        <div className={style.image}>
            <p>No.1</p>
            <img src={'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_320.jpg'} />
            <div >
                <strong>탑건-매버릭</strong>
                <div className={style.image_info}>
                    <div>
                        <span>예매율 44.9% |</span>
                    </div>
                    <div>
                    <img src={'https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png'} />
                    <span>99%</span>
                    </div>
                </div>
                <span style={{ fontSize: "11px" }}>2022.06.22 개봉</span>
                <div>
                    <button/>
                </div>

            </div>
            
        </div>
    );
}

export default MovieChartImage;