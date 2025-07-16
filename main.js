// main.js

let auth0 = null;

// Initialize Auth0 client
async function initAuth0() {
  auth0 = await createAuth0Client({
    domain: "YOUR_DOMAIN",
    client_id: "YOUR_CLIENT_ID",
    cacheLocation: "localstorage", // optional
  });
}

function showModal(show) {
  document.getElementById('auth-modal').style.display = show ? 'flex' : 'none';
}

document.getElementById('login-btn').onclick = () => showModal(true);
document.getElementById('join-btn').onclick = () => showModal(true);
document.getElementById('close-modal').onclick = () => showModal(false);

document.getElementById('auth-login').onclick = async () => {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin,
    // connection: "google-oauth2", // Uncomment to force Google login
  });
};

document.getElementById('auth-logout').onclick = async () => {
  await auth0.logout({
    returnTo: window.location.origin,
  });
};

// Handle redirect after login
window.onload = async () => {
  await initAuth0
