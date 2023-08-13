import React, {useEffect, useState} from 'react';

export const useDimension = (): [number, number] => {
    const [windowDimension, setWindowDimension] = useState<any>({
        winWidth: 0,
        winHeight: 0
    })
    useEffect(() => {
        setWindowDimension({
            winHeight: window.innerHeight,
            winWidth: window.innerWidth
        });
    }, [])
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowDimension({
                winHeight: window.innerHeight,
                winWidth: window.innerWidth
            });
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    const {winWidth, winHeight} = windowDimension
    return [
        winWidth,
        winHeight
    ]
}
