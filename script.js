
let hero=document.getElementById("hero-section")
let progresse=document.getElementById("bar-progresse")
let forminfo=document.getElementById("form-section-one")
let formEducation=document.getElementById("form-section-two")
let formExperience=document.getElementById("form-section-three")
let formLangue=document.getElementById("form-section-four")
let formSkills=document.getElementById("skills-section")
let formCertif=document.getElementById("certif-section")
let progressBar = document.getElementById("progress-bar")
let barinit="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-0/6 transition-all duration-500 ease-in-out"
let barinfo= "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-1/6 transition-all duration-500 ease-in-out"
let barEducation="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-2/6 transition-all duration-500 ease-in-out"
let barExperience="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-3/6 transition-all duration-500 ease-in-out"
let barLangue="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-4/6 transition-all duration-500 ease-in-out"
let barSkills="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 w-5/6 transition-all duration-500 ease-in-out"
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
    niveauSelect.appendChild(placeholderOption); 

     const niveaux = ["Courant", "Intermédiaire", "Débutant", "Maternelle"];
     niveaux.forEach(niveau => {
        const option = document.createElement("option");
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

function  ajoutreeducation() {
    // nvetude.id = `${education-container}-`
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
  
  function ajoutercertif() {
      
      const certifDiv = document.createElement("div");
      certifDiv.className = "flex items-center mb-4 space-x-4";
  
      
      const certifInput = document.createElement("input");
      certifInput.type = "text";
      certifInput.placeholder = "Entrez la certification";
      certifInput.className = "border rounded px-4 py-2 w-full";
  
  
  
     
      const confirmcertifBtn = document.createElement("button");
      confirmcertifBtn.textContent = "Add";
      confirmcertifBtn.className = "bg-blue-500 text-white px-4 py-2 rounded";
      
      
      const deleteBtn = document.createElement("a");
      deleteBtn.innerHTML = "&times;";
      deleteBtn.className = "text-red-500 text-2xl cursor-pointer";
      deleteBtn.addEventListener("click", () => {
          certifContainer.removeChild(certifDiv);
      });
  
      
      certifDiv.appendChild(certifInput);
   
      certifDiv.appendChild(confirmcertifBtn);
      certifDiv.appendChild(deleteBtn);
  
     
      certifContainer.appendChild(certifDiv);
  
      
      confirmcertifBtn.addEventListener("click", () => {
        afficherCertif(certifInput.value);
          certifInput.value = "";
      });
  }
  
  
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
      ajoutercertif();
  });
  
// const quill = new Quill('#description', {
//     theme: 'snow'
//   });
  const options = {
    debug: 'info',
    modules: {
      toolbar: true,
    },
   
    theme: 'snow'
  };
  const quill = new Quill('#description', options);

 