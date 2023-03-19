import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/Slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import { CheckCircleOutline } from "@mui/icons-material";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <CheckCircleOutline color="action" sx={{ fontSize: 30 }} />
              <h5>The best for every budget</h5>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <CheckCircleOutline color="action" sx={{ fontSize: 30 }} />
              <h5>Quality work done quickly</h5>
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <CheckCircleOutline color="action" sx={{ fontSize: 30 }} />
              <h5>Protected payments, every time</h5>
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <CheckCircleOutline color="action" sx={{ fontSize: 30 }} />
              <h5>24/7 support</h5>
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </div>
          <div className="item">
            <video
              src="../../../source/Fiverr - Freelance Services Marketplace for The Lean Entrepreneur.mp4"
              controls
            ></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              fiverr <i>business.</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <CheckCircleOutline sx={{ fontSize: 30, color: "gray" }} />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <CheckCircleOutline sx={{ fontSize: 30, color: "gray" }} />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <CheckCircleOutline sx={{ fontSize: 30, color: "gray" }} />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
