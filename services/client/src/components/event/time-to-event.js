import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const TimeToEvent = ({ startTime }) => {
  const now = moment();
  const eventTime = moment.utc(startTime);
  const duration = moment.duration(eventTime.diff(now));
  const date = eventTime;

  return (
    <React.Fragment>
      <style jsx>{`
        #when {
          color: #989fa5;
          font-style: italic;
          font-weight: 200;
        }
        #date{
          color: rgba(60, 0, 30, 0.5);
        }
      `}</style>
      <span className="humanize">
        ( {duration > 0 ? "next" : "last"} event {duration.humanize(true)} )

      </span>
      <span id="date">
        {}; {date.format('DD/MM ( HH:mm )')}
      </span>
    </React.Fragment>
  );
};

TimeToEvent.propTypes = {
  startTime: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default TimeToEvent;
