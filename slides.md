---
title: Lets talk about ... SAM
---

---
build: true

## Lets talk about ...
# SAM

---

## Lets talk about
# Serverless

---

## Lets talk about
# Application

---

## Lets talk about
# Model

---

## Serverless - What?
build: true

- Cloud provider manages the allocation of machine resources
- User just provides Code
- Serverless runtimes
- &nbsp;

---

## Serverless - What?
- Cloud provider manages the allocation of machine resources
- User just provides Code/Schema
- Serverless runtimes
- Serverless databases

---

## Serverless - Why?
- No Servers to manage/update
- No idle times which need to be paid
- (Linear) scales with usage
- Load balancing, Networking, Fault tolerance build in

---

## Serverless - Where?
- Web Applications (eg. Express)
- Backends (eg. API with LoopBack)
- Data Processing (Background jobs, Tasks)
- Bots (eg. Chatbots)
- Automation (Extending AWS Services)

---

## Serverless - Where?
- Web Applications (eg. Express)
- Backends (eg. API with LoopBack)
- Data Processing (Background jobs, Tasks)
- Bots (eg. Chatbots)
- **Automation (Extending AWS Services)**

---
build: true

## AWS Services - Data
- S3
- DynamoDB
- Kinesis
- Aurora (MySQL)

---
build: true

## AWS Services - Management
- CloudFormation
- CloudTrail
- CodeCommit
- CloudWatch

---
build: true

## AWS Services - Endpoints
- API Gateway
- IoT
- Step Functions

---
build: true

## AWS Services - Messages
- SES
- SNS
- Cron

---
build: true

## Lambda - What is needed?
- Role
- Policy
- S3
- Lambda
- API Gateway

---

## Lambda - What is needed?
- Role
- Policy
- S3
- Lambda
- **API Gateway**

---
build: true

## API Gateway - What is needed?
- API
- Permission
- S3
- Stage
- Mapping

---
build: true

## CloudFormation
- Templates for AWS Infrastructure
- Parameters -> Resources -> Output
- Version Control, Change Sets
- A bit like docker compose
- json/yaml

---
build: true

## CloudFormation issues
- Lambda needs code within S3
- API Gateway needs Swagger File within S3

---
build: true

## CloudFormation solution
- Small initial Stack including S3
- Upload files
- Apply ChangeSet with Lambda and API Gateway
- **or**
- package (needs S3 again)

---
type: section

# SAM

---
build: true

## SAM - What?
- CloudFormation extension
- Adds new Resource types
- CLI

---
build: true

## SAM - New Types
- AWS::Serverless::Api
- AWS::Serverless::SimpleTable
- AWS::Serverless::Function

---
build: true

## SAM - New Types
- AWS::Serverless::Api
- AWS::Serverless::SimpleTable
- **AWS::Serverless::Function**

---
build: true

## AWS::Serverless::Function
- Role
- Permission
- S3
- Lambda
- Events

---

## AWS::Serverless::Function
- Role
- Permission
- S3
- Lambda
- **Events**

---
build: true

## Event Sources
- S3
- SNS
- Kinesis
- DynamoDB
- Schedule

---
build: true

## CLI
- init
- validate
- package
- deploy
- local

---

## CLI
- init
- validate
- package
- deploy
- **local**

---
build: true

## SAM - Local
- generate-event
- invoke
- start-api

---

# Demo

---
background: assets/images/all-the-things.jpg

# &nbsp;
# Thats it

---

## Whats next?
- [CloudFormation Resources](https://docs.aws.amazon.com/en_us/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)
- [SAM GitHub Repo](https://github.com/awslabs/serverless-application-model)
- [SAM CLI GitHub Repo](https://github.com/awslabs/aws-sam-cli)
- [Slides GitHub Repo](https://github.com/tamino-martinius/lets-talk-about--sam)

---
type: section

# Questions?
