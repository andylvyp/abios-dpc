import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import TeamLineUp from ".";

export default {
    title: "TeamLineUp",
    component: TeamLineUp,
    decorators: [withRouter],
    parameters: {
        reactRouter: {
            routePath: "/team/:teamId",
            routeParams: { teamId: "11" },
        }
    }
};

export const Primary = () =>
    <div style={{ backgroundColor: "#521F02", width: "1000px" }}>
        <TeamLineUp />
    </div>;