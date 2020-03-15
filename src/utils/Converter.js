export function MtoHM(minutes) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return { h, m }
}

export function MtoHD(minutes) {
  return (minutes / 60.0).toFixed(4)
}

export function HMtoM(hours, minutes) {
  return 60 * hours + minutes
}

export function HMtoHD(hours, minutes) {
  const m = HMtoM(hours, minutes)
  return MtoHD(m)
}

export function HDtoM(decimal) {
  return Math.round(decimal * 60)
}

export function HDtoHM(decimal) {
  const minutes = HDtoM(decimal)
  return MtoHM(minutes)
}
