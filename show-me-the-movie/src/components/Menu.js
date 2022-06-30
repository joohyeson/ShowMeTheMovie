import styles from './Menu.module.css'


function Menu() {
    return (
        <div className={styles.contents}>
            <ul>
                <li>영화</li>
                <li>극장</li>
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