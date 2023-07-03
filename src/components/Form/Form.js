import { useState } from "react";
import './Form.css';

const Form = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <form>
            <input type='text' placeholder='Title' name='title' value={title} />
            <input type='text' placeholder='Desciption' name='description' value={description}/>
            <button>SUBMIT</button>
        </form>
    )
}

export default Form;