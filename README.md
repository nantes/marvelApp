# ZARA WEB CHALLENGE

Webapp to view all marvel characters

## Installation

Use npm  to install the necessary dependencies.

```bash
npm install
```

## Scripts

Run the application in dev mode

```bash
npm run dev
```

Generate a production build

```bash
npm run build
```

Locally preview the production build

```bash
npm run preview
```
## Result

App is deployed at [https://marvel-app-git-master-nantes1s-projects.vercel.app/](https://marvel-app-git-master-nantes1s-projects.vercel.app/)

## NOTES
To search characters based by name, in the marvel API I only find option to gather by the exact name, or by starts with. To tackle this, I decide to implement a recurent logic to gather all the characters by calliong the endping by 100 characters (limitation of the API), and do the 50 limit characters inside react. This has an impact in the performance in the first load, but after that it will use the information stored in context and no need to do extra calls if the user move between the webapp