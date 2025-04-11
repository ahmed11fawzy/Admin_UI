import React, {  useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import { Box, useMediaQuery } from '@mui/material'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Layout = () => {
  const isNOTMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <Box display={isNOTMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar 
        drawerWidth={isSidebarOpen ? "250px" : "0px"}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isNOTMobile={isNOTMobile}
      />
      <Box   sx={ {width:  "100%" , transition:"width 1s ease"}} >
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Layout