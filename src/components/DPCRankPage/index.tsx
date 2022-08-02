import React, { useState } from "react";
import teamsData from "../../data/teams.json";
import { IdProps, ImageProps, RegionProps, SocialMediaProps } from "../TeamLineUp";
import "./styles.scss";
import TeamAbstractInfo from "../TeamAbstractInfo";

export interface TeamProps {
    id: number;
    name: string;
    abbreviation: string;
    dpc_points: number;
    also_known_as: string[];
    deleted_at: number | null;
    active: boolean;
    images: ImageProps[];
    region: RegionProps;
    social_media_accounts: SocialMediaProps[];
    standing_roster: StandingRosterProps | null;
    game: IdProps;
    organisation: IdProps | null;
}

interface StandingRosterProps {
    id: number;
    from: string;
    to: null;
    roster: IdProps;
    deleted_at: number | null;
}

export default function DPCRankPage() {
    const sortedTeamsData : TeamProps[] = teamsData.sort((a,b) => b.dpc_points - a.dpc_points);
    const [backgroundShiftX, setBackgroundShiftX] = useState<number>(0);
    const [backgroundShiftY, setBackgroundShiftY] = useState<number>(0);

    function handleMouseMove (e : React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setBackgroundShiftX(e.clientX);
        setBackgroundShiftY(e.clientY);
    }

    return(
        <div className="dpc-rank-page-wrapper" onMouseMove={handleMouseMove} style={{ backgroundPosition: `calc(50% + ${backgroundShiftX / 200}px)  calc(30% + ${backgroundShiftY / 200}px)` }}>
            <div className="dpc-rank-page">
                <div className="rank-page-title">DPC Rank Standings</div>
                <div className="team-list-container">
                    {sortedTeamsData.map((team, index) =>
                        <TeamAbstractInfo team={team} index={index} key={`team-${index}`} />
                    )}
                </div>
            </div>
        </div>
    );
}