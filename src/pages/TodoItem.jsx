import { Typography , Stack , Box , Button} from '@mui/material'
import React, { useState } from 'react'


const TodoItem = ({title,status,done}) => {
    const [isDone , setisDone ] = useState(status);
    function printStatus(){
        if(isDone){
            return "Done"
        }else{
            return "Undone"
        }
    }
  return (
    <div>
      <Box sx={{
          height:"102px",
          borderRadius:"10px",
          backgroundColor:"#ECECF7",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
      }}>
        <Stack direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={2}
        >
           <Typography>{title}</Typography>
           <Button onClick={()=>{
             setisDone(!isDone);
            done(isDone)}}><Typography>{printStatus()}</Typography></Button>
        </Stack>
        
        
      </Box>
    </div>
  )
}

export default TodoItem
