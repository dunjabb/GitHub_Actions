# Playwright/GitHub Actions practise Repository

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Git Guidelines](#git-guidelines)

## Description
This repository covers some of the lessons from Udemy courses for practicing Playwright automation tool and GitHub Actions for setting up workflows.

## Prerequisites

- [Node version](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
  
  Check if you already have Node, run command: `node -v`
  
- [Playwright](https://playwright.dev/docs/intro)
  
  Check if you already have playwright installed, run command: `npx playwright --version`
  To install playwright, run command: `npm init playwright@latest`

## Git Guidelines
- How to create new branch example:

  ```git checkout -b feat/FREP-[JIRA_TICKET_ID]_short_description```

- When commiting follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) rules:

  ```git commit -m “feat: Short task description [JIRA_TICKET_ID]“```