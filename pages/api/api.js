const express = require("express");
const res = require("express/lib/response");
const app = express();

var admin = require("firebase-admin");

var serviceAccount = require("../../code-library-ca17a-firebase-adminsdk-y3x87-9d67b37634.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Database
const codeblocks = [
  {
    id: 1,
    title: "requestAPI",
    tag: "[request, api]",
    code: "une requete api",
    created_at: "",
    update_at: "",
  },
  {
    id: 2,
    title: "un code parfait",
    tag: "[code, parfait]",
    code: "du code parfait",
    created_at: "",
    update_at: "",
  },
];

// app.get("/", (req, res) => {
//   console.log("GET /");

//   res.send("Hello les devs");
// });

// response type http://localhost:3001/codeblocks?id=2
app.get("/codeblocks", (req, res) => {
  const { id } = req.query;

  const result =
    id === undefined || id === ""
      ? codeblocks
      : codeblocks.filter((codeblock) => codeblock.id === parseInt(id));

  res.status(200).json(result);
});

app.post("/codeblocks", (req, res) => {
  const codeblocksToSave = req.body;

  const newCodeblocks = codeblocksToSave.map((codeblock) => {
    const lastCodeblock = codeblocks.reduce((max, obj) =>
      max.id > obj.id ? max : obj
    );

    codeblock.id = lastCodeblock.id + 1;
    codeblocks.push(codeblock);

    return codeblocks;
  });

  res.json(newCodeblocks);
});

app.put("/codeblocks/:id", (req, res) => {
  const { id } = req.params;
  const { title, tag, code, created_at, update_at } = req.body;

  const codeblock = codeblocks.find(
    (codeblock) => codeblock.id === parseInt(id)
  );

  if (codeblock) {
    codeblock.title = title;
    codeblock.tag = tag;
    codeblock.code = code;
    codeblock.created_at = created_at;
    codeblock.update_at = update_at;
  }

  res.json({ codeblock });
});

app.delete("/codeblocks/:id", (req, res) => {
  const { id } = req.params;

  const codeblock = codeblocks.find(
    (codeblock) => codeblock.id === parseInt(id)
  );

  if (codeblock) {
    codeblocks.splice(codeblocks.indexOf(codeblock), 1);
  }

  res.status(201).json([]);
});

app.listen(3001, () => {
  console.log("Coucou les devs");
});
