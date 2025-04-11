import React from 'react'
import {DarkModeOutlined, LightModeOutlined ,Menu as MenuIcon , Search,SettingsOutlined,ArrowDropDownOutlined} from '@mui/icons-material'
import { setTheme } from '../../redux/Slices/theme.slice'
import { useDispatch } from 'react-redux'
import { AppBar, Box, IconButton, InputBase, Toolbar, useTheme } from '@mui/material'
import FlexBetween from '../FlexBetween/Flexbetween'




const Navbar = ({isSidebarOpen,setIsSidebarOpen}) => {
    const dispatch=useDispatch()
    const theme=useTheme()
  return (
    <AppBar sx={{background:"none",boxShadow:"none",position:"static"}} >

    <Toolbar sx={{justifyContent:"space-between"}}>

        {/* LEFT SIDE */}

        <FlexBetween>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=>setIsSidebarOpen(!isSidebarOpen)}
          >
            <MenuIcon />
          </IconButton>
            <FlexBetween
                backgroundColor={theme.palette.background.alt}
                borderRadius="9px"
                gap="3rem"
                padding="0.1rem 1.5rem"
                >
                    <InputBase placeholder="Search..." ></InputBase>
                    <IconButton>
                        <Search/>
                    </IconButton>
            </FlexBetween>
        </FlexBetween>
        {/* RIGHT SIDE */}
        <FlexBetween gap="2rem">
            <IconButton onClick={()=>dispatch(setTheme())}>
                {theme.palette.mode==="dark" ? <LightModeOutlined sx={{fontSize:"25px"}}  /> : <DarkModeOutlined  sx={{fontSize:"25px"}}  />}
            </IconButton>
            <IconButton>
                <SettingsOutlined/>
            </IconButton>
            
        </FlexBetween>
    </Toolbar>

    </AppBar>
  )
}

export default Navbar