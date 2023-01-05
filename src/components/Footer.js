import React from "react"
import { Anchor, Footer as Foot } from "grommet"

const stickyFooter = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "red",
    color: "white",
    textAlign: "center"
}

export const Footer = () => {
    return (<div style={stickyFooter}>
        <Foot background='black' pad="small" align="center" as="footer" justify="between">
            <a target="_blank" href="https://engineering.wayne.edu/">
                <img className="Media" width="200" height="50vw" src="https://mac.wayne.edu/images/engineering_horz_color.png" />
            </a>
            <Anchor size="xsmall" label={`Copyright © ${new Date().getFullYear()} SCD`} />
        </Foot>
    </div>)
}