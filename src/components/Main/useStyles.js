import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: theme.palette.background.default,
      width: "100%",
      height: "100%",
      position: "absolute"
    },
    paper: {
      position: "absolute",
      left: "50%",
      width: "100%",
      transform: "translate(-50%,0)",
      maxWidth: 700,
      padding: theme.spacing(2),
      boxSizing: "border-box",

      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(1)
      }
    },
    HMContainer: {
      display: "flex",
      alignItems: "center"
    },
    HMColon: {
      padding: theme.spacing(0.25)
    }
  }
})

export default useStyles
