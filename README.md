<div align="center">
  <img src="assets/logo.png" width="150"/>
  <h1>Shopify CLI Action</h1>
</div>

This repository contains a [GitHub Action](https://github.com/features/actions) to use the Shopify CLI from CI pipelines.

## Usage

Add a new step to your GitHub Actions workflow that uses `shopify/shopify-cli-action`.

```yaml
name: My project

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 2.7.5
      - uses: shopify/shopify-cli-action@v1
        with:
          path: 'scripts/my_script'
          auth-token: ${{ secrets.SHOPIFY_CLI_AUTH_TOKEN }}
          command: 'script push'
```

**Note:** It's important that Ruby is installed through the `ruby/setup-ruby` action to prevent permission-related issues using the system Ruby.
