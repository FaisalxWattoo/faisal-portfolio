const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const PORT = 8080;

// Paths
const staticPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "/views/partials");

// Static files
app.use(express.static(staticPath));

// View Engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.set("view options", { layout: "/layouts/main" });
hbs.registerPartials(partialsPath);


// Routes
const aboutRoute = require("./routes/About");
const portfolioRoute = require("./routes/Portfolio");
const contactRoute = require("./routes/Contact");
app.use("/about", aboutRoute);
app.use("/portfolio", portfolioRoute);
app.use("/contact", contactRoute);

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => console.log("Listening on " + PORT + "..."));