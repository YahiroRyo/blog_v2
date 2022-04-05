import Image from 'next/image'
import styles from "../../styles/components/commons/Sns.module.scss"

type Props = {
    href: string,
    src: string,
    alt: string,
}

const Sns = ({href, src, alt}: Props) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" className={styles.sns}>
            <div className={styles.sns__icon}>
                <Image src={src} alt={alt} className={styles.sns__icon__image} layout='fill' objectFit='contain' />
            </div>
        </a>
    );
}

export default Sns;