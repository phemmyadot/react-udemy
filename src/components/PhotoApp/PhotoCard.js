import './PhotoCard.css';

function PhotoCard({ image, alt }) {
    return (
        <div className="PhotoCard">
            <img src={image} alt={alt} style={{ width: "100%" }} />
        </div>
    );
}

export default PhotoCard;
