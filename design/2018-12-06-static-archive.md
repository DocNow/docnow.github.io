---
layout: design
title: Static Archive (Design)
---

# Static Archive

## Problem

Collections created with DocNow can only be accessed online and cannot be downloaded to be archived or used outside of the DocNow app. This proposal is to build an “export” system that produces a static site of the archive of a collection based on the data stored in the DocNow database.

## Requirements

In order to accomplish this we will need to have the following (at a minimum)

Routine for generating static site from a stored collection
UI components for export

## Proposal

Create a stand-alone static archive to work with.

**Server side**

* Create a static site template to be populated by the exporting routine
	* Investigate GatsbyJS as an option first
	* This could be jekyll, but perhaps a nodejs equivalent would be better given the current architecture.
* Archive to show tweets in single infinite scrolling page, or just embed the tweets?
* Export routine to extract data from the database
* Routine for generating static site based on extracted data and template

**Client side:**

* Create UI component to initiate export
* Notify user of export completed and allow download

## Action Items

* Raff will work on react app for displaying the archive
* Ed will integrate into the docnow app

