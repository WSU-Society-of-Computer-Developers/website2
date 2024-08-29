import React from "react";
import { Box, Spinner, Heading, Paragraph, Button } from "grommet";
import Parser from "rss-parser/dist/rss-parser.min.js"; // es5 workaround https://github.com/rbren/rss-parser/issues/53#issuecomment-361978210
import { UtilizationCard } from "../components";
// import { socials, images } from "../data";
import Markdown from "markdown-to-jsx/dist/index.js";
export default function Events() {
  const url = "https://getinvolved.wayne.edu/organization/scd/events.rss";
  // const url = "https://getinvolved.wayne.edu/organization/student-senate/events.rss"
  //   const url = "https://getinvolved.wayne.edu/organization/pmhsc/events.rss";
  const defaultMsg = "No events.";
  const [events, setEvents] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  React.useEffect(() => {
    async function runFetch() {
      setLoading(true);
      const feed = await new Parser().parseURL(url);
      setLoading(false);
      setEvents(feed.items);
    }
    runFetch();
  }, []);
  return (
    <Box
      flex
      overflow="auto"
      className="animate__animated animate__fadeInDown animate__fast"
      align="center"
      gap="small"
      pad="small"
      style={{ color: "whitesmoke" }}
    >
      <Heading className="title">Upcoming Events</Heading>
      {/* <iframe id="open-web-calendar"
                style={{ background: "url('https://raw.githubusercontent.com/niccokunzmann/open-web-calendar/master/static/img/loaders/circular-loader.gif') center center no-repeat;" }}
                src="https://openwebcalendar.herokuapp.com/calendar.html?url=https%3A%2F%2Fgetinvolved.wayne.edu%2Forganization%2Fscd%2Fevents.ics&amp;title=SCD%20Calendar&amp;css=.event%2C%20.dhx_cal_tab.active%2C%20.dhx_cal_tab.active%3Ahover%20%7Bbackground-color%3A%20%237D4CDB%3B%7D%20.dhx_month_head%2C%20.dhx_cal_tab%2C%20.dhx_cal_today_button%20%7Bcolor%3A%20%237D4CDB%3B%7D%20.dhx_cal_tab%2C%20.dhx_cal_tab.active%20%7Bborder-color%3A%20%237D4CDB%3B%7D%0A.dhx_scale_holder_now%2C%20.dhx_now%20.dhx_month_head%2C%20.dhx_now%20.dhx_month_body%20%7B%20background-color%3A%20%236FFFB0%3B%7D%0A.dhx_cal_event_clear%20%7B%0Acolor%3A%20whitesmoke%3B%0A%7D"
                sandbox="allow-scripts allow-same-origin allow-top-navigation"
                allowTransparency="true" scrolling="no"
                frameborder="0" height="600px" width="75%"></iframe> */}
      <Button
        alignSelf="center"
        primary
        href={url.replace(".rss", "")}
        target="_blank"
        label="Events"
      />
      <div className="container">
        <div className="row justify-content-center">
          {isLoading ? (
            <Spinner color="focus" />
          ) : events.length > 0 ? (
            events.map(
              ({ title, link, contentSnippet, enclosure: { url } }) => (
                <div className="col-md-6">
                  <Box alignSelf="center" align="center">
                    <UtilizationCard
                      data={{
                        name: title,
                        title: contentSnippet,
                        contact: link,
                        img: url,
                      }}
                    />
                    {/* mismatched prop names are there because I intended to use those cards only for team page */}
                  </Box>
                </div>
              )
            )
          ) : (
            <Paragraph textAlign="center">
              <Markdown>{defaultMsg}</Markdown>
            </Paragraph>
          )}
        </div>
      </div>
    </Box>
  );
}
