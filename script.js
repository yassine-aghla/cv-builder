const addBtn = document.getElementById("add");
const languageContainer = document.getElementById("language-container");
const displayContainer = document.getElementById("display-container");
function ajouterLangue() {
     const languageDiv = document.createElement("div");
    languageDiv.className = "flex items-center mb-4 space-x-4";
   const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Entrez la langue";
    nameInput.className = "border rounded px-4 py-2 w-full";
    const niveauSelect = document.createElement("select");
    niveauSelect.className = "border rounded px-4 py-2";
     const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = "Sélectionnez le niveau";
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    niveauSelect.appendChild(placeholderOption); 

     const niveaux = ["Courant", "Intermédiaire", "Débutant", "Maternelle"];
     niveaux.forEach(niveau => {
        const option = document.createElement("option");
        option.value = niveau.toLowerCase();
        option.textContent = niveau;
        niveauSelect.appendChild(option);
    });

    
    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "add";
    confirmBtn.className = "bg-blue-500 text-white px-4 py-2 rounded";
    
    
    const deleteBtn = document.createElement("a");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.className = "text-red-500 text-2xl cursor-pointer";
    deleteBtn.addEventListener("click", () => {
        languageContainer.removeChild(languageDiv);
    });

    
    languageDiv.appendChild(nameInput);
    languageDiv.appendChild(niveauSelect);
    languageDiv.appendChild(confirmBtn);
    languageDiv.appendChild(deleteBtn);
     languageContainer.appendChild(languageDiv);

    
    confirmBtn.addEventListener("click", () => {
        afficherLangueEtNiveau(nameInput.value, niveauSelect.value);
        nameInput.value = "";
        niveauSelect.value= "";
    });
}


function afficherLangueEtNiveau(langue, niveau) {
    const displayDiv = document.createElement("div");
    displayDiv.className = "p-2 mb-2 bg-gray-200 rounded";
    displayDiv.textContent = `Langue : ${langue} - Niveau : ${niveau}`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.className = "bg-red-500 text-white px-4 py-2 rounded ml-4";

    
    deleteBtn.addEventListener("click", () => {
        displayContainer.removeChild(displayDiv); 
    });
    displayDiv.appendChild(deleteBtn);

    displayContainer.appendChild(displayDiv);
}


addBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    ajouterLangue();
});



      // travailler la fonctionnalite de skils 

const addSkillBtn = document.getElementById("add-skill");
const skillsContainer = document.getElementById("skills-container");
const displaySkillsContainer = document.getElementById("display-skills-container");

function ajouterSkill() {
    
    const skillDiv = document.createElement("div");
    skillDiv.className = "flex items-center mb-4 space-x-4";

    
    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Entrez la compétence";
    skillInput.className = "border rounded px-4 py-2 w-full";



   
    const confirmSkillBtn = document.createElement("button");
    confirmSkillBtn.textContent = "Add";
    confirmSkillBtn.className = "bg-blue-500 text-white px-4 py-2 rounded";
    
    // Bouton de suppression
    const deleteBtn = document.createElement("a");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.className = "text-red-500 text-2xl cursor-pointer";
    deleteBtn.addEventListener("click", () => {
        skillsContainer.removeChild(skillDiv);
    });

    
    skillDiv.appendChild(skillInput);
 
    skillDiv.appendChild(confirmSkillBtn);
    skillDiv.appendChild(deleteBtn);

   
    skillsContainer.appendChild(skillDiv);

    
    confirmSkillBtn.addEventListener("click", () => {
        afficherSkillEtNiveau(skillInput.value);
        skillInput.value = "";
    });
}


function afficherSkillEtNiveau(skill) {
    const displaySkillDiv = document.createElement("div");
    displaySkillDiv.className = "p-2 mb-2 bg-gray-200 rounded";
    displaySkillDiv.textContent = `Compétence : ${skill} `;
 
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.className = "bg-red-500 text-white px-4 py-2 rounded ml-4 ";

   
    deleteBtn.addEventListener("click", () => {
        displaySkillsContainer.removeChild(displaySkillDiv); 
    });

   
    displaySkillDiv.appendChild(deleteBtn);
    displaySkillsContainer.appendChild(displaySkillDiv);
}


addSkillBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    ajouterSkill();
});