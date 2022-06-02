import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddBusiness = () => {

let history =useHistory();

    const [details,setDetails]=useState({
        category: '',
        name:'',
        locality:'',
        mobno:'',
    })

    const PostData=async(e)=>{
        e.preventDefault()

        const{category,name,locality,mobno}=details;

        const res1=await fetch("https://e-yellow-default-rtdb.firebaseio.com/"+category+".json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                category,
                name,
                locality,
                mobno,
            })
        })
        const res2=await fetch("https://e-yellow-default-rtdb.firebaseio.com/businesses.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                category,
                name,
                locality,
                mobno,
            })
        })
        history.push("/search");
    }

  return (
    <div className='form'>
        <div className="form-group">
            <label>Category</label>
            <input type="text" className="form-control" placeholder="Enter Category" onChange={(e)=>setDetails({...details,category:e.target.value})} required />
        </div>
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" onChange={(e)=>setDetails({...details,name:e.target.value})} required/>
        </div>
        <div className="form-group">
            <label>Locality</label>
            <input type="text" className="form-control" placeholder="Enter Locality" onChange={(e)=>setDetails({...details,locality:e.target.value})} required/>
        </div>
        <div className="form-group">
            <label>Mobile No</label>
            <input type="number" className="form-control" placeholder="Enter Mobile No" onChange={(e)=>setDetails({...details,mobno:e.target.value})} required/>
        </div>
        <button className='btn btn-primary' onClick={PostData}>Submit</button>
    </div>
  );
};

export default AddBusiness;