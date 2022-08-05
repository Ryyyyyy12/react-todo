import React from 'react';
import Typography from '@mui/material/Typography';
import { Container , Box , Stack } from '@mui/material';
import NavbarItem from './NavbarItem';
import { borderRadius } from '@mui/system';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <Box 
      sx={{
          position: 'fixed',
          width: '100%',
          height: '75px',
          backgroundColor: '#F8F8F8',
          boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.125)',
          borderRadius: '8px'
      }}>
          <Container 
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"}}>
              <Stack flexDirection="row">
                <img src="assets/logo-3 1.png" width="56px"/>
                <Typography variant="h6"
              sx={{mt:'21px'}}>Due Today,Do Tomorrow</Typography>
              </Stack>
              
              <Stack flexDirection="row">
                <Link to="/login"><NavbarItem title="Login"/></Link>
                <Link to="/todo"><NavbarItem title="Home"/></Link>  
              </Stack>
          </Container>
      </Box>
    </div>
  )
}

export default Navbar
