import styles from './Menu.module.css'
import { Link } from "react-router-dom"

function Menu() {
    return (
        <div className={styles.contents}>
            <ul>
                <li><Link to={`${process.env.PUBLIC_URL}/movies`}>영화</Link></li>
                <li><Link to={`${process.env.PUBLIC_URL}/movies/theaters`}>극장</Link></li>
                <li>예매</li>
                <li>스토어</li>
                <li>이벤트</li>
                <li>혜택</li>
            </ul>
            <ul className={styles.search}>
                <li><input /></li>
                <li><img src={process.env.PUBLIC_URL + '/public_assets/search.png'}/></li>
            </ul>
        </div>
    )
}

export default Menu;