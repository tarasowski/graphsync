# Update your AppSync GraphQL Schema From Your Terminal

## Step 1
Run `npm install graphsync`.

## Step 2
Crate a folder `templates` in the same directory with `template.yaml`. Add your AppSync `schema.graphql` to the `templates` folder.

## Step 3
Add following command to your `package.json`

```json
"scripts": {
    "graphsync": "node ./node_modules/.bin/graphsync --region=<AWS-region>"
  },
``` 

## Step 4
Run `npm run graphsync` and your AppSync GraphQL Schema gets automatically updated.

