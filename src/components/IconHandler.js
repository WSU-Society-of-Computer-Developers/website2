import React from "react";
import { Box, Tip } from "grommet"

export default ({ name, icon, showName, url }) => {
    return <Box pad="medium">
        <Tip content={name} dropProps={{trapFocus: true}} style={{color: "whitesmoke"}}>
            <a style={{fontSize: "larger"}} target="_blank" rel="noopener noreferrer" href={url || '/#'}>
                <span style={{display: "none"}}>{name}</span>
                <i className={icon + " paypal-donate"}></i>{showName && name}
            </a>
        </Tip>
    </Box>
}