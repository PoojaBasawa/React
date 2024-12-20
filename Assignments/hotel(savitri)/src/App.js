import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">LOREM IPSUM</div>
        <img src="dining.jpg" alt="Plates"/>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>Order</li>
            <li>Food</li>
            <li>Restaurant</li>
            <li>Testimonial</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="social-icons">
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </header>

      <section className="hero">
      
      <div className="hero-text">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
      </div>
    </section>

    <section className="info-section">
      <div className="info-box">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
      </div>
      <div className="info-box">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
      </div>
      <div className="info-box">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
      </div>
    </section>
    <section className="details-section">
      <h2>Lorem Ipsum</h2>
      <div className="card-container">
        <div className="card">
          <img src="/images/room.jpeg" alt="room" />
          <h3>ROOMS</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Learn More</button>
        </div>
        <div className="card">
          <img src="/Images/4.7 microfarad Capacitor.jpeg" alt="Plates" />
          <h3>DINING</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Learn More</button>
          </div>
          <div className="card">
            <img src="/images/chair.jpeg" alt="Pools" />
            <h3>POOLS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;