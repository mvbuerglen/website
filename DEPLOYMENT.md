# Deployment

The website is deployed to [Netlify platform](https://netlify.com/) as a static website.
The website runs in a free-tier starter plan.
Basic setup just points to a GitHub repo and follows the wizard to configure an Astro website.
Deployment is triggered nightly by GitHub Actions [workflow](.github/workflows/nightly.yaml) using a Netlify build hook to ensure correct rendering of past and upcoming concerts.

## DNS

TODO: document DNS setup after migration is done

## Decap CMS Auth

The content manager app [Decap](https://decapcms.org/) is [configured](public/admin/config.yml) to use [Netlify's OAuth integration with GitHub](https://decapcms.org/docs/github-backend/).
That requires [setting up](https://docs.netlify.com/security/secure-access-to-sites/oauth-provider-tokens/) a GitHub OAuth app and adding it in Netlify as authentication provider.
After that is done, users can login to Decap using their GitHub accounts.
Decap works by pushing commits directly to GitHub's main branch, thus CMS users will require commit permissions on the main branch in GitHub.
