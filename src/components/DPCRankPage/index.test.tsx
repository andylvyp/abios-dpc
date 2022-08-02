/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DPCRankPage from ".";

// eslint-disable-next-line react/display-name
jest.mock("../TeamAbstractInfo", () => () => <div data-testId="mock-team-info">MockTeamAbstractInfo</div>);
     
describe("DPCRankPage Component", () => {
    afterEach(() => jest.clearAllMocks());
     
    it("show 8 teams according to data", () => {
        render(<DPCRankPage />);
        const mockTeamInfo = screen.queryAllByTestId("mock-team-info");
        expect(mockTeamInfo).toHaveLength(8);
    });
});