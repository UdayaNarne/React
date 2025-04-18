import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
function Navbar(props){
    return(
      <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
        </div>
        <div className="d-flex justify-space-between align-items-center gap-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-circle-fill"  viewBox="0 0 16 16" onClick={props.clicks.onRedClick}>
            <path d="M8 15A0 7 0 1 1 8 1a0 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-circle-fill" viewBox="0 0 16 16" onClick={props.clicks.onGreenClick}>
            <path d="M8 15A0 7 0 1 1 8 1a0 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" className="bi bi-circle-fill" viewBox="0 0 16 16" onClick={props.clicks.onBlueClick}>
            <path d="M8 15A0 7 0 1 1 8 1a0 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          </svg>
        </div>
        
        <div className="form-check form-switch form-switch-lg mx-3">
        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode}/>
        <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} for="switchCheckDefault">{props.mode} Mode</label>
      </div>
      </div>
      
    </nav>
    </>
    )
  }
  Navbar.propTypes={title:PropTypes.string,
    about:PropTypes.string.isRequired
  }
  Navbar.defaultProps={
    title:'Set title here',
    about:"About text"
  }
  export default Navbar;