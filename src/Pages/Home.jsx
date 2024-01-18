import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hometable from '../components/Hometable'
import LoadingSpinner from '../components/LoadingSpinner'
import { useContext } from 'react'
import { registerContext } from './Contextshare'
import Alert from 'react-bootstrap/Alert';
import { allusers, deleteUser } from '../services/AllApi'




function Home() {

  const[allUserData,setAllUserData]=useState([])
  
  const{registerData,setregisterData}=useContext(registerContext)

  const[showspin,setshowspin]=useState(true)

  const[search,setsearch]=useState("")

  useEffect(() => {

    // call getAllEmployees

    getAllEmployees()

   setTimeout(()=>{
    setshowspin(false)
   },2000);
  }, [search])

  // functiin definition for get all data 

  const getAllEmployees=async()=>{
    const response=await allusers(search)
    console.log(response);
    setAllUserData(response.data)
  }

  // delete employee

  const removeUser=async(id)=>{
    const response=await deleteUser(id)
    console.log(id);

    if (response.status===200) {
      getAllEmployees()
    }
    else{
      alert("operation failed!!! please try after some time")
    }
  }

  return (



    <>
   
   {

   registerData && <Alert variant='success' onClose={()=>setregisterData("")} dismissible>
     {registerData.fname.toUpperCase()}registered successfully.........
   </Alert>

   }
   

   {
   showspin?
   <LoadingSpinner/>:
    <div className='container'>
      <div className='search-all d-flex align-items-center'>

        <div className='search-all d-flex align-items-center'>

          <span className='fw-bolder'>Search:</span>
          <input type="text" onChange={e=>setsearch(e.target.value)} placeholder='Search by Employee name' className='form-control ms-3' style={{width:'400px'}} />

        </div>

        <Link to={'/add'} className='btn btn-success ms-auto'>Add <i class="fa-solid fa-user-plus"></i></Link>
        
        

      </div>

      <div className='table mt-5'>
        <h1 className='fw-bolder'>List of All Employees</h1>
        <Hometable displayData={allUserData} removeuser={removeUser}/>
        </div>
     

    </div>
}
    </>
  )
}

export default Home