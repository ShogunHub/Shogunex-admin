import React from "react";
import { styled } from "styled-components";

import Header from "./Layout/Header";
import Navbar from "../components/Navbar";
import TradeTable from "../components/TradeTable";

const FeePage = () => {
    return (
        <Main>
            <Header type={3}/>
            <div className="container">
                <Navbar/>
                <div className="content">
                    <div className="recent-trade text-white">
                        <div className="wallet-addr bg-lightblack br-12">
                            <div>
                                <span>0x000555eeedfsfeewrwere885555</span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                                </svg>
                            </div>
                            <input type="text" />
                            <button type="button" className="bg-brown">
                                Change Wallet Address
                            </button>
                        </div>
                        <div className="wallet-balance bg-lightblack br-12">
                            <div className="balance-list">
                                <div className="item">
                                    <span>SOL</span>
                                    <span>0.1</span>
                                </div>
                                <div className="item">
                                    <span>USDT</span>
                                    <span>0.5</span>
                                </div>
                                <div className="item">
                                    <span>SOL</span>
                                    <span>0.1</span>
                                </div>
                                <div className="item">
                                    <span>USDT</span>
                                    <span>0.5</span>
                                </div>
                                <div className="item">
                                    <span>SOL</span>
                                    <span>0.1</span>
                                </div>
                                <div className="item">
                                    <span>USDT</span>
                                    <span>0.5</span>
                                </div>
                                <div className="item">
                                    <span>SOL</span>
                                    <span>0.1</span>
                                </div>
                                <div className="item">
                                    <span>USDT</span>
                                    <span>0.5</span>
                                </div>
                                <div className="item">
                                    <span>SOL</span>
                                    <span>0.1</span>
                                </div>
                                <div className="item">
                                    <span>USDT</span>
                                    <span>0.5</span>
                                </div>
                            </div>
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
            padding: var(--space) calc(var(--space) * 2) calc(var(--space) * 2) calc(var(--space) * 2);
            gap: var(--space);
            
            .recent-trade {
                display: flex;
                height: 100%;
                width: 100%;
                gap: var(--space);

                .wallet-addr,
                .wallet-balance {
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items: center;
                    width: 100%;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    padding: var(--space);
                    border-radius: var(--borderRadius);
                    position: relative;
                }

                .wallet-addr {
                    gap: 50px;
                    justify-content: flex-start;
                    padding-top: calc(var(--space) * 3);
                    div {
                        display: flex;
                        justify-content : center;
                        font-size: 25px;
                        gap: 10px;

                        svg {
                            fill: var(--gray);
                            width: 20px;
                            height: 20px;
                            &:hover {
                                fill: var(--darkgray);
                                cursor: pointer;
                            }
                        }
                    }
                    input {
                        padding: 20px;
                        outline: none;
                        font-size: 20px;
                        border-bottom: 1px solid var(--brown);
                        background-color: transparent;
                        color: white;
                        width: 100%;
                    }

                    button {
                        padding: 10px 30px;
                        background-color: var(--brown);
                        color: white;
                        font-size: 20px;
                        border-radius: 30px;
                        width: 50%;
                        &:hover {
                            opacity: .8;
                        }
                    }
                    &::before {
                        content: 'Fee Wallet';
                        position: absolute;
                        width: 100%;
                        font-size: 32px;
                        text-align: center;
                        border-radius: var(--borderRadius) var(--borderRadius) 0 0;
                        color: var(--white);
                        background-color: var(--black);
                        top: 0;
                        left: 0;
                        padding: 10px 0;
                    }
                }

                .wallet-balance {
                    .balance-list {
                        margin-top: 50px;
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        height: 100%;
                        align-items: center;
                        justify-content: flex-start;
                        gap: 10px;
                        overflow-y: auto;
                        scrollbar-width: thin;
                        scrollbar-color: #56565b #28282d;

                        .item {
                            display: flex;
                            border-radius: 30px;
                            border: 1px solid var(--black);
                            padding: 15px 20px;
                            width: 100%;
                            justify-content: space-between;

                            &:hover {
                                background-color: var(--dark-blue);
                                border-color: var(--dark-blue);
                                cursor: pointer;
                            }
                        }
                    }

                    &::before {
                        content: 'Wallet Balance';
                        position: absolute;
                        width: 100%;
                        font-size: 32px;
                        text-align: center;
                        border-radius: var(--borderRadius) var(--borderRadius) 0 0;
                        color: var(--white);
                        background-color: var(--black);
                        left: 0;
                        top: 0;
                        padding: 10px 0;
                    }
                        
                    }

                    &:hover {
                        filter: brightness(1.15);
                    }
            }
        }
    }
`;
export default FeePage;