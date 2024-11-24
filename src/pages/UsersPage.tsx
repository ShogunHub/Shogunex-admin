import React from "react";
import { styled } from "styled-components";

import Header from "./Layout/Header";
import Navbar from "../components/Navbar";
import TokenTable from "../components/TokenTable";

const UserPage = () => {
    return (
        <Main>
            <Header type={5}/>
            <div className="container">
                <Navbar/>
                <div className="content">
                    <div className="recent-trade bg-lightblack br-12">
                        <div className="bg-lightblack br-12">
                            <div className="token-search">
                                <input type="text" className="text-white" placeholder="Search here"/>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="25px" height="25px">
                                    <path fill="currentColor" stroke="currentColor" d="M 24 2.8886719 C 12.365714 2.8886719 2.8886719 12.365723 2.8886719 24 C 2.8886719 35.634277 12.365714 45.111328 24 45.111328 C 29.036552 45.111328 33.664698 43.331333 37.298828 40.373047 L 52.130859 58.953125 C 52.130859 58.953125 55.379484 59.435984 57.396484 57.333984 C 59.427484 55.215984 58.951172 52.134766 58.951172 52.134766 L 40.373047 37.298828 C 43.331332 33.664697 45.111328 29.036548 45.111328 24 C 45.111328 12.365723 35.634286 2.8886719 24 2.8886719 z M 24 7.1113281 C 33.352549 7.1113281 40.888672 14.647457 40.888672 24 C 40.888672 33.352543 33.352549 40.888672 24 40.888672 C 14.647451 40.888672 7.1113281 33.352543 7.1113281 24 C 7.1113281 14.647457 14.647451 7.1113281 24 7.1113281 z"/>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <TokenTable/>
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
            
            .recent-trade {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                overflow-y: hidden;
                & > div:first-of-type {
                    display: flex;
                    align-items: center;
                    justify-content:center;
                    gap: 20px;
                    padding: 20px 0;

                    .token-search {
                        border-radius: var(--space);
                        background-color: var(--black);    
                        padding: 0 30px;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        color: var(--brown);
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
                    background-color: var(--black);
                }
            }
        }
    }
`;
export default UserPage;