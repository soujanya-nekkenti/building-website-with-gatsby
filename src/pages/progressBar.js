import React from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import LinearProgress from "@material-ui/core/LinearProgress"

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress)

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
})

export default function CustomizedProgressBars() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="body2" color="#fbfffe">
        React
      </Typography>
      <BorderLinearProgress variant="determinate" value={90} />
      <br />
      <Typography variant="body2" color="#fbfffe">
        Typescript
      </Typography>
      <BorderLinearProgress variant="determinate" value={70} />
      <br />
      <Typography variant="body2" color="#fbfffe">
        Javascript
      </Typography>
      <BorderLinearProgress variant="determinate" value={90} />
      <br />
      <Typography variant="body2" color="#fbfffe">
        HTML/CSS
      </Typography>
      <BorderLinearProgress variant="determinate" value={90} />
      <br />

      <Typography variant="body2" color="#fbfffe">
        Node.js
      </Typography>
      <BorderLinearProgress variant="determinate" value={60} />
      <br />
      <Typography variant="body2" color="#fbfffe">
        Redux
      </Typography>
      <BorderLinearProgress variant="determinate" value={60} />
      <br />
      <Typography variant="body2" color="#fbfffe">
        Angular
      </Typography>
      <BorderLinearProgress variant="determinate" value={40} />
      <br />
      <Typography variant="body2" color="#fbfffe">
        Bootstrap
      </Typography>
      <BorderLinearProgress variant="determinate" value={60} />
    </div>
  )
}
