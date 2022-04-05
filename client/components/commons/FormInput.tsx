import styles from "../../styles/components/commons/FormInput.module.scss";
import Input from "../../components/commons/Input";
import Str from "../../utils/str";

type Props = {
    children?: React.ReactNode,
    className?: string,
    name?: string,
    type?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const FormInput = ({children, className, name, type, onChange}: Props) => {
    return (
        <div className={Str.joinClassName(styles.formInput, className ? className : '')}>
            <label className={styles.formInput__label} htmlFor={name}>{name}</label>
            <Input className={styles.formInput__input} id={name} type={type} onChange={onChange}>{children}</Input>
        </div>
    )
}

export default FormInput;