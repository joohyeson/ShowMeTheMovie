import React, { Component } from 'react';
import style from './CommentLayout.module.css'
import Comment from './Comment';
class CommentLayout extends Component {
    render() {
        return (
            <div className={style.contents}>
                <h3>관객후기</h3>
            {/* 그리드 레이아웃만 설정 */}
                <ul className={style.grid}>
                    <li style={{width:"100%"}}>
                    <Comment />
                    </li>
                    <li style={{width:"100%"}}>
                    <Comment />
                    </li>
                    <li style={{width:"100%"}}>
                    <Comment />
                    </li>
                    <li style={{width:"100%"}}>
                    <Comment />
                    </li>
                    <li style={{width:"100%"}}>
                    <Comment />
                    </li>
                    <li style={{width:"100%"}}>
                    <Comment />
                    </li>
                
            </ul>
            </div>
        );
    }
}

export default CommentLayout;