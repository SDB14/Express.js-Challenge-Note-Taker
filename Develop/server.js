// Initialize the app and create a port
const express = require("express");
const app =express()
const htmlroutes=require("./routing/htmlroutes")
const apiroutes=require("./routing/apiroutes")

const PORT = process.env.PORT || 3001;
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/api",apiroutes)
app.use("/",htmlroutes)



// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));