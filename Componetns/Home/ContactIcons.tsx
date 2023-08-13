import React from 'react';
import styles from '../../styles/ContactIcons.module.css'
import {FaFacebook} from "react-icons/fa";
import {AiFillInstagram, AiFillGithub} from "react-icons/ai";
import {useActiveClass} from "@/Componetns/Hooks/useActiveClass";

const ContactIcons = () => {
    const [toggle] = useActiveClass(styles.active_contact_modal, 14000)
    return (
        <ul className={`${styles.contact_block} ${toggle}`}>
            <li><a href="https://www.facebook.com/ho.vo.10297" target={"_blank"}><FaFacebook/></a></li>
            <li><a href="https://instagram.com/hovo_99___?igshid=ZDdkNTZiNTM=" target={"_blank"}><AiFillInstagram/></a>
            </li>
            <li><a href="https://github.com/hovogalstyan" target={"_blank"}><AiFillGithub/></a></li>
        </ul>

    );
};

export default ContactIcons;
