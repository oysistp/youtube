import React from 'react'

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

const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className="header__logo">
            <a href="/">
                <em aria-hidden='true'></em>
                <span>youtube</span>
            </a>
        </h1>
        <nav className="header__menu">
            <ul className='menu'>
                <li className='active'>
                    <a href='/'><IoHomeSharp />홈</a>
                </li>
                <li>
                    <a href='/today'><FaVideo />추천 영상</a>
                </li>
                <li>
                    <a href='/music'><IoMdMusicalNotes />추천 음악</a>
                </li>
                <li>
                    <a href='/movie'><MdLocalMovies />추천 영화</a>
                </li>
                <li>
                    <a href='/book'><IoBook />추천 도서</a>
                </li>
                <li>
                    <a href='/anime'><FaAngellist />추천 애니</a>
                </li>
                <li>
                    <a href='/youtube'><IoLogoYoutube />유튜브 사이트</a>
                </li>
            </ul>
            <ul className='keyword'>
                <li>
                    <a href='/search/youtube'>MyYoutube</a>
                </li>
                <li>
                    <a href='/search/html'>HTML</a>
                </li>
                <li>
                    <a href='/search/css'>CSS</a>
                </li>
                <li>
                    <a href='/search/javascript'>JavaScript</a>
                </li>
                <li>
                    <a href='/search/react.js'>React</a>
                </li>
                <li>
                    <a href='/search/java'>JAVA</a>
                </li>
                <li>
                    <a href='/search/oracle'>ORACLE</a>
                </li>
                <li>
                    <a href='/search/spring'>SPRING</a>
                </li>
            </ul>
        </nav>
        <div className="header__sns">
            <ul>
                <li>
                    <a href="https://github.com"><RxGithubLogo /></a>
                </li>
                <li>
                    <a href="https://youtube.com"><FaYoutube /></a>
                </li>
                <li>
                    <a href="https://google.com"><FaGoogle /></a>
                </li>
                <li>
                    <a href="https://instagram.com"><FaInstagram /></a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header