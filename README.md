# #
The base code is from [gatsby-gitbook-starter](https://github.com/hasura/gatsby-gitbook-starter)

The pages are in [Markdown](https://www.gatsbyjs.com/docs/reference/markdown-syntax/) format within the **content** folder. 
The **config.js** is the main file that pulls all the other files together. One can modify the `pathPrefix` to the S3 bucket name in which the files are inserted. The `trailingSlash` along with the lambda function enables to open index.html file within each folder.

Run `npm start` to run the code in `localhost:8000`

Inorder to build this, I modified the **package.json** file, `scripts` subsection, `start` key from `gatsby develop` to `gatsby build --prefix-paths` and run `npm start`. The latter creates a **public** which has all the html files and the json and js files for the website.

steps
- clone repo
- `npm install`
- `npm start` deploys in localhost:8000
- `npm run build` builds html to \public 
- update src/sitemap.xml <lastmod>
-  deploy: `aws s3 cp --recursive ~/pdata/code/prasanna_web/public/ s3://prashub.com/prasanna/public/ && aws s3 cp ~/pdata/code/prasanna_web/src/sitemap.xml s3://prashub.com/prasanna/public/ && aws cloudfront create-invalidation --distribution-id E3L63XU4ZVC19X --paths "/*"`

- build & deploy: `npm run build && aws s3 sync ~/pdata/code/prasanna_web/public/ s3://prashub.com/prasanna/public/ && aws s3 cp ~/pdata/code/prasanna_web/src/sitemap.xml s3://prashub.com/prasanna/public/ && aws cloudfront create-invalidation --distribution-id E3L63XU4ZVC19X --paths "/*"`
-resume: `aws s3 cp ~/Downloads/prasanna.pdf s3://prashub.com/ && aws cloudfront create-invalidation --distribution-id E3L63XU4ZVC19X --paths "/*"`
