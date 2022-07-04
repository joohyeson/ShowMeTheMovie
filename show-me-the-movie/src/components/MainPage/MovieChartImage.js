import { useState } from 'react';
import style from './MovieChart.module.css'

function MovieChartImage() {
    const [isHover, setIsHover] = useState(false);
    
    function hoverEvent() {
        setIsHover(true)
    }

    function hoverOutEvent() {
        setIsHover(false)
    }


    return (
        <div>
            <div onMouseOver={hoverEvent} onMouseOut={hoverOutEvent} className={style.chart_image_and_buttons}>
                <img  className={style.chart_image} src={process.env.PUBLIC_URL + '/public_assets/82120_320.jpg'}></img>
                <div className={style.chart_button}>
                {isHover ? <button >상세보기</button> : null}
                {isHover ? <button style={{backgroundColor:"rgb(251, 67, 87)", color:"white"} }>예매하기</button> : null}
                </div>

            </div>
            <div>
            <h4>탑건-매버릭</h4>
            </div>
            
            <div className={style.chart_info}>
                <img src={'https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png'}/>
                <span>99%</span>
                <span>예매율 44.9%</span>
            </div>
        </div>
    );
}

export default MovieChartImage;