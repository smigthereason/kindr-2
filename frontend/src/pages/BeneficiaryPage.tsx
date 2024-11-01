import React, { useState } from "react";
import "../styles/BeneficiaryPage.css";
import headerImage from "../assets/Group_277.jpg";
import educationImage from "../assets/Rectangle 31.jpg";
import unemploymentImage from "../assets/Group 136.jpg";
import betterLifeImage from "../assets/Group 137.jpg";
import CountUp from "react-countup";
import worldImage from "../assets/world2.jpg";


import ProgressBar from "../components/donor/ProgressBar";

const testimonials = [
  {
    text: "The work that Education for Change does is transformative. Their efforts in community development and social justice have empowered many, including those struggling with poverty and unemployment. We're honored to support such impactful work.",
    author: "Linda W., Nonprofit Partner",
  },
  {
    text: "From environmental conservation to humanitarian aid, the diverse projects supported by Education for Change have made a lasting impact. Their commitment to addressing a wide range of issues demonstrates a profound dedication to improving lives on a global scale.",
    author: "Carlos J., International Volunteer",
  },
  {
    text: "The support I received from Education for Change went beyond just educational resources. It gave me the confidence and skills to pursue my goals, and I am now actively working to uplift others in my community.",
    author: "John D., Student Beneficiary",
  },
];

const BeneficiaryPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  const donatedAmount = 750;
  const goalAmount = 10000;
  const donationPercentage = Math.round((donatedAmount / goalAmount) * 100);

  return (
    <div id="ben-page" className="beneficiary-page relative top-32 mt-8"  style={{ backgroundImage: `url(${worldImage})` }}>
      <header className="header">
        <img src={headerImage} alt="Beneficiaries" className="header-image" />
        <h3>Education Needs For Change The World.</h3>
      </header>
      <ProgressBar
        percentage={donationPercentage}
        donated={donatedAmount}
        goal={goalAmount}
      />
      <section className="text-place">
        <p>
          Education for Change is a forward-thinking organization dedicated to
          transforming education in underserved communities. By leveraging
          innovative teaching methods and providing essential resources, we
          empower students to reach their full potential. Our mission is to
          bridge educational gaps, foster critical thinking, and nurture future
          leaders who can drive positive change in their societies. Through
          collaboration with local educators, community leaders, and global
          partners, Education for Change is committed to creating lasting
          impacts and building a brighter future for all.
        </p>
        <p>
          We believe that education is the cornerstone of a just and equitable
          society, and our programs are designed to address not just academic
          needs, but also social and emotional development. In addition to our
          focus on primary and secondary education, we offer vocational
          training, digital literacy programs, and mentorship opportunities,
          ensuring that learners of all ages are equipped with the skills needed
          for success in the modern world. By addressing the unique challenges
          faced by each community, we tailor our initiatives to meet specific
          needs, whether it’s improving school infrastructure, providing
          scholarships, or supporting teachers with professional development.
        </p>
        <p>
          At Education for Change, we understand that true transformation
          requires a holistic approach. Therefore, we also engage in advocacy
          efforts to influence policy changes that support educational reform
          and equity. Our ultimate goal is to empower individuals and
          communities through education, creating a ripple effect that extends
          far beyond the classroom and into the broader society. Together, we
          are building a world where every child has the opportunity to learn,
          grow, and thrive.
        </p>
      </section>
      <section className="donate-button-container ">
        <button className="donate-button">Donate</button>
      </section>

      <section className="testimonials-section">
        <h4 className="testimony">What People Say About Us</h4>
        <div className="testimonial-card">
          <p>"{testimonials[currentIndex].text}"</p>
          <p>—{testimonials[currentIndex].author}</p>
          <div className="testimonial-navigation">
            <button className="nav-button" onClick={handlePrev}>
              ‹
            </button>
            <button className="nav-button" onClick={handleNext}>
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="statistics-section">
        <div className="statistic">
          <span className="value">
            <CountUp end={0} start={13} duration={7} suffix="%" />
          </span>
          <div className="label">Platform charge</div>
          <p>
            We charge zero fees, ensuring that all your donations go directly to
            those in need.
          </p>
        </div>
        <div className="statistic">
          <span className="value">
            <CountUp end={0} start={30} duration={2} suffix="+" />
          </span>
          <div className="label">Donations Given</div>
          <p>
            Over 12 donations have been generously provided, changing countless
            lives.
          </p>
        </div>
        <div className="statistic">
          <span className="value">
            <CountUp end={16} start={0} duration={5} suffix="+" />
          </span>
          <div className="label">Active Donors</div>
          <p>
            We are supported by more than 16 active donors who continuously
            contribute.
          </p>
        </div>
        <div className="statistic">
          <span className="value">
            <CountUp end={2000} start={1800} duration={6} suffix="+" />
          </span>
          <div className="label">Success Stories</div>
          <p>
            Over 2000 success stories have emerged from our programs, creating a
            lasting impact.
          </p>
        </div>
      </section>

      <section className="impact-stories-section">
        <h2>Look at our other stories</h2>
        <div className="stories">
          <div className="story">
            <img src={educationImage} alt="Story 1" />
            <h3>Education</h3>
            <p>
              Educating children not only secures their personal life but
              collectively contributes to the development of a more reliable
              nation and the world.
            </p>
            <button className="donate-buttonx">Donate</button>
            <button className="read-more-button">Read more</button>
          </div>
          <div className="story">
            <img src={unemploymentImage} alt="Story 2" />
            <h3>Unemployment</h3>
            <p>
              Unemployment is caused by various reasons that come from both the
              demand side, or employer, and the supply side, or the worker. and
              structural employment play a great role.
            </p>
            <button className="donate-buttonx">Donate</button>
            <button className="read-more-button">Read more</button>
          </div>
          <div className="story">
            <img src={betterLifeImage} alt="Story 3" />
            <h3>Better Life</h3>
            <p>
              Whether it is Personal Life or Professional, Quality plays a vital
              role to measure the happiness which is a component to take any All
              these are varying from person to person.
            </p>
            <button className="donate-buttonx">Donate</button>
            <button className="read-more-button">Read more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeneficiaryPage;
