import styles from "../../styles/components/commons/Footer.module.scss"
import Str from "../../utils/str"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={Str.joinClassName(styles.footer__inner, "inner")}>
                <h1 className={styles.footer__inner__title}>特に書くことない</h1>
            </div>
        </footer>
    )
}

export default Footer;