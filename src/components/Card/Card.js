import './Card.css';
import Trash from '../../assets/delete.png'

const Card = ({ title, description, id, deleteIdea }) => {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => deleteIdea(id)}><img src={Trash} alt='trash'/></button>
        </div>
    )
}

export default Card;