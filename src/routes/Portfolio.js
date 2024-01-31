const express = require("express");
const router = express.Router();

const projects = [
  {
    name: "Enterprise Global Athletic Wear Company",
    desc: "Developed Spark streaming pipelines in Databricks for seamless ingestion from Azure Data Lake Storage, EventHub, and Service Bus. Implemented a specialized Azure DevOps pipeline in Bash and Python responsible for migrating workflows/jobs between Databricks workspaces.",
  },
  {
    name: "Redex",
    desc: "Architected and implemented a standard S3-based datalake with raw, curated, and semantic layers, leveraging AWS Glue as the compute infrastructure Designed an asynchronous data ingestion process from the landing layer, populated through external Census Data API invocations, ensuring efficient and timely data capture into the raw layer",
  },
  {
    name: "FlashIntel",
    desc: "Developed and implemented AWS Glue and EMR-based Incremental ETL pipelines, extracting data from various sources including RDS and S3, transforming it, and persisting it to multiple sinks such as Redshift and Delta Tables, while also utilizing services like Athena and Redshift Spectrum for Ad-Hoc querying and data exploration",
  },
];

router.route("/").get((req, res) => {
  res.render("portfolio", { projects });
});

module.exports = router;
