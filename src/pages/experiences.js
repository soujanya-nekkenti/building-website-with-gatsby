import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import atglogo from "../images/logos/atg-logo.png"
import qlirologo from "../images/logos/qliro-logo.png"
import reginlogo from "../images/logos/regin-logo.png"
import softhouselogo from "../images/logos/softhouse-logo.png"
import "../styles/experiences.css"
import work from "../data/Work"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "6px 16px",
    backgroundColor: "#fcd1d1",
  },
  wrapper: {
    width: "50%",
  },

  timeline: {
    alignItems: "center",
  },
  secondaryTail: {
    color: theme.palette.common.white,
    display: "inline-block",
    lineHeight: "normal",
  },
  typography: {
    lineHeight: "100px",
  },
  image: {
    borderRadius: "50%",
    width: "56px",
  },
  imagewrapper: {
    padding: 0,
  },

  content: {
    width: "70%",
    float: "left",
    marginLeft: "-28%",
    border: "1px solid #d4d4d4",
    borderRadius: "2px",
    padding: "20px",
    position: "relative",
    boxShadow: "0 1px 6px rgb(0 0 0 / 18%)",
  },

  h1: {
    textAlign: "center",
    color: "#fbfffe",
    fontWeight: "500",
    marginBottom: "20px",
  },
}))

export default function CustomizedTimeline() {
  const classes = useStyles()

  return (
    <Layout>
      <h1 className={classes.h1}>Work Experience</h1>
      <Timeline
        align="alternate"
        className={classes.timeline}
        id="timeline-desktop"
      >
        <TimelineItem className={classes.wrapper} id="timeline-item">
          <TimelineOppositeContent className={classes.typography}>
            <Typography variant="body2" className={classes.secondaryTail}>
              Sept 2020 - present
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.imagewrapper}>
              <img src={atglogo} alt="company" className={classes.image} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                AB Trav och Galoop
              </Typography>
              <Typography id="company-description">
                Scrum master for the trainee innovation project at ATG.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={classes.wrapper} id="timeline-item">
          <TimelineOppositeContent className={classes.typography}>
            <Typography variant="body2" className={classes.secondaryTail}>
              May 2018 - present
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.imagewrapper}>
              <img src={atglogo} alt="company" className={classes.image} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                AB Trav och Galoop
              </Typography>
              <Typography id="company-description">
                Working as a web developer, where the main stack includes React,
                Redux, Redux-saga, Emotion, StoryBook, Typescript.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={classes.wrapper} id="timeline-item">
          <TimelineOppositeContent className={classes.typography}>
            <Typography variant="body2" className={classes.secondaryTail}>
              Jan 2017 - May 2018
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.imagewrapper}>
              <img src={qlirologo} alt="company" className={classes.image} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Qliro Financial Services
              </Typography>
              <Typography id="company-description">
                Worked as software developer to build sales management web
                application using JavaScript6 (ECMA Script 6), React JS, Redux,
                Prototyping the UI/UX interface for the website and writing
                tests
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={classes.wrapper} id="timeline-item">
          <TimelineOppositeContent className={classes.typography}>
            <Typography variant="body2" className={classes.secondaryTail}>
              Oct 2016 - Dec 2016
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.imagewrapper}>
              <img
                src={softhouselogo}
                alt="company"
                className={classes.image}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Softhouse Consulting
              </Typography>
              <Typography id="company-description">
                Worked as an industrial Trainee for developing an Online
                Examination portal using JavaScript, Bootstrap, AngularJs.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={classes.wrapper} id="timeline-item">
          <TimelineOppositeContent className={classes.typography}>
            <Typography variant="body2" className={classes.secondaryTail}>
              Feb 2016 - May 2016
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.imagewrapper}>
              <img src={reginlogo} alt="company" className={classes.image} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                AB Reign
              </Typography>
              <Typography id="company-description">
                Worked as intern to create Automated Regression tests for
                “Embedded views in EXOscada” with Ranorex tool.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      {/* Mobile */}
      <Timeline
        align="alternate"
        className={classes.timeline}
        id="timeline-mobile"
      >
        <div className="experience-stepper">
          {work.map(item => (
            <div key={item.id} className="step">
              <div>
                <TimelineDot className={classes.imagewrapper}>
                  <img
                    src={item.logo}
                    alt="company"
                    className={classes.image}
                  />
                </TimelineDot>
                <div className="line" />
              </div>

              <TimelineContent>
                <Typography variant="body2" className={classes.secondaryTail}>
                  {item.dated}
                </Typography>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1" id="company-name">
                    {item.name}
                  </Typography>

                  <Typography id="company-description">
                    {item.description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </div>
          ))}
        </div>
      </Timeline>
    </Layout>
  )
}
