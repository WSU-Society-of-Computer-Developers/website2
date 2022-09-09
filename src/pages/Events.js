import React from "react";
import { Box, Heading, FormField, Button, Paragraph, TextInput, TextArea, Form } from "grommet";
import { socials } from "../data";

export default function Events() {

    return (
        <Box flex overflow="auto" className="animate__animated animate__fadeInDown animate__fast" align="center" gap="small" pad="small" style={{ color: "whitesmoke" }}>

<iframe id="open-web-calendar" 
    style={{background:"url('https://raw.githubusercontent.com/niccokunzmann/open-web-calendar/master/static/img/loaders/circular-loader.gif') center center no-repeat;"}}
    src="https://openwebcalendar.herokuapp.com/calendar.html?url=https%3A%2F%2Fgetinvolved.wayne.edu%2Forganization%2Fscd%2Fevents.ics&amp;title=SCD%20Calendar&amp;css=.event%2C%20.dhx_cal_tab.active%2C%20.dhx_cal_tab.active%3Ahover%20%7Bbackground-color%3A%20%237D4CDB%3B%7D%20.dhx_month_head%2C%20.dhx_cal_tab%2C%20.dhx_cal_today_button%20%7Bcolor%3A%20%237D4CDB%3B%7D%20.dhx_cal_tab%2C%20.dhx_cal_tab.active%20%7Bborder-color%3A%20%237D4CDB%3B%7D%0A.dhx_scale_holder_now%2C%20.dhx_now%20.dhx_month_head%2C%20.dhx_now%20.dhx_month_body%20%7B%20background-color%3A%20%236FFFB0%3B%7D%0A.dhx_cal_event_clear%20%7B%0Acolor%3A%20whitesmoke%3B%0A%7D"
    sandbox="allow-scripts allow-same-origin allow-top-navigation"
    allowTransparency="true" scrolling="no" 
    frameborder="0" height="600px" width="75%"></iframe>
        </Box>
    );
}