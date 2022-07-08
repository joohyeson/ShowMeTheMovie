import React from 'react';
import style from './DetailGraph.module.css'
import LeftGraph from './Graph/LeftGraph';
import RightGraph from './Graph/RightGraph';

const DetailGraph = () => {
    return (
        <div className={style.contents}>
            <ul>
                <li className={style.left_graph}>
                    <strong>성별 예매 분포</strong>
                    <LeftGraph/>
                </li>
                <li className={style.right_graph}>
                    <strong>연령별 예매 분포</strong>
                    {/* <RightGraph/> */}
                </li>                
            </ul>
        </div>
    );
};

export default DetailGraph;