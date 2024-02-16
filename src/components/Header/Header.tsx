import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <Image
                    width={109}
                    height={34}
                    alt="Aspan Media"
                    src="/img/logo.svg"
                    className={styles.header__logo}
                />
                <div className={styles.header__contacts}>
                    <a href="tel:+77004700705">+7 700 470 07 05</a>
                    <p>связаться с нами</p>
                </div>
            </div>
        </header>
    )
}

export default Header;