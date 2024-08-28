import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Assemble resource name from context pieces
const ctx = new pulumi.Config();
const namespace: string = ctx.require("namespace")
const environment: string = ctx.require("environment")
const name: string = ctx.require("name")
const resourceName: string = [
  namespace,
  environment,
  name,
].join("-")

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket( resourceName, {
  bucket: resourceName,
  tags: {
    Namespace: namespace,
    Environment: environment,
    Name: resourceName,
    Owner: "christopher.koning@gmail.com"
  }
});

// Export the name of the bucket
export const bucketName = bucket.id;
