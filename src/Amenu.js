import React, { useEffect, useState } from 'react'
import Sidebar from '../component/Sidebar'
import './Amenu.css'
import { Link } from 'react-router-dom'

const Amenu = () => {
  const [productData,setProductData] = useState([]);
   useEffect(()=>{
    fetch(`http://localhost:5500/allproduct`)
    .then((res)=>res.json())
    .then((data)=>setProductData(data));
   },[]);
   const deleteProduct = (id) => {
    fetch(`http://localhost:5500/product/${id}`,{
      method: "DELETE",
    })
    .then((res)=>res.json())
    .then((data)=>{
      alert("Product deleted Successfully");
      setProductData((precProductData)=>
      precProductData.filter((item)=>item._id !==id))
    })
   }
  return (
    <div className='men'>  
        <Sidebar/>
        <div className='man' >
           <Link to='/menuadd'> <button> MENU ADD ON</button></Link>
            <table>
                <th>

                    <td>Image</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                </th>
                <tbody>
                  
                  <h4>UPDATED PRODUCTS</h4>
                  <tr>
                  {productData.map((item)=>(
                    <div class="card mb-3" key={item._id} >
                      <div class="row g-0">
                        <div class="col-md-4">
                        <td> <img src={item.image} class="img-fluid rounded-start" alt="..."/></td>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                          <td><h5 class="card-title">{item.title}</h5></td>
                          <td><p class="card-text">{item.ds}</p></td>
                          <td><p class="card-text">Rs:{item.price}</p></td>
                          <td><button className='btn btn-warning'>Edit</button></td>
                           <td> <button className='btn btn-danger' onClick={()=>{deleteProduct(item._id)}}>Delete</button></td>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Amenu