import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Assemble resource name from context pieces
let ctx = new pulumi.Config();
const resourceName: string = [
  ctx.require("namespace"),
  ctx.require("environment"),
  ctx.require("name"),
].join("-")

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket( resourceName );

// Export the name of the bucket
export const bucketName = bucket.id;
