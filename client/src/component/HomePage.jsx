import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jcb from "../image/jcb.jpg"
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsFillEnvelopeCheckFill,
} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai"
import smalljcb from "../image/smalljcb.webp";
import arjun_tractor from "../image/arjun_tractor.png";
import car from "../image/car.jpg";
import PHOTO from "../image/PHOTO.jpg";
import truck_image from "../image/truck_image.jpg";
import truck from "../image/truck.jpg";
import { getDashData } from "../All-API/service";

function HomePage({data,setData}) {

  const location = useLocation()
  const initialData = location?.state?.data

  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [open, setOpen] = useState(true);
  const [role,setRole] = useState(0)

  useEffect(() => {
    setOpen(false);
    const token = localStorage.getItem("token");
    const dashId = localStorage.getItem("id");
    const role = JSON.parse(localStorage.getItem("role"));
    if(initialData){
      setData(initialData);
    }
    setRole(role)
    setToken(token);
    // getDashData(dashId).then((response)=>{
    //   const {data} = response.data
    //   setData(data)
    // })
  }, [open]);

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">
          Online Earth Movers
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="navbar-toggler"
          type="button"
          data-bs-toggle={`${open ? "" : "collapse"}`}
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {/* <!--<a className="nav-link" href="">Contact</a>--> */}
              <div className="dropdown">
                <p
                  className="btn btn-secondary contact-button dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </p>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      XXXX,India
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      82222XXXXX
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                    amitxxxx@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#pricing-column">
                Pricing
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#carousel-inner">
                Transport Avilable
              </a>
            </li>
            {token && role?<li className="nav-item">
              <p className="nav-link" onClick={()=>navigate("/dashboard")}>
                Dashboard
              </p>
            </li>:""}
            {
             token !== null? <li className="nav-item">
              <p className="nav-link" onClick={()=>navigate("/history")} >
                History
              </p>
            </li> :""
            }
            <li className="nav-item">
              <a className="nav-link" href="#about-section">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Check Fare
              </a>
            </li>
            <li className="nav-item">
              {token ? (
                <p
                className="logout"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setToken("");
                    setOpen(true);
                  }}
                >
                  Log Out
                </p>
              ) : (
                <p className="nav-link" onClick={() => navigate("/login",{state:{flag:false}})}>
                  Login
                </p>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <section id="title">
       
        <div className="container-fluid">
          {/* {token ? (
            <div className="card">
              <div className="icon" id="card_icon">
                <div className="jcb_icon">
                  <i
                    className="fa fab fa-cc-jcb"
                    style={{ fontSize: "36px" }}
                  ></i>
                  <h5 style={{ color: "black" }}>
                    <b>Book</b>
                  </h5>
                </div>
              </div>
              <hr />
              <div id="card_h2">
                {" "}
                <h2
                  style={{
                    color: "black",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                >
                  <b>Request a Service now</b>
                </h2>
              </div>

              <div className="card_place">
                <input type="text" placeholder="Enter the pickup Location" />
              </div>
              <div className="card_place">
                <input type="text" placeholder="Enter Destination" />{" "}
              </div>

              <div className="card_btn">
                {/* <!-- <button className="fr">Request Now</button>
              <button >Schedule For Later</button> --> */}
                {/* <button
                  type="button"
                  className="btn btn-dark btn-lg download-button card_btn"
                >
                  Request Now
                </button>
                <button
                  type="button"
                  className="btn  btn-lg download-button card_btn"
                >
                  Schedule For Later
                </button>
              </div>
            </div>
          ) : (
            ""
          )} */}
          {/* <!-- <div className="row">
        <div className="col-lg-6">
             <div id="first">
                <h1 id="online_text">Online Booking Made Easy</h1>
                <button type="button" className="btn btn-lg download-button"><i className="fa fa-share-alt" style="font-size:24px"></i>  Download</button>
                <button type="button" className="btn btn-dark btn-lg download-button"> <i className="fa fa-apple" style="font-size:24px ; color: white;"></i>  Download</button>
               
               </div> 
       </div>
       <div className="col-lg-6 jcb1">
        <div>
            <img className="jcb" src="images/jcb.jpg" alt="jcb_pic">
           </div> 
       </div>
    </div> --> */}
<div className="front_h2">
  <div className="front-txt" > 
  <h2 id="front_h2" >Online Booking Made Easy</h2> 
  <a href="#pricing" className="front_a" ><button type="button" className="btn btn-secondary">Click Here To See Price</button></a> 
  </div>
  <img src={jcb} />
 </div>
        </div>
        
      </section>
      <section id="features">
        <div className="promotion-icons">
          <div className="features-box promo_icon">
            <i
              className="fa fa-check-circle icon f"
              // style={{ fontSize: "48px", width: "fit-content", height: "fit-content" }}
            ></i>
          <div className="promo_h">
            <h3> Easy to book.</h3>
           <p>Service avialable for 24 Hours</p>
          </div>
          </div>
          <div className="features-box promo_icon">
            <i
              className="fa fa-wpexplorer icon f"
              // style={{ fontSize: "48px", width: "50%", height: "50%" }}
            ></i>
            <div className="promo_h">
            <h3>Transport Avilable </h3>
           <p>We have JCB,Tractors,Truck,Car.</p>
           </div>
          </div>
          <div className="features-box promo_icon">
            <i
              className="fa fa-heart  icon f"
              // style={{ fontSize: "48px", width: "50%", height: "50%" }}
            ></i>
            <div className="promo_h"> 
            <h3>Guaranteed to work. </h3>
           <p>Work is done in specified period of time.</p>
           </div> 
          </div>
          </div>
      </section>
      <section id="testimonials">
        <div
          id="testimonial-carousel"
          className="carousel slide"
          data-interval="1000"
          data-pause="hover"
          data-ride="false"
        >
             <div><h2 className="testinomial-h2">All transportation source avilable here .</h2></div>
          <div className="carousel-inner" id="carousel-inner">
            <div className="carousel-item active">
           
              <img
                id="small"
                className="slide-photo"
                src={truck_image}
                alt="truck_pic"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="carousel-item ">
                  <img
                    id="small"
                    className="slidephoto"
                    src={car}
                    alt="owner_pic"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
            <div className="carousel-item ">
                  <img
                    id="small"
                    className="slidephoto"
                    src={arjun_tractor}
                    alt="owner_pic"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
            <div className="carousel-item ">
                  <img
                    id="small"
                    className="slidephoto"
                    src={smalljcb}
                    alt="owner_pic"
                    style={{ width: "200px", height: "200px" }}
                  />
            </div>
          <a
            className="carousel-control-prev"
            href="/"
            data-bs-target="#testimonial-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </a>
          <a
            className="carousel-control-next"
            href="/"
            data-bs-target="#testimonial-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </a>
          </div>
              <em>XXXX ,India</em>

        </div>
      </section>

      {/* <section id="press">
        <img className="press-logo" id="small" src={car} alt="car_pic" />

        <img
          className="press-logo small_jcb"
          id="small"
          src={smalljcb}
          alt="jcb_pic"
        />
        <img className="press-logo" id="small" src={truck} alt="truck_pic" />
        <img
          className="press-logo"
          id="small"
          src={arjun_tractor}
          alt="tractor_pic"
        />
      </section> */}
      <section id="pricing">
        <h2 id="see_price_h2"> See Pricing of Earth Movers</h2>
        <p>Simple and affordable price plans for you.</p>
        <p><b>NOTE : </b>To find total Hours and total distance floor value will be taken .</p>
        <div id="price">
       
          <div className="pricing-column" id="pricing-column">
            <div className="card " id="price_card">
              <div className="card-header">
                <h2 id="jcbh2">For Only JCB</h2>
              </div>
              <div className="card-body" id="price_card">
                <h3 id="jcbh3"><b style={{color:"black"}} >{`$${data?.JCB_PRIZE}`} / Hour </b>for one JCB Machine</h3>
                <p>To reach Destination <b style={{color:"black"}} >{`$${data?.DISTANCE}`}/Km </b> additional charge for one JCB .</p>
                <div className="col border-end  d-flex justify-content-center align-items-center">
                  {" "}
                  <button
                    className="btn  btn-block btn-outline-dark"
                    style={{ width: 150 }}
                    type="button"
                    onClick={()=>navigate("/jcbfare")}
                  >
                      Check Fare
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pricing-column">
            <div className="card" id="price_card">
              <div className="card-header">
                <h2 id="jcbh2"> For only Soil</h2>
              </div>
              <div className="card-body" id="price_card">
                <h3 id="jcbh3"><b style={{color:"black"}} >{`$${data?.TROLLY_PRIZE}`} </b> for per Tractor-Trolly.</h3>
                <p>Upto 5 KM no extra charges.</p>
                <p>After<b style={{color:"black"}} > 5 KM {`$${data?.DISTANCE}`}/KM </b> per Trolly extra charge will be added.</p>
                <div className="col border-end  d-flex justify-content-center align-items-center">
                  {" "}
                  <button
                    className="btn btn-block btn-outline-dark"
                    style={{ width: 150 }}
                    type="button"
                    onClick={()=>navigate("/trollyfare")}
                  >
                    Check Fare
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pricing-column">
            <div className="card" id="price_card">
              <div className="card-header">
                <h2 id="jcbh2">For Both JCB and Tractor</h2>
              </div>
              <div className="card-body" id="price_card">
                <h3 id="jcbh3"><b style={{color:"black"}} >{`$${data?.BOTH_PRIZE?.JCB_PRIZE}`}/ Hour </b>per JCB.</h3>
                <h3 id="jcbh3"><b style={{color:"black"}} >{`$${data?.BOTH_PRIZE?.TROLLY_PRIZE}` }/ Hour </b> per Tractor-Trolly.</h3>
                <p>To reach Destination <b style={{color:"black"}} >{`$${data?.BOTH_EXTRA_PRIZE?.JCB_EXTRA_PRIZE}`}/Km</b> charge for one JCB and <b style={{color:"black"}}>{`$${data?.BOTH_EXTRA_PRIZE?.TROLLY_EXTRA_PRIZE}`}/km</b> charge for one Tractor-Trolly.</p>
                <div className="col border-end  d-flex justify-content-center align-items-center">
                  <button
                    className="btn btn-block btn-outline-dark"
                    style={{ width: 150 }}
                    type="button"
                    onClick={()=>navigate("/bothfare")}
                  >
                 Check Fare
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta">
        <div>
          <h1 className="cta-heading">Top Cities</h1>
        </div>
        <div className="row cities">
          <div className="col-lg-2 col-md-6 ">
            <p className="city_text_color">Delhi</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <p className="city_text_color">Noida</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <p className="city_text_color">Hisar</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <p className="city_text_color">Mumbai</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <p className="city_text_color">chennai</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <p className="city_text_color">Ahmedabad</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <p className="city_text_color">Bangalore</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <p className="city_text_color">Pune</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <p className="city_text_color">Hyderabad</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <p className="city_text_color">Gurugram</p>
          </div>
        </div>
        {/* <div className="ctn-button" id="btn">
    <button type="button" className="btn btn-lg download-button"><i className="fa fa-share-alt" ></i>  Download</button>
                <button type="button" className="btn btn-dark btn-lg download-button"> <i className="fa fa-apple"></i>  Download</button>
              </div> */}
      </section>

      <section id="info-us">
        <div className="row about_us">
          <div
            className="col-lg-3 col-md-6 col-sm-12 about-section"
            id="about-section"
          >
            {/* <!-- <i className='far fa-address-card' style='font-size:36px'></i> --> */}
            <h3>About us</h3>
            <p>
              Find out how we started, what drives us, and how we are
              reimagining how the world moves.
            </p>

            <a className="about-section-link" href="/">
              Learn more about Us
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 about-section">
            {/* <!-- <i className='fas fa-clipboard-list' style='font-size:36px'></i> --> */}
            <h3>Newsroom</h3>
            <p>
              See announcements about our latest releases, initiatives, and
              partnerships.
            </p>

            <a className="about-section-link" href="/">
              Go to Newsroom
            </a>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 about-section">
            {/* <!-- <i className='fas fa-home' style='font-size:36px'></i> --> */}
            <h3>Global citizenship</h3>
            <p>
              Read about our commitment to making a positive impact in the
              cities we serve.
            </p>

            <a className="about-section-link" href="/">
              See our partnerships
            </a>
          </div>
        </div>
      </section>

      {/* <!--Footer--> */}
      <footer id="footer">
        <div className="all-icons">
          <i className="social-icons">
            <a href="https://m.facebook.com/" ><BsFacebook  style={{fontSize:"1.5rem",color: "#ff4c68"}}/></a>
          </i>
          <i className="social-icons">
            <a href="https://instagram.com/xxxx" ><BsInstagram  style={{fontSize:"1.5rem",color: "#ff4c68"}} /></a>
          </i>
          <i className="social-icons">
            <a href="https://www.linkedin.com/in/xxxx" > <AiFillLinkedin  style={{fontSize:"1.5rem",color: "#ff4c68"}}/></a>
          </i>
          <i className="social-icons ">
            <a href="" ><BsFillEnvelopeCheckFill style={{fontSize:"1.5rem",color: "#ff4c68"}} /></a>
          </i>{" "}
        </div>
        <p style={{ color: "white" }}>
          &copy; Copyright 2023 Online Earth Movers
        </p>
      </footer>
    </>
  );
}

export default HomePage;
