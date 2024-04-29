import { loginApp } from "./src/app";

const PORT = process.env.PORT || 4001
const app = loginApp

app.listen(PORT, () => {
  console.log(`App is runnin on http://localhost:${PORT}/`)
})