import './CarsImagesStyle.css';

export default function CarsImages() {
  return (
    <div className="cars-container">
      <div className="grid-container">
        <img src="car11.jpg" alt="Car" className="grid-item" />
        <img src="car21.png" alt="Car" className="grid-item" />
        <img src="car31.png" alt="Car" className="grid-item" />

        <img src="car12.png" alt="Car" className="grid-item" />
        <img src="car22.png" alt="Car" className="grid-item center-img" />
        <img src="car32.png" alt="Car" className="grid-item" />

        <img src="car13.png" alt="Car" className="grid-item" />
        <img src="car23.png" alt="Car" className="grid-item" />
        <img src="car33.jpg" alt="Car" className="grid-item" />
        <div class="centered">
          <h4>Tesla Model 3</h4>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
}
