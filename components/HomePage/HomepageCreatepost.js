
import { createRef, useState } from 'react';
import cogoToast from 'cogo-toast';
import { FaImage, FaFileVideo, FaList, FaCircle, FaWindowClose, FaRegWindowClose } from 'react-icons/fa'
import axios from '../../lib/axios';
import { useRouter } from 'next/router';

const HomepageCreatepost = () => {
    const router = useRouter()
    // This is working single photo
    const textarea = createRef();
    const [photo, setPhoto] = useState();
    const [view, setView] = useState(null);

    const changePhotoHandaller = (file) => {
        setPhoto(file[0]);
        setView(URL.createObjectURL(file[0]))
    }
    const closePhotoHandaller = ()=>{
        setPhoto(null)
        setView(null)
    }

    async function createPost(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('body', textarea.current.value)
        formData.append('file', photo)
        // formData.append('user_id', 2);

        await axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/user/post/store`, formData)
            .then(response => {
                console.log(response);
                cogoToast.success('Post create successfully !',{ position: 'top-right' });
                // window.location.reload();
                router.reload()
            })

    }

    return (
        <form
            method="POST"
            onSubmit={createPost}
            className="bg-white rounded p-4 mb-3" encType='multipart/form-data' >
            <div className="bg-white rounded p-2 pb-3">
                <h6>
                    <strong>Create New Post</strong>
                </h6>
                <div>
                    <textarea
                        name="body"
                        id="message"
                        ref={textarea}
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 border-emerald-700 rounded-lg border border-emerald-700 focus:ring-emerald-500 focus:border-emerald-700"
                        placeholder="Write something here..."></textarea>
                </div>
                <div>
                    {view &&
                        (<div className='flex relative' >
                            <img src={view} className=" w-52 m-2 rounded-lg shadow-lg" />
                            <span onClick={closePhotoHandaller} className=' cursor-pointer m-2 p-1 absolute left-0 text-red-600'><FaRegWindowClose size={25} /> </span>
                        </div>)
                    }
                </div>
                <hr />
                <div className="flex items-center justify-between  px-3">
                    {/* Working */}
                    <label htmlFor="file-upload" className="flex items-center space-x-1 cursor-pointer">
                        <FaImage />
                        <span>Image</span>
                        <input className='hidden' id='file-upload' name='file' type='file' multiple onChange={(e) => changePhotoHandaller(e.target.files)} />
                    </label>
                    <div>
                        <button // onClick={createPost} type="submit"
                            className="bg-emerald-700 text-white font-bold px-3 py-1 rounded-lg">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default HomepageCreatepost