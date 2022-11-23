import React, { useEffect, useState } from 'react'
import { FaImage, FaUserAlt, FaEnvelope, FaMapPin, FaRegWindowClose, FaSave } from 'react-icons/fa';
import Navnew from '../../components/Header/Navnew'
import LeftSidebar from '../../components/Profile/LeftSidebar';
import axios from '../../lib/axios';

const Photo = () => {
    const [photo, setPhoto] = useState();
    const [view, setView] = useState(null);
    const [profile, setProfile] = useState()

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/info`)
            .then((res) => {
                setProfile(res.data)
            })
            .catch(err => console.log(err))

    }, [])


    const changePhotoHandaller = (file) => {
        setPhoto(file[0]);
        setView(URL.createObjectURL(file[0]))
    }
    const closePhotoHandaller = () => {
        setPhoto(null)
        setView(null)
    }

    async function updateProfilePhoto(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('avatar', photo)
        await axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/user/profile/avatar`, formData)
            .then(response => {
                console.log(response);
                window.location.reload();
            })

    }

    return (
        <>
            <Navnew />

            <div className="grid grid-cols-12 mx-auto p-1">
                <LeftSidebar />
                {profile &&
                    (<div className='col-span-8 bg-white m-2 rounded-md p-2'>
                        <form onSubmit={updateProfilePhoto}>
                            <div className=' flex flex-col space-y-4 items-center'>
                                {view &&
                                    (<div className='flex relative my-2' >
                                        <img src={view} className=" w-52 m-2 rounded-lg shadow-lg" />
                                        <span onClick={closePhotoHandaller} className=' cursor-pointer m-2 p-1 absolute left-0 text-red-600'><FaRegWindowClose size={25} /> </span>
                                    </div>)
                                }

                                {!view &&
                                    <img src={profile.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${profile.avatar}` : '/profile.jpg'} className="w-52" alt="" />
                                }

                                <label htmlFor="file-upload" className="flex items-center space-x-1 cursor-pointer py-2">
                                    <FaImage />
                                    <span>Select Photo</span>
                                    <input className='hidden' id='file-upload' name='file' type='file' multiple onChange={(e) => changePhotoHandaller(e.target.files)} />
                                </label>
                                <button className='flex items-center space-x-1 p-1 px-3 bg-emerald-700 text-white rounded-sm'>
                                    <FaSave />
                                    <span>Update Now !</span>
                                </button>
                            </div>
                        </form>
                    </div>)
                }
            </div>
        </>
    )
}

export default Photo
