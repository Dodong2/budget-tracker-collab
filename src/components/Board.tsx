import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BsCartCheckFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import img1 from '/img1.svg';
import img2 from '/img2.svg';

interface Expense {
    expense_id: string;
    things: string;
    price: number;
    created_at: string;
}

const Board: React.FC = () => {
    const [showModal1, setModal1] = useState<boolean>(false);
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [newExpense, setNewExpense] = useState({ things: '', price: '' });

    // GET request to fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://practice.mchaexpress.com/expense-tracker/api/v1/data');
                const data = await response.json();
                console.log('Fetched data:', data); // Debug log
                if (data.status === 'success') {
                    setExpenses(data.data);
                    setTotalPrice(data.total_price);
                }
            } catch (error) {
                console.error('error', error);
            }
        };
        fetchData();
    }, []);

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewExpense(prevState => ({ ...prevState, [name]: value }));
    };

    // Handle form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitting form with data:', newExpense);

        // Create FormData object
        const formData = new FormData();
        formData.append('things', newExpense.things);
        formData.append('price', newExpense.price);

        try {
            const response = await fetch('https://practice.mchaexpress.com/expense-tracker/api/v1/data', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            console.log('Post response data:', data);
            if (data.status === 'success') {
                const updatedResponse = await fetch('https://practice.mchaexpress.com/expense-tracker/api/v1/data');
                const updatedData = await updatedResponse.json();
                if (updatedData.status === 'success') {
                    setExpenses(updatedData.data);
                    setTotalPrice(updatedData.total_price);
                }
                setModal1(false);
                setNewExpense({ things: '', price: '' });
            } else {
                console.error('Error response from server:', data.message); // Debug log
            }

        } catch (error) {
            console.error('Error posting data:', error);
        }
    };



    const handleDeleteExpense = async (expenseId: string) => {
        try {
            const response = await fetch(`https://practice.mchaexpress.com/expense-tracker/api/v1/data?expense_id=${expenseId}`, {
                method: 'DELETE'
            });
    
            const data = await response.json();
            console.log('Deleted data', data);
    
            if (data.status === 'success') {
                const updatedResponse = await fetch('https://practice.mchaexpress.com/expense-tracker/api/v1/data');
                const updateData = await updatedResponse.json();
    
                if (updateData.status === 'success') {
                    setExpenses(updateData.data);
                    setTotalPrice(updateData.total_price);
                }
            } else {
                console.error('Error deleting expense:', data.message);
            }
        } catch (error) {
            console.error('Error deleting expense:', error);
        }
    }
    
    


    if (showModal1) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <>
            <div className='main-container'>
                <div className='img-holder'>
                    <div className='images'>
                        <img src={img2} alt="img2" />
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className='contents'>
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
                                        <th colSpan={4}>Expenses this month: {totalPrice}</th>
                                    </tr>
                                </thead>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Items</th>
                                        <th>Prices</th>
                                        <th>actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {expenses.map((expense, index) => (
                                        <tr key={expense.expense_id}>
                                            <td>{index + 1}</td>
                                            <td>{expense.things}</td>
                                            <td>{expense.price}</td>
                                            <td onClick={() => handleDeleteExpense(expense.expense_id)}><button onClick={() => handleDeleteExpense(expense.expense_id)}><MdDeleteForever/></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section id='home'>
                        <div className='first-container'>
                            <div className='btn1 position-fixed bottom-0 end-0 p-5'>
                                <button onClick={() => setModal1(!showModal1)}><BsCartCheckFill /> ADD</button>
                            </div>
                        </div>
                    </section>
                </div>
                <div className={`modal1 ${showModal1 ? 'setopen' : ''}`}>
                    <div className='overlay1'></div>
                    <div className='modal-content1'>
                        <div className='header1'>
                            <button onClick={() => setModal1(!showModal1)}>Cancel</button>
                        </div>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <input
                                type='text'
                                name='things'
                                placeholder='Items'
                                value={newExpense.things}
                                onChange={handleInputChange}
                            /><br />
                            <input
                                type='text'
                                name='price'
                                placeholder='Price'
                                value={newExpense.price}
                                onChange={handleInputChange}
                            /><br />
                            <button type='submit'>Buy</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Board;
