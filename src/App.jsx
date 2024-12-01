import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const images = ["ex1.png", "ex2.png", "ex3.png", "ex4.png", "ex5.png", "ex6.png"]
  return (
    <div className='r' id="root">
      <header>
        <img src='/logo.jpeg' alt='Alexander Landscaping Logo' />
        <h1>Alexander Landscaping & Design</h1>
      </header>

      <main>
        <h2>Serving Augusta and the CSRA since 2022!</h2>
        <p>
          Lawn care and maintenance, bush trimming, mulch and pine straw installation, overgrowth cleanups,
          pressure washing—you name it! Alexander Landscaping & Design has you covered!
        </p>

        <div className="carousel">
          <div className="carousel-container">
            {images.map((el, index) => (
              <img key={index} src={el} alt={`Example work ${index + 1}`} />
            ))}
          </div>
        </div>

        <p>
          Offering FREE QUOTES within the CSRA. Let us help you bring your landscaping vision to life!
        </p>
        <p>NOTE: online booking coming soon, please email or call Austen at alexanderlandscaping122@gmail.com (706-288-8635)</p>
        <button disabled>Book Now</button>
      </main>

      <footer>
        <div>
          <p><strong>Phone:</strong> 706-288-8635</p>
          <p><strong>Email:</strong> alexanderlandscaping122@gmail.com</p>
        </div>
        <div>
          <p>Follow us on <strong><a href='https://www.facebook.com/profile.php?id=100090459726825'>Facebook</a></strong></p>
        </div>
      </footer>
    </div>
  );
}

export default App;

