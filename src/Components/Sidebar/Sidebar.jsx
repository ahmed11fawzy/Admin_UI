import React, {  useEffect } from 'react'
import { Box, Typography, useTheme , Drawer , Divider, IconButton ,List,ListItem ,ListItemIcon, ListItemText ,ListItemButton } from '@mui/material'
import { SettingsOutlined,ChevronLeft,
ChevronRightOutlined,
HomeOutlined,
ShoppingCartOutlined,
Groups2Outlined,
ReceiptLongOutlined,
PublicOutlined,
PointOfSaleOutlined ,
TodayOutlined,
CalendarMonthOutlined,
AdminPanelSettingsOutlined,
TrendingUpOutlined,
PieChartOutlined,  
ChevronLeftOutlined} from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from '../FlexBetween/Flexbetween'
const navItems=[
  {
    text:"Dashboard",
    icon:<HomeOutlined/>,
  },
  {
    text:"Client Facing",
    icon:null,
  },
  {
    text:"Products",
    icon:<ShoppingCartOutlined/>,
  },
  {
    text:"Customers",
    icon:<Groups2Outlined/>,
  },
  {
    text:"Transactions",
    icon:<ReceiptLongOutlined/>, 
  },
  {
    text:"Geography", 
    icon:<PublicOutlined/>,
  },
  {
    text:"Sales",
    icon:null,
  },
  {
    text:"Overview",
    icon:<PointOfSaleOutlined/>,
  },
  {
    text:"Daily", 
    icon:<TodayOutlined/>,
  },
  {
    text:"Monthly",
    icon:<CalendarMonthOutlined/>,
  },
  {
    text:"Breakdown",
    icon:<PieChartOutlined/>, 
  },
  {
    text:"Management",
    icon:null,
  },
  {
    text:"Admin",
    icon:<AdminPanelSettingsOutlined/>,
  },
  {
    text:"Performance",
    icon:<TrendingUpOutlined/>,
  },
]

const Sidebar = ({drawerWidth,isSidebarOpen,setIsSidebarOpen,isNOTMobile}) => {
const {pathname}=useLocation();
const [active,setActive]=React.useState("");
const navigate=useNavigate()
const theme=useTheme()

useEffect(()=>setActive(pathname.substring(1)),[pathname])



return (
<Box component="nav" sx={{width:{sm:drawerWidth},flexShrink:{sm:0}}}>
  <Drawer
  open={isSidebarOpen}
  onClose={()=>setIsSidebarOpen(false)}
   variant="persistent"
  anchor="left"
  sx={{
      width: drawerWidth,
      "& .MuiDrawer-paper":{
          color:theme.palette.secondary[200],
          background:theme.palette.background.alt,
          boxSizing:"border-box",
          borderWidth:isNOTMobile ? 0 : "2px",
          borderColor:theme.palette.secondary[200],
          width:drawerWidth,
          flexShrink:0,
          
      }
  }}
  >
    <Box width="100%" >
      <Box m={"1.5rem 2rem 2rem 3rem"}  >
          <FlexBetween  color={theme.palette.secondary.main} >
              <Box display="flex"  alignItems="center" >
                  <Typography variant='h4' fontWeight="bold">ECOMZISTA</Typography>
              </Box>
              {!isNOTMobile && (
                  <IconButton onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
                      <ChevronLeft/>
                  </IconButton>
              )}
          </FlexBetween>
      </Box>
      <List>
          {navItems.map(({text,icon})=>{
            if(!icon){
              return (
                <Typography key={text} sx={{m:"1.2rem 0 1rem 2rem"}} >{text}</Typography>
              )
            }
            const toLText=text.toLowerCase()
            return(
              <ListItem key={text} disablePadding>
                <ListItemButton 
                    onClick={
                      ()=>{navigate(`/${toLText}`);
                      setActive(toLText)
                    }
                  }
                  sx={{
                  backgroundColor: active === toLText ? theme.palette.secondary[300] : 'transparent',
                  color: active === toLText ? theme.palette.primary[600] : theme.palette.secondary[200]
                  }}
                   
                >
                  <ListItemIcon sx={{
                    ml:"2rem",
                    color: active === toLText ? theme.palette.primary[600] : theme.palette.secondary[200]
                  }} >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text}/>
                    {active === toLText &&(
                      <ChevronRightOutlined sx={{ml:"auto"}} />
                    ) }
                  
                </ListItemButton>
              </ListItem>
            )
          }
              

             
          )}
      </List>
    </Box>
  </Drawer>
</Box>
)
}

export default Sidebar