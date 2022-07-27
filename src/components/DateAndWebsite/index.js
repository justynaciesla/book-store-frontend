import React from "react";
import "./DateAndWebsite.css";

const DateAndWebsite = ({ establishmentDate, website }) => {
  const convertDate = (date) => {
    return date.substring(0, 10).split("-").reverse().join(".");
  };

  const convertWebsite = (website) => {
    return website.substring(8);
  };

  return (
    <div className="dateAndWebsiteWrapper">
      <p className="date">{convertDate(establishmentDate)} -</p>
      <a href={website} className="website">
        {convertWebsite(website)}
      </a>
    </div>
  );
};

export default DateAndWebsite;
