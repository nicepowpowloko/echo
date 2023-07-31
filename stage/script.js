// Variables globales pour stocker l'état de connexion
let loggedIn = false;
let currentUser = "";

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Vérifier ici les informations d'identification (par exemple, via une API ou un serveur)
  // Pour cet exemple, nous supposerons que les informations d'identification sont correctes
  // Vous devrez mettre en place un mécanisme de vérification sécurisé dans un environnement réel.

  if (username && password) {
    // Connexion réussie
    loggedIn = true
    currentUser = username;

    // Cacher le formulaire de connexion et afficher le contenu de la session connectée
    document.getElementById("login-container").style.display = "none";
    document.getElementById("logout-container").style.display = "block";

    // Mettre à jour le nom d'utilisateur affiché
    document.getElementById("user-display").innerText = currentUser;
  } else {
    alert("Veuillez saisir un nom d'utilisateur et un mot de passe valides.");
  }
}

function logout() {
  // Déconnexion de l'utilisateur
  loggedIn = false;
  currentUser = "";

  // Cacher le contenu de la session connectée et afficher le formulaire de connexion
  document.getElementById("logout-container").style.display = "none";
  document.getElementById("login-container").style.display = "block";
}
