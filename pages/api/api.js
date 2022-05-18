const express = require("express");
const res = require("express/lib/response");
const app = express();

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

app.get("/", (req, res) => {
  console.log("GET /");

  res.send("Hello les devs");
});

// http://localhost:3001/codeblocks?id=2
// app.get("/codeblocks", (req, res) => {
//   const { id } = req.query;

//   const result =
//     id === undefined
//       ? codeblocks
//       : codeblocks.filter((codeblock) => codeblock.id === parseInt(id));

//   res.status(200).json(result);
// });

// app.post("/users", (req, res) => {
//   const usersToSave = req.body;

// const newUsers = [];

// for (const user of usersToSave) {
//   const lastUser = users.reduce((max, obj) => (max.id > obj.id ? max : obj));

//   user.id = lastUser.id + 1;
//   newUsers.push(user);
//   users.push(user);
// }

//   const newUsers = usersToSave.map((user) => {
//     const lastUser = users.reduce((max, obj) =>
//       max.id > obj.id ? max : obj
//     );

//     user.id = lastUser.id + 1;
//     users.push(user);

//     return users;
//   });

//   res.json(newUsers);
// });

// app.put("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;

//   const user = users.find((user) => user.id === parseInt(id));

//   if (user) {
//     user.name = name;
//     user.email = email;
//   }

//   res.json({ user });
// });

// app.delete("/users/:id", (req, res) => {
//   const { id } = req.params;

//   const user = users.find((user) => user.id === parseInt(id));

//   if (user) {
//     user.splice(users.indexOf(user), 1);
//   }

//   res.status(201).json([]);
// });

// app.listen(3000, () => {
//   console.log("Coucou les devs");
// });
