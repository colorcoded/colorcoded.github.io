import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faUsers, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const ThriveSection = () => {
  return (
    <section className="section pb-6 thrive">
      <div className="container">
        {/* Section Title */}
        <div className="has-text-centered mb-5">
          <h1 className="title is-1 has-text-success ">How We Thrive Together</h1>
          <p className="subtitle is-5 mb-2">
            Discover the ways we foster growth and connection.
          </p>
        </div>

        {/* Columns */}
        <div className="columns is-8 is-centered mt-6 pb-6">
          {/* Column 1: Workshops */}
          <div className="column has-text-centered">
            <figure className="image is-256x256 is-inline-block">
              <FontAwesomeIcon icon={faTools} size="3x" className="has-text-warning"/>
            </figure>
            <h2 className="title is-4">Workshops</h2>
            <p> An opportunity to sharpen coding and problem-solving skills, prepare for interviews, 
                and connect with supportive peers. 
            </p>
          </div>

          {/* Column 2: Community */}
          <div className="column has-text-centered">
            <figure className="image is-256x256 is-inline-block">
              <FontAwesomeIcon icon={faUsers} size="3x" className="has-text-warning"/>
            </figure>
            <h2 className="title is-4">Community</h2>
            <p>
              The heart of everything we do. You&apos;ll find supportive peers, inspiring mentors and countless opportunities to grow together.    
            </p>
          </div>

          {/* Column 3: Guest Speakers */}
          <div className="column has-text-centered">
            <figure className="image is-256x256 is-inline-block">
              <FontAwesomeIcon icon={faMicrophone} size="3x" className="has-text-warning"/>
            </figure>
            <h2 className="title is-4">Guest Speakers</h2>
            <p>
              Our guest speakers bring industry insights,
              real-world experience, fresh perspectives,
              and career opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThriveSection;
