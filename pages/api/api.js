const { db } = require("../../firebase");

const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// response type http://localhost:3001/codeblocks?id=2
app.get("/codeblocks", async (req, res) => {
  const { id } = req.query;

  const codeblockRef = db.collection("codeblocks");

  const codeblocks = [];

  if (id !== undefined && id !== "") {
    const codeblock = await codeblockRef.doc(id).get();

    codeblocks.push({
      id: codeblock.id,
      ...codeblock.data(),
    });
  } else {
    const codeblockDocs = await codeblockRef.get();

    for (doc of codeblockDocs.docs) {
      codeblocks.push({
        id: doc.id,
        ...doc.data(),
      });
    }
  }

  res.json(codeblocks);
});

app.post("/codeblocks", async (req, res) => {
  const codeblocksToSave = req.body;

  const newCodeblocks = await Promise.all(
    codeblocksToSave.map(async (codeblock) => {
      let docRef = { id: null };
      try {
        docRef = await db.collection("codeblocks").add({
          title: codeblock.title,
          tag: codeblock.tag,
          code: codeblock.code,
          CAT: codeblock.CAT,
          UAT: codeblock.UAT,
        });
      } catch (error) {
        console.log(error);
      }
      return { id: docRef.id, ...codeblock };
    })
  );

  res.json(newCodeblocks);
});

app.put("/codeblocks/:id", async (req, res) => {
  const { id } = req.params;
  const codeblocksToUpdate = req.body;

  var codeblocksToUpdateRef = await db.collection("codeblocks").doc(id).get();

  const updateCodeblocks = await Promise.all(
    codeblocksToUpdate.map(async (codeblockUpdate) => {
      try {
        codeblocksToUpdateRef.ref.update({
          title: codeblockUpdate.title,
          tag: codeblockUpdate.tag,
          code: codeblockUpdate.code,
          CAT: codeblockUpdate.CAT,
          UAT: codeblockUpdate.UAT,
        });
      } catch (error) {
        console.log(error);
      }
      return { id, ...codeblockUpdate };
    })
  );

  res.json(updateCodeblocks);
});

app.delete("/codeblocks/:id", async (req, res) => {
  const { id } = req.params;

  const deleteCodeblock = await db.collection("codeblocks").doc(id).get();

  if (deleteCodeblock.exists) {
    await deleteCodeblock.ref.delete();
  }

  res.status(201).json([]);
});

app.listen(3001, () => {});
