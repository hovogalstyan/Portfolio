import React, {FC} from 'react';
import styles from '../../styles/MediaHeaderNav.module.css';
import LogoHeader from "@/Componetns/MediaDimension/TabNav/LogoHeader";

const HeaderNav: FC = () => {
    return (
        <div className={styles.Header_Nav}>
            <div className={styles.row}>
                <LogoHeader/>
            </div>
        </div>
    );
};

export default HeaderNav;
