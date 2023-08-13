import {DataTabNavType} from "@/Types/Types";
/*import tab navbar icons*/
import {AiOutlineHome} from "react-icons/ai";
import {BsListUl,BsEnvelope,BsBriefcase} from "react-icons/bs";
import {BiBookReader} from "react-icons/bi";


export const dataTabNav: DataTabNavType [] = [
    {
        path: 'Profile',
        icons: AiOutlineHome
    },
    {
        path: 'About',
        icons:BiBookReader
    },
    {
        path: 'Project',
        icons: BsBriefcase
    },
    {
        path: 'Services',
        icons: BsListUl
    },
    {
        path: 'Contact',
        icons: BsEnvelope
    },
]
