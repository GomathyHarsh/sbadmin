import React from 'react'

function Usercreate() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <lable>Username</lable>
                    <input type={"text"} className="form-control"/>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <lable>Email</lable>
                    <input type={"text"} className="form-control"/>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Country</lable>
                    <select className='form-control'>
                        <option>India</option>
                        <option>Canada</option>
                        <option>London</option>
                    </select>
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>State</lable>
                    <select className='form-control'>
                        <option>India</option>
                        <option>Canada</option>
                        <option>London</option>
                    </select>
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>City</lable>
                    <select className='form-control'>
                        <option>India</option>
                        <option>Canada</option>
                        <option>London</option>
                    </select>
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Phone No</lable>
                    <input type={"text"} className="form-control"/>
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Date of Birth</lable>
                    <input type={"date"} className="form-control"/>
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Gender</lable>
                    <select className='form-control'>
                        <option>Female</option>
                        <option>Male</option>
                        <option>other</option>
                    </select>
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <input type={"Submit"} className="btn btn-primary"/>
                    
                 </div>
            </div>
        </div>
     
    </div>
  )
}

export default Usercreate
