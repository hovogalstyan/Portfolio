import React, {useEffect, useMemo, useState} from 'react';

export const useActiveClass = (styles: any, time: number) => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, time)
    }, [])
    const toggles = useMemo(() => {
        return active ? styles : ''
    }, [styles, active])
    return [toggles]
};
