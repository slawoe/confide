import React from "react";
import styled from "@emotion/styled";
import NavButtonUpArrow from "../../components/NavButtonUpArrow";
import NavButtonDownArrow from "../../components/NavButtonDownArrow";
import { Link } from "react-router-dom";
import Moodster from "../../assets/images/moodster.svg";

const HelpContainer = styled.div`
  background-color: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div:first-of-type,
  & > div:last-of-type {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.5rem;
  }
  & > div:nth-of-type(2) {
    padding: 0 1rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function HelpCard() {
  return (
    <HelpContainer>
      <div>
        <NavButtonUpArrow description={"Notruf"} to={"/main/help/callbutton"} />
        <NavButtonUpArrow description={"Moodster"} to={"/main/help/moodster"} />
        <NavButtonUpArrow description={"Menü"} to={"/main/help/menue"} />
      </div>
      <div>
        <p>
          Hallo {sessionStorage.nickName},
          <br /> lass mich dir kurz zeigen, wie die App funktioniert. Klick auf
          den Bereich, der dich interessiert und ich erzähle dir, was sich
          dahinter versteckt. Wenn Du fertig bist, klick auf mich drauf und Du
          kommst direkt zur Startseite.
        </p>
        <Link to="/main">
          <img src={Moodster} alt={Moodster} />
        </Link>
      </div>
      <div>
        <NavButtonDownArrow
          description={"Eintrag"}
          to={"/main/help/questionnaire"}
        />
        <NavButtonDownArrow description={"Tagebuch"} to={"/main/help/diary"} />
        <NavButtonDownArrow
          description={"Medikamente"}
          to={"/main/help/medics"}
        />
        <NavButtonDownArrow
          description={"Analyse"}
          to={"/main/help/analysis"}
        />
      </div>
    </HelpContainer>
  );
}

export default HelpCard;
