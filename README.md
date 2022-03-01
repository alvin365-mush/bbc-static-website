This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## To deploy to S3 using Github Actions
Configure your S3 bucket using the [AWS Docnumentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)
Create a Github Actions Workflow and when editing deploy.yml, remove the `pull_request` definition in the on property and remove all steps except for `uses: actions/checkout@v2`
Add the following under the steps definition if you are using yarn

```yaml
- uses: actions/setup-node@v1
  with:
    node-version: 16
- run: npm install -g yarn
- run: yarn install --frozen-lockfile
- run: yarn build
```

if you re using npm add the following 

```yaml
- uses: actions/setup-node@v1
  with:
    node-version: 16
- run: npm ci
- run: npm run build
```

Next configure github Actions to deploy the static website to S3
You can use the [Configure AWS credentials](https://github.com/aws-actions/configure-aws-credentials/blob/master/README.md) guide to configure your API keys (Remember DO NOT MAKE YOUR AWS API KEYS AND SECRETS PUBLIC)

Then add the following step to your Github Actions and commit the changes.

```yaml
- run: aws s3 sync ./out s3://[bucket-name]
```

Wait for the build to finish and check your S3 Bucket website endpoint.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
