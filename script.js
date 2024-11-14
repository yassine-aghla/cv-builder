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

    
    confirmBtn.addEventListener("click", (e) => {
        e.preventDefault()
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

  const option = {
    debug: 'info',
    modules: {
      toolbar: true,
    },
   
    theme: 'snow'
  };
  const quil = new Quill('#description_E', option);

//   const formElements = {
//     heroSection: document.getElementById("hero-section"),
//     progress: document.getElementById("bar-progresse"),
//     formSections: {
//         info: document.getElementById("form-section-one"),
//         education: document.getElementById("form-section-two"),
//         experience: document.getElementById("form-section-three"),
//         language: document.getElementById("form-section-four"),
//         skills: document.getElementById("skills-section"),
//         certification: document.getElementById("certif-section"),
//     },
//     progressBar: document.getElementById("progress-bar"),
//     modelChoice: document.getElementById("cv_container"),
//     icons: {
//         info: document.getElementById("step1"),
//         education: document.getElementById("step2"),
//         experience: document.getElementById("step3"),
//         language: document.getElementById("step4"),
//         skills: document.getElementById("step5"),
//         certification: document.getElementById("step6"),
//     },
//     displayContainers: {
//         language: document.getElementById("display-container"),
//         skills: document.getElementById("display-skills-container"),
//         certification: document.getElementById("display-certif-container"),
//     }
// };

// document.addEventListener("DOMContentLoaded", function(){

//     const CIVI = document.querySelector('#form-section-one');
//     const bitina = document.querySelector('#bitina');
//     console.log(bitina);
//     bitina.addEventListener("click", ()=>{
//         const CV = {margin: 0.5, image:{type: 'PNG'}, filename:'helloo.pdf', jsPDF:{format:'a4'} };
//         html2pdf().set(CV).from(CIVI).save();
//     })
//     });
    
    // function downloadPDF(){
    //     const { jsPDF } = window.jspdf;
    //     const doc = new jsPDF();
    //     const image = document.getElementById('image').src;
    
    
        
    
    //     const input1 = document.getElementById('first-name').value;
    //     const input2 = document.getElementById('last-name').value;
    //     const input3 = document.getElementById('titre').value;
    //     const input4 = document.getElementById('city').value;
    //     const input5 = document.getElementById('country').value;
    
    
    //     doc.setFont('arial');
    //     doc.setFontSize(18);
    //     doc.setTextColor(200,50,80);
    
    //     doc.text(` `);
    
    
    
    
    
    //     doc.text('HTML2PDFFFFFFFFF', 100, 20);
        
    //     doc.setFontSize(16);
    //     doc.setTextColor(280,50,80);
    //     doc.text('input', 80, 60);
    //     doc.setFontSize(40);
    //     doc.setTextColor(0,50,150);
    //     doc.text(` ${input1}`, 80, 80);
    //     doc.text(`input3: ${input3}`, 80, 90);
    //     doc.text(`input4: ${input4}`, 80, 110);
    //     doc.text(`input5: ${input5}`, 80, 130);
    
    //     if (image !== "") {
    //         doc.addImage(image, 'PNG', 10, 70, 120, 100);
    //     }
    
    
    //     doc.save('Test Format.pdf');
    
    // }
    
    // Function to preview the image uploaded by the user
    // function previewImage(event) {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();
    
    //     reader.onload = function () {
    //         const imagePreview = document.getElementById('imagePreview');
    //         imagePreview.src = reader.result;  // Set the image source to the uploaded image
    //         imagePreview.style.display = 'block'; // Show the image preview
    //     };
    
    //     if (file) {
    //         reader.readAsDataURL(file); // Read the image as a data URL
    //     }
    // }
    // recuperation des infos personnele
   // Récupérer les données du localStorage ou initialiser un tableau vide
//  let arr = JSON.parse(localStorage.getItem('arr')) || [];
//  let arr = [];
// const personalInfoForm = document.querySelector("#form-section-one");
// const cvSection = document.getElementById("cv_final");
// const yassine = document.getElementById("yassine")
// const btnsave = document.getElementById("btn");

// function saveinfo() {
//     // console.log("saveinfo called");

//     // Récupérer les données du formulaire
//     // const image = document.getElementById("image").files[0]; // Récupère l'image téléchargée
//     const firstName = document.getElementById("first-name").value;
//     const lastName = document.getElementById("last-name").value;
//     const title = document.getElementById("titre").value;
//     const city = document.getElementById("city").value;
//     const pays = document.getElementById("country").value;
//     const cPost = document.getElementById("postal-code").value;
//     const phone = document.getElementById("phone").value;
//     const linkden = document.getElementById("linkden").value;
//     const github = document.getElementById("github").value;
     
//     // console.log(firstName,lastName,title, city,pays, cPost, phone, linkden, github)
    
//     // Créer un objet avec les informations du formulaire
//     const obj = { 
//         firstName: firstName,
//         lastName: lastName,
//         title: title,
//         city: city,
//         pays: pays,
//         cPost: cPost,
//         phone: phone,
//         linkden: linkden,
//         github: github
//         // image: image ? URL.createObjectURL(image) : "" 
//     };

//     arr.push(obj);
//     // addLocalStorage()
//     // personalInfoForm.reset();
//     displayinfo(obj);
// }

// // function addLocalStorage() {
// //     window.localStorage.setItem('arr', JSON.stringify(arr));
// // }

// function displayinfo(obj) {
//     console.log("displayinfo called");

   
//     const personalInfoDiv = document.createElement("div");
//     personalInfoDiv.className = "personal-info";
    
   
//     personalInfoDiv.innerHTML = `
//         <div class="border-b-2 border-gray-600  ">
//         <div class="d flex justify-between">
//             <div class="img">
//                 <img src="" alt="image-de-cv" onchange= "previewImage(event)">
//             </div>
//             <div class="info">
//                  <div class="nom"><h2 class="text-3xl font-semibold mb-6 text-gray-800 text-center">${obj.firstName} ${obj.lastName}</h2></div>
//                  <div class="title"><h3 class="text-xl font-semibold mb-6 text-gray-400 text-center">${obj.title}</h2></div>
//                  <div class="grid grid-cols-3 gap-4">
//                     <div class="ville flex gap-2">
//                         <div class="icon_ville "><i class="fas fa-city"></i></div>
//                         <div class="nom_ville" >${obj.city}</div>
//                     </div>
//                     <div class="pays flex gap-2">
//                         <div class="icon_pays"><i class="fas fa-flag"></i></div>
//                         <div class="nom_pays" > ${obj.pays}</div>
//                     </div>
//                     <div class="code_postal flex gap-2">
//                         <div class="icon_postal"><i class="fas fa-map-marker-alt"></i></div>
//                         <div class="nom_postal" >${obj.cPost}</div>
//                     </div>
//                     <div class="tele flex gap-2">
//                         <div class="icon_tele"><i class="fas fa-phone"></i></div>
//                         <div class="nom_tele" >${obj.phone}</div>
//                     </div>
//                     <div class="linkden flex gap-2">
//                         <div class="icon_linkden"><i class="fab fa-linkedin"></i></div>
//                         <div class="nom_linkden" >"${obj.linkden}"</div>
//                     </div>
//                     <div class="ville flex gap-2">
//                         <div class="icon_github"><i class="fab fa-github"></i></div>
//                         <div class="nom_github" >"${obj.github}"</div>
//                     </div>
                    
// </div>
// </div>


//     `;

// //     // Ajouter le div à la section du CV
//      cvSection.appendChild(personalInfoDiv);
// }

// // // Afficher les informations déjà présentes dans `arr` au chargement de la page
//  arr.forEach(displayinfo);

// // // Lier la fonction au bouton de soumission du formulaire
// yassine.addEventListener("click", function(e) {
//     e.preventDefault(); // Empêcher l'envoi du formulaire
//     saveinfo();
//     submitCV() ;

// });
// // window.onload=displayinfo();

// // recuperation des infos education
 



// // function submitCV() {
// //     // Récupérer toutes les valeurs des champs d'éducation
// //     let ecole = (document.querySelectorAll(".ecole"));
// //     console.log(ecole);
    
// //     let lieu = Array.from(document.querySelectorAll(".lieu"));
// //     console.log(lieu);
// //     let degree = Array.from(document.querySelectorAll(".diplome"));
// //     console.log(degree);
// //     let domaine = Array.from(document.querySelectorAll(".domaine"));
// //     console.log(domaine);
    
// //     let date_diplome = Array.from(document.querySelectorAll(".annee_diplome"));
// //     console.log(date_diplome);
// //     let description = Array.from(document.querySelectorAll(".description"));
// //     console.log(description);
    
// //     // Vider le tableau des données précédentes
// //     data = [];

// //     // Créer un tableau d'objets pour chaque entrée d'éducation
// //     for (let i = 0; i < ecole.length; i++) {
// //         let educ = {
// //             ecole: ecole[i].value,
// //             lieu: lieu[i].value,
// //             degree: degree[i].value,
// //             domaine: domaine[i].value,
// //             date_diplome: date_diplome[i].value,
// //             description: description[i].value
// //         };
// //         data.push(educ);
// //     }

// //     // Afficher les informations dans le CV
// //     afficherEducation();
// // }

// // function afficherEducation() {
// //     const educationContainer = document.getElementById('cv_final');
// //     educationContainer.innerHTML =""; // Vider l'affichage avant de le remplir

// //     // Ajouter chaque entrée d'éducation à la section du CV
// //     data.map((entry) => {
// //         const entryDiv = document.createElement('div');
// //         entryDiv.classList.add('mb-6', 'border-b', 'pb-4');
// //         entryDiv.innerHTML = `
// //             <h3 class="font-semibold">${entry.ecole} - ${entry.degree}</h3>
// //             <p><strong>Lieu:</strong> ${entry.lieu}</p>
// //             <p><strong>Domaine d'étude:</strong> ${entry.domaine}</p>
// //             <p><strong>Année de diplôme:</strong> ${entry.date_diplome}</p>
// //             <p><strong>Description:</strong> ${entry.description}</p>
// //         `;
// //         educationContainer.appendChild(entryDiv);
// //     });
// // } 

   

















// // recuperation des infos experience

// // let post=document.getElementById("post").value
// // let ville=document.getElementById("ville").value
// // let typeDeContrat=document.getElementById("genre")
// // let description_Experince=document.getElementById("description_E")
// // let valeurInput=typeDeContrat.value;
// // console.log(valeurInput);

// // Récupérer les données depuis le localStorage, ou initialiser un tableau vide si pas de données
// // Initialisation du tableau d'éducation et récupération des données existantes


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
        <p><strong>Prénom :</strong> ${firstName}</p>
        <p><strong>Nom :</strong> ${lastName}</p>
        <p><strong>Titre :</strong> ${title}</p>
        <p><strong>Ville :</strong> ${city}</p>
        <p><strong>Pays :</strong> ${country}</p>
        <p><strong>Code Postal :</strong> ${postalCode}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>LinkedIn :</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <p><strong>GitHub :</strong> <a href="${github}" target="_blank">${github}</a></p>
    `;

    document.getElementById("cv-content").innerHTML = cvContent;
    document.getElementById("cv-section").classList.add("visible");
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
    const description = newEntry.querySelector('#description').textContent;

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
            <h3>${education.ecole} - ${education.lieu}</h3>
            <p>Diplôme : ${education.degree}</p>
            <p>Domaine : ${education.domaine}</p>
            <p>Date : ${education.dateDiplome}</p>
            <p>Description : ${education.description}</p>
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
    const description_Exp = neww.querySelector('#description_E').textContent;
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
            <h3>${experience.post} </h3>
            <p>${experience.ville} </p>
            <p>Diplôme : ${experience.genre}</p>
            <p>Domaine : ${experience.description_Exp}</p>
            <p>Date : ${experience.dateDeDebut}</p>
            <p>Description : ${experience.dateDeFin}</p>
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
        cvDiv.textContent = `Langue : ${language.langue} - Niveau : ${language.niveau}`;

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
        const skillValue = skillInput.value.trim();
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
        displaySkillDiv.textContent = `Compétence : ${skill}`;

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

