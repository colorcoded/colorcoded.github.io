import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import teamData from "../data/teamMembers.json";

const TeamPage = () => {
  const currentYear = "2024-2025"; // Example: dynamically determine this value

  return (
    <>
      <Navbar />
      <div className="section">
        <div className="container">
          <h1 className="title is-2 has-text-warning mt-6 has-text-centered is-family-sans-serif">
            The Faces of Our Chapter
          </h1>
          <br />
          <br />
          <div className="columns is-multiline">
            {teamData[currentYear]?.map((member, index) => (
              <div key={index} className="column is-one-third">
                {/* Team Member Container */}
                <div className="is-flex is-flex-direction-column is-align-items-center">
                  {/* Image */}
                  <figure className="image is-128x128 mb-2">
                    <img src={member.image} 
                    alt={`Photo of ${member.name}`} 
                    className="is-rounded"/>
                  </figure>
                  {/* Name and LinkedIn */}
                  <div className="is-flex is-align-items-center">
                    <h2 className="subtitle is-5 has-text-weight-semibold mr-2 mb-0 has-text-success">
                      {member.name}
                    </h2>
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn`}
                      className="icon"
                      style={{
                        fontSize: "1.5rem",
                        verticalAlign: "middle",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="has-text-warning"
                      />
                    </a>
                  </div>
                  {/* Role */}
                  <p className="subtitle is-6">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
