import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from './service/api';
import Modal from 'react-modal';
import SellerDashBoard from './SellerDashBoard';
import Buyer from './Buyer';
function Buyyer() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [username, setUsername] = useState('');
    const [logedin, setlogedin] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login submission
    };

    const [content, setContent] = useState({
        firstname: '',
        lastname: '',
        emailid: '',
        phoneno: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        api.createuser(content).then((res) => {
            alert("user added SucessFully");
        }).catch((error) => {
            alert("there might some issue");
        })
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        e.preventDefault();
        console.log('Username:', username);
        console.log('Mobile Number:', mobileNumber);
        api.veriftuser(username.toString(), mobileNumber.toString()).then((res) => {
            setlogedin(true);
        }).catch((error) => {
            alert("There might be some issue");
        })

    }
    if (logedin) {
        return <Buyer />
    }


    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handlesubmit}>
                    <div className="form-group">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobileNumber"
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                            placeholder="Enter your mobile number"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Login
                    </button>
                </form>
            </div>
            <section>
                <button className='btn1' onClick={openModal}>Signup</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Signup Modal"
                    style={{
                        content: {
                            width: '40%',
                            height: '70%',
                            margin: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            textAlign: 'center',
                            border: '2px solid black'
                        }
                    }}
                >
                    <section className='loginuser'>
                        <h1>Signup Form</h1>
                        <form className='login' onSubmit={handleFormSubmit}>
                            <input type='tel' name='phoneno' value={content.phoneno} placeholder='Enter phone number' onChange={handleInputChange}></input>
                            <br />
                            <input type='text' name='firstname' value={content.firstname} placeholder='Enter firstname' onChange={handleInputChange}></input>
                            <br />
                            <input type='text' name='lastname' value={content.lastname} placeholder='Enter lastname' onChange={handleInputChange}></input>
                            <br />
                            <input type='email' name='emailid' value={content.emailid} placeholder='Enter email address' onChange={handleInputChange}></input>
                            <br />
                            <button type='submit' className='btn2'>Sign Up</button>
                        </form>
                        <button className='btn4 close' onClick={closeModal}></button>
                    </section>
                </Modal>
            </section>
        </>
    )
}

export default Buyyer