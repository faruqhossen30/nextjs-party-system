import React from 'react'
import { FaFileVideo, FaThumbsUp, FaShareAlt, FaRegCommentDots } from 'react-icons/fa'

const HomepageSinglefeed = () => {
    return (
        <div>
            <div className='my-3 bg-white rounded p-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div>
                            <a href='#'><img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-12 h-12' /></a>
                        </div>
                        <div className='ml-2 capitalize'>
                            <a href='#'><h6 className='leading-none'><strong>najmul hasan</strong></h6></a>
                            <span>10 minits ago</span>
                        </div>
                    </div>
                    <div>
                        ...
                    </div>
                </div>
                <div>
                    <p className='py-4 text-justify text-base'>najmul ipsum dolor sit amet consectetur adipisicing elit. Velit assumenda natus harum, illum quaerat praesentium nisi officia, obcaecati in soluta perspiciatis hic nemo aspernatur dicta voluptas exercitationem beatae nulla quisquam nam! Placeat veritatis dicta est, modi provident repellat quidem neque, quo distinctio iusto quaerat? Ducimus officiis inventore voluptate maiores incidunt.</p>
                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-96 object-fill' />
                </div>
                <div className='mt-4'>
                    <hr />
                    <div className='flex justify-between px-2 py-3'>
                        <div>
                            <span className='flex items-center'> <a href='#' className='mr-1'> <FaThumbsUp /></a> likes | 1200</span>
                        </div>
                        <div>
                            <span className='flex items-center'>  <a href='#' className='mr-1'><FaRegCommentDots /> </a>comments | 1200</span>
                        </div>
                        <div>
                            <div className='flex items-center'> <a href='#' className='mr-1'> <FaShareAlt /></a> share | 1200</div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className='flex pt-6'>
                    <div>
                        <a href='#'>
                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-60 h-12' />
                        </a>
                    </div>
                    <div className='ml-2 capitalize'>
                        <a href='#'><h6 className='leading-none'><strong>najmul hasan</strong></h6></a>
                        <span>10 minits ago</span>
                        <p className='text-justify text-sm'>হামলা-মারধরের ঘটনায় ছাত্রলীগের ১৪ জন নেতা-কর্মীর নাম উল্লেখ করে মামলার আবেদন করেছেন ছাত্র অধিকার পরিষদের সভাপতি বিন ইয়ামীন মোল্লা। আবেদনে ৪০ থেকে ৫০ জনকে অজ্ঞাত আসামি করা হয়েছে।

                            আজ মঙ্গলবার ঢাকার চিফ মেট্রোপলিটন ম্যাজিস্ট্রেট (সিএমএম) আদালতে এই আবেদন করা হয়।

                            মেট্রোপলিটন ম্যাজিস্ট্রেট শফি উদ্দিন বাদীর জবানবন্দি রেকর্ড করেন, তবে তিনি কোনো আদেশ দেননি। প্রথম আলোকে এই তথ্য নিশ্চিত করেন আদালতের বেঞ্চ সহকারী গৌতম চন্দ্র দাস।</p>
                        <div className='py-4'>
                            <span className='cursor-pointer'>Likes( 10 )</span>
                            <span className='pl-4 cursor-pointer'>Reply</span>
                        </div>
                        <div className='text-center'>
                            <h6 className='cursor-pointer inline'>
                                More Comments +
                            </h6>
                        </div>
                    </div>
                </div>

                <div className='flex pt-4 relative'>
                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-12 h-12' />
                    <textarea
                        id="message"
                        rows="4"
                        className="ml-2 block p-2.5 h-16 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write something here..."></textarea>
                    <div className='absolute right-2 top-10'>
                        <FaFileVideo className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomepageSinglefeed