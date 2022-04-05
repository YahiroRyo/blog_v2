import styles from "../../styles/components/commons/Header.module.scss"
import Link from "next/link";
import Str from "../../utils/str";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={Str.joinClassName(styles.header__inner, "inner")}>
                <Link href={"/"}>
                    <a>
                        <h1 className={styles.header__inner__title}>ヤッピー</h1>
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header;