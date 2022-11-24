import Link from 'next/link'
import { useContext } from 'react'
import { Dropdown } from 'react-bootstrap'
import { FaRegEdit, FaUserCircle, FaShareAlt, FaRegCommentDots, FaTrash, FaRegWindowClose, FaRegTrashAlt, FaInfoCircle } from 'react-icons/fa'
import {AuthContext} from '../../contexts/AuthContext'

const GearDropdown = ({postUserId, postId}) => {
    const { user } = useContext(AuthContext)
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
                        <Dropdown.Item as="button" className='py-0 px-2' >
                            <Link href="#" className="flex items-center text-sm">
                                <FaRegTrashAlt className="mr-2" />
                                Remove
                            </Link>
                        </Dropdown.Item>
                    }

                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default GearDropdown