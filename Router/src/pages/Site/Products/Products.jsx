import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import axios from 'axios'
import './Products.css'


const Products = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products').then(res => {
      setData(res.data)
      setFilteredData(res.data)
    })

  }, [])
  const searchData = (searchValue) => {
    setFilteredData([...data.filter((item) => item.name.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
  }
  return (
    <>
      <input  type="text" placeholder='Search...' onChange={(e) => {
        searchData(e.target.value)
      }} />
      <div className='maincard'>

        {
          filteredData.map((item, index) => (
            <Card key={index} item={item} />
          ))
        }
      </div>
    </>

  )
}

export default Products

