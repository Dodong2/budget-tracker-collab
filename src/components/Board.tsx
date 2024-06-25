import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import { FaCartArrowDown } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";

import img1 from '/public/img1.svg'
import img2 from '/public/img2.svg'

const Board = () => {
    const [showModal1, setModal1] = useState<boolean>(false)

    if (showModal1) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <div className='main-container'>
                <nav className='p-2 nav bg-dark fixed-top z-3'>
                    <ul className="nav nav-underline gap-3">
                        <li className="nav-item">
                            <a className="nav-link text-light fs-4 text d-flex justify-content-center align-items-center gap-2" aria-current="page" href="#home"><IoHomeSharp className='fs-6 text' /> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light fs-4 text d-flex justify-content-center align-items-center gap-2" href="#cart"><FaCartArrowDown className='fs-6 text' /> Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light fs-4 text d-flex justify-content-center align-items-center gap-2" href="#expen"><IoWallet className='fs-6 text' /> Expenses</a>
                        </li>
                    </ul>
                </nav>
                {/*----------Contents----------*/}
                <div className='contents'>
                    <section id='home'>
                        <div className='first-container'>
                            <div className='img1'><img src={img1} /></div>
                            <div className='btn1'>
                                <img src={img2} /><br />
                                <button onClick={() => setModal1(!showModal1)}><BsCartCheckFill />ADD</button>
                            </div></div>
                    </section><hr />
                    {/*----------Tables----------*/}
                    <section id='cart'><br />
                        <div className='table-set'>
                            <h1>Cart</h1>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Items</th>
                                        <th>Prices</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Egg</td>
                                        <td>P: 10</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Egg</td>
                                        <td>P: 10</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Egg</td>
                                        <td>P: 10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section><hr />
                    <section id='expen'>
                        <div className='table-set'>
                            <h1>Expences</h1><br />
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Items</th>
                                        <th>Prices</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Egg</td>
                                        <td>P: 10</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Egg</td>
                                        <td>P: 10</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Egg</td>
                                        <td>P: 10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
                {/*----------Modal----------*/}
                <div className={`modal ${showModal1 ? 'setopen' : ''}`}>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <div className='header'>
                            <button onClick={() => setModal1(!showModal1)}>Cancel</button>
                        </div><br />
                        <form>
                            <input type='text' placeholder='Items' /><br />
                            <input type='text' placeholder='Price' /><br />
                            <button>Buy</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Board
