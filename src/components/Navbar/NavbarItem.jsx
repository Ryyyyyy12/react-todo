import { Typography , Box ,Button} from '@mui/material'
import React from 'react'

function NavbarItem(props) {
  return (
    <div>
      <Box>
      <Button
      sx={{
          width:"132px",
          height:"37px",
          mt:"17px",
          borderRadius:"12px",
          backgroudColor:"#EAEAEA",
          color:"black",
      }}>{props.title}</Button>
      </Box>
    </div>
  )
}

export default NavbarItem
