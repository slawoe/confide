import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import InfoElementWrapper from "./InfoElementWrapper";
import { Link } from "react-router-dom";

const MedicsListWrapper = styled.div`
  background: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  & div:last-of-type,
  & div:last-of-type > a {
    align-self: flex-end;
    padding: 1rem 0 0.5rem;
    color: var(--button-proceed-color);
    text-align: right;
  }
`;

function MedicsListElement({
  name,
  intakeMorning,
  intakeMidday,
  intakeEvening,
  intakeNight,
  id,
}) {
  return (
    <MedicsListWrapper>
      <InfoElementWrapper>
        <span>Medikamenten-Name:</span>
        <span>{name}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Einnahme morgens:</span>
        <span>{intakeMorning}</span>
      </InfoElementWrapper>{" "}
      <InfoElementWrapper>
        <span>Einnahme mittags:</span>
        <span>{intakeMidday}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Einnahme abends:</span>
        <span>{intakeEvening}</span>
      </InfoElementWrapper>{" "}
      <InfoElementWrapper>
        <span>Einnahme nachts:</span>
        <span>{intakeNight}</span>
      </InfoElementWrapper>
      <div>
        <Link to={`/main/medics/change/${id}`}>Bearbeiten oder löschen...</Link>
      </div>
    </MedicsListWrapper>
  );
}

export default MedicsListElement;

MedicsListElement.propTypes = {
  name: PropTypes.string,
  intakeMorning: PropTypes.string,
  intakeMidday: PropTypes.string,
  intakeEvening: PropTypes.string,
  intakeNight: PropTypes.string,
  id: PropTypes.string,
};
