import styles from "../../styles/components/commons/Title.module.scss";
import Str from "../../utils/str";

type Props = {
    children?: React.ReactNode,
    className?: string,
}

const Title = ({children, className}: Props) => {
    return <h1 className={Str.joinClassName(styles.title, className ? className : '')}>{children}</h1>
}

export default Title;
