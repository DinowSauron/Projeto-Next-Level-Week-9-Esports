import express from "express";

const app = express();


app.get("/ads", (req,res) => {
  
  return res.json([
    {id: 1, name: "anuncio1"},
    {id: 2, name: "anuncio2"},
    {id: 3, name: "anuncio3"}
  ])
});


app.listen(3333);