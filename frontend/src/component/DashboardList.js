import {React, useState} from 'react'

import { NavLink } from 'react-router-dom'

import './CSS/dashboardList.css'

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import GMobiledataIcon from '@mui/icons-material/GMobiledata';
import RateReviewIcon from '@mui/icons-material/RateReview';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';



// import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     drawer: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//     drawerPaper: {
//       width: drawerWidth,
//     },
//   }));

const DashboardList = () => {

    // const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div>
            <button onClick={toggleDrawer}>Toggle Drawer</button>
            <Drawer open={isOpen} onClose={toggleDrawer}>
                <div style={{ width: 250 }}>
                    {/* Drawer content goes here */}
                    <h2>Drawer Content</h2>
                    <p>This is the content of the drawer.</p>
                </div>
            </Drawer>
        </div>
    )
}

export default DashboardList