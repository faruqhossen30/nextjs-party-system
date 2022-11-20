import Breadcrumb from '@/components/BreadCrumb'
import Navnew from '@/components/Header/Navnew'
import SingleFollwer from '../components/SingleFollwer'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

const following = () => {
    return (
        <div>
            <Navnew />
            <Breadcrumb title="Following" />

            <div className="grid grid-cols-12 p-2 gap-3">
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
            </div>
        </div>
    )
}

export default following
