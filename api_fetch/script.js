const backendURL = 'https://api.example.com'; // Remplacez par l'URL de votre backend

// Fonction pour s'inscrire en tant que nouvel utilisateur
function register() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  if (username && password) {
    // Effectuer une requête POST pour s'inscrire
    fetch(`${backendURL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Réponse JSON renvoyée par le backend (par exemple, confirmation d'inscription)
      document.getElementById("registration-container").style.display = "none";
      document.getElementById("login-container").style.display = "block";
    })
    .catch(error => {
      console.error('Erreur lors de l\'inscription :', error);
    });
  } else {
    alert("Veuillez saisir un nom d'utilisateur et un mot de passe valides.");
  }
}

// Fonction pour se connecter en tant qu'utilisateur existant
function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username && password) {
    // Effectuer une requête POST pour se connecter
    fetch(`${backendURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Réponse JSON renvoyée par le backend (par exemple, confirmation de connexion)
      document.getElementById("login-container").style.display = "none";
      document.getElementById("logout-container").style.display = "block";
      document.getElementById("user-display").innerText = username;
    })
    .catch(error => {
      console.error('Erreur lors de la connexion :', error);
    });
  } else {
    alert("Veuillez saisir un nom d'utilisateur et un mot de passe valides.");
  }
}

// Fonction pour se déconnecter
function logout() {
  // Effectuer une requête POST pour se déconnecter
  fetch(`${backendURL}/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data); // Réponse JSON renvoyée par le backend (par exemple, confirmation de déconnexion)
    document.getElementById("login-container").style.display = "block";
    document.getElementById("logout-container").style.display = "none";
    document.getElementById("user-display").innerText = '';
  })
  .catch(error => {
    console.error('Erreur lors de la déconnexion :', error);
  });
}
