import Link from 'next/link'
import React from 'react'
import denimjeansdimage from "../images/Tile_desktop_65507daa-49ed-4455-8a40-4e9558ee0d22_600x.jpg"
import Image from 'next/image'

const Lionehover = () => {
    return (
        <>
            <div className='lionehover'>
                <div>
                    <ul className='p-0 m-0 border-end'>
                        <li className='border-bottom d-inline-block mb-2'>Featured</li>
                        <li>New In</li>
                        <li>Best Sellers</li>
                        <li>Coming Soon</li>
                        <li>The Originals</li>
                        <li>Workwear</li>
                        <li>Gift Cards</li>
                        <li><Link className='text-danger text-decoration-none' href="#">Sale</Link></li>
                    </ul>
                    <ul className='p-0 m-0'>
                        <li className='border-bottom d-inline-block mb-2'>Clothing</li>
                        <li>Shop All</li>
                        <li>T-shirts & Tops</li>
                        <li>Blouses & Shirts</li>
                        <li>Dresses</li>
                        <li>Skirts & Shorts</li>
                        <li>Sweaters & Cardigans</li>
                        <li>Blazers & Overshirts</li>
                        <li>Jackets & Coats</li>
                        <li>Denim</li>
                        <li>Pants</li>
                    </ul>
                    <ul className='p-0 m-0'>
                        <li className='border-bottom d-inline-block mb-2'>Accessories</li>
                        <li>Shop All</li>
                        <li>Caps & Hats</li>
                        <li>Shoes & Boots</li>
                        <li>Bags</li>

                    </ul>
                </div>
                <div>
                    <div className='border'>
                        <img width="100%" src="https://i.pinimg.com/564x/c0/f2/d6/c0f2d6f1e83a737e731114bf7b67c795.jpg" alt="" />
                     


                    </div>
                    <div className='border'>
                        <img width="100%" src="https://i.pinimg.com/564x/95/72/bd/9572bd4fee14a3fd607d92ad01b11e13.jpg" alt="" />
                    </div>
                    
                </div>

            </div>

        </>
    )
}

export default Lionehover

