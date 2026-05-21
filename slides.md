---
title: Lets talk about ... API Workshop #1
---

---
build: true

# API Workshop
## #1

---
build: true

## Agenda
- 1. Dababase
- 2. Models
- 3. Operations
- 4. API

---
build: true

## Database
- 1. Migrations
- 2. Schema
- 3. Seeds
- 4. Views
- 5. Functions
- 6. Triggers

---
build: true

## Migrations
- Define the steps needed how to build the database schema

---
build: true

## Schema
- Current state of database schema after applying all migrations

---
build: true

## Seeds
- How to prefill the database

---
build: true

## Views
- SQL SELECT Commands which can be used as tables

---
build: true

## Functions
- Code snippets which can be executed manually or by triggers

---
build: true

## Triggers
- Define events on which database functions should be called

---
build: true

## Models
- 1. Relationships
- 2. Callbacks
- 3. Scopes
- 4. Validations
- 5. Small helpers

---
build: true

## Relationships
- How is the relationship of current model to other models
- belongs_to (parent)
- has_one (1:1 relationship)
- has_many (1:n relationship)

---
build: true

## Callbacks
- Defines what to do after certain events
- before/after
- validation
- save
- create/update/destroy
- commit/rollback

---
build: true

## Scopes
- Define SQL queries and filters
- Read only

---
build: true

## Validations
- Presence
- Uniqueness
- Min/Max
- Custom

---
build: true

## Operations
- 1. Not part of rails
- 2. Initalize
- 3. Call
- 4. Helpers

---
build: true

## Not part of rails
- Business logic
- Usually this is part of the Model, Controller or API
- Files got too huge and hard to mange so we separated the this

---
build: true

## Initialize
- Defines which context and parameters are needed to execute
- Repositories* (soon Models)
- Context
- Helpers

---
build: true

## Call
- Executes the operation
- Parameters
- Parameter Defauls
- Uses helpers if logic is complex

---
build: true

## Helpers
- Helps to split logic into smaller easy to understand chunks
- Parameters

---
build: true

## API
- 1. Helpers
- 2. Entry Point
- 3. Endpoint
- 4. Documentation

---
build: true

## Helpers
- Small code snippets/definitions which are shared <br> and accessible for all Endpoints
- Parameters
- Reusable logic

---
build: true

## Entry point
- Global definitions of our API
- Which versions exist
- Which endpoints are present
- Global documentation

---
build: true

## Endpoint
- 1. Parameters
- 2. Helpers
- 3. Resource

---
build: true

## Helpers
- Small code snippets/definitions which are shared <br> and accessible for all Resources in SAME FILE
- Reusable logic

---
build: true

## Parameters
- Defines which parameters could be present when calling the endpoint
- Validates data type
- Ignores not mentioned parameters

---
build: true

## Actions
- Defines which endpoints are available
- Path (/absences, ...)
- Method (get, post, ...)

---
build: true

## Resource Workflow
- Authenticate
- Fetch context
- Check for errors
- Business logic
- Return data

---
build: true

## Documentation
- 1. Introduction
- 2. Endpoint Description
- 3. Action Description
- 4. Entities
- 5. Parameters

---
build: true

## Introduction
- Global description shown above all resources

---
build: true

## Endpoint Description
- Description on top of an endpoint

---
build: true

## Resource Description
- Implementation notes for each resource

---
build: true

## Entities
- Use for sample responses (and/or parameters)

---
build: true

## Parameters
- Add a description for each parameter

---

# Links

---

## Rails Links
- [Relationships](https://guides.rubyonrails.org/association_basics.html)
- [Validations](https://guides.rubyonrails.org/active_record_validations.html)
- [Callbacks](https://guides.rubyonrails.org/active_record_callbacks.html)
- [Blog Article about Operations](https://medium.com/shyftplan-techblog/how-to-refactor-big-rails-projects-12fc4e4ddcd2)
- [Grape Readme (Our API Framework)](https://github.com/ruby-grape/grape)

---

## API Docs Examples
- [Shyftplan](https://shyfplan.com/swagger)
- [Easybill](https://www.easybill.de/api)
- [Petstore Example](https://petstore.swagger.io/)
