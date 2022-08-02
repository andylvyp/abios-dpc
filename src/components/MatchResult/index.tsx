import React from "react";
import { useParams } from "react-router-dom";
import rosterData from "../../data/rosters.json";
import seriesData from "../../data/series.json";
import teamsData from "../../data/teams.json";
import dayjs from "dayjs";
import { isMobile } from "react-device-detect";
import "./styles.scss";
import { TeamProps } from "../DPCRankPage";

export default function MatchResult() {
    const {teamId} = useParams();
    const filteredRosterId = rosterData.find(roster => roster.team.id === parseInt(teamId ?? ""))?.id;

    function FindTeamByParticipantId(rosterId : number) {
        return teamsData.find(team => team.id === rosterData.find(roster => roster.id === rosterId)?.team.id);
    }

    function GetTeamName(teamData : TeamProps | undefined) {
        if (isMobile) 
            return teamData?.abbreviation; 
        else 
            return teamData?.name;
    }
    
    if (filteredRosterId) {
        const filteredSeries = seriesData.filter(match => match.participants.some(participant => participant.roster?.id === filteredRosterId)).sort((a, b) => dayjs(a.start).isBefore(dayjs(b.start)) ? -1 : 1);
        return(
            <>
                <div className="match-result-title">Recent Matches</div>
                <div style={{ padding: "0 0 30px" }}>
                    <div className="match-result-container">
                        {filteredSeries.map((match, index) => 
                            <div key={`${match.title}-${index}`} className="match-container">
                                <span className="match-team-name">{GetTeamName(FindTeamByParticipantId(match.participants[0].roster.id)) ?? "TBD"}</span>
                                {GetTeamName(FindTeamByParticipantId(match.participants[0].roster.id)) ?
                                    <img src={FindTeamByParticipantId(match.participants[0].roster.id)?.images[0].url} className="match-team-icon" alt={`${GetTeamName(FindTeamByParticipantId(match.participants[0].roster.id))}-icon`} />
                                    :
                                    <div className="match-team-icon" />
                                }
                            
                                <span className="match-score-container">
                                    <span className={`match-score ${match.participants[0].winner ? "match-winner" : ""}`}>{match.participants[0].score}</span>
                                    <span className="match-score"> : </span>
                                    <span className={`match-score ${match.participants[1].winner ? "match-winner" : ""}`}>{match.participants[1].score}</span>
                                </span>
                                {GetTeamName(FindTeamByParticipantId(match.participants[1].roster.id)) ?
                                    <img src={FindTeamByParticipantId(match.participants[1].roster.id)?.images[0].url} className="match-team-icon" alt={`${GetTeamName(FindTeamByParticipantId(match.participants[1].roster.id))}-icon`} />
                                    :
                                    <div className="match-team-icon" />
                                }
                                <span className="match-team-name">{GetTeamName(FindTeamByParticipantId(match.participants[1].roster.id)) ?? "TBD"}</span>
                                <span className="match-time">{dayjs(match.start).format("H:MM D/M/YY")}</span>
                            </div>
                        )}
                    </div>
                </div>
                
            </>
        );
    } else {
        return(<>Could not find the team</>);
    }

}