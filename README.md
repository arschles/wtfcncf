sample: https://www.jannikbuschke.de/gatsby-antd-docs/

# WTF, CNCF!

[![Netlify Status](https://api.netlify.com/api/v1/badges/477e3c3d-e5ca-436e-8995-f263886007a3/deploy-status)](https://app.netlify.com/sites/vibrant-jang-f9ba82/deploys)

>Forked from https://github.com/cvluca/gatsby-starter-markdown.

This starter is boilerplate for (technical) documentation websites optionally accompanied by a blog (you can use it forever you want of course).

# Getting started

```bash
npm install gatsby -g
gatsby new my-docs https://github.com/jannikbuschke/gatsby-antd-docs
cd my-docs
npm install
npm run start
```

Visit `http://localhost:8000`.

Edit files in `/content/docs` and see live updates.

# Features

- [x] Ant Design
- [x] Typescript
- [x] Markdown
- [x] MDX
- [x] Syntax highlighting
- [x] Latex

# Roadmap

- [ ] Blog feature / second content type
- [ ] Improved typings
- [ ] Improved responsiveness
- [ ] Add Search

# Hosting

In order to host the site the **sites path** needs to be put into gatsby-config.js export object on to the property _pathPrefix_. Then run

```bash
npm run build
```

and copy the content of the public folder to the webspace.

# License

MIT
