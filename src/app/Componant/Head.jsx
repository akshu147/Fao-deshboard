"use client"
import React from 'react'
import { RiAccountCircleLine } from "react-icons/ri";
import { BsMenuButton } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";

const Head = () => {
  return (
    <>
     <header>
                <div className='d-flex gap-3'>
                    <i className='menubtn'><BsMenuButton /></i>
                    <nav>
                        <ul className='d-flex'>
                            <li>Frank And Oak </li>
                            <li>Women
                            <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, asperiores velit maiores tempore recusandae tempora excepturi. Rem possimus dolor et velit est quidem sunt laudantium, facilis in qui harum numquam maiores cumque? Temporibus iure porro, quas animi, fuga nesciunt perferendis necessitatibus, quis natus et autem adipisci dolore laboriosam magni cupiditate. Asperiores sunt quos pariatur earum temporibus, eaque, fuga, omnis nulla sequi animi similique adipisci libero sed molestiae. Eaque similique delectus quod ut, maxime sapiente totam provident, quidem, ab est voluptatum ipsa blanditiis cupiditate autem eos eveniet atque nobis iusto deserunt earum accusamus qui culpa. Quaerat et dolores nesciunt excepturi ducimus.
                                </span>
                            </li>
                            <li>Man
                                <span className='text-success'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus totam odit eius vero, quas similique voluptate distinctio optio exercitationem recusandae quod! Aspernatur praesentium atque pariatur harum dolores. Officia tenetur aspernatur doloribus dignissimos obcaecati assumenda. Saepe nostrum, ipsa quae architecto omnis voluptatum porro est odio blanditiis. Incidunt quod iure eos quam soluta minima, quae voluptatem ullam nesciunt tenetur officia omnis modi asperiores dolor temporibus illum dolores quo quos, delectus cumque impedit cum numquam doloremque ducimus. Corrupti sed dignissimos vel laborum atque voluptate eos, ipsum pariatur esse eius saepe. Architecto minima libero dicta saepe repellat, quo vel eos fugit, velit similique ipsum.
                                </span>
                            </li>
                            <li>Our Story
                                <span>
                                    <fieldset>
                                        <legend>
                                            alskfaslfj
                                        </legend>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum provident sed, molestiae sint nobis quas sit dolorem veniam quidem iure corrupti saepe recusandae iste est sequi ipsa labore quia ducimus tempora voluptas numquam. Distinctio repudiandae quas, iste nam cum dolore vel quae, culpa temporibus cumque voluptate, consequatur inventore nulla debitis suscipit molestias tempora sint! Sunt, totam. Omnis, iste veritatis! Temporibus laboriosam alias fuga quidem qui deserunt minima dolores iure repellat enim adipisci voluptatem placeat corrupti libero asperiores suscipit reiciendis pariatur nam veritatis nulla nesciunt, soluta debitis minus quisquam. Hic aut nulla, quam unde odio facilis rerum eligendi a nobis repellendus.</p>
                                        
                                    </fieldset>
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
