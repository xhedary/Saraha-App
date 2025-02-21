export const confirmEmailTemplateOtp = ({ link, otp } = {}) => {
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
  .otp-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
  }
  .otp-box {
    background-color: #f3f3f3;
    padding: 10px 20px;
    display: inline-block;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  .copy-btn {
    background: none;
    border: none;
    cursor: pointer;
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
    <p>Please use the following OTP to confirm your email address:</p>
    <div class="otp-container">
      <div id="otp" class="otp-box">${otp}</div>
      <button class="copy-btn" onclick="copyOTP()">
        <img src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png" alt="Copy" width="24" height="24">
      </button>
    </div>
    <p id="copied-message" style="color: green; font-size: 14px; display: none;">OTP copied to clipboard!</p>
    <p>This OTP is valid for 10 minutes.</p>
    <p>If you did not request this code, you can safely ignore this email.</p>
    <a href="#" class="btn">Confirm Email</a>
    <hr>
    <div class="social-icons">
      <a href="https://facebook.com/xhedary"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook"></a>
      <a href="https://github.com/xhedary"><img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub"></a>
      <a href="https://linkedin.com/in/xhedary"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn"></a>
    </div>
    <p style="font-size: 12px; color: #aaa; margin-top: 10px;">Powered by xHedary</p>
  </div>

  <script>
    function copyOTP() {
      var otpText = document.getElementById("otp").innerText;
      navigator.clipboard.writeText(otpText);
      var copiedMessage = document.getElementById("copied-message");
      copiedMessage.style.display = "block";
      setTimeout(() => copiedMessage.style.display = "none", 2000);
    }
  </script>
</body>
</html>

`
}