# ZARA WEB CHALLENGE

Webapp to view all marvel characters

## Installation

Use npm  to install the necessary dependencies.

```bash
npm install
```

Configure .env var with this proper values
VITE_APP_MARVEL_API_BASE_URL=http://gateway.marvel.com/v1/public
VITE_APP_MARVEL_API_PUBLIC_KEY=#PUBLIC_KEY#
VITE_APP_MARVEL_API_PRIVATE_KEY=#PRIVATE_KEY#

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
To search characters based by name, in the marvel API I only find option to gather by the exact name, or characters that starts with. To tackle this, I decide to implement a recurent logic to gather all the characters by calling the endpoint by 100 characters (limitation of the API), and do the 50 limit characters inside the WebApp. Created a context with all characters, and keep updating it until it reachs his limits.
Originaly I waited to finish all endpoints calls to show the characters,but this was too much blocker by the time it's consumed, so decided for this approach.
