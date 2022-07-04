import style from "./Text.module.css"

function Text() {
    return (
        <div className={style.contents}>
            <div className={style.txt}>
                <h1>무비차트</h1>
                <div>
                    <input placeholder="무비차트 내 검색"></input>
                    <button>검색</button>
                    <select name="movieQuery">
                        <option value="0">예매율순</option>
                        <option value="1">평점순</option>
                    </select>
                    <button>Go</button>
                </div>
            </div>
        </div>
    );
}

export default Text;