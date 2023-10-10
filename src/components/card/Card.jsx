import './Card.css'
import PropTypes from 'prop-types';

const Card = ({title, description, image}) =>{
    Card.propTypes = {
        title : PropTypes.string.isRequired,
        description : PropTypes.string.isRequired,
        image : PropTypes.string.isRequired,
      };
    return (
        <div className="card">
            <div className="image-card" style={{backgroundImage : `url(${image})`}}></div>
            <div className="title-card">{title}</div>
            <div className="description-card">{description}</div>
        </div>
    )
};

export default Card;