console.log("JS script loaded!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready.");

  const joinBtn = document.getElementById("join-btn");
  if (joinBtn) {
    console.log("Binding join button...");
    joinBtn.addEventListener("click", () => {
      console.log("Join button clicked");
      // Put your Auth0 login logic or modal pop-up here
    });
  } else {
    console.warn("Join button not found.");
  }

  const loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      console.log("Login button clicked");
      // Auth0 login logic
    });
  }
});
