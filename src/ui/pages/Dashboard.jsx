import React from 'react'

import { Helmet } from 'react-helmet'

import Menu from "../widgets/Menu"


const Dashboard = (props) => {
    return (
        <div className="page-container">
            <Menu />
            <Helmet>
            <title>Dashboard</title>
            </Helmet>
            <div className="page">
                Hii
            </div>
        </div>
    )
}

export default Dashboard