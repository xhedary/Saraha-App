# Saraha App - Anonymous Messaging Platform 🚀

## 📌 About the Project
Saraha App is a secure, anonymous messaging platform that allows users to send and receive anonymous messages while maintaining complete privacy. Built with **Node.js, Express, and MongoDB**, this project prioritizes **security, scalability, and performance**.


## Technologies

<div>
    
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
  <br>
</dev>
## 🔧 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Validation:** Joi for endpoint validation
- **Security:**
  - Password hashing: **bcrypt**
  - Encryption: **CryptoJS** (phone numbers encryption)
  - Secure authentication: **JWT, nanoID for OTPs**
- **Email Services:** Nodemailer for OTP and account verification

## 🔥 Features
- ✅**Anonymous Messaging:** Users can send and receive messages anonymously
- ✅ **Secure Authentication:** JWT-based authentication
- ✅ **Strong Data Validation:** Joi validation for structured input
- ✅ **Account Management:** Freeze accounts, session termination, secure password reset
- ✅ **Robust Security:** Password hashing, encrypted sensitive data, OTP-based verification
- ✅ **Scalability:** Designed with an event-driven architecture for high performance


## Installation
1. **Clone the Repository:**
   Use the `git clone` command to clone the GitHub repository to your local machine.
   ```bash
   git clone 'https://github.com/xhedary/Saraha-App'
2. **Initialize a Package.json File (if not already done):**
   If your project doesn't already have a `package.json` file, you can create one by running:
   ```bash
   npm init
   # or
   yarn init
3. **Install depends:**
   ```bash
   npm install
4. **Setting up env variables:**
   - **Please first specifiy your database engine**
    ```properties
    ## PORT
    PORT=number 
    
    ## DB URI
    DB_URI=connection-string   
    
    ## JWT access token
    TOKEN_SIGNATURE = string
    TOKEN_SIGNATURE_ADMIN = string
    PHONE_ENC = string
    SALT=number
    SIGNATURE = string

    ## Email
    EMAIL= 
    EMAIL_PASSWORD=
    EMAIL_TOKEN_SIGNATURE=

    #
    MOOD =
    FE_URL = 
    
## Project Structure
 ```powershell
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
```
## 🔗 Connect with Me
[LinkedIn](https://linkedin.com/in/xhedary) | [Facebook](https://www.facebook.com/xhedary)
