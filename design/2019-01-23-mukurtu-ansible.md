---
layout: design
title: Mukurtu-Ansible (Design)
---

# Mukurtu-Ansible

## Problem

Installing our Mukurtu currently uses steps from upstream run manually. An Ansible role is a first stab at making this A/B possible. Proposing creating a way to automate these steps.

## Requirements

This lists the set of known requirements for what the proposal must satisfy. Aspects of the proposal that are negotiable are labeled as “nice-to-have”. Non-requirements give a list of concerns that are out of scope for the proposal.

**Requirements**

* SSH access via keys
* Host info for MySQL
* Py-Expect to automate values in Mukurtu settings
* Nice-to-have Second Fully featured Reclaim Account with Name Changes

**Non-requirement**

We are not redesigning CI for deployment at this time (maybe later)

## Proposal

At the very least we should run playbook(?) or role that installs our Mukurtu instance. Should we need to upgrade to new versions of Mukurtu we will need to be able to run this with a maintenance mode downtime. 

The ansible role will allow us to do ansible rolling upgrades

## Action Items

* Ed will provide a way to look at the cPanel setup from Reclaim 
* Francis will create and bootstrap the ansible repo
