import React from 'react'
import Navnew from '../../components/Header/Navnew'
import LeftSidebar from '../../components/Profile/LeftSidebar'

const aditional_info = () => {
    return (
        <>
            <Navnew />

            <div className="grid grid-cols-12 mx-auto p-2">
                <LeftSidebar />
                <div className='col-span-8 bg-white m-2 rounded-md p-2'>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" name="" id='dob' className='form-control border-emerald-600'  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="" className='form-control'>
                            <option value="">Select Gender</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                            <option value="">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="occupation">Occupation</label>
                        <input type="text" name="" id='occupation' className='form-control border-emerald-600' placeholder='Occupation' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="relation_status">Relation Status</label>
                        <input type="text" name="" id='relation_status' className='form-control border-emerald-600' placeholder='Relation Status' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="blood">Blood</label>
                        <input type="text" name="" id='blood' className='form-control border-emerald-600' placeholder='Blood' />
                    </div>
                    <button className=' bg-emerald-700 text-white rounded-md px-8 py-1 mt-2'>Save</button>
                </div>
            </div>
        </>
    )
}

export default aditional_info
