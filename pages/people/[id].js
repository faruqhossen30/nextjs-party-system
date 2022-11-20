import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaFacebook, FaTwitterSquare, FaInstagramSquare, FaYoutube, FaImage, FaRegWindowClose, FaList } from "react-icons/fa";
import Navnew from '../../components/Header/Navnew';
import axios from '../../lib/axios';
import Link from 'next/link';
import HomepageFollow from '../../components/HomePage/HomepageFollow';
import Post from '../../components/Post/Post';



const profile = ({ people,posts }) => {

    return (
        <>
            <Navnew />
            <div className='m-2 px-1'>
                <Tab.Container defaultActiveKey="tileline">
                    <div className='bg-white rounded pb-2'>

                        <div className="relative">
                            <img
                                class="w-full h-48 object-cover rounded"
                                src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                alt="Flower and sky"
                            />

                            <div className="ml-4 absolute -bottom-32 flex items-center">
                                <img src="/profile.jpg" alt="" className="rounded w-48 h-48" />

                                <div className="ml-10 pt-10">
                                    <h6 className="capitalize text-2xl">
                                        <strong>{people.name}</strong>
                                    </h6>
                                    <h6>Address: {people.address ? people.address: 'N/A'}</h6>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center relative md:justify-end md:-top-28 md:pr-2 pl-5 pt-36">
                            <div className="text-center pr-6">
                                <h2 className="text-3xl m-0">
                                    <strong>22323</strong>
                                </h2>
                                <span>Likes</span>
                            </div>
                            <div className="text-center pr-6">
                                <h2 className="text-3xl m-0">
                                    <strong>22323</strong>
                                </h2>
                                <span>Likes</span>
                            </div>
                            <div className="text-center">
                                <h2 className="text-3xl m-0">
                                    <strong>22323</strong>
                                </h2>
                                <span>Likes</span>
                            </div>
                        </div>

                        <Row className='px-8'>
                            <Nav variant="pills" className="flex-column">
                                <div className='flex items-center justify-between'>
                                    <div className='flex'>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tileline">Timeline</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="about">About</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="photos">Photos</Nav.Link>
                                        </Nav.Item>
                                        {/* <Nav.Item>
                                            <Nav.Link eventKey="videos">Videos</Nav.Link>
                                        </Nav.Item> */}
                                    </div>
                                    <div className='flex gap-1 text-2xl'>
                                        <Link href={`${people.facebook}`} target="_blank">
                                            <FaFacebook />
                                        </Link>
                                        <a href={`${people.facebook}`} target="_blank">
                                            <FaTwitterSquare />
                                        </a>
                                        <a href={`${people.facebook}`} target="_blank">
                                            <FaYoutube />
                                        </a>
                                    </div>
                                </div>
                            </Nav>
                        </Row>

                    </div>

                    <Tab.Content>
                        <Tab.Pane eventKey="tileline">
                            <div className='mt-1 rounded'>

                                <div className="grid grid-cols-12 mx-auto">
                                    <div className="hidden md:block md:col-span-3">

                                        {/* homepage like */}
                                        <div className='p-2 bg-white m-2 rounded'>
                                            <h6>
                                                <strong>Page You Like</strong>
                                            </h6>
                                            <div className='mt-4'>
                                                <a href="#" className='sm:block md:flex items-center mb-6'>
                                                    <img src="/profile.jpg" alt="" className='rounded-full w-16 h-16' />
                                                    <div className='ml-4 capitalize'>
                                                        <h6 className='m-0'><strong>Graphic Design</strong></h6>
                                                        <span>1215 Members</span>
                                                    </div>
                                                </a>
                                                <a href="#" className='flex items-center mb-6'>
                                                    <img src="/profile.jpg" alt="" className='rounded-full w-16 h-16' />
                                                    <div className='ml-4 capitalize'>
                                                        <h6 className='m-0'><strong>Graphic Design</strong></h6>
                                                        <span>1215 Members</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        {/* <HomepageAdvertisement */}
                                        <div className='p-2 pt-2 bg-white rounded m-2'>
                                            <h6 className='m-0'>
                                                <strong>Advertisement</strong>
                                            </h6>
                                            <a href='#'>
                                                <img src="/profile.jpg" alt="" className='object-cover w-full h-48 pt-3' />
                                            </a>
                                        </div>

                                        {/* HomepageSuggestiongroup  */}
                                        <div className='pr-4 p-2 bg-white m-2 rounded'>
                                            <h6>
                                                <strong>Suggested Groups</strong>
                                            </h6>
                                            <div className='mt-4'>
                                                <div className='flex items-center mb-6'>
                                                    <div>
                                                        <img src="/profile.jpg" alt="" className='rounded w-16 h-16' />
                                                    </div>
                                                    <div className='ml-4 capitalize'>
                                                        <h6><strong>Graphic Design</strong></h6>
                                                        <span>1215 Members</span> <br />
                                                        <a href="#">Join Community</a>
                                                    </div>
                                                </div>
                                                <div className='flex items-center mb-6'>
                                                    <div>
                                                        <img src="/profile.jpg" alt="" className='rounded w-16 h-16' />
                                                    </div>
                                                    <div className='ml-4 capitalize'>
                                                        <h6><strong>Graphic Design</strong></h6>
                                                        <span>1215 Members</span> <br />
                                                        <a href="#">Join Community</a>
                                                    </div>
                                                </div>
                                                <div className='flex items-center mb-6'>
                                                    <div>
                                                        <img src="/profile.jpg" alt="" className='rounded w-16 h-16' />
                                                    </div>
                                                    <div className='ml-4 capitalize'>
                                                        <h6><strong>Graphic Design</strong></h6>
                                                        <span>1215 Members</span> <br />
                                                        <a href="#">Join Community</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-span-12 md:col-span-6 px-1 py-2 rounded">

                                        {/* HomepageCreatepost */}

                                        {/* HomepageStory */}
                                        <div className='pt-4'>
                                            <div className='flex justify-between pb-4'>
                                                <h6>
                                                    <strong>Stories</strong>
                                                </h6>
                                                <h6>
                                                    <a href='#' className='underline'>See All</a>
                                                </h6>
                                            </div>
                                            <div className='grid grid-cols-12 mx-auto gap-2'>
                                                <div className='col-span-2 cursor-pointer'>
                                                    <div>
                                                        <img src="/profile.jpg" alt="" className='object-contain rounded w-72 h-20' />
                                                        <span className='capitalize text-sm text-center block py-1'>add story</span>
                                                    </div>
                                                </div>
                                                <div className='col-span-2 cursor-pointer'>
                                                    <div>
                                                        <img src="/profile.jpg" alt="" className='object-contain rounded w-72 h-20' />
                                                        <span className='capitalize text-sm text-center block py-1'>{people.name}</span>
                                                    </div>
                                                </div>
                                                <div className='col-span-2 cursor-pointer'>
                                                    <div>
                                                        <img src="/profile.jpg" alt="" className='object-contain rounded w-72 h-20' />
                                                        <span className='capitalize text-sm text-center block py-1'>{people.name}</span>
                                                    </div>
                                                </div>
                                                <div className='col-span-2 cursor-pointer'>
                                                    <div>
                                                        <img src="/profile.jpg" alt="" className='object-contain rounded w-72 h-20' />
                                                        <span className='capitalize text-sm text-center block py-1'>{people.name}</span>
                                                    </div>
                                                </div>
                                                <div className='col-span-2 cursor-pointer'>
                                                    <div>
                                                        <img src="/profile.jpg" alt="" className='object-contain rounded w-72 h-20' />
                                                        <span className='capitalize text-sm text-center block py-1'>{people.name}</span>
                                                    </div>
                                                </div>
                                                <div className='col-span-2 cursor-pointer'>
                                                    <div>
                                                        <img src="/profile.jpg" alt="" className='object-contain rounded w-72 h-20' />
                                                        <span className='capitalize text-sm text-center block py-1'>{people.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Post posts={posts} />

                                    </div>
                                    <div className="hidden md:block md:col-span-3">

                                        {/* HomepageBirthday */}
                                        <div className='bg-white m-2 rounded p-2'>
                                            <div className='flex justify-between pb-4'>
                                                <h6>
                                                    <strong>Today Birthdays</strong>
                                                </h6>
                                                <h6>
                                                    <a href='#' className='underline'>See All</a>
                                                </h6>
                                            </div>
                                            <div>
                                                <a href='#' className='flex md:flex-col lg:flex-row items-center mb-6'>
                                                    <img src="/profile.jpg" alt="" className='rounded-full w-12 h-12' />

                                                    <div className='md:ml-4 text-center capitalize'>
                                                        <h6 className='m-0'><strong>najmul hasan</strong></h6>
                                                        <span>10 minits ago</span>
                                                    </div>
                                                </a>
                                                <a href='#' className='flex md:flex-col lg:flex-row items-center mb-6'>
                                                    <img src="/profile.jpg" alt="" className='rounded-full w-12 h-12' />
                                                    <div className='md:ml-4 text-center capitalize'>
                                                        <h6 className='m-0'><strong>najmul hasan</strong></h6>
                                                        <span>10 minits ago</span>
                                                    </div>
                                                </a>
                                                <a href='#' className='flex md:flex-col lg:flex-row items-center mb-6'>
                                                    <img src="/profile.jpg" alt="" className='rounded-full w-12 h-12' />

                                                    <div className='md:ml-4 text-center capitalize'>
                                                        <h6 className='m-0'><strong>najmul hasan</strong></h6>
                                                        <span>10 minits ago</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        {/* HomepageFollow  */}
                                        <div className='pr-4 bg-white m-2 rounded p-4'>
                                            <h6>
                                                <strong>Follow Now </strong>
                                            </h6>
                                            <div className='mt-6'>
                                            <HomepageFollow />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="about" className='show'>
                            <div className='mt-4 rounded'>
                                <div className='grid grid-cols-12 mx-auto'>
                                    <div className='col-span-12  md:col-span-4 bg-white rounded p-3 mr-2'>
                                        <div className='flex items-center justify-between'>
                                            <h4 className='border-b-2'>Personal Information</h4>
                                            <span>...</span>
                                        </div>
                                        <div>
                                            <span className='text-lg block mb-2'><strong>Email : </strong>{people.email}</span>
                                            <span className='text-lg block mb-2'><strong>Birthday : </strong>{people.dob}</span>
                                            <span className='text-lg block mb-2'><strong>Occupation : </strong>{people.occupation}</span>
                                            <span className='text-lg block mb-2'><strong>Birthplace : </strong>{people.address}</span>
                                            <span className='text-lg block mb-2'><strong>Phone : </strong>{people.mobile}</span>
                                            <span className='text-lg block mb-2'><strong>Gender : </strong>{people.gender}</span>
                                            <span className='text-lg block mb-2'><strong>Relationship Status : </strong>{people.relation_status}</span>
                                            <span className='text-lg block mb-2'><strong>Blood Group : </strong>{people.blood}</span>
                                            <span className='text-lg block mb-2'><strong>Website : </strong>{people.website}</span>
                                            <span className='text-lg block mb-2'><strong>Social Link : </strong>{people.facebook}</span>
                                        </div>
                                    </div>
                                    <div className='col-span-12  md:col-span-8 bg-white rounded p-3 ml-1'>

                                        <div>
                                            <h4>About Me!</h4>
                                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eum iste magni molestiae. Itaque iusto quasi ipsum quam odit numquam veritatis, consequatur soluta rerum assumenda nostrum, laboriosam vel. Eum id neque quis, adipisci consequatur nobis doloribus dolorum libero corporis. Pariatur odit rerum repudiandae magnam. Repudiandae nam, quae in soluta ad laborum neque delectus minima reprehenderit sit cum quo distinctio obcaecati explicabo, hic dolor quas exercitationem fugiat cupiditate? Alias iure mollitia aliquam minima delectus voluptates neque dolores commodi repudiandae, quasi, laboriosam vel suscipit voluptatibus repellendus debitis earum ut officiis dolorum sint corrupti? Unde labore, perspiciatis recusandae esse consequuntur exercitationem illum blanditiis!</p>
                                        </div>
                                        <div>
                                            <h4>About Me!</h4>
                                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eum iste magni molestiae. Itaque iusto quasi ipsum quam odit numquam veritatis, consequatur soluta rerum assumenda nostrum, laboriosam vel. Eum id neque quis, adipisci consequatur nobis doloribus dolorum libero corporis. Pariatur odit rerum repudiandae magnam. Repudiandae nam, quae in soluta ad laborum neque delectus minima reprehenderit sit cum quo distinctio obcaecati explicabo, hic dolor quas exercitationem fugiat cupiditate? Alias iure mollitia aliquam minima delectus voluptates neque dolores commodi repudiandae, quasi, laboriosam vel suscipit voluptatibus repellendus debitis earum ut officiis dolorum sint corrupti? Unde labore, perspiciatis recusandae esse consequuntur exercitationem illum blanditiis!</p>
                                        </div>
                                        <div>
                                            <h4>About Me!</h4>
                                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eum iste magni molestiae. Itaque iusto quasi ipsum quam odit numquam veritatis, consequatur soluta rerum assumenda nostrum, laboriosam vel. Eum id neque quis, adipisci consequatur nobis doloribus dolorum libero corporis. Pariatur odit rerum repudiandae magnam. Repudiandae nam, quae in soluta ad laborum neque delectus minima reprehenderit sit cum quo distinctio obcaecati explicabo, hic dolor quas exercitationem fugiat cupiditate? Alias iure mollitia aliquam minima delectus voluptates neque dolores commodi repudiandae, quasi, laboriosam vel suscipit voluptatibus repellendus debitis earum ut officiis dolorum sint corrupti? Unde labore, perspiciatis recusandae esse consequuntur exercitationem illum blanditiis!</p>
                                        </div>
                                        <div>
                                            <h4>About Me!</h4>
                                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eum iste magni molestiae. Itaque iusto quasi ipsum quam odit numquam veritatis, consequatur soluta rerum assumenda nostrum, laboriosam vel. Eum id neque quis, adipisci consequatur nobis doloribus dolorum libero corporis. Pariatur odit rerum repudiandae magnam. Repudiandae nam, quae in soluta ad laborum neque delectus minima reprehenderit sit cum quo distinctio obcaecati explicabo, hic dolor quas exercitationem fugiat cupiditate? Alias iure mollitia aliquam minima delectus voluptates neque dolores commodi repudiandae, quasi, laboriosam vel suscipit voluptatibus repellendus debitis earum ut officiis dolorum sint corrupti? Unde labore, perspiciatis recusandae esse consequuntur exercitationem illum blanditiis!</p>
                                        </div>
                                        <div>
                                            <h4>About Me!</h4>
                                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eum iste magni molestiae. Itaque iusto quasi ipsum quam odit numquam veritatis, consequatur soluta rerum assumenda nostrum, laboriosam vel. Eum id neque quis, adipisci consequatur nobis doloribus dolorum libero corporis. Pariatur odit rerum repudiandae magnam. Repudiandae nam, quae in soluta ad laborum neque delectus minima reprehenderit sit cum quo distinctio obcaecati explicabo, hic dolor quas exercitationem fugiat cupiditate? Alias iure mollitia aliquam minima delectus voluptates neque dolores commodi repudiandae, quasi, laboriosam vel suscipit voluptatibus repellendus debitis earum ut officiis dolorum sint corrupti? Unde labore, perspiciatis recusandae esse consequuntur exercitationem illum blanditiis!</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>


                        <Tab.Pane eventKey="photos">
                            <div className='mt-4  rounded p-3'>
                                <div>
                                    <Tab.Container defaultActiveKey="allPhotos">
                                        <div className='flex items-center justify-between  flex-grow bg-white rounded p-3'>
                                            <div className='w-full'><strong>Photos</strong> <br /> 100 </div>
                                            <div className='w-full'>
                                                <Row className='px-8'>
                                                    <Nav variant="pills" className="flex-column">
                                                        <div className='flex items-center justify-between'>
                                                            <div className='flex'>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="allPhotos">All Photos</Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="photos">Photos</Nav.Link>
                                                                </Nav.Item>
                                                            </div>
                                                        </div>
                                                    </Nav>
                                                </Row>

                                            </div>
                                            <div className='w-full'>
                                                <input
                                                    type="text"
                                                    className="rounded-full w-full"
                                                    placeholder="Search..."></input></div>
                                        </div>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="allPhotos">
                                                <div className='mt-4 bg-white rounded p-2'>

                                                    <div className='grid grid-cols-12'>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/profile.jpg" alt="" className='rounded w-full h-72 ' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                    </div>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="photos">
                                                <div className='mt-4 bg-white rounded p-2'>
                                                    <div className='grid grid-cols-12'>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/profile.jpg" alt="" className='rounded w-full h-72 ' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                        </Tab.Pane>



                        {/* <Tab.Pane eventKey="videos">
                            <div className='mt-4 bg-white rounded p-2'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/profile.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane> */}





                    </Tab.Content>
                </Tab.Container>
            </div>


        </>
    )
}

export async function getServerSideProps({ query }) {
    console.log('qeuery paramiter', query.id);

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/people/${query.id}`)
    const people = await res.data
    const postres  = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const posts = postres.data.data
    console.log(people);

    return {
        props: { people,posts } // will be passed to the page component as props
    }
}


export default profile
