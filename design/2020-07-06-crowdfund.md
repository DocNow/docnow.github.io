---
layout: design
title: Crowdfunded Docnow Website
creator: Francis Kayiwa
created: 2020-07-06
---

## Problem

The DocNow Project currently has a [demo application](https://demo.docnow.io). This demo application is used in active development of the application and thus the service is best considered volatile. Furthermore, the data collected on the application can and is deleted when met with our Elasticsearch storage constraints. We’ve had some users come into the application and start data collection for a trending (high-volume) hashtag, and then never turning it off. While we have addressed this in the application stack we do meet storage constraints occasionally. 

We are setting up a second instance which will be crowd funded by users of the application to allow for long term use of users. The value of this proposal is we will have active numbers to properly estimate what it costs to run and maintain the DocNow application.


## Requirements

**In Scope:**

* a loadbalancing virtual machine
* a virtual machine (that can scale elastically behind the loadbalancer)

**Out of Scope**

* how the money collected to fund will be administered

## Proposal

The proposal to have a second more stable DocNow environment powered by Community Users will allow the project to properly account for the estimated costs of runnning a DocNow App instance for extended periods. We will be using the [vultr provider](https://www.vultr.com/) and the [docnow-ansible](https://github.com/docnow/docnow-ansible) role to install and manage the application. 

## Action Items

* register a new domain name (to be determined) and use the [relayd](https://man.openbsd.org/relayd.8) 
* create a vultr team account that allows external users to manage
* add a new ansible role to [docnow-ansible](https://github.com/docnow/docnow-ansible) for loadbalancing
* add a new role to [docnow-ansible](https://github.com/docnow/docnow-ansible)  that adds lets encrypt tls/ssl certificates