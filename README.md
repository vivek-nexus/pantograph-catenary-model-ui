# Pantograph catenary model UI
Deployed at https://yakshag.github.io/pantograph-catenary-model-ui/

---

## Pre-requisities

- `node`
- `yarn`

---

## Run locally

1. Clone the repository
2. Install all the pre-requisities for your OS
3. Run `yarn` to install all packages
4. Run `yarn dev` to view on the site on `localhost:3000`

## Deployment
Make sure to do all the steps below, in the same order.

1. In `next.config.js`, configure `LINK_PREFIX`, `basePath` and `assetPrefix`. Change to blank value if the webpage is served directly from root of the domain.
2. ~~In `_document.js`, update the meta tags that specify `property="og:url"` and `property="og:image"`, with the absolute URL of the domain where the website will be deployed.~~
4. Run `yarn build && yarn export` to generate static HTML.
5. Static HTML is dumped to `out` directory of the project. Grab the files and host it on any server.
6. Optionally, automate these steps with a deployment script of your choice. See a sample deployment script for Github actions [here](.github/workflows/nextjs.yml).



