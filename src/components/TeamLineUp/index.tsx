import React from "react";
import rosterData from "../../data/rosters.json";
import playerData from "../../data/players.json";
import DefaultImage from "../../resources/DefaultAvatar.jpg";
import { useParams } from "react-router-dom";
import "./styles.scss";

interface RosterProps {
    id: number;
    team: IdProps;
    line_up: LineUpProps;
    game: IdProps;
}

interface LineUpProps {
    id: number;
    players: IdProps[];
}

interface PlayerProps {
    id: number;
    first_name: string;
    last_name: string;
    nick_name: string;
    also_known_as: string[];
    age: AgeProps | null;
    deleted_at: number | null;
    active: boolean;
    images: ImageProps[];
    region: RegionProps;
    game: IdProps;
    race: string | null;
    role: IdProps | null;
    teams: IdProps[];
    social_media_accounts: SocialMediaProps[];
}

export interface SocialMediaProps {
    handle: string;
    url: string;
    platform: PlatformProps;
}

interface PlatformProps {
    id: number;
    name: string;
    slug: string;
}

export interface ImageProps {
    id: number;
    type: string;
    url: string;
    thumbnail: string;
    fallback: boolean;
}

export interface RegionProps {
    id: number;
    name: string;
    abbreviation: string;
    country: CountryProps;
}

interface CountryProps {
    id: number;
    name: string;
    abbreviation: string;
    images: ImageProps[];
}

interface AgeProps {
    precision: string;
    years: number;
}

export interface IdProps {
    id: number;
}

export default function TeamLineUp() {
    const {teamId} = useParams();
    const filteredRoster : RosterProps | undefined = rosterData.find(roster => roster.team.id === parseInt(teamId ?? ""));
    if (filteredRoster) {
        const PlayerIdList = filteredRoster.line_up.players.map((player) => player.id);
        const PlayerInfoList: PlayerProps[] = [];
        PlayerIdList.forEach((playerId, index) => {
            const filteredPlayer = playerData.find(player => player.id === playerId);
            if (filteredPlayer) {
                PlayerInfoList[index] = filteredPlayer;
            }
        });

        return(
            <div className="line-up-wrapper">
                <div className="line-up-title">Team Line Up</div>
                <div className="line-up-container">
                    {PlayerInfoList.map(player => 
                        <div key={player.nick_name} className="player-container">
                            <img src={player.images[0]?.url ?? DefaultImage} className="player-image" />
                            <div className="player-nick-name">{player.nick_name}</div>
                            <div className="player-name">{`${player.first_name} ${player.last_name}`}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    } else {
        return(<>Could not find the team line up</>);
    }
    
}