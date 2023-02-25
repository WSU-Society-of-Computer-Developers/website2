import { teamMembers } from "../data";

// import ReactDOM from "react-dom";
import { Box, Grid, ResponsiveContext, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
// import { grommet } from "grommet/themes";
import React from "react";
import { UtilizationCard } from "../components";
import {theme as ogTheme} from "../theme";

const theme = deepMerge(ogTheme,{
    global: {
        breakpoints: {
            small: {
                value: 450
            },
            medium: {
                value: 655
            },
            large: { value: 19999 }
        }
    }
});

const columns = {
    small: ["auto"],
    medium: ["auto", "auto"],
    large: ["auto", "auto"],
    xlarge: ["auto", "auto"]
};


const rows = {
    small: ["medium", "medium", "medium"],
    medium: ["medium", "medium"],
    large: ["medium"],
    xlarge: ["medium"]
};

const ResponsiveGrid = ({
    children,
    overrideColumns,
    overrideRows,
    areas,
    ...props
}) => (
    <ResponsiveContext.Consumer>
        {size => {
            // take into consideration if not array is sent but a simple string
            let columnsVal = columns;
            if (columns) {
                if (columns[size]) {
                    columnsVal = columns[size];
                }
            }

            let rowsVal = rows;
            if (rows) {
                if (rows[size]) {
                    rowsVal = rows[size];
                }
            }

            // also if areas is a simple array not an object of arrays for different sizes
            let areasVal = areas;
            if (areas && !Array.isArray(areas)) areasVal = areas[size];

            return (
                <Grid
                    {...props}
                    areas={!areasVal ? undefined : areasVal}
                    rows={!rowsVal ? size : rowsVal}
                    columns={!columnsVal ? size : columnsVal}
                >
                    {children}
                </Grid>
            );
        }}
    </ResponsiveContext.Consumer>
);


const areas = {
    small: [
        { name: "header", start: [0, 0], end: [0, 0] },
        { name: "test", start: [0, 1], end: [0, 1] },
        { name: "test1", start: [0, 2], end: [0, 2] }
    ],
    medium: [
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "test", start: [0, 1], end: [0, 1] },
        { name: "test1", start: [1, 1], end: [1, 1] }
    ],
    large: [
        { name: "header", start: [0, 0], end: [0, 0] },
        { name: "test", start: [1, 0], end: [1, 0] },
        { name: "test1", start: [2, 0], end: [2, 0] }
    ],
    xlarge: [
        { name: "header", start: [0, 0], end: [0, 0] },
        { name: "test", start: [1, 0], end: [1, 0] },
        { name: "test1", start: [2, 0], end: [2, 0] }
    ]
};

export default function Team() {
    return <Box alignSelf="center" style={{ marginTop: 25 }} align="center">
        <Grommet theme={theme}>
            <ResponsiveGrid
                rows={rows}
                columns={columns}
                gap="small"
                areas={areas}
                margin="medium"
            >
                {teamMembers.map((member) => <UtilizationCard data={{ ...member }} />)}
            </ResponsiveGrid>
        </Grommet>
    </Box>
}


