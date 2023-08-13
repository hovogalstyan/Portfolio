import React from 'react';
import styles from '../../styles/Home.module.css';
import {useActiveClass} from "@/Componetns/Hooks/useActiveClass";

const Logo = () => {
    const [toggleClass] = useActiveClass(styles.active_logo,4000)

    return (
        <div className={`${styles.logo_container} ${toggleClass}`}>
            <div className={styles.circle_1}></div>
            <div className={styles.circle_2}></div>
            <div className={styles.circle_3}></div>
            <div className={styles.center}></div>
        </div>
    );
};

export default Logo;
