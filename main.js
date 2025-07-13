console.log("JS script loaded!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready.");

  const joinBtn = document.getElementById("join-btn");
  const loginBtn = document.getElementById("login-btn");
  const modal = document.getElementById("auth-modal");
  const modalTitle = document.querySelector("#auth-box h2");
  const closeModalBtn = document.getElementById("close-modal");

  if (joinBtn) {
    console.log("Binding join button...");
    joinBtn.addEventListener("click", () => {
      console.log("Join button clicked");
      modalTitle.textContent = "Create your ThetaFlowz account";
      modal.style.display = "flex";
    });
  } else {
    console.warn("Join button not found.");
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      console.log("Login button clicked");
      modalTitle.textContent = "Sign in to ThetaFlowz";
      modal.style.display = "flex";
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  });
});
