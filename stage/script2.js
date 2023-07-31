// Fonction pour s'inscrire en tant que nouvel utilisateur
function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
  
    if (username && password) {
      // Sauvegarder les informations d'inscription dans localStorage (remplacez par une base de données côté serveur)
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
  
      // Effacer le formulaire d'inscription après l'inscription réussie
      document.getElementById("registration-container").style.display = "none";
      document.getElementById("login-container").style.display = "block";
    } else {
      alert("Veuillez saisir un nom d'utilisateur et un mot de passe valides.");
    }
  }
  
  // Fonction pour se connecter en tant qu'utilisateur existant
  function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
  
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
  
    if (username === storedUsername && password === storedPassword) {
      // Connexion réussie
      document.getElementById("login-container").style.display = "none";
      document.getElementById("logout-container").style.display = "block";
  
      // Mettre à jour le nom d'utilisateur affiché
      document.getElementById("user-display").innerText = username;
    } else {
      alert("Identifiants incorrects. Veuillez réessayer.");
    }
  }
  
  // Fonction pour se déconnecter
  function logout() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("logout-container").style.display = "none";
  
    // Vider les informations de connexion stockées (ceci est simplifié, en production, vous devez gérer les sessions côté serveur)
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
  