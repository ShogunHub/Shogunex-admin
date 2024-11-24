import React from 'react'
import { styled } from 'styled-components';

import user_img from '../assets/images/User.png'
const Navbar = () => {
    return(
        <Nav>
            <div className="username">
                <span className='text-white'>TraderMaxx</span>
                <span className='text-gray'>@tradermaxx</span>
            </div>
            <img src={user_img} alt="" />
            <div className="bg-darkred">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 80" fill="currentColor" x="0px" y="0px">
                    <path d="M40.2196 2C39.1151 2 38.2196 2.89543 38.2196 4C38.2196 5.10457 39.1151 6 40.2196 6H55.1716L27.5858 33.5858C26.8047 34.3668 26.8047 35.6332 27.5858 36.4142C28.3668 37.1953 29.6332 37.1953 30.4142 36.4142L58 8.82843V24C58 25.1046 58.8954 26 60 26C61.1046 26 62 25.1046 62 24V4C62 2.89543 61.1046 2 60 2H40.2196Z" fill="currentColor"/>
                    <path d="M6 36C6 23.8497 15.8497 14 28 14C29.1046 14 30 13.1046 30 12C30 10.8954 29.1046 10 28 10C13.6406 10 2 21.6406 2 36C2 50.3594 13.6406 62 28 62C42.3594 62 54 50.3594 54 36C54 34.8954 53.1046 34 52 34C50.8954 34 50 34.8954 50 36C50 48.1503 40.1503 58 28 58C15.8497 58 6 48.1503 6 36Z" fill="currentColor"/>
                </svg>
            </div>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items :center;
    justify-content: flex-end;
    height: 120px;
    width: 100%;
    padding-right: var(--space);
    gap: 20px;

    .username {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        & > span:first-of-type {
            font-size: 18px;
        }
        
        & > span:last-of-type {
            font-size: 12px;
        }
    }
    img {
        width: 40px;
        height: 40px;
    }

    .bg-darkred {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: var(--red);
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            width: 30px;
            height: 37px;
        }
    }   
`
export default Navbar;

