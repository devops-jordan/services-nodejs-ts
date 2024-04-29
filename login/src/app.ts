import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.json({ msg: "app is runnin", status: "ok" })
})


export { app as loginApp }