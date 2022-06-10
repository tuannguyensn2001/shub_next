import Header from "src/components/Header";
import styles from './style.module.scss';

interface Prop {
    children: JSX.Element | JSX.Element[]
}

function DefaultLayout({children}: Prop) {
    return (
        <div>
            <Header/>

            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
