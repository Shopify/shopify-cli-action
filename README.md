<div align="center">
  <img src="assets/logo.png" width="150"/>
  <h1>Shopify CLI Action</h1>
  <a href=""><img src="https://github.com/shopify/shopify-cli-action/workflows/CI/badge.svg" alt="Shopify"></a>
  <img src="https://img.shields.io/github/v/release/shopify/shopify-cli-action?include_prereleases&style=flat-square" alt="Latest Version">
  <img src="https://img.shields.io/github/forks/shopify/shopify-cli-action?style=flat-square" alt="GitHub forks">
  <img src="https://img.shields.io/github/stars/shopify/shopify-cli-action?style=flat-square" alt="GitHub stars">
  <img src="https://img.shields.io/github/commit-activity/w/shopify/shopify-cli-action?style=flat-square" alt="Commit Activity">
    <img src="https://img.shields.io/github/contributors/shopify/shopify-cli-action?style=flat-square" alt="Contributors">
  <img src="https://img.shields.io/github/commits-since/shopify/shopify-cli-action/latest?style=flat-square" alt="Latest Commits">
  <a href="http://twitter.com/ShopifyDevs"><img src="https://img.shields.io/twitter/follow/ShopifyDevs?style=flat-square" alt="Twitter Followers"></a>
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/Powered%20by-Ruby-red" alt="Powered by Ruby">
</div>


This repository contains a [GitHub Action](https://github.com/features/actions) to use the Shopify CLI from CI pipelines.


## Usage

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
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v1
      - uses: tuist/shopify-cli-action@0.1.0
        with:
          command: 'script push'
```