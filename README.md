# Coding assignment - React webapp

## Overview

Simple react web application which shows product detail page from API provided by [https://github.com/grohj/coding-assignment-server](https://github.com/grohj/coding-assignment-server). 
Page consists of 3 sections
- Header (product title, info and description)
- Info (information blocks - text, list, parameters, image, gallery)
- Comments (discussion of products)

In discussion you can add new comment or reply to existing one. New comments do not persist after restarting server app.

**I have made changes to server application, namely changes to rest API to allow localhost communication and updated data set to have more real data and new block types I have introduced (image gallery and parameters). So please use my own fork of repo (link bellow in usage).**

## Libraries used

- typescript
- react-bootstrap
- enzyme

## Usage

1. Clone this repository and install dependencies using npm.
### `git clone https://github.com/tobtrejbal/coding-assignment-webapp`
### `npm install`

2. Install and run the server from [https://github.com/grohj/coding-assignment-server](https://github.com/grohj/coding-assignment-server).

3. Runs the app in the development mode.
### `npm start`

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

5. Because project contains only detail page without navigation or product search you will need to use search query in order to navigate to product (eg. http://localhost:3000/?id=1) 
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

## App look
![image](https://user-images.githubusercontent.com/26760980/147757642-aed696f2-8a0a-4d19-8aad-3664dbf5a88f.png)
