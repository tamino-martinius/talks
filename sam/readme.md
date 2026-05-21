# Lets talk about - SAM (Serverless Application Model)

[View Slides](https://sam.lets-talk-about.tamino.dev)

## Summary

This talk covers the fundamentals of serverless computing on AWS and how SAM simplifies deploying serverless applications:

- **Serverless basics** — what it is, why use it, and common use cases like web apps, APIs, data processing, and automation
- **AWS services** for serverless — S3, DynamoDB, Lambda, API Gateway, SNS, and more
- **CloudFormation** — infrastructure as code for AWS, its workflow, and its pain points when working with Lambda and API Gateway
- **SAM** — a CloudFormation extension that introduces simplified resource types (`AWS::Serverless::Function`, `AWS::Serverless::Api`, `AWS::Serverless::SimpleTable`) and a CLI for local development and deployment
- **Live demo** of SAM in action

## Links

[CloudFormation Resources](https://docs.aws.amazon.com/en_us/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)

[SAM GitHub Repo](https://github.com/awslabs/serverless-application-model)

[SAM CLI GitHub Repo](https://github.com/awslabs/aws-sam-cli)

---

Built with [lets-talk-about](https://github.com/tamino-martinius/lets-talk-about) ([npm](https://www.npmjs.com/package/lets-talk-about)) — a tool for creating slideshows from Markdown.
