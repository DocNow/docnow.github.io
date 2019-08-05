---
layout: design
title: DocNow Notifications
creator: Ed Summers
created: 2019-07-25
---

## Problem

One of the issues that was identified in the Conversation Design is the need to make data collection more legible to people who are having their data collected. The thinking here is that it should be possible for users to see when a DocNow instance is collecting their data, and to give them some kind of insight into who is doing the collection and why.

There are many tools for doing Twitter data collection that make no attempt to make the collection activity legible to content creators. We would like the DocNow application to be different by making its data collection activities as transparent as possible. We think of the DocNow application as being opinionated software in that it has certain values baked into it. The notifications will always be sent when collecting data, and it should be impossible to turn them off without forking the DocNow codebase and manually removing the functionality.

We’re not sure this approach is going to work, but we think its a worthwhile experiment for the project to embark on.

## Requirements

**In Scope:**

Notifications of data collection should be viewable in Twitter and be sent by the user that is doing the data collection.
The notification should include a link to the DocNow application.
There should be a publicly viewable page in the DocNow application for a given project that explains why the collection is being created, how it is being created for, and how the data is going to be used.

**Out of Scope:**

The ability for the user to agree or disagree to having their data collection is out of scope for the moment.
Tweeting directly at users will not be supported because of the risk of the application being identified as a source of unsolicited marketing (spam).
Turning off notifications.

## Proposal

When a user logs into the application they will be able to explore Twitter by either clicking on a trending hashtag on the home page, or clicking Explore and entering in their own search terms. This initial data collection collects 1000 tweets, but does not expose them as a collection. The data is only viewable on the explore page in order to help the user decide what they want to collect. Once they navigate away from the Explore page the tweets are no longer available to them.

When a user clicks to create a collection, they will go to a screen that asks them to describe the collection they are creating. They will be prompted to enter information about:

* Who the data collector is, and any institutional affiliation
* Why the data is being collected.
* Where the data will be kept.
* How long the data will be retained.
 
This screen will also make clear that a tweet using the search criteria will be sent on their behalf when creating the collection. For example if the hashtag #blacklivesmatter is being collected a tweet will be sent that briefly describes the data collection and includes the #blacklivesmatter hashtag. This will allow other users of the hashtag to notice the data collection. If the user’s account is not public they will be prevented from creating the collection.

Once the user clicks to save the collection the user will be presented with the collection page, and the data collection will be active. If the user stops data collection and then a few days later decides to start it again from the Collections page they will be prompted to send the notification tweet again.

## Action Items

* Implement collection description screen.
* Implement tweet notification on collection creation.
* Implement tweet notification on collection restart.




