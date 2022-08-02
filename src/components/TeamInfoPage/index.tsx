import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import MatchResult from "../MatchResult";
import TeamLineUp from "../TeamLineUp";
import teamData from "../../data/teams.json";
import { ReactComponent as BackButton } from "../../resources/BackButton.svg";
import "./styles.scss";


export default function TeamInfoPage() {
    const {teamId} = useParams();
    const teamInfo = teamData.find(team => team.id === parseInt(teamId ?? ""));
    const [backgroundShiftX, setBackgroundShiftX] = useState<number>(0);
    const [backgroundShiftY, setBackgroundShiftY] = useState<number>(0);

    function handleMouseMove (e : React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setBackgroundShiftX(e.clientX);
        setBackgroundShiftY(e.clientY);
    }

    return(
        <div className="team-info-page-wrapper" onMouseMove={handleMouseMove} style={{ backgroundPosition: `calc(50% + ${backgroundShiftX / 200}px)  calc(30% + ${backgroundShiftY / 200}px)` }}>
            <Link to="/">
                <BackButton className="back-button" />
            </Link>

            {teamInfo &&
                <div className="team-info-page">
                    <div className="team-info-title">
                        <img className="team-icon" src={teamInfo?.images[0].url} />
                        <div className="team-name">{teamInfo?.name}</div>
                    </div>
                    <TeamLineUp />
                    <MatchResult />
                </div>
            }

            {!teamInfo &&
                <span className="error-message">Could not find the team, please try again</span>
            }
        </div>
    );
}