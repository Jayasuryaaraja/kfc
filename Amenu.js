import React from 'react'
import Sidebar from '../component/Sidebar'
import './Amenu.css'
import { Link } from 'react-router-dom'

const Amenu = () => {
  return (
    <div className='men'>  
        <Sidebar/>
        <div className='man' >
            <Link to='/addon'><button>Addon</button></Link>
            <table>
                <th>
                    <td>Image</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                </th>
            </table>
        </div>
    </div>
  )
}

export default Amenu