function printMousePos(event) { // function printMousePos() fonction qui permet d'avoir les coordonnées
                                // grâce à l'évenement event

    document.body.textContent = // On écrit dans le Document le contenu de X et Y
      "X: " + event.clientX +
      "Y: " + event.clientY;
  }
  
  document.addEventListener("click", printMousePos); // on indique que si on click 
                                                     //on obtient les coordonnées de la souris
                                                     //
                                                     //