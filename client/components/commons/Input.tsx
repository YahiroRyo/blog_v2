import styles from "../../styles/components/commons/Input.module.scss";
import Str from "../../utils/str";

type Props = {
    children?: React.ReactNode,
    id?: string,
    className?: string,
    type?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

const Input = ({id, className, type = "text", children, onChange, onClick, value}: Props) => {
    let input = null;

    switch (type) {
        case "button":
            input = <button id={id} onClick={onClick} value={value} className={Str.joinClassName(styles.button, className ? className : '')}>{children}</button>
            break;
        case "textarea":
            input = <textarea id={id} onChange={onChange} value={value} className={Str.joinClassName(styles.textarea, className ? className : '')} />
            break;
        default:
            input = <input
                id={id}
                value={value} 
                className={Str.joinClassName(styles.input, className ? className : '')}
                type={type}
                onChange={onChange}
            />
            break;
    }
    return input;
}

export default Input;