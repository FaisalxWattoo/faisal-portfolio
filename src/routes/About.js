const express = require("express");
const router = express.Router();

const mainAboutDesc =
  "Azure Certified Data Engineer Associate with sound analytical and data engineering capabilities, having hands on experience across multiple Data Platforms including Azure Cloud, AWS Cloud and Open-Source Apache technologies (HDFS, Spark, Hive)";

const secAboutDesc =
  "I'm a Software Engineering student studying at National University of Sciences and Technology. 2.2 x years of experience in Data Engineering providing both on-premise and cloud-based solutions";

const aboutSkills = [
  "Data Engineering",
  "Spark streaming Pipeline",
  "Problem-Solving",
  "Database Management",
  "ETL Pipeline",
  "Azure Data Factory (ADF) Pipelines",
];

router.route("/").get((req, res) => {
  res.render("about", { mainAboutDesc, secAboutDesc, aboutSkills });
});

module.exports = router;
