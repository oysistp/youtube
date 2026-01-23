import { IoHomeSharp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { IoBook } from "react-icons/io5";
import { FaAngellist } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { RxGithubLogo } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const headerMenus = [
    {
        title:"홈",
        icon:<IoHomeSharp />,
        src: "/"
    },
    {
        title:"추천 영상",
        icon:<FaVideo />,
        src: "/today"
    },
    {
        title:"추천 음악",
        icon: <IoMdMusicalNotes />,
        src: "/music"
    },
    {
        title:"추천 영화",
        icon:<MdLocalMovies /> ,
        src: "/movie"
    },
    {
        title:"추천 도서",
        icon: <IoBook />,
        src: "/book"
    },
    {
        title:"추천 애니",
        icon: <FaAngellist />,
        src: "/anime"
    },
    {
        title:"유튜브 사이트",
        icon: <IoLogoYoutube />,
        src: "/youtube"
    }
];

export const searchKeyword = [
    {
        title:"MyYoutube",
        src:"/search/youtube"
    },
    {
        title:"HTML",
        src:"/search/html"
    },
    {
        title:"CSS",
        src:"/search/css"
    },
    {
        title:"JavaScript",
        src:"/search/javascript"
    },
    {
        title:"React",
        src:"/search/react.js"
    },
    {
        title:"JAVA",
        src:"/search/java"
    },
    {
        title:"ORACLE",
        src:"/search/oracle"
    },
    {
        title:"SPRING",
        src:"/search/spring"
    }
];

export const snsLink = [
    {
        icon:<RxGithubLogo />,
        src:"https://github.com"
    },
    {
        icon:<FaYoutube />,
        src:"https://youtube.com"
    },
    {
        icon:<FaGoogle />,
        src:"https://google.com"
    },
    {
        icon:<FaInstagram />,
        src:"https://instagram.com"
    }
]