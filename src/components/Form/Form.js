import { useState } from "react";
import './Form.css';

const Form = ({addIdea}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitIdeas = (e) => {
        e.preventDefault()
        const newIdea = {
            id: Date.now(),
            title,
            description
        }
        addIdea(newIdea)
        clearInput()
    }

    const clearInput = () => {
        setTitle('')
        setDescription('')
    }

    return (
        <form>
            <input type='text' placeholder='Title' name='title' value={title} onChange={event => setTitle(event.target.value)}/>
            <input type='text' placeholder='Desciption' name='description' value={description} onChange={event => setDescription(event.target.value)}/>
            <button onClick={ e => submitIdeas(e)}>SUBMIT</button>
        </form>
    )
}

export default Form;