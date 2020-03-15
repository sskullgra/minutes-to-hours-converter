import React, { useState } from "react"
import useStyles from "./useStyles"
import {
  TextField,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core"
import {
  MtoHM,
  MtoHD,
  HMtoM,
  HMtoHD,
  HDtoM,
  HDtoHM
} from "../../utils/Converter"

const Main = () => {
  const classes = useStyles()
  const [minutes, setMinutes] = useState(0)
  const [hmMinutes, setHMMinutes] = useState(0)
  const [hmHours, setHMHours] = useState(0)
  const [Hours, setHours] = useState(0)

  const handleChangeMinutes = e => {
    const v = parseInt(e.target.value) || 0
    const hm = MtoHM(v)
    const h = MtoHD(v)
    setMinutes(v)
    setHMMinutes(hm.m)
    setHMHours(hm.h)
    setHours(h)
  }

  const handleChangeHMMinutes = e => {
    const v = parseInt(e.target.value) || 0
    const m = HMtoM(hmHours, v)
    const h = HMtoHD(hmHours, v)
    setMinutes(m)
    setHMMinutes(v)
    setHours(h)
  }

  const handleChangeHMHours = e => {
    const v = parseInt(e.target.value) || 0
    const m = HMtoM(v, hmMinutes)
    const h = HMtoHD(v, hmMinutes)
    setMinutes(m)
    setHMHours(v)
    setHours(h)
  }

  const handleChangeHoursDecimal = e => {
    if (
      e.target.value.length > 0 &&
      !e.target.value.match(/(^\d)*\.?(\d)*$/)[0]
    )
      return
    const v = (parseFloat(e.target.value) || 0).toFixed(4)
    const m = HDtoM(v)
    const hm = HDtoHM(v)
    setMinutes(m)
    setHMHours(hm.h)
    setHMMinutes(hm.m)
    setHours(
      e.target.value.replace(/^(0*)(\d)/, (match, p1, p2) => {
        return p2
      }) || 0
    )
  }

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <Card>
          <CardHeader title="Simple Minutes to Hours Converter" />
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    label="Minutes"
                    fullWidth
                    onChange={handleChangeMinutes}
                    value={minutes}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.HMContainer}>
                  <TextField
                    variant="outlined"
                    label="Hours"
                    fullWidth
                    onChange={handleChangeHMHours}
                    value={hmHours}
                  ></TextField>
                  <Typography variant="h4">:</Typography>
                  <TextField
                    variant="outlined"
                    label="Minutes"
                    fullWidth
                    onChange={handleChangeHMMinutes}
                    value={hmMinutes}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    label="Hours Decimal"
                    fullWidth
                    onChange={handleChangeHoursDecimal}
                    value={Hours}
                  ></TextField>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Main
