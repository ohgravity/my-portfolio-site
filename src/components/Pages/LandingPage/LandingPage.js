import React from "react";
import "./LandingPage.css";
import PostPreview from "../../Organisms/PostPreview";
import { BrowserRouter, Link } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPencilAlt,
  FaComments,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="col col-left">
          <div className="text-wrapper">
            <h1 className="leader">
              <strong>Sara Segel</strong>
            </h1>
            <h3>Web Developer</h3>
            <p>
              I mainly code in JavaScript (React), but have also dabbled in
              Python. As a predominantly self-taught programmer, I am keen to
              learn, and adaptable to change.
            </p>
            <p>
              In my free time, I enjoy creating electronic music, taking in
              futuristic reads and podcasts, practicing yoga, and improving my
              Japanese language skills.
            </p>
            <p className="scroll-down arrow">
              <span></span>
            </p>
          </div>
        </div>
        <div className="col col-right">
          <div className="img-wrapper">
            <img src="https://i.imgur.com/ltcgUq2.jpg" alt="photo of Sara" />
          </div>
        </div>
      </section>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <section className="projects-section">
        <div className="proj-section-wrapper">
          <div className="text-wrapper project">
            <h2 className="leader">
              <strong>Latest Projects...</strong>
            </h2>
          </div>
          <div className="projects-wrapper">
            <div className="col projects-col col-left proj-one">
              <div className="project-img-title">
                <a
                  href="https://gentle-plains-61010.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://i.imgur.com/vVyWkZy.png"
                    alt="link to Bangkok Streetheart"
                  />
                </a>
                <h3>Bangkok Streetheart</h3>
              </div>
              <div className="text-wrapper">
                <p>
                  Bangkok street art photo aggregator, featuring user
                  authentication, authorization, and CRUD capability.
                </p>
              </div>
            </div>
            <div className="col projects-col col-right proj-two">
              <div className="project-img-title">
                <a
                  href="https://dazzling-goodall-a40aa7.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://i.imgur.com/08rolAd.png"
                    alt="link to catch of the day"
                  />
                </a>
                <h3>Catch of the Day</h3>
              </div>
              <div className="text-wrapper">
                <p>
                  Fictional mom-and-pop style fish shop with user
                  authentication, a shopping cart, and CRUD-enabled inventory
                  and data forms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="col col-left">
          <div className="text-wrapper">
            <h2 className="leader">
              <strong>My Blog...</strong>
            </h2>
            <p>
              is focused on documenting my coding process, technical and
              otherwise. I hope it gives insight into how I work, and that it
              may even be helpful to other developers and those who work with
              them.
            </p>
            <div
              role="img"
              aria-label="floating pencil"
              className="floating-wrapper floating"
            >
              <FaPencilAlt className="floating-icon" />
            </div>
          </div>
        </div>
        <div className="col col-right">
          <Link
            to="/blog"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <PostPreview aria-label="link to blog" />
          </Link>
        </div>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <section className="contact">
        {" "}
        <div className="col col-left">
          <div className="text-wrapper">
            <h2 className="leader">
              <strong>Get in Touch...</strong>
            </h2>
            <p>
              with any questions or feedback. Send a message here, or through my
              social media links below.
            </p>
            <div className="social-media-wrap">
              <div className="social-icons">
                <a
                  className="social-icon-link"
                  href={"https://github.com/ohgravity"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  className="social-icon-link"
                  href="https://twitter.com/SaraSegel"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  className="social-icon-link"
                  href="https://www.linkedin.com/in/sara-s-055ab41a7/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div
              role="img"
              aria-label="floating speech bubbles"
              className="floating-wrapper floating"
            >
              <FaComments className="floating-icon" />
            </div>
          </div>
        </div>
        <div className="col col-right">
          <div aria-label="contact-form" className="form-container">
            <form className="contact-form" onSubmit={sendEmail}>
              <input
                className="form-input"
                type="hidden"
                name="contact_number"
              />
              <label htmlFor="namedInput">Name</label>
              <input id="namedInput" type="text" name="user_name" />
              <label htmlFor="namedInput">Email</label>
              <input id="namedInput" type="email" name="user_email" />
              <label htmlFor="namedInput">Message</label>
              <textarea id="namedInput" name="message" />
              <input id="submit" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_wvx0b9k",
      "template_zfbvwyw",
      e.target,
      "user_spQqdw97HpNgro0epGUnf"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

const LandingPage = () => {
  return (
    <>
      <main role="main">
        <nav className="lp-container">
          <ul>
            <li>
              <About />
            </li>
            <li>
              <Projects />
            </li>
            <li>
              <Blog />
            </li>
            <li>
              <Contact />
            </li>
          </ul>
          <footer>
            <small>© 2021. Sara Segel. All rights reserved.</small>
          </footer>
        </nav>
      </main>
    </>
  );
};

export default LandingPage;
