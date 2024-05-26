import React, { useEffect, useState } from 'react'
import api from './service/api';
function Buyer() {
    const [data, setdata] = useState([])
    useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.getproperty();
        setdata(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
    <section className='fg'>
        <h1 >Rented house near you</h1>
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

export default Buyer