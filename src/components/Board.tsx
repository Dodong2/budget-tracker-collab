import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
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
                {/*----------Contents----------*/}
                <div className='img-holder'>
                <div className='images'>
                <img src={img2} />
               <img src={img1} />
                </div>
                </div>
                <div className='contents'>
                    {/*----------Tables----------*/}
                    <section id='expen'>
                        <div className='table-set'>
                            <main>
                                <div className='title'>
                                    <h1>Expenses</h1>
                                </div>
                            </main>
                            <br />
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>Expenses this month: 1000</th>
                                    </tr>
                                </thead>
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
                    <section id='home'>
                        <div className='first-container'>
                            <div className='btn1 position-fixed bottom-0 end-0 z-3 p-5'>
                                <button onClick={() => setModal1(!showModal1)}><BsCartCheckFill />ADD</button>
                            </div></div>
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
