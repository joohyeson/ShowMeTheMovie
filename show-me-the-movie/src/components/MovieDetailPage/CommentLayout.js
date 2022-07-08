import React, { Component } from 'react';
import style from './CommentLayout.module.css'
import Comment from './Comment';
class CommentLayout extends Component {
    render() {
        return (
            <div className={style.contents}>
                <h3>관객후기</h3>
            {/* 그리드 레이아웃만 설정 */}
                <div className={style.grid}>
                    <div style={{width:"100%"}}>
                    <Comment />
                    </div>
                    <div style={{width:"100%"}}>
                    <Comment />
                    </div>
                    <div style={{width:"100%"}}>
                    <Comment />
                    </div>
                    <div style={{width:"100%"}}>
                    <Comment />
                    </div>
                    <div style={{width:"100%"}}>
                    <Comment />
                    </div>
                    <div style={{width:"100%"}}>
                    <Comment />
                    </div>
                
            </div>
            </div>
        );
    }
}

export default CommentLayout;