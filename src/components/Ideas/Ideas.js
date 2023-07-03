import './Ideas.css';
import Card from '../Card/Card';

const Ideas = (props) => {
    const { name } = props;

    return (
        <div className='ideas-container'>
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Ideas;