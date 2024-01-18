const fs = require("fs").promises;
const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { connectDatabase } = require("./database");
const { User } = require("./model/user.model");
const { Record } = require("./model/record.model");
const { Category } = require("./model/category.model");

const users = [];

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDatabase();

app.get("/users", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

app.post("/sign-up", async (req, res) => {
  const { name, email, password, currency } = req.body;

  const userExist = await User.find({ email: email });

  if (userExist.length) {
    return res.json({ message: `USER already EXIST` });
  }

  await User.create({
    name,
    email,
    password,
    currency,
    updatedAt: new Date(),
    createdAt: new Date(),
  });
  res.json({ message: "User created successfully" });
});

app.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email, password: password });

  if (!user) {
    return res.status(401).json({ message: "Sign-in unauthorized" });
  }

  const id = user._id;
  const currency = user.currency;

  const token = jwt.sign({ id }, "secret-key");

  return res.json({
    token,
    currency,
    message: "Logged in suceessfully",
  });
  res.status(500).send({ message: "Invalid credientials" });
});

app.post("/records", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized1" });
  }
  try {
    const payload = jwt.verify(authorization, "secret-key");
    const { id } = payload;
    const {
      type,
      category,
      amount,
      date,
      payee,
      note,
      categoryColor,
      iconName,
    } = req.body;

    await Record.create({
      userId: id,
      type,
      category,
      amount,
      date: new Date(date),
      payee,
      note,
      categoryColor,
      iconName,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    res.json({
      message: "Record created",
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized2" });
  }
});

app.get("/records", async (req, res) => {
  const { authorization } = req.headers;
  const { days, old } = req.query;
  console.log(days);
  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized1" });
  }
  const payload = jwt.verify(authorization, "secret-key");
  const { id } = payload;

  const records = await Record.find({ userId: id });
  const filterDate = new Date(Date.now() - 3600 * 1000 * 24 * days);
  const filteredRecords = records.filter((item) => item.date > filterDate);

  const sortedRecords = filteredRecords.sort((a, b) => {
    if (old == "true") {
      return a.date - b.date;
    } else {
      return b.date - a.date;
    }
  });
  return res.json({sortedRecords,records});
});

app.post("/category", async (req, res) => {
  const { authorization } = req.headers;
  const { category, icon, color } = req.body;
  const payload = jwt.verify(authorization, "secret-key");
  const { id } = payload;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized1" });
  }
  const categoryExist = await Category.find({ category: category, userId:id });

  if (categoryExist.length) {
    return res.json({ message: `CATEGORY already EXIST` });
  }

  try {
    await Category.create({
      userId: id,
      category,
      icon,
      color,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    res.json({
      message: "new category created",
    });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized2" });
  }
});

app.get("/category", async (req, res) => {
  const { authorization, days, old } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized1" });
  }
  const payload = jwt.verify(authorization, "secret-key");
  const { id } = payload;
  const categories = await Category.find({ userId: id });
  res.json(categories);
});

const port = 3001;

app.listen(port, () => {
  console.log(`App is listening on port ${port}, ${console.log(users)}`);
});
