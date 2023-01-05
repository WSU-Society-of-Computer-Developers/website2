import React from "react";
import { Box, Spinner, Heading, Paragraph } from "grommet";
import Parser from 'rss-parser';
import { UtilizationCard } from "../components";
const parser = new Parser()
// import { socials, images } from "../data";
// TODO: add rss feed parser and render cards (like Team.js) as indivual events from getinvolved
export default function Events() {
    const defaultMsg = "No events."
    const [events, setEvents] = React.useState()
    React.useEffect(() => {
        async function runFetch() {
            let url = "https://getinvolved.wayne.edu/organization/scd/events.rss"
            // let url = "https://getinvolved.wayne.edu/organization/student-senate/events.rss"
            const feed = await parser.parseURL(url)
            setEvents(feed.items.length > 0 ? feed.items : defaultMsg)
        }
        runFetch()
    }, [])
    return (
        <Box flex overflow="auto" className="animate__animated animate__fadeInDown animate__fast" align="center" gap="small" pad="small" style={{ color: "whitesmoke" }}>
            <Heading className="title">Upcoming Events</Heading>
            {/* <iframe id="open-web-calendar"
                style={{ background: "url('https://raw.githubusercontent.com/niccokunzmann/open-web-calendar/master/static/img/loaders/circular-loader.gif') center center no-repeat;" }}
                src="https://openwebcalendar.herokuapp.com/calendar.html?url=https%3A%2F%2Fgetinvolved.wayne.edu%2Forganization%2Fscd%2Fevents.ics&amp;title=SCD%20Calendar&amp;css=.event%2C%20.dhx_cal_tab.active%2C%20.dhx_cal_tab.active%3Ahover%20%7Bbackground-color%3A%20%237D4CDB%3B%7D%20.dhx_month_head%2C%20.dhx_cal_tab%2C%20.dhx_cal_today_button%20%7Bcolor%3A%20%237D4CDB%3B%7D%20.dhx_cal_tab%2C%20.dhx_cal_tab.active%20%7Bborder-color%3A%20%237D4CDB%3B%7D%0A.dhx_scale_holder_now%2C%20.dhx_now%20.dhx_month_head%2C%20.dhx_now%20.dhx_month_body%20%7B%20background-color%3A%20%236FFFB0%3B%7D%0A.dhx_cal_event_clear%20%7B%0Acolor%3A%20whitesmoke%3B%0A%7D"
                sandbox="allow-scripts allow-same-origin allow-top-navigation"
                allowTransparency="true" scrolling="no"
                frameborder="0" height="600px" width="75%"></iframe> */}
            {Array.isArray(events) ?
                events.map(({ title, link, contentSnippet, enclosure: { url } }) =>
                    <Box alignSelf="center" style={{ width: "35%", minWidth: 300 }} align="center" >
                        <UtilizationCard data={{ name: title, title: contentSnippet, contact: link, img: url }} />
                        {/* mismatched prop names are there because I intended to use those cards only for team page */}
                    </Box>
                )  : events === defaultMsg ? <Paragraph>{defaultMsg}</Paragraph> : <Spinner color="focus" />}
        </Box>
    );
}