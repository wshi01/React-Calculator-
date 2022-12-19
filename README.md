# React-Calculator-

Project uses React along with Tailwindcss. Please install Nodejs if not already on system to run. 
Further running commands are shown by default by React in README file in the folder above. 

## Packages needed 

### `npm install -D tailwindcss postcss autoprefixer`

### `npx tailwindcss init`

## Changes in the node modules folder

`module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`

## Used to deploy (currently not working) 
`npm install gh-pages --save-dev`

Changes to package.json 

`"homepage": "https://wshi01.github.io/React-Calculator/calc_react",`

`"predeploy": "npm run build",`

 `"deploy": "gh-pages -d build"`
 
 `npm run deploy`
 
 Currently is not hosted on Github Pages, you can download and run locally with the above packages in Packages needed. 

## User guide 

1. After entering in an equation you must add a ")" if there is a "(" or else the calculator will throw a syntax error. 
2. After receiving an answer users can edit the answer by adding to the right of the answer, this is intended to build upon the current working number. 

## Features different from last assignment 

1. The eval function is susceptible code injection and causes a security problem if used normally. Code now has, 
eval?.(\`"use strict";(${})\`) to prevent that from happening.
2. Factorial now works with multiple numbers, inspiration was cited in the code. 
3. UI looks better as it has a border around the calculator as it is nested in a container. 
4. Top input, previous input and display of current input/answer is now disabled and no hover cursor shows. 

## Features and code optimization to look back on

1. Organize react components better to not have all logic and code all in one component. 
2. Include the dummy ")", grayed out ")" to remind user to add in the ")" in the end. 
3. Implement the button for "Deg" so it changes from "Deg" to "Rad". 

## Images 

# Normal full sized image 

![1](https://user-images.githubusercontent.com/112670599/208316597-b62f7915-8478-457e-9764-e76fe05f581d.png)

# Smaller form factor image 

![2](https://user-images.githubusercontent.com/112670599/208316630-b0d24350-da35-415f-99b7-cafecbac8eaa.png)

# Multiplication 

![3](https://user-images.githubusercontent.com/112670599/208316644-56be5850-804c-402a-944c-d521d32b0725.png)

# Adding more after the first answer 

![4](https://user-images.githubusercontent.com/112670599/208316645-13f853f6-296e-4751-bbca-7fbb5066e2b4.png)

![5](https://user-images.githubusercontent.com/112670599/208316647-826dfd63-1496-4d99-b656-cd44ca49080e.png)

# Using factorial

![6](https://user-images.githubusercontent.com/112670599/208316670-8dd70d30-ec64-426f-a1a7-765e064c0a40.png)

# Using trig functions

![7](https://user-images.githubusercontent.com/112670599/208316649-5289f5f0-2d51-4ade-bf68-93816f8c7e6f.png)

![8](https://user-images.githubusercontent.com/112670599/208317225-fa802db3-a74f-4792-b37b-a32f7f42b886.png)

Google calculator answer

![9](https://user-images.githubusercontent.com/112670599/208317226-74c94968-f471-4809-86b1-68be61afb407.png)

![10](https://user-images.githubusercontent.com/112670599/208317227-9aa937b8-766d-460b-a805-472bdec2a64f.png)

Google calculator answer

![11](https://user-images.githubusercontent.com/112670599/208317232-e0a66cff-7857-454a-b287-eed6712cf1db.png)
