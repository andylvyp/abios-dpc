import React from "react";
import { Link } from "react-router-dom";
import { TeamProps } from "../DPCRankPage";
import "./styles.scss";

interface TeamAbstractInfoProps {
    team: TeamProps;
    index: number;
}

export default function TeamAbstractInfo({team, index} : TeamAbstractInfoProps) {

    function getDPCStatus(points : number, index: number) {
        if (points > 500) {
            return "team-secured";
        } else {
            if (index < 4) {
                return "team-qualified";
            } else {
                return "team-not-qualified";
            }
        }
    }

    return(
        <Link to={`/team/${team.id}`} className="team-list-item">
            <span className={`list-index ${getDPCStatus(team.dpc_points, index)}`} data-testid="team-rank">{index + 1}</span>
            <div className="team-image-container">
                <img src={team.images[0].url} className="team-image" alt={`${team.name}-icon`} data-testid="team-icon"/>
            </div>
            <span className="team-name" data-testid="team-name">{team.name}</span>
            <span className={`team-points ${getDPCStatus(team.dpc_points, index)}`} data-testid="team-points">{team.dpc_points}</span>
        </Link>
    ); 
}