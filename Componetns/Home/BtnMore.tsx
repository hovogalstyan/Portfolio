import React, {useCallback} from 'react';
import styles from '../../styles/Home.module.css';
import {BsArrowRight} from "react-icons/bs";
import {useRouter} from "next/router";
import {useActiveClass} from "@/Componetns/Hooks/useActiveClass";

const BtnMore = () => {
    const router = useRouter()
    const handelSubmit = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push('/Profile')
    }, [router]);
    const [toggle] = useActiveClass(styles.active_btn, 14500)
    return (
        <button
            onClick={handelSubmit}
            className={`${styles.btn_more} ${toggle}`}>
            More
            <small>
                <BsArrowRight/>
            </small>
        </button>
    );
};

export default BtnMore;
