/** @jsxRuntime classic */
/** @jsx jsx */
import { useMonth } from "@datepicker-react/hooks";
import { jsx } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Day from "./Day";

function Month({ year, month, firstDayOfWeek, idx, onPrevClick, onNextClick }) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek
  });

  return (
    <div>
      <div css={{ textAlign: "center", margin: "0 0 16px" }}>
        <div css={{ position: "relative" }}>
          {idx && (idx === 1) &&
            <span
              css={{ position: "absolute", left: 12, cursor: "pointer" }}
              onClick={onPrevClick}
            >
              <FontAwesomeIcon icon={ faAngleLeft } />
            </span>
          }
          <strong>{monthLabel}</strong>
          {idx && (idx === 2) && 
            <span
              css={{ position: "absolute", right: 12, cursor: "pointer" }}
              onClick={onNextClick}
            >
              <FontAwesomeIcon icon={ faAngleRight } />
            </span>
          }
        </div>
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyContent: "center",
          marginBottom: "10px",
          fontSize: "10px"
        }}
      >
        {weekdayLabels.map(dayLabel => (
          <div css={{ textAlign: "center" }} key={dayLabel}>
            {dayLabel}
          </div>
        ))}
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyContent: "center"
        }}
      >
        {days.map((day, index) => {
          if (typeof day === "object") {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
              />
            );
          }

          return <div key={index} />;
        })}
      </div>
    </div>
  );
}

export default Month;
