import React from 'react';
import styles from '../../styles/Home.module.css';
import {useActiveClass} from "@/Componetns/Hooks/useActiveClass";

const Title = () => {
    const [toggleClass] = useActiveClass(styles.active_Title, 5000)
    return (
        <div className={`${styles.Title} ${toggleClass}`}>
            <div className={styles.text_one_content}>
                <h1>Բարև Ձեզ</h1>
                <h2>Սիրով ներկայացնում եմ իմ աշխատանքը</h2>
            </div>
        </div>
    );
};

export default Title;
