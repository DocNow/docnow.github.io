---
layout: design
title: DocNow Conversation
creator: Ed Summers
created: 2019-05-21
---

## Problem

Midway through Phase 1 of the project we realized that we couldn’t simply build
an easier to use, more accessible, or faster Twitter data collection tool and
consider our work done. There were several reasons for this shift:

Hearing from activists about the many ways they wanted their content to be used
as part of a record of the Ferguson protests.  Hearing from a contingent of
archivists who thought that content creator’s consent was integral to archiving
social media.  Acknowledging that Twitter data is just a thin veneer over the
rich documentary records that are available for an event like the Ferguson
protests.  Learning about the options that already exist for institutions to
bulk collect large amounts of social media content, either their own (tools
like Archive-It, ArchiveSocial) or others (GeoFeedia, SocialFeedManager, etc)

We recognized that there is a need for tools that allow archivists to center
the agency of content creators on Twitter to allow them to meaningfully
participate in the creation of archives. But how can we do this in the DocNow
application, especially when you consider that there are potentially thousands
of users tweeting with a particular hashtag like #ferguson, and there is no
real means of communicating with them short of resorting to what Twitter would
regard as unsolicited spam?

## Requirements

The DocNow application has the following requirements to address this need:

* Allow content creators to notice that the data collection is occuring.
* Allow content creators to see if their content has been collected.
* Provide content creators with a way to see who is doing the collecting and why.
* Give content creators a way to choose whether their content is collected.
* Allow content creators to engage in conversation with archivists who are doing data collection in order to achieve 1-4.
* Application functionality can focus on the needs of archivists (or individuals acting as archivists) who are documenting a particular event in time.
 
These items are out of scope, or non-requirements:

* The scope of social media can be limited to Twitter (for better or worse).
* A central DocNow instance that the archival community uses.
* The data collection or visualization needs of academic researchers who are studying the data are not a determining factor.
 
## Proposal

To better understand these requirements we conducted a literature review of the Human Computer Interaction (HCI) literature to examine how interface designers and information technology researchers are thinking about and responding to the role of consent in data collection activities. You can read a write up of some of the findings from that literature review at https://news.docnow.io/designing-for-consent-2f9e9cb2ab4f.

There was wide agreement that consent, as it has been traditionally conceived, is broken on the web. The primary cause for this breakage is that it is much more complicated to determine a priori the many contexts that our personal data can travel through, and that people have different expectations of consent in these varied contexts (Nissenbaum, 2011). There is a set of design factors that can be used to more effectively empower users to make decisions about their privacy (Acquisti, 2017) but these same factors are being used to deprive users of agency around their data.

One useful way for thinking about ways we can build a conversation around consent into the DocNow application is provided by the Human Data Interaction framework (Hutton & Henderson, 2017) which emphasizes three broad areas of concern:

* **Legibility:** make data collection apparent to content creators
* **Agency:** give content creators the ability to learn more about the collections
* **Negotiability:** allow content creators to opt-in or opt-out of the archiving, and to use more granularly than a simple yes/no (Social Humans).

The goal is to design into the DocNow application a user experience for both the archivist and content creators that speaks to these three concerns.

## Action Items

* Design data collection notifications.
* Design collection description components and behaviors.
* Design consent workflow (granting/removing permission to collect)
* Implement new functionality in the application.

