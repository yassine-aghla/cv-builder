let data = []
let hero=document.getElementById("hero-section")
let progresse=document.getElementById("bar-progresse")
let forminfo=document.getElementById("form-section-one")
let formEducation=document.getElementById("form-section-two")
let formExperience=document.getElementById("form-section-three")
let formLangue=document.getElementById("form-section-four")
let formSkills=document.getElementById("skills-section")
let formCertif=document.getElementById("certif-section")
let progressBar = document.getElementById("progress-bar")
let modelChoise=document.getElementById("cv_container")
let barinit="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-0/6 transition-all duration-500 ease-in-out"
let barinfo= "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-1/6 transition-all duration-500 ease-in-out"
let barEducation="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-2/6 transition-all duration-500 ease-in-out"
let barExperience="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-3/6 transition-all duration-500 ease-in-out"
let barLangue="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-4/6 transition-all duration-500 ease-in-out"
let barSkills="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-5/6 transition-all duration-500 ease-in-out"
let barCertif="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-6/6 transition-all duration-500 ease-in-out"
let color="flex items-center justify-center w-10 h-10 bg-blue-500 text-white font-bold rounded-full transition-all duration-500 ease-in-out"
let nonColor="flex items-center justify-center w-10 h-10 bg-blue-200 text-gray-500 font-bold rounded-full transition-all duration-500 ease-in-out"
let iconInfo=document.getElementById("step1")
let iconEducation=document.getElementById("step3")
let iconExperience=document.getElementById("step2")
let iconlangue=document.getElementById("step4")
let iconskiils=document.getElementById("step5")
let iconCertif=document.getElementById("step6")
function displayFormInfo(){
    hero.style.display="none"
    progresse.style.display="block"
    forminfo.style.display="block"
    progressBar.className=barinit;
     formEducation.style.display="none"
     iconInfo.className=color;
     iconEducation.className=nonColor;

    
}
function displayFormEducation(){
    hero.style.display="none"
    forminfo.style.display="none"
    progresse.style.display="block"
    formEducation.style.display="block"
    formExperience.style.display="none"
    progressBar.className=barinfo;
    iconInfo.className=color;
    iconEducation.className=color;
    iconExperience.className=nonColor;
    formCertif.style.display="none";
    

   
}
function displayFormExperience(){
    formEducation.style.display="none"
     progresse.style.display="block"
     formExperience.style.display="block"
   formLangue.style.display="none"
      progressBar.className=barEducation;
      iconExperience.className=color;
      iconEducation.className=color;
      iconlangue.className=nonColor;
      formCertif.style.display="none";


// let ecole=Array.from(document.querySelectorAll(".ecole")) 
// let ecolearry = ecole.map(x=>x)
// console.log(ecole);
// console.log(ecolearry);


 
// let lieu =Array.from(document.querySelectorAll(".lieu"))
// let lieuearry =  lieu.map(x=>x)

// let degree = Array.from (document.querySelectorAll(".diplome"));
// let degreearry = degree.map(x=>x)

// let domaine=Array.from (document.querySelectorAll(".domaine"));
// let dominearry = domaine.map(x=>x)

// let date_diplome=Array.from (document.querySelectorAll(".annee_diplome"))
// let dataarray =  date_diplome.map(x=>x)

// let description=Array.from (document.querySelectorAll(".description"))
// let descreptionarry = description.map(x=>x)

// let educ={};

// for(let i=0;i<ecolearry.length;i++){

//     educ={
//         ecole:ecolearry[i].value,
//         lieu:lieuearry[i].value,
//         degree:degreearry[i].value,
//         domaine:dominearry[i].value,
//         description:descreptionarry[i].value
//     }
//     data.push(educ);
//     console.log(data);
    
// }
    
     

}
function displayformlangue(){
      formExperience.style.display="none"
      progresse.style.display="block"
      formLangue.style.display="block"
      formSkills.style.display="none"
      progressBar.className=barExperience;
      iconlangue.className=color;
      iconExperience.className=color;
      iconskiils.className=nonColor;
      formCertif.style.display="none";
}

function displayformskils(){
    formLangue.style.display="none"
    progresse.style.display="block"
    formSkills.style.display="block"
    progressBar.className=barLangue;
    iconskiils.className=color;
    iconlangue.className=color;
    iconCertif.className=nonColor;
    formCertif.style.display="none";
}
function displayformcertif(){
    formSkills.style.display="none"
    progresse.style.display="block"
    formCertif.style.display="block"
    progressBar.className=barSkills;
    iconskiils.className=color;
    iconlangue.className=color;
    iconCertif.className=color;


}
function displayModelChoix(){
    modelChoise.style.display="block";
    progressBar.className=barCertif;
    formCertif.style.display="none";

}

const addBtn = document.getElementById("add");
const languageContainer = document.getElementById("language-container");
const displayContainer = document.getElementById("display-container");
// function ajouterLangue() {
//      const languageDiv = document.createElement("div");
//     languageDiv.className = "flex items-center mb-4 space-x-4";
//    const nameInput = document.createElement("input");
//     nameInput.type = "text";
//     nameInput.placeholder = "Entrez la langue";
//     nameInput.className = "border rounded px-4 py-2 w-full";
//     const niveauSelect = document.createElement("select");
//     niveauSelect.className = "border rounded px-4 py-2";
//      const placeholderOption = document.createElement("option");
//     placeholderOption.value = "";
//     placeholderOption.textContent = "Sélectionnez le niveau";
//     placeholderOption.disabled = true;
//     niveauSelect.appendChild(placeholderOption); 

//      const niveaux = ["Courant", "Intermédiaire", "Débutant", "Maternelle"];
//      niveaux.forEach(niveau => {
//         const option = document.createElement("option");
//         option.textContent = niveau;
//         niveauSelect.appendChild(option);
//     });

    
//     const confirmBtn = document.createElement("button");
//     confirmBtn.textContent = "add";
//     confirmBtn.className = "bg-blue-500 text-white px-4 py-2 rounded";
    
    
//     const deleteBtn = document.createElement("a");
//     deleteBtn.innerHTML = "&times;";
//     deleteBtn.className = "text-red-500 text-2xl cursor-pointer";
//     deleteBtn.addEventListener("click", () => {
//         languageContainer.removeChild(languageDiv);
//     });

    
//     languageDiv.appendChild(nameInput);
//     languageDiv.appendChild(niveauSelect);
//     languageDiv.appendChild(confirmBtn);
//     languageDiv.appendChild(deleteBtn);
//      languageContainer.appendChild(languageDiv);

    
//     confirmBtn.addEventListener("click", (e) => {
//         e.preventDefault()
//         afficherLangueEtNiveau(nameInput.value, niveauSelect.value);
//         nameInput.value = "";
//         niveauSelect.value= "";
//     });
// }


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

// function ajouterSkill() {
    
//     const skillDiv = document.createElement("div");
//     skillDiv.className = "flex items-center mb-4 space-x-4";

    
//     const skillInput = document.createElement("input");
//     skillInput.type = "text";
//     skillInput.placeholder = "Entrez la compétence";
//     skillInput.className = "border rounded px-4 py-2 w-full";



   
//     const confirmSkillBtn = document.createElement("button");
//     confirmSkillBtn.textContent = "Add";
//     confirmSkillBtn.className = "bg-blue-500 text-white px-4 py-2 rounded";
    
    
//     const deleteBtn = document.createElement("a");
//     deleteBtn.innerHTML = "&times;";
//     deleteBtn.className = "text-red-500 text-2xl cursor-pointer";
//     deleteBtn.addEventListener("click", () => {
//         skillsContainer.removeChild(skillDiv);
//     });

    
//     skillDiv.appendChild(skillInput);
 
//     skillDiv.appendChild(confirmSkillBtn);
//     skillDiv.appendChild(deleteBtn);

   
//     skillsContainer.appendChild(skillDiv);

    
//     confirmSkillBtn.addEventListener("click", () => {
//         afficherSkillEtNiveau(skillInput.value);
//         skillInput.value = "";
//     });
// }


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

function  ajoutreeducation() {
   
     const container = document.getElementById('education-container');
     const newEntry = container.querySelector('.education-entry').cloneNode(true);
        container.appendChild(newEntry);
     }
     function  ajoutreExperience() {
        const contenu = document.getElementById('experience-container');
        const neww = contenu.querySelector('.experience-entry').cloneNode(true);
           contenu.appendChild(neww);
        }
    


 

  const addCertifBtn = document.getElementById("add-certif");
  const certifContainer = document.getElementById("certif-container");
  const displaycertifContainer = document.getElementById("display-certif-container");
  
//   function ajoutercertif() {
      
    //   const certifDiv = document.createElement("div");
    //   certifDiv.className = "flex items-center mb-4 space-x-4";
  
      
    //   const certifInput = document.createElement("input");
    //   certifInput.type = "text";
    //   certifInput.placeholder = "Entrez la certification";
    //   certifInput.className = "border rounded px-4 py-2 w-full";
  
  
  
     
    //   const confirmcertifBtn = document.createElement("button");
    //   confirmcertifBtn.textContent = "Add";
    //   confirmcertifBtn.className = "bg-blue-500 text-white px-4 py-2 rounded";
      
      
    //   const deleteBtn = document.createElement("a");
    //   deleteBtn.innerHTML = "&times;";
    //   deleteBtn.className = "text-red-500 text-2xl cursor-pointer";
    //   deleteBtn.addEventListener("click", () => {
    //       certifContainer.removeChild(certifDiv);
    //   });
  
      
//       certifDiv.appendChild(certifInput);
   
//       certifDiv.appendChild(confirmcertifBtn);
//       certifDiv.appendChild(deleteBtn);
  
     
//       certifContainer.appendChild(certifDiv);
  
      
//       confirmcertifBtn.addEventListener("click", () => {
//         afficherCertif(certifInput.value);
//           certifInput.value = "";
//       });
//   }
  
  
  function afficherCertif(certif) {
      const displaycertifDiv = document.createElement("div");
      displaycertifDiv.className = "p-2 mb-2 bg-gray-200 rounded";
      displaycertifDiv.innerHTML = `certification :est  ${certif} `;
   
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Supprimer";
      deleteBtn.className = "bg-red-500 text-white px-4 py-2 rounded ml-4 ";
  
     
      deleteBtn.addEventListener("click", () => {
          displaycertifContainer.removeChild(displaycertifDiv); 
      });
  
     
      displaycertifDiv.appendChild(deleteBtn);
      displaycertifContainer.appendChild(displaycertifDiv);
  }
  
  
  addCertifBtn.addEventListener("click", (e) => {
      e.preventDefault(); 
      ajouterCertif();
  });
  



document.querySelector("button[onclick='displayFormEducation()']").addEventListener("click", displayCV);

function displayCV() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const title = document.getElementById("titre").value;
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    const postalCode = document.getElementById("postal-code").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const linkedin = document.getElementById("linkden").value;
    const github = document.getElementById("github").value;

    const cvContent = `
        <p class="text-3xl font-semibold mb-6 text-gray-800 text-center"> ${firstName}  ${lastName}</p>
        <p class="text-xl font-semibold mb-6 text-gray-400 text-center">${title}</p>
        <div class="grid grid-cols-3 gap-4">
        <div class="ville flex gap-2">
         <div class="icon_ville "><i class="fas fa-city"></i></div>
                        <div class="nom_ville" >${city}</div>
                    </div>
       <div class="pays flex gap-2">
                        <div class="icon_pays"><i class="fas fa-flag"></i></div>
                        <div class="nom_pays" >${country}</div>
                    </div>
        <div class="code_postal flex gap-2">
                        <div class="icon_postal"><i class="fas fa-map-marker-alt"></i></div>
                        <div class="nom_postal" >${postalCode}</div>
                    </div>
         <div class="tele flex gap-2">
                        <div class="icon_tele"><i class="fas fa-phone"></i></div>
                        <div class="nom_tele" > ${phone}</div>
                    </div>
       
             <div class="ville flex gap-2">
                        <div class="icon_github"><i class="fab fa-github"></i></div>
                        <div class="nom_github" ><a href="${github}" target="_blank">Mon github</a></div>
                    </div>
                    <div class="linkden flex flex-wrap gap-2">
                        <div class="icon_linkden"><i class="fab fa-linkedin"></i></div>
                        <div class="nom_linkden" ><a href="${linkedin}" target="_blank">Mon linkden</a></div>
                    </div>
                     <div class="email flex gap-2">
                        <div class="icon_email"><i class="fas fa-envelope"></i></div>
                        <div class="nom_email" >${email}</div>
                    </div>
        
    `;

    document.getElementById("cv-content-info").innerHTML = cvContent;
    
}
   

// Tableau pour stocker les entrées d'éducation
let educationList = [];

// Fonction pour ajouter une nouvelle entrée d'éducation et mettre à jour l'affichage
function ajoutreeducation() {
    const container = document.getElementById('education-container');
    const newEntry = container.querySelector('.education-entry').cloneNode(true);

    // Récupérer les valeurs du formulaire
    const ecole = newEntry.querySelector('#ecole').value;
    const lieu = newEntry.querySelector('#lieu').value;
    const degree = newEntry.querySelector('#degree').value;
    const domaine = newEntry.querySelector('#domaine').value;
    const dateDiplome = newEntry.querySelector('#date_diplome').value;
    const description = newEntry.querySelector('#description').value;

    // Vérifier si les champs sont remplis avant d'ajouter
    if (ecole && lieu && degree && domaine && dateDiplome) {
        // Ajouter l'entrée au tableau d'éducation
        educationList.push({ ecole, lieu, degree, domaine, dateDiplome, description });
        
        // Afficher la mise à jour du CV
        displayEducationOnCV();
        
        // Ajouter le nouvel élément dans le formulaire
        container.appendChild(newEntry);
    } else {
        alert("Veuillez remplir tous les champs avant d'ajouter une éducation.");
    }
}

// Fonction pour afficher les entrées d'éducation sur le CV
function displayEducationOnCV() {
    const cvSection = document.getElementById('cv-education-section');
    cvSection.innerHTML = ''; // Réinitialiser le contenu

    // Parcourir les entrées d'éducation et les afficher
    educationList.forEach((education) => {
        const entry = document.createElement('div');
        entry.classList.add('education-entry');
        entry.innerHTML = `
          <div class="titre_education"><h2 class="text-3xl font-semibold mb-6 text-gray-800 text-center">Education</h2></div>
          <div class="nom_education">  
            <div class="flex"> <strong class= "text-gray-800" >Nom de lecole : </strong>   <h3>${education.ecole}  </h3></div>
             <div class="flex"> <strong class= "text-gray-800">lieu de lecole : </strong>   <h3>${education.lieu}  </h3></div>
             <div class="flex">  <strong class= "text-gray-800">degree  : </strong>   <h3>${education.degree}  </h3></div>
             <div class="flex">   <strong class= "text-gray-800">domaine : </strong>   <h3>${education.domaine}  </h3></div>
              <div class="flex">   <strong class= "text-gray-800">date de diplome  : </strong>   <h3>${education.dateDiplome}  </h3></div>
              <div class="flex">    <strong class= "text-gray-800">votre description : </strong>   <h3>${education.description}  </h3>
                  
            
        `;
        cvSection.appendChild(entry);
    });
}

// Ajouter un gestionnaire d'événement au bouton "Ajouter une autre éducation"
document.querySelector("button[onclick='displayFormExperience()']").addEventListener('click', ajoutreeducation);




// Tableau pour stocker les expériences
let ExperienceList = [];

// Fonction pour ajouter une nouvelle entrée d'éducation et mettre à jour l'affichage
function ajoutreExperience() {
    const contenu = document.getElementById('experience-container');
    const neww = contenu.querySelector('.experience-entry').cloneNode(true);

    // Récupérer les valeurs du formulaire
    const post = neww.querySelector('#post').value;
    const ville = neww.querySelector('#ville').value;
    const genre = neww.querySelector('#genre').value;
    const description_Exp = neww.querySelector('#description_E').value;
    const dateDeDebut = neww.querySelector('#datededebut').value;
    const dateDeFin = neww.querySelector('#datedefin').value;

    // Vérifier si les champs sont remplis avant d'ajouter
    if (post && ville && genre && description_Exp && dateDeDebut && dateDeFin) {
        // Ajouter l'entrée au tableau d'éducation
        ExperienceList.push({ post, ville, genre, description_Exp, dateDeDebut, dateDeFin });
        
        // Afficher la mise à jour du CV
        displayExperienceOnCV();
        
        // Ajouter le nouvel élément dans le formulaire
        contenu.appendChild(neww);
    } else {
        alert("Veuillez remplir tous les champs avant d'ajouter une éxperience.");
    }
}

// Fonction pour afficher les entrées d'éducation sur le CV
function displayExperienceOnCV() {
    const cvSectionEx = document.getElementById('experience-display');
    cvSectionEx.innerHTML = ''; // Réinitialiser le contenu

    // Parcourir les entrées d'éducation et les afficher
    ExperienceList.forEach((experience) => {
        const entryex = document.createElement('div');
        entryex.classList.add('experience-entry');
        entryex.innerHTML = `
        <div class="titre_education"><h2 class="text-3xl font-semibold mb-6 text-gray-800 text-center">Experience</h2></div>
          <div class="nom_education">  
          <div class="flex">  <strong class= "text-gray-800" >votre post : </strong> <h3>${experience.post}  </h3></div>
             <div class="flex"> <strong class= "text-gray-800">votre ville : </strong> <h3>${experience.ville}  </h3></div>
              <div class="flex"> <strong class= "text-gray-800">genre  : </strong>  <h3>${experience.genre}  </h3></div>
              <div class="flex">  <strong class= "text-gray-800">votre description : </strong> <h3>${experience.description_Exp}  </h3></div>
              <div class="flex">   <strong class= "text-gray-800">date de debut: </strong><h3>${experience.dateDeDebut}  </h3></div>
               <div class="flex">   <strong class= "text-gray-800">date de fin :</strong><h3>${experience.dateDeFin}  </h3></div>
            
            
        `;
        cvSectionEx.appendChild(entryex);
    });
}

// Ajouter un gestionnaire d'événement au bouton "Ajouter une autre éducation"
document.querySelector("button[onclick='displayformlangue()']").addEventListener('click', ajoutreExperience);



// const addBtn = document.getElementById("add");
// const languageContainer = document.getElementById("language-container");
// const displayContainer = document.getElementById("display-container");

// Tableau pour stocker les langues et leurs niveaux
// const addBtn = document.getElementById("add");
// const languageContainer = document.getElementById("language-container");
// const displayContainer = document.getElementById("display-container");
// const cvLanguageDisplay = document.getElementById("cv-language-display");

// Tableau pour stocker les langues et leurs niveaux
 


const cvLanguageDisplay = document.getElementById("cv-language-display");

// Tableau pour stocker les langues et leurs niveaux
let languages = [];

function ajouterLangue() {
    // Créer un div pour contenir la langue et son niveau
    const languageDiv = document.createElement("div");
    languageDiv.className = "flex items-center mb-4 space-x-4";

    // Créer un champ pour entrer la langue
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Entrez la langue";
    nameInput.className = "border rounded px-4 py-2 w-full";

    // Créer un select pour le niveau
    const niveauSelect = document.createElement("select");
    niveauSelect.className = "border rounded px-4 py-2";
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = "Sélectionnez le niveau";
    placeholderOption.disabled = true;
    niveauSelect.appendChild(placeholderOption);

    // Ajouter les options de niveaux
    const niveaux = ["Courant", "Intermédiaire", "Débutant", "Maternelle"];
    niveaux.forEach(niveau => {
        const option = document.createElement("option");
        option.textContent = niveau;
        niveauSelect.appendChild(option);
    });

    // Créer un bouton de confirmation pour ajouter la langue
    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Ajouter";
    confirmBtn.className = "bg-blue-500 text-white px-4 py-2 rounded";

    // Créer un bouton de suppression
    const deleteBtn = document.createElement("a");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.className = "text-red-500 text-2xl cursor-pointer";
    deleteBtn.addEventListener("click", () => {
        languageContainer.removeChild(languageDiv);
    });

    // Ajouter les éléments dans le conteneur de langue
    languageDiv.appendChild(nameInput);
    languageDiv.appendChild(niveauSelect);
    languageDiv.appendChild(confirmBtn);
    languageDiv.appendChild(deleteBtn);
    languageContainer.appendChild(languageDiv);

    // Fonction qui sera appelée lors du clic sur "Ajouter"
    confirmBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const langue = nameInput.value;
        const niveau = niveauSelect.value;

        if (langue && niveau) {
            // Ajouter la langue au tableau
            languages.push({ langue, niveau });

            // Réinitialiser les champs de saisie
            nameInput.value = "";
            niveauSelect.value = "";

            // Mettre à jour l'affichage des langues dans le CV
            afficherLanguesDansCV();
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    });
}

function afficherLanguesDansCV() {
    // Vider les anciennes langues affichées
    cvLanguageDisplay.innerHTML = '';

    // Parcourir le tableau de langues et afficher chaque langue

    languages.forEach(language => {
        const cvDiv = document.createElement("div");
        cvDiv.className = "p-2 mb-2 bg-gray-200 rounded";
        cvDiv.innerHTML = `
         
        <h4>Langue : ${language.langue} - Niveau : ${language.niveau} </h4>`;

        // Ajouter cette langue à l'affichage dans le CV
        cvLanguageDisplay.appendChild(cvDiv);
    });
}

// Ajouter un événement pour le bouton "Ajouter"
addBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    ajouterLangue();
});





// Array pour stocker les compétences
let skillsArray = [];

function ajouterSkill() {
    const skillDiv = document.createElement("div");
    skillDiv.className = "flex items-center mb-4 space-x-4";

    // Création du champ pour la compétence
    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Entrez la compétence";
    skillInput.className = "border rounded px-4 py-2 w-full";

    // Bouton de confirmation pour la compétence
    const confirmSkillBtn = document.createElement("button");
    confirmSkillBtn.textContent = "Add";
    confirmSkillBtn.className = "bg-blue-500 text-white px-4 py-2 rounded";

    // Bouton de suppression de la compétence
    const deleteBtn = document.createElement("a");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.className = "text-red-500 text-2xl cursor-pointer";
    deleteBtn.addEventListener("click", () => {
        skillsContainer.removeChild(skillDiv);
    });

    // Ajout des éléments à la div de la compétence
    skillDiv.appendChild(skillInput);
    skillDiv.appendChild(confirmSkillBtn);
    skillDiv.appendChild(deleteBtn);
    skillsContainer.appendChild(skillDiv);

    // Événement de confirmation pour ajouter la compétence au tableau
    confirmSkillBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const skillValue = skillInput.value;
        if (skillValue !== "") {
            skillsArray.push(skillValue); // Ajouter la compétence dans le tableau
            afficherSkills(); // Mettre à jour l'affichage des compétences
            skillInput.value = ""; // Réinitialiser le champ d'entrée
        }
    });
}
let affichskills=document.getElementById("cv-skiils-display")
// Fonction pour afficher toutes les compétences du tableau dans le CV
function afficherSkills() {
    affichskills.innerHTML = ""; // Effacer le contenu actuel

    // Afficher chaque compétence
    skillsArray.forEach(skill => {
        const displaySkillDiv = document.createElement("div");
        displaySkillDiv.className = "p-2 mb-2 bg-gray-200 rounded";
        displaySkillDiv.innerHTML = `
           
        Compétence : ${skill}`;

        // Bouton de suppression pour chaque compétence affichée
        // const deleteBtn = document.createElement("button");
        // deleteBtn.textContent = "Supprimer";
        // deleteBtn.className = "bg-red-500 text-white px-4 py-2 rounded ml-4";
        // deleteBtn.addEventListener("click", () => {
        //     supprimerSkill(skill); // Supprimer la compétence du tableau
        //     afficherSkills(); // Mettre à jour l'affichage après suppression
        // });

        // Ajouter le bouton de suppression à la compétence affichée
        // displaySkillDiv.appendChild(deleteBtn);
        affichskills.appendChild(displaySkillDiv);
    });
}

// Fonction pour supprimer une compétence du tableau
function supprimerSkill(skill) {
    skillsArray = skillsArray.filter(item => item !== skill); // Retirer la compétence du tableau
}

// Événement pour le bouton d'ajout de compétence
addSkillBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    ajouterSkill();
});





let certifArray = [];

function ajouterCertif() {
    const certifDiv = document.createElement("div");
    certifDiv.className = "flex items-center mb-4 space-x-4";

    // Création du champ pour la certification
    const certifInput = document.createElement("input");
    certifInput.type = "text";
    certifInput.placeholder = "Entrez la certification";
    certifInput.className = "border rounded px-4 py-2 w-full";

    // Bouton de confirmation pour la certification
    const confirmCertifBtn = document.createElement("button");
    confirmCertifBtn.textContent = "Add";
    confirmCertifBtn.className = "bg-blue-500 text-white px-4 py-2 rounded";

    // Bouton de suppression de la certification
    const deleteBtn = document.createElement("a");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.className = "text-red-500 text-2xl cursor-pointer";
    deleteBtn.addEventListener("click", () => {
        certifContainer.removeChild(certifDiv);
    });

    // Ajout des éléments à la div de la certification
    certifDiv.appendChild(certifInput);
    certifDiv.appendChild(confirmCertifBtn);
    certifDiv.appendChild(deleteBtn);
    certifContainer.appendChild(certifDiv);

    // Événement de confirmation pour ajouter la certification au tableau
    confirmCertifBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const certifValue = certifInput.value.trim();
        if (certifValue !== "") {
            certifArray.push(certifValue); // Ajouter la certification dans le tableau
            afficherCertif(); // Mettre à jour l'affichage des certifications
            certifInput.value = ""; // Réinitialiser le champ d'entrée
        }
    });
}

// Fonction pour afficher toutes les certifications du tableau dans le CV
let affichcertif=document.getElementById("cv-certif-display")
function afficherCertif() {
    affichcertif.innerHTML = ""; // Effacer le contenu actuel

    // Afficher chaque certification
    certifArray.forEach(certif => {
        const displayCertifDiv = document.createElement("div");
        displayCertifDiv.className = "p-2 mb-2 bg-gray-200 rounded";
        displayCertifDiv.innerHTML = `
            
        Certification : ${certif}`;

        // Bouton de suppression pour chaque certification affichée
        // const deleteBtn = document.createElement("button");
        // deleteBtn.textContent = "Supprimer";
        // deleteBtn.className = "bg-red-500 text-white px-4 py-2 rounded ml-4";
        // deleteBtn.addEventListener("click", () => {
        //     supprimerCertif(certif); // Supprimer la certification du tableau
        //     afficherCertif(); // Mettre à jour l'affichage après suppression
        // });

        // Ajouter le bouton de suppression à la certification affichée
        // displayCertifDiv.appendChild(deleteBtn);
        affichcertif.appendChild(displayCertifDiv);
    });
}

// Fonction pour supprimer une certification du tableau
function supprimerCertif(certif) {
    certifArray = certifArray.filter(item => item !== certif); // Retirer la certification du tableau
}

// Événement pour le bouton d'ajout de certification
addCertifBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    ajouterCertif();
});
let btntelecharger=document.getElementById("btntelechargement")
let afficherceve=document.getElementById("cv-section")
function affichercv(){
    progresse.style.display="none"
     formCertif.style.display="none"
  afficherceve.style.display="block"
  btntelecharger.style.display="block"
}

// document.addEventListener("DOMContentLoaded", function(){

//     const CIVI = document.querySelector('#cv-section');
//     const telecharger = document.querySelector('#btntelechargement');
   
//     // telecharger.addEventListener("click", ()=>{
    //     const CV = {margin: 0,
    //         filename: 'yasine.pdf',
    //         // image: { type: "jpeg", quality: 0.98 },
    //         html2canvas: { scale: 6 },
    //         jsPDF: { unit: "px", format: "letter", orientation: "portrait" }, };
    //     html2pdf().set(CV).from(CIVI).save();
    // })
    // });

    const telecharger = document.querySelector('#btntelechargement');
    telecharger.addEventListener("click", async function () {
        const CIVI = document.querySelector('#cv-section');
       
        const filename = "my-cv.pdf";
      
        const options = {
          margin: 0,
          filename: filename,
        //   image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 3 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        try {
          await html2pdf().set(options).from(CIVI).save();
        } catch (error) {
          
        }
      });
    



    // document.querySelector("#button_info").addEventListener("click", function (e) {
    //     e.preventDefault(); // Empêche l'envoi du formulaire si la validation échoue
    
    //     const firstName = document.querySelector("#first-name").value.trim();
    //     const lastName = document.querySelector("#last-name").value.trim();
    //     const titre = document.querySelector("#titre").value.trim();
    //     const city = document.querySelector("#city").value.trim();
    //     const country = document.querySelector("#country").value.trim();
    //     const postalCode = document.querySelector("#postal-code").value.trim();
    //     const phone = document.querySelector("#phone").value.trim();
    //     const email = document.querySelector("#email").value.trim();
    //     const linkden = document.querySelector("#linkden").value.trim();
    //     const github = document.querySelector("#github").value.trim();
    
    //     let valid = true;
    
    //     // Regex pour chaque champ
    //     const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/; // Prénoms/Noms avec caractères spéciaux autorisés
    //     const postalCodeRegex = /^\d{4,10}$/; // Code postal entre 4 et 10 chiffres
    //     const phoneRegex = /^\+?\d{8,15}$/; // Numéro de téléphone (avec ou sans indicatif)
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Format email
    //     const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$/; // URL valide
    
    //     // Validation des champs
    //     if (!nameRegex.test(firstName)) {
    //         valid = false;
    //         document.getElementById("nameError").textContent = "Please enter your name.";
    //     document.getElementById("nameError").classList.remove("hidden");
    //     }
    //     if (!nameRegex.test(lastName)) {
    //         alert("Nom invalide. Veuillez entrer un nom valide.");
    //         valid = false;
    //     }
    //     if (titre === "") {
    //         alert("Le titre du CV ne peut pas être vide.");
    //         valid = false;
    //     }
    //     if (!nameRegex.test(city)) {
    //         alert("Ville invalide. Veuillez entrer une ville valide.");
    //         valid = false;
    //     }
    //     if (!nameRegex.test(country)) {
    //         alert("Pays invalide. Veuillez entrer un pays valide.");
    //         valid = false;
    //     }
    //     if (!postalCodeRegex.test(postalCode)) {
    //         alert("Code postal invalide. Veuillez entrer un code postal valide.");
    //         valid = false;
    //     }
    //     if (!phoneRegex.test(phone)) {
    //         alert("Numéro de téléphone invalide. Veuillez entrer un numéro valide.");
    //         valid = false;
    //     }
    //     if (!emailRegex.test(email)) {
    //         alert("Email invalide. Veuillez entrer un email valide.");
    //         valid = false;
    //     }
    //     if (linkden && !urlRegex.test(linkden)) {
    //         alert("URL LinkedIn invalide. Veuillez entrer un lien valide.");
    //         valid = false;
    //     }
    //     if (github && !urlRegex.test(github)) {
    //         alert("URL GitHub invalide. Veuillez entrer un lien valide.");
    //         valid = false;
    //     }
    
    //     if (valid) {
    //         alert("Formulaire soumis avec succès !");
            
    //     }
    // });
    