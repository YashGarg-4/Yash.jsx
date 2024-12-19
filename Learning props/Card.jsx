export default function Card(props) {
    return (
      <div className="card">
        <img src={props.img} alt="Img" />
        <h3>{props.age}</h3>
        <p>📞 {props.Gender}</p>
      </div>
    );
  }