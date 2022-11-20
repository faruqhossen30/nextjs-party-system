
import SinglePeople from '../components/SinglePeople'
import Navnew from '../components/Header/Navnew'
import Breadcum from '../components/Header/Breadcum'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

const people = () => {
    return (
        <div>
        <Navnew />
        <Breadcum title="People" />

        <div className="grid grid-cols-12 p-2 gap-3">
            <SinglePeople />
            <SinglePeople />
            <SinglePeople />
            <SinglePeople />
            <SinglePeople />
            <SinglePeople />
            <SinglePeople />
            <SinglePeople />
            <SinglePeople />
            <SinglePeople />
            <SinglePeople />
            <SinglePeople />
            
        </div>
    </div>
    )
}

export default people
