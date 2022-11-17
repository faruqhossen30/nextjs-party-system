
import { useAuth } from '@/hooks/auth'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle'
import { FaBars, FaHome, FaListAlt, FaMap, FaPowerOff, FaRegBell, FaRegUserCircle, FaSearch, FaUser, FaUsers } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { Badge } from 'react-bootstrap';
import { useState } from 'react';

const AdminLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const { logout } = useAuth()

    const [show, setShow] = useState( false);

    const ToggleData = () => {
        setShow(!show);
    };

    console.log(show)

    return (
        <div className='main-wraper flex'>
            <nav className="sidebar">
                <div className="sidebar-header">
                    <a href="#" className="sidebar-brand">
                        PARTY<span> UI</span>
                    </a>
                    <div className="sidebar-toggler">
                        <FaBars />
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className='p-2 m-0 text-body vh-100 overflow-auto'>
                        <li>
                            <a href="#" className='flex items-center px-2 text-body'>
                                <FaHome />
                                <span className='pl-2 '>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" className='flex items-center px-2 text-body' onClick={ToggleData}>
                                <FaUsers />
                                <span className='pl-2 '>Admin </span>
                            </a>
                            <ul className={`collapse ${show ? 'show': ''}`}  id="submenu1" data-bs-parent="#menu"  >
                                <li>
                                    <a href="#" className='flex items-center'>
                                        <FaHome />
                                        <span className='px-2'>All Admin</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='flex items-center'>
                                        <FaHome />
                                        <span className='px-2'>All Admin</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='flex items-center'>
                                        <FaHome />
                                        <span className='px-2'>All Admin</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className='flex items-center px-2 text-body'>
                                <FaUser />
                                <span className='pl-2 '>Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='flex items-center px-2 text-body'>
                                <FaListAlt />
                                <span className='pl-2 '>Posts</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='flex items-center px-2 text-body'>
                                <FaMap />
                                <span className='pl-2 '>Location</span>
                            </a>
                        </li>
                        <li onClick={logout}>
                            <a href="#" className='flex items-center px-2 text-body'>
                                <FaPowerOff />
                                <span className='pl-2 '>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='page-wraper'>
                <nav className='navigation flex justify-between items-center border border-bottom bg-white'>
                    <form className="search-form px-2">
                        <div className="input-group">
                            <div className="input-group-text bg-white border-0">
                                <FaSearch />
                            </div>
                            <input type="text" className="form-control bg-transparent border-0" id="navbarForm" placeholder="Search here..." />
                        </div>
                    </form>
                    <div className='page-navigation flex items-center'>
                        <Dropdown className='pr-4'>
                            <Dropdown.Toggle variant="" id="dropdown-basic" className='p-0 '>
                                <FaRegBell className='h-12' />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='p-0 rounded-0'>
                                <Dropdown.Item href="#/action-1" className=''>
                                    <div className='flex'>
                                        <FaRegBell className='h-12' />
                                        <div className='fs-10 p-2'>
                                            <p className='text-muted text-xs p-0 m-0'>New Order Recieved</p>
                                            <p className="text-muted text-xs p-0 m-0">30 min ago</p>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1" className=''>
                                    <div className='flex'>
                                        <FaRegBell className='h-12' />
                                        <div className='fs-10 p-2'>
                                            <p className='text-muted text-xs p-0 m-0'>New Order Recieved</p>
                                            <p className="text-muted text-xs p-0 m-0">30 min ago</p>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1" className=''>
                                    <div className='flex'>
                                        <FaRegBell className='h-12' />
                                        <div className='fs-10 p-2'>
                                            <p className='text-muted text-xs p-0 m-0'>New Order Recieved</p>
                                            <p className="text-muted text-xs p-0 m-0">30 min ago</p>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='pr-4'>
                            <Dropdown.Toggle variant="" id="dropdown-basic" className='p-0'>
                                <img className='h-8 rounded-full ring-1' src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" className='py-0 px-2'>
                                    <div className='flex items-center'>
                                        <FaRegUserCircle className='h-8' />
                                        <div className='fs-10 p-2'>
                                            <p className='text-sm p-0 m-0'>Profile</p>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1" className='py-0 px-2'>
                                    <div className='flex items-center'>
                                        <FaRegUserCircle className='h-8' />
                                        <div className='fs-10 p-2'>
                                            <p className='text-sm p-0 m-0'>Profile</p>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1" className='py-0 px-2'>
                                    <div className='flex items-center' onClick={logout}>
                                        <FaPowerOff className='h-8' />
                                        <div className='fs-10 p-2'>
                                            <p className='text-sm p-0 m-0'>Logout</p>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </nav>
                <div className='page-content'>

                </div>
            </div>
        </div>
    )
}

export default AdminLayout
