import './App.css';
import './styles.css';

function App() {
  return (
  <div>
    <div className="heading-bar">
      {/* Logo + Home Icon */}
      <div className="home-logo-container">
        <div className="homeBox">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth={1.5} stroke="currentColor" width="40" height="40">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 
                     1.591 0L21.75 12M4.5 9.75v10.125c0 
                     .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
                     1.125-1.125h2.25c.621 0 1.125.504 
                     1.125 1.125V21h4.125c.621 0 1.125-.504 
                     1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </div>
        <h1>RoomSearch</h1>
      </div>

      {/* Navigation Buttons - centered */}
      <div className="nav-buttons">
        <button>Home</button>
        <button>Destinations</button>
        <button>Host</button>
        <button>About us</button>
      </div>

      {/* Right Side Icons */}
      <div className="icons-container">
        {/* Search */}
        <div className="searchIcon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 
                     0 1 0 5.196 5.196a7.5 7.5 0 0 0 
                     10.607 10.607Z" />
          </svg>
        </div>

        {/* Heart */}
        <div className="heartIcon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 
                     0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 
                     3.75 3 5.765 3 8.25c0 7.22 9 12 
                     9 12s9-4.78 9-12Z" />
          </svg>
        </div>

        {/* Globe */}
        <div className="globeIcon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 
                     8.716-6.747M12 21a9.004 9.004 
                     0 0 1-8.716-6.747M12 21c2.485 
                     0 4.5-4.03 4.5-9S14.485 3 
                     12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 
                     3 12 3m0 0a8.997 8.997 0 0 1 7.843 
                     4.582M12 3a8.997 8.997 0 0 0-7.843 
                     4.582m15.686 0A11.953 11.953 0 0 1 
                     12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 
                     0A8.959 8.959 0 0 1 21 12c0 
                     .778-.099 1.533-.284 2.253m0 
                     0A17.919 17.919 0 0 1 12 
                     16.5c-3.162 0-6.133-.815-8.716-2.247m0 
                     0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 
                     1.157-4.418" />
          </svg>
        </div>

        {/* Dots */}
        <div className="horizontal-Line">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               fill="currentColor" className="size-6">
            <path fillRule="evenodd"
                  d="M10.5 6a1.5 1.5 0 1 1 3 0 
                     1.5 1.5 0 0 1-3 0Zm0 6a1.5 
                     1.5 0 1 1 3 0 1.5 1.5 0 0 
                     1-3 0Zm0 6a1.5 1.5 0 1 1 
                     3 0 1.5 1.5 0 0 1-3 0Z"
                  clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Login + Signup Buttons */}
      <div className="auth-buttons">
        <button className="icon-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="icon"
               height="20px" width="20px">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 
                     1 10.5 3h6a2.25 2.25 0 0 
                     1 2.25 2.25v13.5A2.25 2.25 0 0 
                     1 16.5 21h-6a2.25 2.25 0 0 
                     1-2.25-2.25V15M12 9l3 
                     3m0 0-3 3m3-3H2.25" />
          </svg>
          Login
        </button>

        <button className="sign-up">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="icon"
               height="20px" width="20px">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 
                     1-7.5 0 3.75 3.75 0 0 1 
                     7.5 0ZM4.501 20.118a7.5 7.5 
                     0 0 1 14.998 0A17.933 17.933 
                     0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          Signup
        </button>
      </div>

    </div>

      <div className="shiny-button-container">
          <button className="shiny-text">
            Premium Travel Experience
          </button>
      </div>

  <div className="hero-section">
  <div className="hero-text">
    <p className ="normal-description">Discover</p>
    <p className ="Extraordinary">Extraordinary</p>
    <p className ="normal-description">Spaces</p>
    <p className = "para-text">Embark on a journey of luxury and comfort. Experience handpicked</p> 
    <p className ="para1-text">accomodations that redefine hospitality across the globe.</p>
  </div>

  <div>
  <button className="outer-box">
    Heart
  </button>
</div>


</div>
    
  </div>
  );
}

export default App;
