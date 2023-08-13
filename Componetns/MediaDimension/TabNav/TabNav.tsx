import React, {FC, useCallback, useState} from 'react';
import {dataTabNav} from "@/Data/Data";
import Link from "next/link";
import styles from '../../../styles/TabNav.module.css';
const TabNav: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const getIndex = useCallback((index: number) => {
        setActiveIndex(index)
    }, [activeIndex])
    return (
        <nav className={styles.Tab_Nav}>
            <ul className={styles.tab_block}>
                {
                    dataTabNav.map((item, index) => (
                        <li onClick={() => getIndex(index)}
                            key={index}
                            className={index === activeIndex ? styles.active: undefined }>
                            <Link href={item.path}>
                                <span>{<item.icons/>}</span>
                            </Link>
                        </li>
                    ))
                }
                <div className={styles.indicator}></div>
            </ul>
        </nav>
    );
};

export default TabNav;
