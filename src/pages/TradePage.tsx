import React from "react";
import { styled } from "styled-components";

import Header from "./Layout/Header";
import Navbar from "../components/Navbar";
import TradeTable from "../components/TradeTable";
import chart_img from '../assets/images/chart.png'

const TradePage = () => {
    return (
        <Main>
            <Header type={2}/>
            <div className="container">
                <Navbar/>
                <div className="content">
                    <div className="card-group">
                        <div className="card-item sm-card blue-card br-12">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 48 60" x="0px" y="0px">
                                <path fill="currentColor"  d="M19.88,35c-.19-.33-.37-.66-.53-1,0,0-14.5,0-14.57.01A2.011,2.011,0,0,0,3,36v3a2.006,2.006,0,0,0,2,2H26a1.916,1.916,0,0,0,.59-.09,13.8,13.8,0,0,1-1.8-.91A14.083,14.083,0,0,1,19.88,35Z"/>
                                <path fill="currentColor"  d="M5.27,28A2,2,0,0,0,5,29v3a2,2,0,0,0,.27,1H18.93A13.838,13.838,0,0,1,18,28Z"/>
                                <path fill="currentColor"  d="M4.78,26.99A1.548,1.548,0,0,0,5,27H18.04c.02-.34.06-.67.1-1a13.848,13.848,0,0,1,1.74-5,10.574,10.574,0,0,1,.64-1H5a2.006,2.006,0,0,0-2,2v3a2.022,2.022,0,0,0,1.78,1.99Z"/>
                                <path fill="currentColor"  d="M6.27,14A2,2,0,0,0,6,15v3a2,2,0,0,0,.27,1H21.29a13.932,13.932,0,0,1,8.31-4.79A.994.994,0,0,0,29,14Z"/>
                                <path fill="currentColor"  d="M5.78,12.99C5.85,13,27,13,27,13a2,2,0,0,0,2-2V8a2.006,2.006,0,0,0-2-2H6A2.006,2.006,0,0,0,4,8v3A2.011,2.011,0,0,0,5.78,12.99Z"/>
                                <path fill="currentColor"  d="M32,20a8,8,0,1,0,8,8A8.011,8.011,0,0,0,32,20Zm2,7a1,1,0,0,1,1,1v3a1,1,0,0,1-1,1H33a1,1,0,0,1-2,0H30a1,1,0,0,1,0-2h3V29H30a1,1,0,0,1-1-1V25a1,1,0,0,1,1-1h1a1,1,0,0,1,2,0h1a1,1,0,0,1,0,2H31v1Z"/>
                                <path fill="currentColor"  d="M32,15a12.929,12.929,0,0,0-9.6,4.24c-.22.25-.44.5-.64.76a11.994,11.994,0,0,0-.71,1,12.852,12.852,0,0,0-1.9,5.01A14.7,14.7,0,0,0,19,28a13.007,13.007,0,0,0,1,5,12.365,12.365,0,0,0,.97,1.87,12.986,12.986,0,0,0,5.6,4.95c.33.14.66.28,1,.4A12.681,12.681,0,0,0,32,41a13,13,0,0,0,0-26Zm0,23A10,10,0,1,1,42,28,10.016,10.016,0,0,1,32,38Z"/>
                            </svg>
                            <div className="detail">
                                <span className="text-white">Total Tokens</span>
                                <div className="text-white">
                                    <span>105</span>
                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"><title>Forward</title><path d="M97.64,44.1,64.72,11.18a8.06,8.06,0,1,0-11.4,11.39L72.78,42H8.06a8.06,8.06,0,0,0,0,16.12H72.6L53.32,77.43a8.06,8.06,0,0,0,11.4,11.39L97.64,55.9A8,8,0,0,0,100,50.2a1.27,1.27,0,0,0,0-.2,1.41,1.41,0,0,0,0-.2A8.07,8.07,0,0,0,97.64,44.1Z"/></svg>
                                </div>
                                <img src={chart_img} alt="" />
                            </div>
                        </div>
                        <div className="card-item sm-card purple-card br-12">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
                                <path fill="currentColor" d="m75 76.562v3.125h-50v-3.125c0-4.1445 1.6484-8.1172 4.5781-11.047s6.9023-4.5781 11.047-4.5781h18.75c4.1445 0 8.1172 1.6484 11.047 4.5781s4.5781 6.9023 4.5781 11.047zm-40.625-28.125h-15.625c-4.1445 0-8.1172 1.6484-11.047 4.5781s-4.5781 6.9023-4.5781 11.047v3.125h17.75c2.6602-5.5977 7.5664-9.8086 13.5-11.594zm46.875 0h-15.625v7.1562c5.9336 1.7852 10.84 5.9961 13.5 11.594h17.75v-3.125c0-4.1445-1.6484-8.1172-4.5781-11.047s-6.9023-4.5781-11.047-4.5781zm-60.938-6.25c4.4219 0 8.4102-2.6641 10.105-6.75 1.6914-4.0898 0.75781-8.793-2.3711-11.922s-7.832-4.0625-11.922-2.3711c-4.0859 1.6953-6.75 5.6836-6.75 10.105 0 2.9023 1.1523 5.6836 3.2031 7.7344s4.832 3.2031 7.7344 3.2031zm59.375 0c4.4219 0 8.4102-2.6641 10.105-6.75 1.6914-4.0898 0.75781-8.793-2.3711-11.922s-7.832-4.0625-11.922-2.3711c-4.0859 1.6953-6.75 5.6836-6.75 10.105 0 2.9023 1.1523 5.6836 3.2031 7.7344s4.832 3.2031 7.7344 3.2031zm-29.688 12.5c4.4219 0 8.4102-2.6641 10.105-6.75 1.6914-4.0898 0.75781-8.793-2.3711-11.922s-7.832-4.0625-11.922-2.3711c-4.0859 1.6953-6.75 5.6836-6.75 10.105 0 2.9023 1.1523 5.6836 3.2031 7.7344s4.832 3.2031 7.7344 3.2031z"/>
                            </svg>
                            <div className="detail">
                                <span className="text-white">Total Users</span>
                                <div className="text-white">
                                    <span>105</span>
                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"><title>Forward</title><path d="M97.64,44.1,64.72,11.18a8.06,8.06,0,1,0-11.4,11.39L72.78,42H8.06a8.06,8.06,0,0,0,0,16.12H72.6L53.32,77.43a8.06,8.06,0,0,0,11.4,11.39L97.64,55.9A8,8,0,0,0,100,50.2a1.27,1.27,0,0,0,0-.2,1.41,1.41,0,0,0,0-.2A8.07,8.07,0,0,0,97.64,44.1Z"/></svg>
                                </div>
                                <img src={chart_img} alt="" />
                            </div>
                        </div>
                        <div className="card-item sm-card yellow-card br-12">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 48 60" x="0px" y="0px">
                                <path fill="currentColor" stroke="none" d="M16,24a8,8,0,1,0-8-8A8.011,8.011,0,0,0,16,24Zm-2-7a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1h1a1,1,0,0,1,2,0h1a1,1,0,0,1,0,2H15v1h3a1,1,0,0,1,1,1v3a1,1,0,0,1-1,1H17a1,1,0,0,1-2,0H14a1,1,0,0,1,0-2h3V17Z"/>
                                <path fill="currentColor" stroke="none" d="M16,30A14,14,0,1,0,2,16,14.015,14.015,0,0,0,16,30ZM16,6A10,10,0,1,1,6,16,10.016,10.016,0,0,1,16,6Z"/>
                                <path fill="currentColor" stroke="none" d="M32,18a10.869,10.869,0,0,0-1.14.05,14.644,14.644,0,0,1-1.25,4.24,10,10,0,1,1-7.32,7.32,14.478,14.478,0,0,1-4.24,1.25A10.869,10.869,0,0,0,18,32,14,14,0,1,0,32,18Z"/>
                                <path fill="currentColor" stroke="none" d="M25.16,27.86l-.01.01a8,8,0,1,0,2.72-2.72l-.01.01A14.383,14.383,0,0,1,25.16,27.86ZM28.33,31h.44a5,5,0,0,1,4.9-4,1,1,0,0,1,0,2,3.014,3.014,0,0,0-2.83,2H32a1,1,0,0,1,0,2H30.84a3.014,3.014,0,0,0,2.83,2,1,1,0,0,1,0,2,5,5,0,0,1-4.9-4h-.44a1,1,0,0,1,0-2Z"/>
                                <path fill="currentColor" stroke="none" d="M30,6h7a3,3,0,0,1,3,3v4.586l-.293-.293a1,1,0,0,0-1.414,1.414l2,2a1.007,1.007,0,0,0,1.414,0l2-2a1,1,0,0,0-1.414-1.414L42,13.586V9a5.006,5.006,0,0,0-5-5H30a1,1,0,0,0,0,2Z"/>
                                <path fill="currentColor" stroke="none" d="M18,42H11a3,3,0,0,1-3-3V34.414a1.117,1.117,0,0,0,1.707.293,1,1,0,0,0,0-1.414l-2-2a1.025,1.025,0,0,0-1.414,0l-2,2a1,1,0,0,0,1.414,1.414L6,34.414V39a5.006,5.006,0,0,0,5,5h7a1,1,0,0,0,0-2Z"/>
                            </svg>
                            <div className="detail">
                                <span className="text-white">Swap Fee</span>
                                <div className="text-white">
                                    <span>105</span>
                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"><title>Forward</title><path d="M97.64,44.1,64.72,11.18a8.06,8.06,0,1,0-11.4,11.39L72.78,42H8.06a8.06,8.06,0,0,0,0,16.12H72.6L53.32,77.43a8.06,8.06,0,0,0,11.4,11.39L97.64,55.9A8,8,0,0,0,100,50.2a1.27,1.27,0,0,0,0-.2,1.41,1.41,0,0,0,0-.2A8.07,8.07,0,0,0,97.64,44.1Z"/></svg>
                                </div>
                                <img src={chart_img} alt="" />
                            </div>
                        </div>
                        <div className="card-item sm-card pink-card br-12">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
                                <path stroke="none" fill="currentColor" d="m15.5 57.816c-0.63281 0-1.1445 0.51172-1.1445 1.1445v27.629c0 0.30469 0.11719 0.59375 0.33594 0.80859 0.21484 0.21484 0.50391 0.33594 0.80859 0.33594h10.801c0.30469 0 0.59766-0.12109 0.8125-0.33594 0.21484-0.21484 0.33594-0.50391 0.33594-0.80859v-27.629c0-0.63281-0.51562-1.1445-1.1484-1.1445zm9.6562 27.625h-8.5078v-25.336h8.5078zm10.289-39.98v-0.003907c-0.63281 0-1.1445 0.51562-1.1445 1.1484v40.031c0 0.30469 0.11719 0.59766 0.33594 0.8125 0.21484 0.21484 0.50391 0.33594 0.80859 0.33594h10.801c0.63281 0 1.1445-0.51562 1.1445-1.1484v-40.031c0-0.63281-0.51172-1.1445-1.1445-1.1484zm9.6562 40.031h-8.5117v-37.738h8.5078zm10.289-26.527c-0.63672 0-1.1484 0.51172-1.1484 1.1484v26.5c0 0.30469 0.12109 0.59766 0.33594 0.8125 0.21484 0.21484 0.50781 0.33594 0.8125 0.33594h10.797c0.30469 0 0.59766-0.12109 0.8125-0.33594 0.21484-0.21484 0.33594-0.50781 0.33594-0.8125v-26.5c0-0.30469-0.12109-0.59375-0.33594-0.80859-0.21484-0.21484-0.50781-0.33594-0.8125-0.33594zm9.6562 26.5h-8.5117v-24.203h8.5078zm10.289-42.648-0.003907-0.003906c-0.63281 0-1.1484 0.51562-1.1484 1.1484v42.672c0 0.30469 0.12109 0.59375 0.33594 0.80859 0.21875 0.21484 0.50781 0.33594 0.8125 0.33594h10.797c0.30469 0 0.59766-0.12109 0.8125-0.33594s0.33594-0.50391 0.33594-0.80859v-42.668c0-0.30469-0.12109-0.59766-0.33594-0.8125s-0.50781-0.33594-0.8125-0.33594zm9.6523 42.66h-8.5117v-40.363h8.5078zm-56.859-38.094 13.414-15.539 16.926 11.645v0.003907c1.7305 1.1992 4.0859 0.88281 5.4375-0.73047l18.121-20.406c1.1055 0.85547 2.5664 1.0977 3.8867 0.63672 1.3203-0.46094 2.3203-1.5547 2.6562-2.9141l1.8086-7.7578c0.33203-1.4336-0.13281-2.9375-1.2188-3.9336-1.0859-0.99609-2.6211-1.3281-4.0234-0.875l-7.5742 2.4648c-1.0391 0.31641-1.9062 1.0469-2.3945 2.0156-0.49219 0.97266-0.5625 2.1016-0.19922 3.125 0.20703 0.64844 0.56641 1.2383 1.0508 1.7148l-15.887 17.895-16.934-11.652c-1.7188-1.1992-4.0664-0.91406-5.4453 0.66406l-15.434 18.812-20.18 3.7695c-0.67578 0.12891-1.1445 0.75-1.082 1.4375 0.066406 0.6875 0.64062 1.2109 1.3281 1.2109h22.512c1.2617 0 2.457-0.58594 3.2305-1.5859zm-4.5664-2.7266 15.938-19.426c0.60547-0.68359 1.625-0.80469 2.375-0.28125l17.652 12.145c0.55469 0.38281 1.3086 0.29297 1.7578-0.21094l18.406-20.73-1.5234-0.60156c-0.49609-0.20703-0.87109-0.62891-1.0195-1.1445-0.17188-0.44531-0.14844-0.94141 0.066406-1.3711 0.21484-0.42578 0.59766-0.74609 1.0586-0.875l7.5781-2.4688c0.61328-0.19922 1.2891-0.050781 1.7617 0.38281 0.47656 0.4375 0.67969 1.0938 0.53516 1.7227l-1.8086 7.7578c-0.10547 0.46484-0.39062 0.86719-0.79688 1.1211-0.40625 0.25-0.89453 0.32422-1.3555 0.21094-0.48438-0.082031-0.89844-0.38281-1.1328-0.8125l-0.77734-1.4531-20.094 22.633-0.023438 0.027344v-0.003906c-0.58984 0.71094-1.625 0.85156-2.3828 0.32422l-17.641-12.137c-0.5625-0.38672-1.3242-0.28906-1.7695 0.23047l-14 16.211-0.046876 0.058594v-0.003906c-0.33594 0.44922-0.86719 0.71484-1.4258 0.71094h-12.156zm75.387 46.887c0 0.30078-0.12109 0.59375-0.33984 0.80859-0.21484 0.21484-0.50391 0.33594-0.80859 0.33594h-93.969c-0.3125 0.011719-0.61328-0.10547-0.83594-0.32422-0.22266-0.21484-0.34766-0.51172-0.34766-0.82031 0-0.3125 0.125-0.60938 0.34766-0.82422s0.52344-0.33203 0.83594-0.32422h93.969c0.63281 0 1.1445 0.51172 1.1484 1.1484z"/>
                            </svg>
                            <div className="detail">

                                <span className="text-white">Trades</span>
                                <div className="text-white">
                                    <span>105</span>
                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"><title>Forward</title><path d="M97.64,44.1,64.72,11.18a8.06,8.06,0,1,0-11.4,11.39L72.78,42H8.06a8.06,8.06,0,0,0,0,16.12H72.6L53.32,77.43a8.06,8.06,0,0,0,11.4,11.39L97.64,55.9A8,8,0,0,0,100,50.2a1.27,1.27,0,0,0,0-.2,1.41,1.41,0,0,0,0-.2A8.07,8.07,0,0,0,97.64,44.1Z"/></svg>
                                </div>
                                <img src={chart_img} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="recent-trade bg-lightblack br-12">
                        <div className="card-item xl-card bg-lightblack br-12">
                            <div>
                                <input type="text" className="text-white" placeholder="Search here"/>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="25px" height="25px">
                                    <path fill="currentColor" stroke="currentColor" d="M 24 2.8886719 C 12.365714 2.8886719 2.8886719 12.365723 2.8886719 24 C 2.8886719 35.634277 12.365714 45.111328 24 45.111328 C 29.036552 45.111328 33.664698 43.331333 37.298828 40.373047 L 52.130859 58.953125 C 52.130859 58.953125 55.379484 59.435984 57.396484 57.333984 C 59.427484 55.215984 58.951172 52.134766 58.951172 52.134766 L 40.373047 37.298828 C 43.331332 33.664697 45.111328 29.036548 45.111328 24 C 45.111328 12.365723 35.634286 2.8886719 24 2.8886719 z M 24 7.1113281 C 33.352549 7.1113281 40.888672 14.647457 40.888672 24 C 40.888672 33.352543 33.352549 40.888672 24 40.888672 C 14.647451 40.888672 7.1113281 33.352543 7.1113281 24 C 7.1113281 14.647457 14.647451 7.1113281 24 7.1113281 z"/>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <TradeTable/>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: var(--dark-black);
    background-image: linear-gradient(to right bottom, var(--dark-black) 18.87%, #383737 56.45%, #18181a 76.26%);
    padding-bottom: var(--space);
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100vw - 345px);
        height: 100vh;
        .content {
            width: 100%;
            height: calc(100% - 120px);
            display: flex;
            flex-direction: column;
            padding: 0 var(--space) var(--space) var(--space);
            gap: var(--space);
            .card-group {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 40px;
                width: 100%;
                .card-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 130px;
                    
                    position: relative;
                    color: var(--white);

                    .detail {
                        display: flex;
                        flex-direction: column;
                        justify-content:center;
                        width: 100%;
                        font-size: 18px;
                        line-height: 33.82px;
                        text-align: center;
                        text-underline-position: from-font;
                        text-decoration-skip-ink: none;
                        z-index: 1;
                        padding: 15px 0;
                        gap: 30px;
                        & > span {
                            padding-left: 15px;
                        }
                        div {
                            display: flex;
                            font-family: Squada One;
                            font-size: 40px;
                            font-weight: 400;
                            align-items: center;
                            justify-content: center;
                            svg {
                                width: 24px;
                                height: 24px;
                                z-index: 1;
                                &:hover {
                                    color: var(--red);
                                    cursor: pointer;
                                }
                            }
                        }

                        img {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            opacity: .05
                        }
                    }

                    svg {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        height: inherit;
                    }

                    &:hover {
                        filter: brightness(1.15);
                    }
                }

                .sm-card {
                    width: 25%;
                }

                .md-card {
                    width: 50%;
                }

                .lg-card {
                    width: 75%;
                }

                .xl-card {
                    width: 100%;
                }

                .blue-card {
                    background-image: linear-gradient(to right top, #004496 18.87%,var(--blue)  56.91%);
                    color: var(--dark-blue);
                }

                .purple-card {
                    background-image: linear-gradient(345.68deg, #464879 18.87%, #8E91C7 56.91%);
                        color: #7679AF;
                }
                .yellow-card {
                    background-image: linear-gradient(345.68deg, #ca851d 18.87%, #a8a309 56.91%);
                    color: #e0a44a; 
                }

                .pink-card {
                    background-image: linear-gradient(278.68deg, #592a61 18.87%, #d761ec 88.86%);
                    color: #AC4CBC;
                }
            }
            .recent-trade {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                overflow-y: hidden;
                & > div:first-of-type {
                    display: flex;
                    align-items: center;
                    justify-content:left;
                    padding: 15px;
                    gap: 20px;
                    color: var(--brown);
                    & > div {
                        border-radius: var(--space);
                        padding: 0 30px;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        background-color: var(--black);
                        /* border: 1px solid var(--brown); */

                        input {
                            font-size: 25px;
                            outline: none;
                            background-color:transparent;
                            padding: 10px 0;
                        }

                        &:hover {
                            color: var(--red);
                            svg {
                                cursor: pointer;
                            }
                        }
                    }
                }
                & > div:last-of-type {
                    height: 100%;
                    overflow-y: hidden;
                }
            }
        }
    }
`;
export default TradePage;