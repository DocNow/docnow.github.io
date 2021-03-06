---
layout: design
title: DocNow Deployment
creator: Francis Kayiwa
created: 2019-01-23
---

## Problem

The DocNow application is currently running on an EC2 instance. Managing it requires manned steps processes that could impact availability if any one of these is missed. This design document details an approach to managing the DocNow application using a repeatable blue/green production deployment. Blue/Green deployment is a practice that aims to reduce downtime on updates by creating a new copy of the desired component, while maintaining the current one. Given that, you end with two versions of the system: one with the actual version (blue) and another with a newer one (green). When the new version is up and running, you can seamlessly switch traffic to it. This is useful not only to reduce downtime, but also to improve rollback time when something bad happens.

## Requirements

In order to accomplish this we will need to have the following (at a minimum)

Ability to setup/teardown a DocNow deployment on AWS.
Partitioning of DocNow app into separate network (VPC).
Ability to target deployment at demo.docnow.io with an SSL certificate.
Ability to manually add DocNow, Redis and ElasticSearch instances to scale the application as needed.

Non-requirement

Auto-deployment via continuous-integration tools.
Auto-scaling of services.
Ability to use the proposed solution locally in development (although would be nice to have)
Francis’ personal AWS space can be used for testing, but eventually the Terraform configuration will be used to managed MITH’s instance of the DocNow application.

## Proposal

We will use the Terraform to setup and teardown a Kubernetes container orchestration platform on AWS (EKS). While MITH use AWS, Kubernetes environments are provided by a number of Cloud providers including Azure, OpenStack, Google Cloud, Digital Ocean, etc) which should allow our approach to be used in other deployment environments. Terraform will provide a repeatable and versioned approach to bootstrapping the DocNow application infrastructure, and for managing changes to that environment over time.

After setting up the Kubernetes environment in AWS (EKS or Fargate) Terraform will deploy Kubernetes pods for DocNow, Redis, ElasticSearch, and will set up a load balancer to them. We will need to deploy within the current UMD (MITH account) or create a clean but shareable account that MITH will manage. The reason here is the need to VPC’s into MITH will be impacted. The least amount of complexity will come using this method. The show stopper will be ability to import anything to do with the docnow application. This one-time migration will be manual but will need to be tested. This step will convert whatever infrastructure is used to support docnow. This will be followed with a period of assessing UMD/MITH’s VPCs to see where the blue/green deployment fits into (if at) all of this. 

Terraform will be configured to save to an S3 bucket and to be locked via dynamodb during modifications. We will setup the kubernetes cluster nodes for the application and the elasticsearch instances.  We will run a couple of migrations from A/B (the refactor). The new structure of the new VPC will be determined and designed. Once the data is imported the load balancer switch (another manual process) will move off the current infrastructure to the new blue/green zone one.

## Action Items

These will be added to in Asana as the project solidifies. But here is a rough list of how we started.

* Ed will work with VPC/UMD/AWS MITH access 
* Francis will work on Networking
	* This will have a new Virtual Private Cloud (VPC), with public and private subnets. All routing tables, Internet Gateways, NAT Gateways, and security groups will all be automatically provisioned
	* The VPC will be on us-west-2
* Francis will automate access using Terraform.
* Francis will create Workflow for apps 
* Francis will create a docker image that will be posted to Docker Hub. 
* This ECS service will pull the docker image from Docker hub
