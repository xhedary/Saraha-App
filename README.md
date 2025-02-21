# Saraha-App

## Description

simple E-commerce API.

## Technologies

<div>
    
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
  <br>
  <center>
  
  <img src="https://camo.githubusercontent.com/2dbe8dc3b8fa5ac59437c9d8c94323ad3f0052d3ff5ac0e9c258ceb5daba76f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f31362e332e312d646f74656e762d726564">
  <img src="https://camo.githubusercontent.com/71fe39e1c67b1793f22d11c188a2cdd86438a84e5635b783ed1d1691f8e1c8d2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f312e34312e302d636c6f7564696e6172792d626c7565">
  <img src="https://camo.githubusercontent.com/a3ff2a5d02a913cdf673537dea66873aecaf58cb8c770f9225e2d2959712ed6b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f312e342e352d2d6c74732e312d6d756c7465722d726564">
  <img src="https://camo.githubusercontent.com/e098806c441efac8d7c44cbb0cf5000f113dfc54db28d16bbfcbeddc3ba316ed/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f312e31302e302d6d6f7267616e2d726564">
  <img src="https://camo.githubusercontent.com/b9fe7b2faa1b963c1d1b77ee18a4a7689a0d46d18cf38a48ae464f2a03357eba/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f362e392e342d6e6f64656d61696c65722d726564">
  <img src="https://camo.githubusercontent.com/2aa8d320fc8552d10a9f66e1076360d1f0c9ef2ee5adaea034cd13f68ca1efdc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f352e312e302d6263727970742d726564">
  <img src="https://camo.githubusercontent.com/f73e41f53709208ed3f07c001ccb103454212e26e6d296fa823e02cde579b205/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f312e322e302d657870726573732d2d6173796e632d2d68616e646c65722d726564">
  <img src="https://camo.githubusercontent.com/bdd58addfeff8b18867ab6606b24bd158319885f8c1918ec13c5786259b6c5ab/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f372e302e312d657870726573732d2d76616c696461746f722d726564">

  </center>
</dev>

## _Key Features:_

## Installation

1. _Clone the Repository:_
   Use the git clone command to clone the GitHub repository to your local machine.
   bash
   git clone 'https://github.com/xhedary/Saraha-App'
2. **Initialize a Package.json File (if not already done):**
   If your project doesn't already have a `package.json` file, you can create one by running:
   bash
   npm init
   # or
   yarn init
3. _Install depends_
   bash
   npm install
4. <br>

## Project Structure
d:/Route/projects/Saraha/
├── .gitignore
├── index.js
├─] node_modules/ (ignored)
├── notes.txt
├── package-lock.json
├── package.json
├── README.md
└── src/
    ├── app.controller.js
    ├─] config/ (ignored)
    ├── DB/
    │   ├── connection.js
    │   └── model/
    │       ├── message.model.js
    │       └── user.model.js
    ├── middleware/
    │   ├── authentication.meddleware.js
    │   └── validation.meddleware.js
    ├── modules/
    │   ├── auth/
    │   │   ├── auth.controller.js
    │   │   ├── auth.validation.js
    │   │   └── services/
    │   │       ├── login.service.js
    │   │       └── registration.service.js
    │   ├── message/
    │   │   ├── message.cotroller.js
    │   │   └── services/
    │   │       ├── message.service.js
    │   │       └── message.validation.js
    │   └── user/
    │       ├── services/
    │       │   └── user.service.js
    │       ├── user.controller.js
    │       ├── user.endpoint.js
    │       └── user.validation.js
    └── utils/
        ├── email/
        │   ├── send.email.js
        │   └── template/
        │       ├── confirmEmail.js
        │       ├── confirmEmailOtp.js
        │       └── reactivateAccountOtp.js
        ├── error/
        │   └── error.js
        ├── events/
        │   └── email.event.js
        ├── response/
        │   └── success.response.js
        └── security/
            ├── encryption.js
            ├── hash.js
            └── token.js
