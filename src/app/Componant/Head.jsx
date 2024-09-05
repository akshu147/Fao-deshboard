"use client"
import React from 'react'
import { RiAccountCircleLine } from "react-icons/ri";
import { BsMenuButton } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import Link from 'next/link';
import Lionehover from './Lionehover';

const Head = () => {
    
    return (
        <>
            <header>
                <div className='d-flex gap-3'>
                    <i className='menubtn'><BsMenuButton /></i>
                    <nav>
                        <ul className='d-flex'>
                            <li><Link className='text-dark text-decoration-none' href="/">Frank And Oak </Link> </li>
                            <li><Link className='text-dark text-decoration-none' href="/pages/women">Women</Link>
                                <span>
                                    <Lionehover />

                                </span>


                            </li>
                            <li><Link className='text-dark text-decoration-none' href="/pages/man">Man</Link>
                                <span>
                                    <Lionehover />
                                </span>
                            </li>
                            <li><Link className='text-dark text-decoration-none' href="/pages/ostory">Our Story</Link>
                                <span>
                                    <Lionehover />
                                </span>
                            </li>

                        </ul>
                    </nav>
                </div>
                <div className='icons d-flex'>
                    <i><CiSearch /></i>
                    <i><RiAccountCircleLine /></i>
                    <i><CiHeart /></i>
                    <i><IoBagCheckOutline /></i>
                </div>
            </header>

        </>
    )
}

export default Head
