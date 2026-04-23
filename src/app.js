const express = require("express");
const notesRoutes = require('./routes/note.routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api/notes', notesRoutes);

app.use((req,res)=>{
    res.status(404).json({msg:'Route not found.'});
});

module.exports = app;