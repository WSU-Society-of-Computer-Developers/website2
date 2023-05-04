import { teamMembers } from "../data";

// import ReactDOM from "react-dom";
import { Box, /* Grid, ResponsiveContext, Grommet */ } from "grommet";
// import { deepMerge } from "grommet/utils";
// import { grommet } from "grommet/themes";
import React from "react";
import { UtilizationCard } from "../components";
// import { theme as ogTheme } from "../theme";

export default function Team() {
    return <Box alignSelf="center" style={{ marginTop: 25 }} align="center">
        <div className="container">
            <div className="row">
                {teamMembers.map((member) =>
                    <div className="col-lg-3 col-sm-6">
                        <UtilizationCard data={{ ...member }} />
                    </div>
                )}
            </div>
        </div>
    </Box>
}


