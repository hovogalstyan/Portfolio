import React, {useEffect, useState} from 'react';
import styles from '../../styles/Home.module.css';
import Logo from "@/Componetns/Home/Logo";
import Title from "@/Componetns/Home/Title";
import ContactIcons from "@/Componetns/Home/ContactIcons";
import BtnMore from "@/Componetns/Home/BtnMore";

const MediaHome = () => {
    const [autoPlayVideo, setAutoPlayVideo] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setAutoPlayVideo(true)
        }, 3000)
    }, []);
    return (
        <div className={styles.Media_Home_styles}>
            {autoPlayVideo && <video autoPlay muted src={require('./mixkit.mp4')}/>}
            <Logo/>
            <Title/>
            <ContactIcons/>
            <BtnMore/>
        </div>
    );
};

export default MediaHome;
