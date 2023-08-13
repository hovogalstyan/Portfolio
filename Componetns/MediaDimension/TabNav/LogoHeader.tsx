import React, {FC} from 'react';
import img from '../../../public/logo_H.png';
import styles from '../../../styles/MediaHeaderNav.module.css';

const LogoHeader: FC = () => {
    return (
        <div className={styles.Logo}>
            <div className={styles.gradient}></div>
            <figure>
                <span></span>
                <img src={img.src} alt="logo"/>
            </figure>
        </div>
    );
};

export default LogoHeader;
