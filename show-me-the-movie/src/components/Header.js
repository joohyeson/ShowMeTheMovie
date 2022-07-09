import styles from './Header.module.css'
import { Link } from "react-router-dom"

function Category() {
    return (
        <div className={styles.contents}>
            <h1>
                <Link to={`${process.env.PUBLIC_URL}/`}>
                    <img className={styles.main_logo} src={process.env.PUBLIC_URL + '/public_assets/logo_CGV.png'} />
                </Link>
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
                <li>
                    <img src={process.env.PUBLIC_URL + '/public_assets/loginMember.png'}/>
                    <p>My Page</p>
                </li>
            </ul>
        </div>
    )
}

export default Category;