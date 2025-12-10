<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fresh Interactive Site by Iranzi Delyce</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #fafafa;
      margin: 0;
      padding: 0;
    }
    header {
      background: #2b8cd6;
      padding: 25px;
      text-align: center;
      color: white;
    }
    .section {
      background: white;
      margin: 20px auto;
      padding: 20px;
      max-width: 900px;
      border-radius: 10px;
      box-shadow: 0 0 8px rgba(0,0,0,0.1);
    }
    button {
      padding: 10px 15px;
      border: none;
      background: #2b8cd6;
      color: white;
      border-radius: 6px;
      cursor: pointer;
      font-size: 15px;
    }
    button:hover { background: #1d6dac; }
    #colorBox {
      width: 100%;
      height: 120px;
      border-radius: 10px;
      background: #ddd;
      margin-top: 10px;
    }
    input{
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      border-radius: 6px;
      border: 1px solid #bbb;
    }
    .error { color: red; }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to My Mini Interactive Website</h1>
    <p>Created by: <strong>Iranzi Delyce</strong></p>
  </header>

  <div class="section">
    <h2>1. Background Color Changer</h2>
    <p>Click the button to change the box color. I added this because I enjoy simple visuals that react to user clicks.</p>
    <div id="colorBox"></div>
    <button onclick="changeColor()">Change Color</button>
  </div>

  <div class="section">
    <h2>2. Simple Greeting Generator</h2>
    <p>Type your name and get a friendly message from me!</p>
    <input type="text" id="username" placeholder="Type your name...">
    <button onclick="greet()">Greet Me</button>
    <p id="greeting"></p>
  </div>

  <div class="section">
    <h2>3. Basic Email Form Validation</h2>
    <input type="text" id="email" placeholder="Enter your email">
    <button onclick="checkEmail()">Check Email</button>
    <p id="emailError" class="error"></p>
  </div>

  <script>
    function changeColor() {
      const colors = ["#ff7675", "#74b9ff", "#55efc4", "#ffeaa7", "#a29bfe"];   
      document.getElementById('colorBox').style.background = colors[Math.floor(Math.random() * colors.length)];
    }

    function greet() {
      let name = document.getElementById('username').value.trim();
      if(name === ""){
        document.getElementById('greeting').textContent = "Please write your name first 😊";
      } else {
        document.getElementById('greeting').textContent = `Hello ${name}! Thanks for visiting my website.`;
      }
    }

    function checkEmail() {
      let email = document.getElementById('email').value;
      if(!email.includes('@')) {
        document.getElementById('emailError').textContent = "Invalid email. It must contain @";
      } else {
        document.getElementById('emailError').textContent = "Looks good!";
      }
    }
  </script>
</body>
</html>
