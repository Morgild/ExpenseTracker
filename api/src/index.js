const fs = require("fs").promises;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const users = [];

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/users", async (req, res) => {
  const filePath = "src/data/users.json";
  const usersRaw = await fs.readFile(filePath, "utf-8");
  const users = JSON.parse(usersRaw);
  res.json(users);
});

app.post("/sign-up", async (req, res) => {
  const { name, email, password } = req.body;
  const filePath = "src/data/users.json";
  const usersRaw = await fs.readFile(filePath, "utf-8");
  const users = JSON.parse(usersRaw);
  const user = users.find((user) => user.email === email);
  if (user) {
    return res.json('User exists')  
    //    res.status(409).json({
    //   message: "User already exists",
    // });
  }
  users.push({ name, email, password });
  await fs.writeFile(filePath, JSON.stringify(users));
  res.json({ message: "User created successfully" });
});

app.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  const filePath = "src/data/users.json";
  const usersRaw = await fs.readFile(filePath, "utf-8");
  const users = JSON.parse(usersRaw);

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({ message: "Sign-in unauthorized" });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = jwt.sign({ email }, "secret-key");
  return res.json({
    token,
    message: "Logged in suceessfully",
  });
  res.status(500).send({ message: "Invalid credientials" });
});

app.post("/records", async (req, res) => {
  const {authorization} = req.headers;
  // return res.json(authorization)
  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized1" });
  }
  // const payload = jwt.verify(authorization, "secret-key")
  // return res.json(payload.email)
  try {
    const payload = jwt.verify(authorization, "secret-key");
    const { email } = payload;
    const { type, category, amount, date, payee, note } = req.body;
    const filePath = "src/data/records.json";
    const recordsRaw = await fs.readFile(filePath, "utf-8");
    const records = JSON.parse(recordsRaw);
     
    records.push({
      type,
      category,
      amount,
      date,
      payee,
      note,
      userEmail: email,
    });

    await fs.writeFile(filePath, JSON.stringify(records));

    res.json({
      message: "Record created",
    });
  } catch (error) {
    // return res.status(401).json({ message: "Unauthorized2" });
  }
});

app.get("/records", async (req, res) => {
    const filePath = "src/data/records.json";
    const recordsRaw = await fs.readFile(filePath, "utf-8");
    const records = JSON.parse(recordsRaw);
    res.json(records)
});

const port = 3001;

app.listen(port, () => {
  console.log(`App is listening on port ${port}, ${console.log(users)}`);
});
