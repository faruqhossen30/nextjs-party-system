import React from 'react'

const Breadcum = ({ title }) => {
    return (
        <nav aria-label="breadcrumb" className='bradcrumb-space'>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a>{title}</a>
                </li>
            </ol>
        </nav>
    )
}

export default Breadcum
