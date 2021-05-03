import React from "react";
import img1 from "../../assets/app_stoe.png";
import img2 from "../../assets/google_pay.png";
import img3 from "../../assets/Microsoft.png";

const Footer = () => {
  return (
    <React.Fragment>
      <section>
        <footer className="page-footer bg-dark">
          <div className="container py-5">
            <div className="row ">
              <ul className="list-unstyled d-flex flex-wrap">
                <li>
                  <a href="/" className="border-right px-3" role="button">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="border-right px-3" role="button">
                    Terms&nbsp;and&nbsp;Conditions
                  </a>
                </li>
                <li>
                  <a href="/" className="border-right px-3" role="button">
                    Privacy&nbsp;Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="border-right px-3" role="button">
                    Collection&nbsp;Statement
                  </a>
                </li>
                <li>
                  <a href="/" className="border-right px-3" role="button">
                    Help
                  </a>
                </li>
                <li>
                  <a href="/" className="pl-3" role="button">
                    Manage&nbsp;Account
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p>Copyright © 2016 DEMO Streaming . All Right Reserved</p>
            </div>
            <div>
              <div className="row mt-5">
                <div className="col-md-6 d-flex justify-content-start">
                  <ul className="list-unstyled d-flex mb-0">
                    <li>
                      <a href="/" className="mr-3" role="button">
                        <i
                          className="fab fa-facebook-f"
                          style={{ fontSize: 30 }}
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mr-3" role="button">
                        <i
                          className="fab fa-twitter"
                          style={{ fontSize: 30 }}
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="mr-3" role="button">
                        <i
                          className="fab fa-instagram"
                          style={{ fontSize: 30 }}
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                  <ul className="list-unstyled d-flex mb-0 flex-wrap">
                    <li>
                      <img src={img1} width="150px" alt="" />
                    </li>
                    <li className="mx-2">
                      <img src={img2} width="150px" alt="" />
                    </li>
                    <li>
                      <img src={img3} width="150px" height="47px" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </React.Fragment>
  );
};

export default Footer;
