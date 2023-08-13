import React, {FC, useMemo, useEffect} from "react";
import {useRouter} from "next/router";
import {useDimension} from "@/Componetns/Hooks/useDimension";
import MediaHome from "@/Componetns/Home/MediaHome";
import WebHome from "@/Componetns/Home/WebHome";
import styles from '@/styles/Home.module.css';

interface props {
    w_width: number
}

const ControlHome: FC<props> = ({w_width}) => {
    return (
        <>
            {
                w_width !== 0 && w_width <= 470
                    ? <MediaHome/>
                    : <WebHome/>
            }
        </>
    )
}
export default function Home() {
    const [w_width] = useDimension()
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/Profile')
        },20000)
    }, [router])
    const mediaHomeStyles = useMemo(() => {
        return w_width <= 470 ? styles.media_home : styles.Home
    }, [w_width])
    return (
        <div className={mediaHomeStyles}>
            <ControlHome w_width={w_width}/>
        </div>
    )
}
