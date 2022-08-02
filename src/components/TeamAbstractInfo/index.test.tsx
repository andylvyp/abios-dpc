/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import TeamAbstractInfo from ".";
import { TeamProps } from "../DPCRankPage";

const mockTeamData : TeamProps = {
    id: 3154,
    name: "TestTeam",
    abbreviation: "TT",
    dpc_points: 505,
    also_known_as: [],
    deleted_at: null,
    active: true,
    images: [
        {
            id: 112,
            type: "default",
            url: "mockURL.png",
            thumbnail: "mockThubnail.png",
            fallback: false
        }
    ],
    region: {
        id: 877,
        name: "Test Region",
        abbreviation: "TR",
        country: {
            id: 8741,
            name: "BlaBla",
            abbreviation: "BB",
            images: []
        }
    },
    social_media_accounts: [],
    standing_roster: null,
    game: {
        id: 11111
    },
    organisation: null
};
    
describe("TeamAbstractInfo Component", () => {
    afterEach(() => jest.clearAllMocks());
    
    it("show correct team info from data", () => {
        render(
            <BrowserRouter>
                <TeamAbstractInfo team={mockTeamData} index={21} />
            </BrowserRouter>
        );
        
        const teamRank = screen.getByTestId("team-rank");
        // Rank should be index + 1, because index starts from 0
        expect(teamRank).toHaveTextContent("22");
        const teamIcon = screen.getByTestId("team-icon");
        expect(teamIcon).toBeInTheDocument();
        const teamName = screen.getByTestId("team-name");
        expect(teamName).toHaveTextContent("TestTeam");
        const teamPoints = screen.getByTestId("team-points");
        expect(teamPoints).toHaveTextContent("505");
    });
});