import { teamMembers } from "../data";

import ReactDOM from "react-dom";
import { Box, Grid, ResponsiveContext, Heading, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";

import React, { Component } from "react";
import { VirtualMachinesCard, UtilizationCard } from "../components";
export default function Team() {
    return <Box alignSelf="center" style={{ marginTop: 25 }} align="center">
        {teamMembers.map((member) => <UtilizationCard data={{ ...member }} />
        )}
    </Box>
}


