import React from 'react'
import { Link } from 'react-router-dom'
import'./Menuadd.css'

const Menuadd = () => {
  return (
    <div className='addi'>
        <h3>UPLOAD MENU ITEM</h3>
        <form>
            <label>Image</label><br/>
            <input type="file" name ="file" action="image/*"/><br/>
            <label>Title</label><br/>
            <input type="text "/><br/>
            <label>Description</label><br/>
            <input type="text"/><br/>
            <label>Price</label><br/>
            <input type="number"/><br/>
            <button>UPLOAD</button><br/>
        </form>
    </div>
  )
}

export default Menuadd