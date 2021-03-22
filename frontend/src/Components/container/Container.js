import React from 'react'
import Profile from './Profile'
import Line from './Line'
import './container.css'
//import icon
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Icon, IconButton } from '@material-ui/core';

const Container = () => {
    return (
        <div className="container">
            <div className="topNav">
                <IconButton >
                    <ChevronLeftIcon className="chevron"/>
                </IconButton>
                <IconButton >
                    <ChevronRightIcon className="chevron" />
                </IconButton>
                <Profile />
            </div>

            <div className="line">
                <Line/>
            </div>



        </div>
    )
}

export default Container
