import { Container , Box, Typography ,Stack ,TextField,Button,Grid} from '@mui/material';
import { color, fontStyle, height } from '@mui/system';
import React , { useState }from 'react';
import Navbar from '../components/Navbar/Navbar';
import TodoBlock from './TodoBlock';
import TodoItem from './TodoItem';


const Todo = () => {

    const [title,setTitle] = useState("");
    const [todos, setTodos] = useState([]);
    const [numTodos , setnumTodos] = useState(0);
    const [numDone , setnumDone] = useState(0);
    const [numUnDone , setnumUnDone ] = useState(0);

    function addTodo(title){
        var temp = todos.concat({ title , date: new Date() , isDone:false});
        setTodos(temp);
        countTodo(numTodos,numUnDone);
    }  
    function countTodo(numTodos,numUnDone){
        setnumTodos(numTodos+=1);
        setnumUnDone(numUnDone+=1);
    }
    function addDone(numUnDone,numDone){
        setnumUnDone(numUnDone-=1);
        setnumDone(numDone+=1);
    }  
    function addUndone(numUnDone,numDone){
        setnumUnDone(numUnDone+=1);
        setnumDone(numDone-=1);
    }
    function countDone(Done){
        if(Done){
            console.log("undone");
            addUndone(numUnDone,numDone);
        }else{
            console.log("done");
            addDone(numUnDone,numDone);
        }
    }
    return (
    <div style={{backgroundColor:"#505CEA",height:"100vh",display:"flex",alignItems:"center"}}>
        <Container sx={{
                        display:'flex',
                        justifyContent:"center",
                        alignItems:"center",
                    }}> 
            <Box sx={{
                display:'flex',
                width:"1388px",
                height:"886px",
                backgroundColor:"#F7F7F7",
                borderRadius: "25px 25px",
                justifyContent:"center",
                alignItems:"center",
            }}>
                <Stack spacing={5} sx={{
                justifyContent:"center",
                alignItems:"center"}}>         
                    <Typography variant='h2'> What you need to do?</Typography>    
                    <Stack direction="row">
                        <TextField 
                            id="addvalue" 
                            variant="filled" 
                            onChange={(event)=>setTitle(event.target.value)}
                            sx={{
                                width:"460px",
                                height:"42px",
                                borderRadius:"12px",
                                backgroundColor:"#FFFFF"
                            }}
                        />
                        <Button onClick={()=>{addTodo(title,new Date())}}>
                            <Typography sx={{
                            fontSize:"20px",
                            textAlign:'center',
                            color:"black"
                        }} >add!</Typography>
                        </Button>
                    </Stack>
                    <Stack direction="row" spacing={5}>
                        <TodoBlock title="To-dos" num={numTodos}></TodoBlock>
                        <TodoBlock title="Done Tasks" num={numDone}></TodoBlock>
                        <TodoBlock title="Undone Tasks"num={numUnDone}></TodoBlock>
                    </Stack>
                    <Grid container spacing={1}>
                        {todos.map((el)=>(
                            <Grid item xs={6}>
                                <TodoItem title={el.title} status={el.isDone} done={countDone} ></TodoItem>
                            </Grid>        
                        ))}  
                    </Grid>
                </Stack> 
            </Box>  
        </Container>
    </div>
  )
}

export default Todo;
