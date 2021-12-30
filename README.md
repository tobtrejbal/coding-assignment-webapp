# Coding assignment - React webapp

## Overview

Simple react web application which shows product detail page from API provided by coding-assignment-server application. 
Page consists of 3 sections
- Header (product title, info and description)
- Info (information blocks - text, list, parameters, image, gallery)
- Comments (discussion of products)

If there is no product on server the app will show "Product not found" instead.

In discussion you can add new comment or reply to existing one. New comments do not persist after restarting server app.

## Libraries used

- typescript
- react-bootstrap
- enzyme

## Usage

1. Clone this repository and install dependencies using npm.
### `npm install`

2. Install and run the server from [https://github.com/grohj/coding-assignment-server](https://github.com/grohj/coding-assignment-server).

3. Runs the app in the development mode.\
### `npm start`

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

5. Because project contains only detail page without navigation or product search you will need to change product to load in code (App component > prop - productId).
## Unit testing

There are five tests to test if components draw the right elements based on data or call the right method. In drawing there are tests for both positive and negative result.

- Show "product not found" instead of normal page if there is no product for id.
- Don't show "You are reacting to" in modal for commenting if not replying to anyone.
- If loadData function is called during ComponentDidMount execution. 

### `npm start test`

## Future improvements (pontential to-do)
- Navigation bar
- Search for product function
- More block types (headline, ..)
