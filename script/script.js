 let attempts = 0;
      const maxAttempts = 3;
      const validUser = "mobinali";
      const validPass = "123456";

      const form = document.getElementById("loginForm");
      const msg = document.getElementById("msg");
      const logBtn = document.getElementById("btnLogin");
      const userInput = document.getElementById("username");
      const passInput = document.getElementById("password");

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const user = userInput.value.trim();
        const pass = passInput.value.trim();

        if (user === validUser && pass === validPass) {
          msg.className = "success";
          msg.textContent = "✅ Login successful!";
          attempts = 0;
        } else {
          attempts++;
          if (attempts >= maxAttempts) {
            msg.className = "error";
            msg.textContent = "⛔ Too many attempts! You have been blocked.";
            userInput.disabled = true;
            passInput.disabled = true;
            logBtn.disabled = true;
          } else {
            msg.className = "error";
            msg.textContent = `❌Incorrect username or password . attempts${attempts} of ${maxAttempts}`;
          }
        }
      });