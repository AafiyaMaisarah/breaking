import "./Card.css";


function Card(props) {
    console.log("props", props);
return (
    <div className="Card">
     <img className="img" src={props.img} alt="" />
       <p className="char1">{props.name}</p>
        <p className="char2">{props.birthday}</p>
       

    </div>
);
}

export default Card;