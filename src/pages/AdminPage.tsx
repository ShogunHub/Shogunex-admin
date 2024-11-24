import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import Header from "./Layout/Header";
import Navbar from "../components/Navbar";

const AdminPage = () => {
    const [ dropdown, setDropDown ] = useState(false);
    const [ selectAdmin, setSelectAdmin ] = useState('select');
    return (
        <Main>
            <Header type={6}/>
            <div className="container">
                <Navbar/>
                <div className="content">
                    <div className="recent-trade text-white">
                        <div className="wallet-balance bg-lightblack br-12">
                            <div className="add-item">
                                <div>
                                    <input type="text" placeholder="Address"/>
                                    <div className="admins">
                                        <div onClick={(e) => { setDropDown(!dropdown) }} style={{ borderRadius: dropdown ? 'var(--borderRadius) var(--borderRadius) 0 0' : 'var(--borderRadius)' }}>
                                            <span>{selectAdmin}</span>
                                            <svg style={{ transform: dropdown ? 'rotate(180deg)' : 'rotate(0)' }} width={25} height={25} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 160" x="0px" y="0px">
                                                <g>
                                                    <line x1="64" y1="86.5" x2="109" y2="41.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="14"/><line x1="64" y1="86.5" x2="19" y2="41.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="14"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="dropdown" style={{ display: dropdown ? 'flex' : 'none' }}>
                                            <span onClick={(e) => { setSelectAdmin(e.currentTarget.textContent || ''); setDropDown(false) }}>Owner</span>
                                            <span onClick={(e) => { setSelectAdmin(e.currentTarget.textContent || ''); setDropDown(false) }}>Admin</span>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="bg-brown">
                                    Add Admin
                                </button>
                            </div>
                            <div className="balance-list">
                                <div className="item">
                                    <div className="text-white">
                                        <span>SOL</span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">Owner</span>
                                    <svg fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">
                                        <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"/>
                                    </svg>
                                </div>
                                <div className="item">
                                    <div className="text-white">
                                        <span>SOL</span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">Admin</span>
                                    <svg fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">
                                        <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"/>
                                    </svg>
                                </div>
                                <div className="item">
                                    <div className="text-white">
                                        <span>SOL</span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">Admin</span>
                                    <svg fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">
                                        <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"/>
                                    </svg>
                                </div>
                                <div className="item">
                                    <div className="text-white">
                                        <span>SOL</span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">Admin</span>
                                    <svg fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">
                                        <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"/>
                                    </svg>
                                </div>
                                <div className="item">
                                    <div className="text-white">
                                        <span>SOL</span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">Admin</span>
                                    <svg fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">
                                        <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"/>
                                    </svg>
                                </div>
                                <div className="item">
                                    <div className="text-white">
                                        <span>SOL</span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">Admin</span>
                                    <svg fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">
                                        <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"/>
                                    </svg>
                                </div>
                                <div className="item">
                                    <div className="text-white">
                                        <span>SOL</span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">Admin</span>
                                    <svg fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">
                                        <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"/>
                                    </svg>
                                </div>
                                <div className="item">
                                    <div className="text-white">
                                        <span>SOL</span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">0.1</span>
                                    <svg fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">
                                        <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"/>
                                    </svg>
                                </div>
                                <div className="item">
                                    <div className="text-white">
                                        <span>SOL</span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" focusable="false" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white">0.1</span>
                                    <svg fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">
                                        <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"/>
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div style={{ display: dropdown ? 'block' : 'none', backgroundColor: 'var(--black)', position: 'absolute', width: '100%', height: '100%', zIndex: 1 }} ></div> */}
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
    position: relative; 
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

                .add-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: var(--space);

                    input,
                    button{
                        padding: 10px 30px;
                        color: white;
                        font-size: 20px;
                    }
                    & > div:first-child {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 20px;

                        input {
                            background-color: transparent;
                            border-bottom: 1px solid var(--brown);
                            outline: none;
                        }

                        .admins {
                            color: white;
                            font-size: 20px;
                            display: flex;
                            flex-direction: column;
                            position: relative;
                            z-index: 2;
                            width: 150px;
                            & > div:first-of-type {
                                position: relative;
                                display:flex;
                                background-color: var(--black);
                                border-radius: var(--borderRadius);
                                align-items: center;
                                gap: 10px;
                                padding: 10px 30px;
                                width: 100%;
                                &:hover {
                                    background-color: var(--blue);
                                    /* border-radius: var(--borderRadius) var(--borderRadius) 0 0; */
                                    cursor: pointer;
                                }

                                svg {
                                    position: absolute;
                                    right: 10px;
                                    
                                }
                            }

                            .dropdown {
                                display: flex;
                                flex-direction: column;
                                width: 100%;
                                align-items: center;
                                background-color: var(--blue);
                                position: absolute;
                                bottom: -100px;
                                left: 0;
                                border-radius: 0 0 var(--borderRadius)  var(--borderRadius);
                                display: none;
                                span {
                                    width: 100%;
                                    height: 50px;
                                    text-align: center;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;

                                    &:hover {
                                        /* background-color: var(--black); */
                                        opacity: .8;
                                        cursor: pointer;
                                        color: var(--brown);
                                    }   
                                }
                            }
                        }
                    }
                    
                    button {
                        border-radius: 30px;
                        &:hover {
                            opacity: .8;
                        }
                    }
                }
                .wallet-balance {
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                    width: 100%;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    padding: var(--space);
                    /* border: 1px solid var(--black); */
                    border-radius: var(--borderRadius);
                    position: relative;
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
                            color: var(--blue);
                            
                            &:hover {
                                background-color: var(--dark-blue);
                                border-color: var(--dark-blue);
                                cursor: pointer;
                            }
                            div {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                gap: 10px;
                            }
                            svg {
                                &:hover{
                                    opacity: .8;
                                }
                            }
                        }
                    }

                }

                &:hover {
                    filter: brightness(1.15);
                }
            }
        }
    }
`;
export default AdminPage;