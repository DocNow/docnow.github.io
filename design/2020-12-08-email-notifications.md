---
layout: design
title: Email Notifications
created: 2020-12-08
creator: Alexandra Dolan-Mescal
---

## Problem

The DocNow application requires user management, storage & Twitter API management, and consent conversation management. Each of these activities should have email notifications to alert users of actions they need to take.

## Requirements

In order to accomplish this we will need to have the following:

* Ability for application to send emails
* Email field required upon initial sign up to application

## Proposal

Create a set of standard email alerts that are triggered based on various conditions.

**User management:**

* Alert app administrator when a new user joins
* Alert new user that their account must be activated by administrator
* Alert new user when account has been activated, noting max-storage user limit
* Alert administrator when user has deleted account
* Alert user when administrator has de-activated account, with ability to reply to appeal de-activation
*

**Storage management:**

* Alert user when storage limit has been reached and how to fix problem
* Administrator recurring email of overall storage # and active users
* Administrator email when going to next storage cluster size?

**Twitter API management:**

* Alert user when too many streams are on, need to turn one off to make other work
* Alert user when a stream is rate-limited

**Conversation management:**

* Email collecting user when a content creator asks for: removal, specify consent with Social Humans label
* Ability for app to create pop-up email form for content creator to email collecting user with specified tweets/user/collection/email account information
* Dashboard of messages (to be designed by ADM)

## Action Items

* Review this document with development team
* Others TBD after review
