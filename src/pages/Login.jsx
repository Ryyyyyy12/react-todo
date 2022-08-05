import { Container , Box, Stack, Typography , Grid , TextField , Button, StepLabel} from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Login = () => {
    return (
        <div style={{backgroundColor:"#505CEA",height:"100vh",display:"flex",alignItems:"center"}}>
            <Container sx={{
                        display:'flex',
                        justifyContent:"center",
                        alignItems:"center",
                    }}>
                <Box 
                    width="804px"
                    height="502px"
                    sx={{
                        display:'flex',
                        backgroundColor:'#2F3237',
                        justifyContent:"center",
                        alignItems:"center",
                        borderRadius:"12px"
                    }}>
                    <Container>
                       <Grid container spacing={2} sx={{
                           alignItems:"center",
                       }} >
                            <Grid item xs={7}>
                                <Stack align="center" sx={{
                                    margin:"40px"
                                }}>
                                    <Typography variant="h6" color="white">Welcome back</Typography>
                                    <Typography color="gray">We're so excited to sleep again</Typography>
                                </Stack>
                                <Stack spacing={2}>
                                    <Stack spacing={1}>
                                        <Typography color="white">EMAIL OR PHONE NUMBER</Typography>
                                        <TextField variant="filled" sx={{
                                            backgroundColor:"#E4EEFD",
                                            borderRadius:"12px",
                                            width:"407px",
                                            height:"42px"
                                        }}/>
                                        <Typography color="white">PASSWORD</Typography>
                                        <TextField variant="filled" sx={{
                                            backgroundColor:"#E4EEFD",
                                            borderRadius:"12px",
                                            width:"407px",
                                            height:"42px"
                                        }}/>
                                        <Typography color="#0095D2">Forgot your password?</Typography>
                                        <Button sx={{
                                            height: "51px",
                                            width: "406px",
                                            borderRadius:"12px",     
                                            backgroundColor:"#505CEA",
                                            color:"white"                                 
                                        }}>Login</Button>
                                    </Stack>
                                    
                                    <Stack direction="row">
                                        <Typography color="#C5C5C5">Need an account?</Typography>
                                        <Typography color="#0095D2">Register</Typography>
                                    </Stack>
                                </Stack>
                                
                            </Grid>
                            <Grid item xs={5}>
                                <Stack sx={{
                                    justifyContent:"center",
                                    alignItems:"center",
                                }} spacing={1}>
                                    <img src="assets/image 2.png" width="237px" height="59px"></img>
                                    <Typography color="white">Unable to Login?</Typography>
                                    <Typography color="#C5C5C5" align="center">Listen to some music, relax yourself, and take a deep breath until you can remember your password.</Typography>
                                </Stack>
                            </Grid>
                       </Grid>
                    </Container>
                </Box>
            </Container>
        </div>
    )
}
  

export default Login
