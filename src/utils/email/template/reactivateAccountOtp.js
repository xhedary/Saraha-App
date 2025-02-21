export const reactivateAccount = ({ link, otp } = {}) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reactivate Account - Saraha App</title>
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
  .otp-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  .otp {
    font-size: 24px;
    font-weight: bold;
    background-color: #f3f3f3;
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
    margin-right: 10px;
  }
  .copy-btn {
    background: none;
    border: none;
    cursor: pointer;
  }
</style>
</head>
<body>
  <div class="container">
    <h1>Reactivate Your Account</h1>
    <p>Please use the OTP below to reactivate your account:</p>
    <div class="otp-container">
      <p id="otp" class="otp">${otp}</p>
      <button onclick="copyOTP()" class="copy-btn">
        <img src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png" alt="Copy" width="24" height="24">
      </button>
    </div>
    <p id="copyMessage" style="color: green; font-size: 14px; margin-top: 5px; display: none;">OTP copied successfully!</p>
    
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
      var tempInput = document.createElement("input");
      tempInput.value = otpText;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      
      var copyMessage = document.getElementById("copyMessage");
      copyMessage.style.display = "block";
      setTimeout(() => {
        copyMessage.style.display = "none";
      }, 2000);
    }
  </script>
</body>
</html>
`
}