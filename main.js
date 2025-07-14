console.log("main.js loaded");

(async () => {
  console.log("DOM ready");

  const modal = document.getElementById("auth-modal");
  const authLogin = document.getElementById("auth-login");
  const authLogout = document.getElementById("auth-logout");
  const loginBtn = document.getElementById("login-btn");
  const joinBtn = document.getElementById("join-btn");
  const closeBtn = document.getElementById("close-modal");

  if (!window.createAuth0Client) {
    console.error("❌ Auth0 SDK not loaded");
    return;
  }

  const auth0 = await window.createAuth0Client({
    domain: "dev-xx3psku6vr1bv763.us.auth0.com",
    clientId: "MSJmDAsv2jxwafaszQa47QyMZndAEtLf",
    authorizationParams: { redirect_uri: window.location.origin }
  });

  // Handle redirect callback
  if (window.location.search.includes("code=")) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/");
  }

  const updateUI = async () => {
    const isAuth = await auth0.isAuthenticated();
    if (isAuth) {
      loginBtn.textContent = "Dashboard";
      authLogin.style.display = "none";
      authLogout.style.display = "block";
    } else {
      loginBtn.textContent = "Log in";
      authLogin.style.display = "block";
      authLogout.style.display = "none";
    }
  };

  updateUI();

  const showModal = (title) => {
    document.querySelector("#auth-box h2").textContent = title;
    modal.style.display = "flex";
  };

  joinBtn?.addEventListener("click", () => {
    console.log("Join button clicked");
    showModal("Create your ThetaFlowz account");
  });

  loginBtn?.addEventListener("click", () => {
    console.log("Login button clicked");
    showModal("Sign in to ThetaFlowz");
  });

  closeBtn?.addEventListener("click", () => modal.style.display = "none");
  window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };
  document.addEventListener("keydown", e => { if (e.key === "Escape") modal.style.display = 'none'; });

  authLogin?.addEventListener("click", async () => {
    console.log("Continue with Google clicked");
    try {
      await auth0.loginWithRedirect({ connection: "google-oauth2" });
    } catch (err) {
      console.error("Login error:", err);
    }
  });

  authLogout?.addEventListener("click", () => {
    auth0.logout({ logoutParams: { returnTo: window.location.origin } });
  });

  document.getElementById("test-google-login").addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Test login clicked");
    try {
      await auth0.loginWithRedirect({ connection: "google-oauth2" });
    } catch (err) {
      console.error("Test login error:", err);
    }
  });
})();
