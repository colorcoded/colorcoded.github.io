import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const EventsPage = () => {
  const [calendarMode, setCalendarMode] = useState("MONTH");

  // Detect screen width and update calendar mode
  useEffect(() => {
    const updateCalendarMode = () => {
      if (window.innerWidth <= 768) {
        setCalendarMode("AGENDA"); // Use "Agenda" mode for mobile
      } else {
        setCalendarMode("MONTH"); // Default to "Month" mode
      }
    };

    updateCalendarMode();

    window.addEventListener("resize", updateCalendarMode);

    return () => {
      window.removeEventListener("resize", updateCalendarMode);
    };
  }, [])
  
  const handleSubscribeClick = () => {
      window.location.href = "https://calpoly.us8.list-manage.com/subscribe?u=583472d04d01d87f5accbe34f&id=55b467b899";
    };

  {'URL-encoded hexadecimal color code, # (hash) is a reserved character in URLs and must be encoded as %23.'}

  const calendarSrc =
  `https://calendar.google.com/calendar/embed?src=colorcodedcp%40gmail.com&color=%23EFBF04&showTitle=0&ctz=America%2FLos_Angeles=${calendarMode}`;

  return (
      <>
      <Navbar> </Navbar>
      <div className="section">
    {/* Intro Section */}
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-three-fifths is-offset-one-fifth">
          <h1 className="title is-size-2 has-text-warning has-text-centered mt-6 is-family-sans-serif">
            Staying Connected...
          </h1>
          <p className="subtitle is-size-4 mt-4 has-text-left-centered">
            Don&apos;t miss out on our latest events! Check the calendar below, join our Discord, or subscribe to our newsletter to stay in the loop.
          </p>
          <div className="has-text-centered mt-5">
            <button
              className="button is-warning is-medium has-text-black has-text-weight-light"
              onClick={handleSubscribeClick}
            >
              <FontAwesomeIcon icon={faNewspaper} className="mr-2" style={{ color: "inherit" }} />
              Subscribe to Our Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  
        {/* Divider */}
        <hr className="has-background-dark mt-5 mb-5" />
  
        {/* Google Calendar Embed */}
        <div className="container google-calendar-container">
          <iframe
            className="google-calendar-iframe"
            src={calendarSrc}
            style={{ border: "0" }}
            title="Google Calendar"
          ></iframe>
        </div>
      </div>
      </>
    );
  };

export default EventsPage;