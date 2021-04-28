import { useState } from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import fontSyle from '../styles/Font.module.css'

const index = () => {
    const [userInput, setUserInput] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleChange = (e) => {
        e.preventDefault()

        setUserInput(e.target.value)
    }

    const handleAddToList = (e) => {
        e.preventDefault()

        setTodoList([
            userInput,
            ...todoList
        ])

        setUserInput('')
    }

    const handleDelete = (todo) => {
        const updatedArray = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))

        setTodoList(updatedArray)
    }

    return (
        <Container >
            <Grid justify="center" alignItems="center" direction="column" container style={{backgroundColor: '#E6E6FA'}} item xs={12}>
            <h1 style={{fontFamily: 'Original Surfer'}} >Welcome to Todo list Next.js App</h1>
            <form >
                <input type="text" value={userInput} onChange={handleChange} placeholder="Add a task"/> <Button onClick={handleAddToList} variant="contained" color="primary" size="small">Submit</Button>
                <ul>
                    {
                        todoList.length >= 1 ? todoList.map((item, index) =>{
                            return <li key={index}>{item} <button onClick={(e) => {
                                e.preventDefault()  
                                handleDelete(item)
                            }}>X</button> </li>
                        })
                        : <h5 style={{fontFamily: 'Original Surfer'}}>'Enter a To do Item'</h5>
                    }
                </ul>
            </form>
            </Grid>
        </Container>
    )
}

export default index
