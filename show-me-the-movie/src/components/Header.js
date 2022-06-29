import styles from './Header.module.css'

function Category() {
    return (
        <div className={styles.contents}>
            <h1>
                <img className={styles.main_logo} src={process.env.PUBLIC_URL + '/public_assets/logo_CGV.png'} />
                <span className={styles.logo_text}>CULTUREPLEX</span>
            </h1>
            {/*로그인이 안된 경우*/}
            <ul className={styles.member_info}>
                <li>
                    <img src={process.env.PUBLIC_URL + '/public_assets/loginPassword.png'}/>
                    <p>로그인</p>
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL + '/public_assets/loginJoin.png'}/>
                    <p>회원가입</p>
                </li>
            </ul>
        </div>
    )
}

export default Category;