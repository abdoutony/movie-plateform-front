import "./style.css";
export default function Hero(props) {
  console.log(props);
  return (
    <div className="hero-wrapper d-flex justify-content-center align-items-center">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="text-white text-center">{props.title}</h1>
      </div>
    </div>
  );
}
