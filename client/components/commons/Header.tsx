import styles from "../../styles/components/commons/Header.module.scss"
import Str from "../../utils/str";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={Str.joinClassName(styles.header__inner, "inner")}>
                <h1 className={styles.header__inner__title}>ヤッピー</h1>
            </div>
        </header>
    )
}

export default Header;