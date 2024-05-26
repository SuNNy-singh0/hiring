import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import api from './service/api'

function SellerDashBoard() {
    const [content, setcontent] = useState({
        phoneno: '',
        pid: '',
        sellername: '',
        Address: '',
        floorno: '',
        area: '',
        bhk: '',
        city: ''

    })
    const [data, setdata] = useState([])
    useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.getpropertybyid(content.phoneno);
        setdata(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
    const handlechange = (e) => {
        const { name, value } = e.target;
        setcontent(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
  
    const [model, setmodel] = useState(false);
    const openmodel = () => {
        setmodel(true);
    }
    const closemodel = () => {
        setmodel(false);
    }
    const submitContent = (e) => {
        e.preventDefault();
        api.createproperty(content).then((res) => {
            alert("property added SucessFully");
        }).catch((error) => {
            alert("there might some issue");
        })

    }
    return (
        <>
            <section className='seller
            '>
                <h1>welcome To seller DashBoard</h1>
                <button onClick={openmodel} className='btn1'>Add Property</button>

            </section>
            <section>
                <Modal
                    isOpen={model}
                    onRequestClose={closemodel}
                    contentLabel="Contractor Login Modal"
                    style={{
                        content: {
                            width: '40%',
                            height: '70%',
                            margin: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            textAlign: 'center',
                            border: '2px solid black'// Optional: Align items vertically
                        }
                    }}
                >
                    <section className='loginuser'>
                        <h1>Login form for Contractor</h1>

                        <form className='login' onSubmit={submitContent}>
                            <input type='text' name='phoneno' value={content.phoneno} placeholder='Enter phone number' onChange={(e) => handlechange(e)}></input>
                            <br></br>
                            <input type='number' name='pid' value={content.pid} placeholder='Create PID' onChange={(e) => handlechange(e)}></input>
                            <br></br>
                            <input type='text' name='address' value={content.address} placeholder='Create address' onChange={(e) => handlechange(e)}></input>
                            <br></br>
                            <input type='text' name='floorno' value={content.floorno} placeholder='Create floor number' onChange={(e) => handlechange(e)}></input>
                            <br></br>
                            <input type='text' name='area' value={content.area} placeholder='Enter area size' onChange={(e) => handlechange(e)}></input>
                            <br></br>
                            <input type='text' name='bhk' value={content.bhk} placeholder='Enter BHK' onChange={(e) => handlechange(e)}></input>
                            <br></br>
                            <input type='text' name='city' value={content.city} placeholder='Enter city' onChange={(e) => handlechange(e)}></input>
                            <br></br>
                            <input type='text' name='sellername' value={content.sellername} placeholder='Enter seller name' onChange={(e) => handlechange(e)}></input>
                            <br></br>
                            <button type='submit' className='btn2'>Create property</button>
                        </form>

                        <button className='btn4 close' onClick={closemodel}></button>
                    </section>
                </Modal>

            </section>
            <section className='fg'>
                <br>
                </br>
                <br></br>
        <h1 >your listed houses</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Address</th>
              <th>sellername</th>
              <th>floor number</th>
              <th>area</th>
              <th>bhk</th>
              <th>city</th>
              <th>See seller detail</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, num) => (
              <tr key={num}>
                <td>{e.address}</td>
                <td>{e.sellername}</td>
                <td>{e.floorno}</td>
                <td>{e.area}</td>
                <td>{e.bhk}</td>
                <td>{e.city}</td>
                <td> open modal</td>
          
                
              </tr>
            ))}
          </tbody>

        </table>
      </section>
            </>
            )
}

            export default SellerDashBoard;