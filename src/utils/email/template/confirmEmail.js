export const confirmEmailTemplate = ({link} = {}) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Confirm Email - Saraha App</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .container {
    max-width: 600px;
    margin: 20px auto;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .btn {
    display: inline-block;
    background-color: #007bff;
    color: #ffffff;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 20px;
  }
  .social-icons {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  .social-icons a img {
    width: 30px;
    height: 30px;
  }
</style>
</head>
<body>
  <div class="container">
    <h1>Welcome to Saraha App!</h1>
    <p>Click the button below to confirm your email address:</p>
    <a href="${link}" class="btn">Confirm Email</a>
    <hr>
    <div class="social-icons">
      <a href="https://facebook.com/xhedary"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook"></a>
      <a href="https://github.com/xhedary"><img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub"></a>
      <a href="https://linkedin.com/in/xhedary"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn"></a>
    </div>
    <p style="font-size: 12px; color: #aaa; margin-top: 10px;">Powered by xHedary</p>
  </div>
</body>
</html>
`
}