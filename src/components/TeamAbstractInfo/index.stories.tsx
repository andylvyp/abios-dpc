import React from "react";
import { ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import TeamAbstractInfo from ".";
import { TeamProps } from "../DPCRankPage";

const mockTeamData : TeamProps = {
    id: 11,
    name: "PSG.LGD",
    abbreviation: "PSG.LGD",
    dpc_points: 389,
    also_known_as: [],
    deleted_at: null,
    active: true,
    images: [
        {
            id: 20524,
            type: "default",
            url: "https://img.abiosgaming.com/competitors/PSGLGD-2021-teamlogo.png",
            thumbnail: "https://img.abiosgaming.com/competitors/thumbnails/PSGLGD-2021-teamlogo.png",
            fallback: false
        }
    ],
    region: {
        id: 8,
        name: "East Asia",
        abbreviation: "EA",
        country: {
            id: 66,
            name: "China",
            abbreviation: "CN",
            images: [
                {
                    id: 66,
                    type: "default",
                    url: "https://img.abiosgaming.com/flags/China.png",
                    thumbnail: "https://img.abiosgaming.com/flags/thumbnails/China.png",
                    fallback: false
                }
            ]
        }
    },
    social_media_accounts: [
        {
            handle: "LGDgaming",
            url: "https://twitter.com/LGDgaming",
            platform: {
                id: 1,
                name: "Twitter",
                slug: "twitter"
            }
        },
        {
            handle: "lgdgaming",
            url: "https://www.facebook.com/lgdgaming",
            platform: {
                id: 2,
                name: "Facebook",
                slug: "facebook"
            }
        }
    ],
    standing_roster: {
        id: 11865,
        from: "2020-09-16T00:00:00Z",
        to: null,
        roster: {
            id: 76642
        },
        deleted_at: null
    },
    game: {
        id: 1
    },
    organisation: {
        id: 29
    }
};

export default {
    title: "TeamAbstractInfo",
    component: TeamAbstractInfo,
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: "/team/:teamId",
            routeParams: { teamId: "11" },
        }
    }
};

const Template: ComponentStory<typeof TeamAbstractInfo> = (args) => 
    <div style={{ backgroundColor: "#521F02", width: "490px" }}>
        <TeamAbstractInfo {...args} />
    </div>;

export const Primary = Template.bind({});
Primary.args = { team: mockTeamData, index: 1 };