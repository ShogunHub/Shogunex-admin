import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

import logo_img from '../../assets/images/logo.png';

interface HeaderProps {
    type: number;
}
const Header = ({ type } : HeaderProps) => {
    
    return(
        <HeaderStyle>
            <Link to='/'>
                <div className="logo">
                    <img src={logo_img} alt="logo" />
                    <span className="text-white">Shogunex.io</span>
                </div>
            </Link>
            <div className="menu">
                <ul>
                    <Link to='/'>
                        <li className={`${type == 1 ? 'active' : 'text-gray'}`}>
                            <svg data-name="Слой 1" id="Слой_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                                <title/>
                                <path stroke="currentColor" fill="currentColor" d="M45.71,58H12.29A12.3,12.3,0,0,1,0,45.71V12.29A12.3,12.3,0,0,1,12.29,0H45.71A12.3,12.3,0,0,1,58,12.29V45.71A12.3,12.3,0,0,1,45.71,58ZM12.29,4A8.3,8.3,0,0,0,4,12.29V45.71A8.3,8.3,0,0,0,12.29,54H45.71A8.3,8.3,0,0,0,54,45.71V12.29A8.3,8.3,0,0,0,45.71,4Z"/>
                                <path stroke="currentColor" fill="currentColor" d="M115.71,58H82.29A12.3,12.3,0,0,1,70,45.71V12.29A12.3,12.3,0,0,1,82.29,0h33.42A12.3,12.3,0,0,1,128,12.29V45.71A12.3,12.3,0,0,1,115.71,58ZM82.29,4A8.3,8.3,0,0,0,74,12.29V45.71A8.3,8.3,0,0,0,82.29,54h33.42A8.3,8.3,0,0,0,124,45.71V12.29A8.3,8.3,0,0,0,115.71,4Z"/>
                                <path stroke="currentColor" fill="currentColor" d="M45.71,128H12.29A12.3,12.3,0,0,1,0,115.71V82.29A12.3,12.3,0,0,1,12.29,70H45.71A12.3,12.3,0,0,1,58,82.29v33.42A12.3,12.3,0,0,1,45.71,128ZM12.29,74A8.3,8.3,0,0,0,4,82.29v33.42A8.3,8.3,0,0,0,12.29,124H45.71A8.3,8.3,0,0,0,54,115.71V82.29A8.3,8.3,0,0,0,45.71,74Z"/>
                                <path stroke="currentColor" fill="currentColor" d="M115.71,128H82.29A12.3,12.3,0,0,1,70,115.71V82.29A12.3,12.3,0,0,1,82.29,70h33.42A12.3,12.3,0,0,1,128,82.29v33.42A12.3,12.3,0,0,1,115.71,128ZM82.29,74A8.3,8.3,0,0,0,74,82.29v33.42A8.3,8.3,0,0,0,82.29,124h33.42a8.3,8.3,0,0,0,8.29-8.29V82.29A8.3,8.3,0,0,0,115.71,74Z"/>
                            </svg>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to='/trade'>
                    <li className={`${type == 2 ? 'active' : 'text-gray'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="wallet">
                            <path fill="currentColor" d="M59,34H58V24a3,3,0,0,0-3-3H54V12a3,3,0,0,0-3-3H9a7.009,7.009,0,0,0-7,7V54a5.006,5.006,0,0,0,5,5H55a3,3,0,0,0,3-3V48h1a3,3,0,0,0,3-3V37A3,3,0,0,0,59,34ZM5.47,12.464A4.93,4.93,0,0,1,9,11H51a1,1,0,0,1,1,1v3H9a1,1,0,0,0,0,2H52v4H9a5.006,5.006,0,0,1-5-5A4.935,4.935,0,0,1,5.47,12.464ZM56,56a1,1,0,0,1-1,1H7a3,3,0,0,1-3-3V20.9l.031.028c.073.074.153.143.23.214s.175.166.268.244.164.124.246.187c.1.074.194.151.295.221.085.057.175.107.262.161.105.066.209.134.318.194.091.05.188.092.282.138.11.054.218.112.332.16s.207.077.311.116.22.087.334.122.237.063.356.093.21.06.318.082c.14.029.284.046.427.067.09.013.179.032.271.041A7.106,7.106,0,0,0,9,23H55a1,1,0,0,1,1,1V34H45a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H56Zm4-11a1,1,0,0,1-1,1H45a1,1,0,0,1-1-1V37a1,1,0,0,1,1-1H59a1,1,0,0,1,1,1Z"></path>
                            <path fill="currentColor" d="M49,38a3,3,0,1,0,3,3A3,3,0,0,0,49,38Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,49,42Z"></path>
                        </svg>
                        <span >Trades</span>
                    </li></Link>
                    <Link to='/fee'>
                    <li className={`${type == 3 ? 'active' : 'text-gray'}`}>
                        <svg data-name="Слой 1" id="Слой_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <title/>
                            <path stroke="currentColor" fill="currentColor" d="M45.71,58H12.29A12.3,12.3,0,0,1,0,45.71V12.29A12.3,12.3,0,0,1,12.29,0H45.71A12.3,12.3,0,0,1,58,12.29V45.71A12.3,12.3,0,0,1,45.71,58ZM12.29,4A8.3,8.3,0,0,0,4,12.29V45.71A8.3,8.3,0,0,0,12.29,54H45.71A8.3,8.3,0,0,0,54,45.71V12.29A8.3,8.3,0,0,0,45.71,4Z"/>
                            <path stroke="currentColor" fill="currentColor" d="M115.71,58H82.29A12.3,12.3,0,0,1,70,45.71V12.29A12.3,12.3,0,0,1,82.29,0h33.42A12.3,12.3,0,0,1,128,12.29V45.71A12.3,12.3,0,0,1,115.71,58ZM82.29,4A8.3,8.3,0,0,0,74,12.29V45.71A8.3,8.3,0,0,0,82.29,54h33.42A8.3,8.3,0,0,0,124,45.71V12.29A8.3,8.3,0,0,0,115.71,4Z"/>
                            <path stroke="currentColor" fill="currentColor" d="M45.71,128H12.29A12.3,12.3,0,0,1,0,115.71V82.29A12.3,12.3,0,0,1,12.29,70H45.71A12.3,12.3,0,0,1,58,82.29v33.42A12.3,12.3,0,0,1,45.71,128ZM12.29,74A8.3,8.3,0,0,0,4,82.29v33.42A8.3,8.3,0,0,0,12.29,124H45.71A8.3,8.3,0,0,0,54,115.71V82.29A8.3,8.3,0,0,0,45.71,74Z"/>
                            <path stroke="currentColor" fill="currentColor" d="M115.71,128H82.29A12.3,12.3,0,0,1,70,115.71V82.29A12.3,12.3,0,0,1,82.29,70h33.42A12.3,12.3,0,0,1,128,82.29v33.42A12.3,12.3,0,0,1,115.71,128ZM82.29,74A8.3,8.3,0,0,0,74,82.29v33.42A8.3,8.3,0,0,0,82.29,124h33.42a8.3,8.3,0,0,0,8.29-8.29V82.29A8.3,8.3,0,0,0,115.71,74Z"/>
                        </svg>
                        <span >Fee</span>
                    </li></Link>
                    <Link to='/token'>
                    <li className={`${type == 4 ? 'active' : 'text-gray'}`}>
                        <svg data-name="Слой 1" id="Слой_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <title/>
                            <path stroke="currentColor" fill="currentColor" d="M45.71,58H12.29A12.3,12.3,0,0,1,0,45.71V12.29A12.3,12.3,0,0,1,12.29,0H45.71A12.3,12.3,0,0,1,58,12.29V45.71A12.3,12.3,0,0,1,45.71,58ZM12.29,4A8.3,8.3,0,0,0,4,12.29V45.71A8.3,8.3,0,0,0,12.29,54H45.71A8.3,8.3,0,0,0,54,45.71V12.29A8.3,8.3,0,0,0,45.71,4Z"/>
                            <path stroke="currentColor" fill="currentColor" d="M115.71,58H82.29A12.3,12.3,0,0,1,70,45.71V12.29A12.3,12.3,0,0,1,82.29,0h33.42A12.3,12.3,0,0,1,128,12.29V45.71A12.3,12.3,0,0,1,115.71,58ZM82.29,4A8.3,8.3,0,0,0,74,12.29V45.71A8.3,8.3,0,0,0,82.29,54h33.42A8.3,8.3,0,0,0,124,45.71V12.29A8.3,8.3,0,0,0,115.71,4Z"/>
                            <path stroke="currentColor" fill="currentColor" d="M45.71,128H12.29A12.3,12.3,0,0,1,0,115.71V82.29A12.3,12.3,0,0,1,12.29,70H45.71A12.3,12.3,0,0,1,58,82.29v33.42A12.3,12.3,0,0,1,45.71,128ZM12.29,74A8.3,8.3,0,0,0,4,82.29v33.42A8.3,8.3,0,0,0,12.29,124H45.71A8.3,8.3,0,0,0,54,115.71V82.29A8.3,8.3,0,0,0,45.71,74Z"/>
                            <path stroke="currentColor" fill="currentColor" d="M115.71,128H82.29A12.3,12.3,0,0,1,70,115.71V82.29A12.3,12.3,0,0,1,82.29,70h33.42A12.3,12.3,0,0,1,128,82.29v33.42A12.3,12.3,0,0,1,115.71,128ZM82.29,74A8.3,8.3,0,0,0,74,82.29v33.42A8.3,8.3,0,0,0,82.29,124h33.42a8.3,8.3,0,0,0,8.29-8.29V82.29A8.3,8.3,0,0,0,115.71,74Z"/>
                        </svg>
                        <span >Tokens</span>
                    </li></Link>
                    <Link to='/user'>
                    <li className={`${type == 5 ? 'active' : 'text-gray'}`}>
                        <svg data-name="Слой 1" id="Слой_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <title/>
                            <path stroke="currentColor" fill="currentColor" d="M45.71,58H12.29A12.3,12.3,0,0,1,0,45.71V12.29A12.3,12.3,0,0,1,12.29,0H45.71A12.3,12.3,0,0,1,58,12.29V45.71A12.3,12.3,0,0,1,45.71,58ZM12.29,4A8.3,8.3,0,0,0,4,12.29V45.71A8.3,8.3,0,0,0,12.29,54H45.71A8.3,8.3,0,0,0,54,45.71V12.29A8.3,8.3,0,0,0,45.71,4Z"/>
                            <path stroke="currentColor" fill="currentColor" d="M115.71,58H82.29A12.3,12.3,0,0,1,70,45.71V12.29A12.3,12.3,0,0,1,82.29,0h33.42A12.3,12.3,0,0,1,128,12.29V45.71A12.3,12.3,0,0,1,115.71,58ZM82.29,4A8.3,8.3,0,0,0,74,12.29V45.71A8.3,8.3,0,0,0,82.29,54h33.42A8.3,8.3,0,0,0,124,45.71V12.29A8.3,8.3,0,0,0,115.71,4Z"/>
                            <path stroke="currentColor" fill="currentColor" d="M45.71,128H12.29A12.3,12.3,0,0,1,0,115.71V82.29A12.3,12.3,0,0,1,12.29,70H45.71A12.3,12.3,0,0,1,58,82.29v33.42A12.3,12.3,0,0,1,45.71,128ZM12.29,74A8.3,8.3,0,0,0,4,82.29v33.42A8.3,8.3,0,0,0,12.29,124H45.71A8.3,8.3,0,0,0,54,115.71V82.29A8.3,8.3,0,0,0,45.71,74Z"/>
                            <path stroke="currentColor" fill="currentColor" d="M115.71,128H82.29A12.3,12.3,0,0,1,70,115.71V82.29A12.3,12.3,0,0,1,82.29,70h33.42A12.3,12.3,0,0,1,128,82.29v33.42A12.3,12.3,0,0,1,115.71,128ZM82.29,74A8.3,8.3,0,0,0,74,82.29v33.42A8.3,8.3,0,0,0,82.29,124h33.42a8.3,8.3,0,0,0,8.29-8.29V82.29A8.3,8.3,0,0,0,115.71,74Z"/>
                        </svg>
                        <span >Users</span>
                    </li></Link>
                    <Link to='/admin'>
                    <li className={`${type == 6 ? 'active' : 'text-gray'}`}>
                        <svg data-name="Слой 1" id="Слой_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <title/>
                            <path stroke="currentColor" fill="currentColor" d="M45.71,58H12.29A12.3,12.3,0,0,1,0,45.71V12.29A12.3,12.3,0,0,1,12.29,0H45.71A12.3,12.3,0,0,1,58,12.29V45.71A12.3,12.3,0,0,1,45.71,58ZM12.29,4A8.3,8.3,0,0,0,4,12.29V45.71A8.3,8.3,0,0,0,12.29,54H45.71A8.3,8.3,0,0,0,54,45.71V12.29A8.3,8.3,0,0,0,45.71,4Z"/>
                            <path stroke="currentColor" fill="currentColor" d="M115.71,58H82.29A12.3,12.3,0,0,1,70,45.71V12.29A12.3,12.3,0,0,1,82.29,0h33.42A12.3,12.3,0,0,1,128,12.29V45.71A12.3,12.3,0,0,1,115.71,58ZM82.29,4A8.3,8.3,0,0,0,74,12.29V45.71A8.3,8.3,0,0,0,82.29,54h33.42A8.3,8.3,0,0,0,124,45.71V12.29A8.3,8.3,0,0,0,115.71,4Z"/>
                            <path stroke="currentColor" fill="currentColor" d="M45.71,128H12.29A12.3,12.3,0,0,1,0,115.71V82.29A12.3,12.3,0,0,1,12.29,70H45.71A12.3,12.3,0,0,1,58,82.29v33.42A12.3,12.3,0,0,1,45.71,128ZM12.29,74A8.3,8.3,0,0,0,4,82.29v33.42A8.3,8.3,0,0,0,12.29,124H45.71A8.3,8.3,0,0,0,54,115.71V82.29A8.3,8.3,0,0,0,45.71,74Z"/>
                            <path stroke="currentColor" fill="currentColor" d="M115.71,128H82.29A12.3,12.3,0,0,1,70,115.71V82.29A12.3,12.3,0,0,1,82.29,70h33.42A12.3,12.3,0,0,1,128,82.29v33.42A12.3,12.3,0,0,1,115.71,128ZM82.29,74A8.3,8.3,0,0,0,74,82.29v33.42A8.3,8.3,0,0,0,82.29,124h33.42a8.3,8.3,0,0,0,8.29-8.29V82.29A8.3,8.3,0,0,0,115.71,74Z"/>
                        </svg>
                        <span >Admins</span>
                    </li></Link>
                </ul>
            </div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    width: 345px;
    height: 100vh;

    a {
        text-decoration: none;
        .logo {
            height: 120px;
            display: flex;
            align-items: center;
            margin-left: 30px;
            gap: var(--space);
            img  {
                width: 65px;
                height: 65px;
            }

            span {
                font-family: 'Inter';
                font-family: 700;
                font-size: 14px;
                line-height: 16.94px;
                color: var(--white)
            }
        }
    }
    
    .menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;

        ul {
            
            a {
                text-decoration: none;
            }
            display: flex;
            flex-direction: column;
            list-style-type: none;
            li {
                display: flex;
                align-items: center;
                padding: 18px 0;
                gap: 35px;
                border-right: 8px solid transparent;
                height: 40px;
                padding-left: var(--space);

                &:hover {
                    background-color: var(--black);
                    color: var(--white);
                    cursor: pointer;
                }
                &.active {
                    border-right: 8px solid var(--brown);
                    color: var(--brown);
                    border-radius: 4px;
                    background-color: var(--dark-blue);
                }

                svg {
                    width: 24px;
                    height: 24px;
                }

                span {
                    font-family: Squada One;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 19.03px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                }
            }
        }
    }
`;
export default Header;