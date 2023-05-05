const dotenv = require("dotenv");
dotenv.config();

require("express-async-errors");

const cors = require("cors");

const routerTransaction = require("./routes/transactions");
const routerUser = require("./routes/users");
const express = require("express");

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/3m/api/transaction", routerTransaction);
app.use("/3m/api/user", routerUser);

app.use((err, _req, res, next) => {
  console.log(err)
  res.status(500).send("Uh oh! An unexpected error occur.")
})

app.listen(PORT, "172.16.12.76", () => {
  console.log(`Server is running on port: ${PORT}`);
});

