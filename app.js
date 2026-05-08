// Selection des elements html//
let input = document.querySelector(".input-tache");
let bouton = document.querySelector(".btn-ajout");
let liste = document.querySelector(".tache-list");

// Fonction pour ajout de tache
function ajouterTache(){
    let text = input.value.trim();

    // reinitialiser le champ de saisie apres une saisie 
    input.value = "";

    // Condition: si aucune tache n'est saisie, alerter au click!!! et revenir
    if (text === "") {
        alert("Entrez une tâche!");
        return;
    }

    // Creation de l'element li pour génerer les listes
    let li = document.createElement("li");
    li.textContent = text;

    // ajout du li dans la liste ou la balise ul 
    liste.appendChild(li);

    // // creation du bouton pour editer les taches
    let editButton = document.createElement("button");
    editButton.textContent = "Editer";

    // definition de la class pour stylisation CSS futur
    editButton.classList.add("edit-btn");

    // creer ecouteur d'évenement pour le bouton modifier
    editButton.onclick = function(){
        let newstext = prompt("Modifier la tâche", text);

         if (newstext !== "") {
        li.firstChild.textContent = newstext;
    }
    }


    // ajout du bouton modifier a la liste de tache
    li.appendChild(editButton);

    // creation du bouton pour supprimer les taches
    let deleteButton =  document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.classList.add("delete-btn");

    // creation de ecouteur d'evenement pour le bouton supprimer 
    deleteButton.addEventListener("click", function(){
        li.remove();
    })

    // ajout du bouton supprimer a la liste des tache 
    li.appendChild(deleteButton);

}
