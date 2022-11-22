import React from 'react'
import { FaImage, FaUserAlt, FaEnvelope, FaMapPin } from 'react-icons/fa';
import Navnew from '../../components/Header/Navnew'
import LeftSidebar from '../../components/Profile/LeftSidebar';

const Mobile = () => {
    return (
        <>
            <Navnew />

            <div className="grid grid-cols-12 mx-auto p-2">
                <LeftSidebar />
                <div className='col-span-8 bg-white m-2 rounded-md p-2'>
                    <div className="form-group">
                        <label htmlFor="website">Website</label>
                        <input type="text" name="" id='website' className='form-control border-emerald-600' placeholder='Website'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="facebook">Facebook</label>
                        <input type="text" name="" id='facebook' className='form-control border-emerald-600' placeholder='Facebook'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="youtube">Youtube</label>
                        <input type="text" name="" id='youtube' className='form-control border-emerald-600' placeholder='Youtube'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="twitter">Twitter</label>
                        <input type="text" name="" id='twitter' className='form-control border-emerald-600' placeholder='Twitter'/>
                    </div>
                    <button className=' bg-emerald-700 text-white rounded-md px-8 py-1 mt-2'>Save</button>
                </div>
            </div>
        </>
    )
}

export default Mobile
