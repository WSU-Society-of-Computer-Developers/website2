import React from "react";
import { Box, Tip } from "grommet"

export default ({ name, icon, showName, url }) => {
    return <Box pad="medium">
        <Tip content={name} dropProps={{trapFocus: "true"}}>
            <a style={{fontSize: "larger", color: ""}} target="_blank" href={url || '/#'}>
                <i className={icon + " paypal-donate"}></i>{showName && name}
            </a>
        </Tip>
    </Box>
}