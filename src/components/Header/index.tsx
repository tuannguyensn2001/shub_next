import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';
import { Avatar } from '@chakra-ui/react';

const menu = [
    {
        link: '/class',
        label: 'Lớp học',
    },
    {
        link: '/resource',
        label: 'Học liệu',
    },
    {
        link: '/schedule',
        label: 'Lịch học',
    },
    {
        link: '/help',
        label: 'Hướng dẫn',
    },
];

function Header() {
    return (
        <div className={styles.header}>
            <div className={'tw-px-5 tw-flex tw-justify-between tw-h-full'}>
                <div
                    className={
                        'tw-h-full tw-flex tw-flex-col tw-justify-center'
                    }
                >
                    {/*<img*/}
                    {/*    src="https://shub.edu.vn/images/brand-blue.svg"*/}
                    {/*    alt=""*/}
                    {/*/>*/}
                    <Image
                        src={'https://shub.edu.vn/images/brand-blue.svg'}
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <ul className={'tw-flex tw-list-none tw-h-full '}>
                        {menu.map((item) => (
                            <li key={item.link}>
                                <Link passHref href={item.link}>
                                    <div className={styles.main_item}>
                                        {item.label}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={'tw-flex tw-flex-col tw-justify-center'}>
                    <Avatar src={'https://bit.ly/kent-c-dodds'} />
                </div>
            </div>
        </div>
    );
}

export default Header;
