import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { Dropdown } from 'react-bootstrap'
import { FaRegEdit, FaUserCircle, FaShareAlt, FaRegCommentDots, FaTrash, FaRegWindowClose, FaRegTrashAlt, FaInfoCircle } from 'react-icons/fa'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { AuthContext } from '../../contexts/AuthContext'
import axios from '../../lib/axios'

const GearDropdown = ({ postUserId, postId }) => {
    const { user } = useContext(AuthContext)
    const router = useRouter()
    const MySwal = withReactContent(Swal)

    const deleteHandaller = () => {
        MySwal.fire({
            title: 'Are you delete post?',
            text: "Your post will be remove forever !",
            icon: 'warning',
            width: '25em',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            customClass:'swal2-popup'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/post/destroy/${postId}`)
                    .then((res) => {
                        router.reload()
                    })
                    .catch(err => console.log(err))
            }
        })
    }




    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    ...
                </Dropdown.Toggle>

                <Dropdown.Menu className='border-0 p-0'>
                    <Dropdown.Item as="button" className='p-0'>
                        <Link href={`/post/edit/${postId}`} className="flex items-center text-sm py-1 px-2 text-gray">
                            <FaInfoCircle className="mr-2" />
                            Report this post
                        </Link>
                    </Dropdown.Item>
                    {user.id && user.id == postUserId &&
                        <Dropdown.Item as="button" className='p-0'>
                            <Link href={`/post/edit/${postId}`} className="flex items-center text-sm py-1 px-2 text-gray">
                                <FaRegEdit className="mr-2" />

                                Edit
                            </Link>
                        </Dropdown.Item>
                    }
                    {user.id && user.id == postUserId &&
                        <Dropdown.Item as="button" className='py-0 px-2' onClick={deleteHandaller}  >
                            <div className="flex items-center text-sm">
                                <FaRegTrashAlt className="mr-2" />
                                Delete
                            </div>
                        </Dropdown.Item>
                    }

                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default GearDropdown