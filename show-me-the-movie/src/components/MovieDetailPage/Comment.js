import React, { Component } from 'react';
import style from './Comment.module.css'

class Comment extends Component {
    render() {
        return (
            <div className={style.contents}>
                <div className={style.box}>
                    <img src="http://img.cgv.co.kr/R2014/images/common/default_profile.gif"/>
                </div>
                <div className={style.user_info}>
                    <span className={style.user_info_img} />
                    <span>닉네임</span>
                    <p>톰크루즈 오래 보고 싶어요</p>
                    <div className={style.bottom_info}>
                        <span>2022.07.08 |</span>
                        <span>
                            <img src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png" />
                            
                        </span>
                        <span> 0</span>
                        
                    </div>
                </div>
                <div>
                    <button className={style.option}/>
                </div>

            </div>
        );
    }
}

export default Comment;