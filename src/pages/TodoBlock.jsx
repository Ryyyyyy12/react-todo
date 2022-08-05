import React from 'react'
import Typography from '@mui/material/Typography'
import {  Box, Stack } from '@mui/material';
function TodoBlock(props) {
  return (
    <div>
      <Box sx={{
          width:"340px",
          height:"205px",
          borderRadius:'12px',
          backgroundColor:"white",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
      }}>
        <Stack align="center">
            <Typography variant='h5'>{props.title}</Typography>
            <Typography variant='h3'>{props.num}</Typography>
        </Stack>
        
      </Box>
    </div>
  )
}

export default TodoBlock
