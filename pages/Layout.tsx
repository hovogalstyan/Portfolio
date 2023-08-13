import React, {FC, ReactNode} from 'react';
import HeaderNav from "@/Componetns/MediaDimension/HeaderNav";
import {useRouter} from "next/router";
import TabNav from "@/Componetns/MediaDimension/TabNav/TabNav";
import WebHeaderNavbar from "@/Componetns/WebHeaderNavbar";
import {useDimension} from "@/Componetns/Hooks/useDimension";

interface props {
    children: ReactNode
}

const ControlNavbar: FC = () => {
    const [w_width] = useDimension()
    return (
        <>
            {
                w_width !== 0 && w_width <= 470 ?
                    <>
                        <HeaderNav/>
                        <TabNav/>
                    </>
                    : <WebHeaderNavbar/>
            }
        </>
    )
}

const Layout: FC<props> = ({children}) => {
    const router = useRouter()
    return (
        <div className={'layout'}>
            {router.route !== '/' && <ControlNavbar/>}
            <div className={'container'}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
