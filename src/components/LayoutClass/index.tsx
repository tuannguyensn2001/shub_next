import DefaultLayout from "src/components/Layout";
import styles from './style.module.scss';

interface Prop {
    children: JSX.Element | JSX.Element[]
}


function LayoutClass({children}: Prop) {
    return (
        <DefaultLayout>
            <div className={styles.content}>
                <div className="tw-col-span-2">
                    div
                </div>
                <div className="tw-col-span-10">
                    {children}
                </div>

            </div>
        </DefaultLayout>
    )
}

export default LayoutClass;