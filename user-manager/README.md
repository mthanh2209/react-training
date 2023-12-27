# REACT TRAINING - Practice one

## Description

- Getting started with React basic and using Storybook

## Design

[Webix](https://webix.com/demos/user-manager/)

## Targets

- Understand & apply knowledge of React/ TypeScript
- Understand and apply React basic and StoryBook
- [PageSpeed](https://pagespeed.web.dev/) scores at minimum 98 points

## Requirements

- Use await instead of then
- Apply JSON-SERVER
- Use Axios to call API

## Information

- Technologies: **React + Vite**
- Editor: **VSCode**
- Timeline: **15 days** (Nov 24, 2023 - Dec 27, 2023)
- Team size: **1 developer**
- Source code manager: **GitHub**
- Estimation details plan: [Plan](https://docs.google.com/document/d/1QS_4veFpgx4NUnekuxGgWG_bd-nI8TLtnyQGeW4Cy9E/edit?usp=sharing)

## Features

- Call API (show all list user)
  - Small Avatar
  - Full Name
  - Status (Active or Not active)
  - Email
- Add a new user
  - Overlay
  - Modal card
  - Required entering a name
  - Validation: “The name is required”
  - Button (Save, Cancel)
- View information users when clicking on the user
  - AvatarText (1 avatar contains the first letter of the user name)
  - Status (Not active - default)
  - Full Name
  - Email (unknown - default)
  - Last visited date (unknown - default, the date will be updated when you come back in)
- View detail and edit information users when clicking on the icon pen
  - Full Name
  - Email
    - Edit email with the syntax: “username@gmail.com”
    - Validation: “The email is invalid”
  - AvatarText (default - 1 avatar contains the first letter of the user name)
  - Upload photo (only accept JPG, PNG and less than 1MB)
  - Status (can be converted to active or not active)
  - Registered date
  - Last visited date
  - Details
- Save information when finished editing
  - Toast (react-toastify with 3s)
  - Success
  - Error
- Delete users
  - Overlay
  - Modal card
  - Button (Cancel, Delete)
- Search users
  - Search box will display a list containing the entered keyword as the user's name
  - Or 'user not found' when there is no matching keyword.
## Environments

- Node: v18.16.1
- Vite: Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

## Deploy

[Vercel - User manager](https://react-training-mthanh2209.vercel.app/)

## Install repository

Open Windows PowerShell or cmd or [Windows Terminal](https://www.microsoft.com/en-gb/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab)

- **Step 1: Clone repository with HTTPS**

```bash
git clone https://github.com/mthanh2209/react-training.git
```

## Run server

- **Step 2: Move to json-server folder**

```bash
cd json-server
```

- **Step 3: Install server**

```bash
npm install
```

- **Step 4: Run json-server**

```bash
npm start
```

## Run app

- **Step 5: Move to user-manager folder**

```bash
cd user-manager
```

- **Step 6: Install project**

```bash
npm install
```

- **Step 7: Run project**

```bash
npm run dev
```
