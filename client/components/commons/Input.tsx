import styles from "../../styles/components/commons/Input.module.scss";
import Str from "../../utils/str";

type Props = {
    children?: React.ReactNode,
    id?: string,
    className?: string,
    type?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = ({id, className, type = "text", children, onChange}: Props) => {
    let input = null;

    switch (type) {
        case "button":
            input = <button id={id} className={Str.joinClassName(styles.button, className ? className : '')}>{children}</button>
            break;
        case "textarea":
            input = <textarea id={id} className={Str.joinClassName(styles.textarea, className ? className : '')} />
            break;
        default:
            input = <input
                id={id}
                className={Str.joinClassName(styles.input, className ? className : '')}
                type={type}
                onChange={onChange}
            />
            break;
    }
    return input;
}

export default Input;