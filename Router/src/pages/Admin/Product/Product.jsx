import React, { useState, useEffect } from 'react';
import Table from '../../../components/Admin/Table/Table';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast'
const Product = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])


  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products').then(res => {
      setData(res.data);
      setFilteredData(res.data)
    });
  }, []);

  const searchData = (searchValue) => {
    setFilteredData([...data.filter((item) => item.name.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
  }

  const handleClick = (e) => {
    e.preventDefault();
    let sortedData = filteredData.sort((a, b) => a.unitPrice - b.unitPrice);
    console.log(sortedData);
    setFilteredData([...sortedData]);
  };

  return (
  
     
    <div  className='div'>
      <div style={{ marginRight: '300px',marginBottom: '20px' }}> <input   type="text" placeholder='Search...' onChange={(e) => {
        searchData(e.target.value)
      }} />
      <button style={{ marginBottom: '5px' , marginLeft:'20px', backgroundColor:'navy', fontWeight:'700'}} className='btn btn-primary' onClick={(e) => handleClick(e)}>Sort By Price</button>

      </div>
      <table className="table table-hover table-white">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Delete</th> 
            <th scope="col">Edit</th> 
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <Table key={index} item={item} setFilteredData={setFilteredData} />
          ))}
        </tbody>
      </table>
      <Toaster/>
    </div>   
  );
};

export default Product;
