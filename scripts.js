document.addEventListener('DOMContentLoaded', () => {
  // Masquer la popup-hover-js sur les petits écrans
  if (window.innerWidth < 600) {
    const hoverPopup = document.getElementById('popup-hover-js');
    if (hoverPopup) {
      hoverPopup.style.display = 'none';  // Masquer la popup-hover sur mobile
    }
  }
    // Sélectionne toutes les régions par leur id
    const regions = [
      'Centre-Val-de-Loire', 'Bretagne', 'Bourgogne-Franche-Comte', 'Grand-Est',
      'Occitanie', 'Hauts-de-France', 'Auvergne-Rhone-Alpes', 'Normandie', 'Pays-de-la-Loire',
      'PACA', 'Ile-de-France', 'Nouvelle-Aquitaine'
    ];

    // Fonction pour suivre les clics sur les régions avec Google Analytics
const trackRegionClick = (regionId) => {
  if (typeof gtag === 'function') {
      gtag('event', 'click', {
          'event_category': 'Region',
          'event_label': regionId,
      });
  } else {
      console.warn('Google Analytics (gtag) non disponible');
  }
};

  const regionData = {
      'Centre-Val-de-Loire': {
          title: '<h1 style="font-weight: normal;">Centre-Val de Loire</h1>',
          sections: [
              { title: '<h2 style="font-weight: normal"> À la recherche d’un dynamisme perdu</h2>', content: '' },
              { title: '<h2 style="font-weight: normal"> </h2>', content: 'Le Centre-Val de Loire voit fortement disparaître ses <b>commerces de proximité</b> (63 %, +9 points par rapport à la moyenne nationale) <b>et ses services publics</b> (56 %, +12 pts moy. nat., 1ère place du classement région par région). Ses habitants, même freinés par le manque de moyens financiers, sont néanmoins 82 % (+5 pts moy. nat) à avoir changé ou être en train de changer tout ce qui peut l&rsquo;être dans leur mode de vie pour diminuer leur impact environnemental.' },
          ],
          pdfLink: '/ressources/pdfs/publications/barometre-des-territoires-2025-centre-val-de-loire.pdf',
          imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/centre-val-de-loire.png' // Chemin vers l'image */

      },

      'Bretagne': {
        title: '<h1 style="font-weight: normal;">Bretagne</h1>',
        sections: [
          { title: '<h2 style="font-weight: normal"> Prochainement dévoilé</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Prochainement dévoilé' },
          ],
        pdfLink: 'Bretagne',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/bretagne.png' // Chemin vers l'image */

      },

      'Bourgogne-Franche-Comte': {
        title: '<h1 style="font-weight: normal;">Bourgogne Franche-Comté</h1>',
         sections: [
          { title: '<h2 style="font-weight: normal"> L’attachement malgré l’inquiétude</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Les habitants de Bourgogne Franche-Comté sont très attachés à leur région (74 %, +4 points par rapport à la moyenne nationale) même s&rsquo;ils constatent que là où ils vivent, <b>les paysages et la biodiversité changent</b> (46 %, +9 pts moy. nat.) et que <b>leur quartier n&rsquo;est pas dynamique</b> (54 %, +9 pts moy. nat., 1ère place du classement région par région)' },
          ],
        pdfLink: '/ressources/pdfs/publications/barometre-des-territoires-2025-bourgogne-franche-comte.pdf',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/bourgogne-franche-comte.png' // Chemin vers l'image */

      },

      'Grand-Est': {
        title: '<h1 style="font-weight: normal;">Grand-Est</h1>',
         sections: [
          { title: '<h2 style="font-weight: normal"> Prochainement dévoilé</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'Prochainement dévoilé' },
          ],
        pdfLink: 'Grand-Est',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/grand-est.png' // Chemin vers l'image */

      },

      'Occitanie': {
        title: '<h1 style="font-weight: normal;">Occitanie</h1>',
         sections: [
          { title: '<h2 style="font-weight: normal">Face à la mer et aux changements climatiques</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Les habitants d&rsquo;Occitanie se sentent particulièrement exposés aux <b>catastrophes naturelles</b> liées au dérèglement climatique (48 %, +12 pts  points par rapport à la moyenne nationale) qui pourraient <b>détruire des emplois</b> (44 %, +10 pts moy. nat.). Ils sont tout de même prêts aux <b>changements</b> (80 %, +1 pt moy. nat.)' },
          ],
        pdfLink: '/ressources/pdfs/publications/barometre-des-territoires-2025-occitanie.pdf',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/occitanie.png' // Chemin vers l'image */

      },

      'Hauts-de-France': {
        title: '<h1 style="font-weight: normal;">Hauts-de-France</h1>',
         sections: [
          { title: '<h2 style="font-weight: normal"> La difficulté du pouvoir de vivre</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Les habitants des Hauts-de-France ont particulièrement le sentiment que le <b>modèle social est en panne</b> (49 % soit +4 pts par rapport à la moyenne nationale) et que <b> l&rsquo;identité de la France </b> est menacée (77 %, +5 pts moy. nat.). C&rsquo;est la catégorie des "<b>empêchés</b>" qui y est la plus représentée dans la région, caractérisée par le manque de moyen pour <b>diagnostiquer leur émissions de CO2</b> (67 %, +6 pts moy. nat.).' },
          ],
        pdfLink: '/ressources/pdfs/publications/barometre-des-territoires-2025-haut-de-france.pdf',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/hauts-de-france.png' // Chemin vers l'image */

      },

      'Auvergne-Rhone-Alpes': {
        title: '<h1 style="font-weight: normal;">Auvergne Rhône-Alpes</h1>',
         sections: [
          { title: '<h2 style="font-weight: normal"> Pourtant, que la montagne est belle</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: '52 % des habitants voient <b>les paysages changer à cause du dérèglement climatique</b> (+14 points par rapport à la moyenne nationale, 1ère place du classement région par région). Cela touche particulièrement les habitants du massif alpin : 74 % pour les Savoyards et Haut-Savoyards. <b>L’impact du mode de vie sur les ressources naturelles est un sujet de discussion</b> pour 47 % des habitants (+6 pts moy. nat., 1ère place).' },
          ],
        pdfLink: '/ressources/pdfs/publications/barometre-des-territoires-2025-auvergne-rhone-alpes.pdf',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/auvergne-rhone-alpes.png' // Chemin vers l'image */

      },
      'Normandie': {
        title: '<h1 style="font-weight: normal;">Normandie</h1>',
        sections: [
          { title: '<h2 style="font-weight: normal"> Un havre (trop ?) tranquille</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Très attachés à leur pays (79 %, -1 pts moyenne nat) les Normands estiment qu’il fait <b>bon vivre</b> dans leur quartier (82 %, +4 pts) et qu’ils <b>s’y sentent en sécurité</b> (84 %, +6 pts moy. nat.), même s&rsquo;ils remarquent la <b>disparition de services publics</b> (53 %, +9 pts moy. nat.)' },
          ],
        pdfLink: '/ressources/pdfs/publications/barometre-des-territoires-2025-normandie.pdf',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/normandie.png' // Chemin vers l'image */

      },
      'Pays-de-la-Loire': {
        title: '<h1 style="font-weight: normal;">Pays de la Loire</h1>',
         sections: [
          { title: '<h2 style="font-weight: normal"> Le bon tempo</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Le dynamisme des Pays de la Loire transparaît dans les témoignages des habitants. Ils pensent qu&rsquo;il fait <b>bon vivre</b> dans leur quartier (86 %, +8 points par rapport à la moyenne nationale) et que les habitants prennent des initiatives pour animer <b>la vie locale</b> (63 %, +10 pts moy. nat.)' },
          ],
        pdfLink: '/ressources/pdfs/publications/barometre-des-territoires-2025-pays-de-la-loire.pdf',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/pays-de-la-loire.png' // Chemin vers l'image */

      },
      'PACA': {
        title: '<h1 style="font-weight: normal;">PACA</h1>',
        sections: [
          { title: '<h2 style="font-weight: normal"> Prochainement dévoilé</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Prochainement dévoilé' },
          ],
        pdfLink: 'PACA',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/paca.png' // Chemin vers l'image

      },
      'Ile-de-France': {
        title: '<h1 style="font-weight: normal;"> Ile-de-France</h1>',
         sections: [
          { title: '<h2 style="font-weight: normal">Prochainement dévoilé</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Prochainement dévoilé' },
          ],
          pdfLink: 'Ile-de-France',
          imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/ile-de-france.png' // Chemin vers l'image */

      },
      'Nouvelle-Aquitaine': {
        title: '<h1 style="font-weight: normal;">Nouvelle-Aquitaine</h1>',
         sections: [
          { title: '<h2 style="font-weight: normal">Une économie à l’ombre du risque climatique</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Les habitants de Nouvelle-Aquitaine jugent qu&rsquo;ils vivent dans un <b>endroit qui va bien</b> (69 %, +4 points par rapport à la moyenne nationale) malgré la forte <b>exposition aux risques climatiques</b> (41 %, +5 pts moy. nat.). 34 % ( +9 pts moy. nat., 1ère place du classement région par région) des habitants ont déjà eu <b>des dégâts sur leur logement</b> à cause de catastrophes naturelles.' }
],
        pdfLink: '/ressources/pdfs/publications/barometre-des-territoires-2025-nouvelle-aquitaine.pdf',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/nouvelle-aquitaine.png' // Chemin vers l'image */

      }
    };

     /*
     /////// CODE TEST CI-DESSOUS ///////// 
    // Initialisation lors du chargement de la page
  window.addEventListener("load", updateComparisonLayout);
  
  // Réagir aux changements de taille de la fenêtre
  window.addEventListener("resize", updateComparisonLayout);

    // Fonction pour alimenter les listes déroulantes avec les régions
      const regionSelect1 = document.getElementById('region-select-1');
      const regionSelect2 = document.getElementById('region-select-2');
      const comparisonResults = document.getElementById('comparison-results');
      const compareButton = document.getElementById('compare-button');
    
      // Fonction pour alimenter les listes déroulantes avec les régions
      const populateRegionSelects = () => {
        // Vérifie que les éléments select existent dans le DOM avant d'ajouter les options
        if (regionSelect1 && regionSelect2) {
          regions.forEach(regionId => {
            const option1 = document.createElement('option');
            const option2 = document.createElement('option');
            option1.value = regionId;
            option1.textContent = regionId;
            option2.value = regionId;
            option2.textContent = regionId;
    
            regionSelect1.appendChild(option1);
            regionSelect2.appendChild(option2);
          });
          console.log('Regions loaded into selects');
        } else {
          console.error('Les éléments select ne sont pas trouvés dans le DOM');
        }
      };
    
      // Fonction pour comparer deux régions et afficher les titres de leurs sections
      const compareRegions = (regionId1, regionId2) => {
        if (!regionId1 || !regionId2) {
          comparisonResults.innerHTML = '<p>Veuillez sélectionner deux régions pour les comparer.</p>';
          return;
        }
    
        const data1 = regionData[regionId1];
        const data2 = regionData[regionId2];
    
        if (!data1 || !data2) {
          comparisonResults.innerHTML = '<p>Impossible de récupérer les informations des régions sélectionnées.</p>';
          return;
        }
           // Récupération du deuxième titre et contenu pour chaque région
          const section1 = data1.sections[1];
          const section2 = data2.sections[1];

          if (!section1 || !section2) {
              comparisonResults.innerHTML = '<p>Les informations pour l’une des régions sont incomplètes.</p>';
              return;
          }
    
        // Affichage des résultats avec le deuxième titre et son contenu
          comparisonResults.innerHTML = `
          <div class="comparison-row">
              <div class="comparison-column">
                  <h3 class="comparison-title">${data1.title}</h3>
                  <h4>${section1.title}</h4>
                  <p>${section1.content}</p>
              </div>
              <div class="comparison-column">
                  <h3 class="comparison-title">${data2.title}</h3>
                  <h4>${section2.title}</h4>
                  <p>${section2.content}</p>
              </div>
          </div>
      `;
};
    
      // Alimenter les listes déroulantes au chargement
      populateRegionSelects();
    
      // Gestion du clic sur le bouton de comparaison
      compareButton.addEventListener('click', () => {
        const regionId1 = regionSelect1.value;
        const regionId2 = regionSelect2.value;
        compareRegions(regionId1, regionId2);
      });
      


      ///////// responsivité tableau ////
      function updateComparisonLayout() {
        const comparisonContainer = document.querySelector(".comparison-container");
        const comparisonRow = document.querySelector(".comparison-row");
        const regionSelect1 = document.getElementById("region-select-1");
        const regionSelect2 = document.getElementById("region-select-2");
        const compareButton = document.getElementById("compare-button");
    
        // Vérifier si les éléments existent
        if (!comparisonContainer || !comparisonRow || !regionSelect1 || !regionSelect2 || !compareButton) {
            console.error("Un ou plusieurs éléments nécessaires ne sont pas trouvés dans le DOM.");
            return;
        }
    
        // Mode Mobile (max-width: 600px)
        if (window.innerWidth <= 600) {
            // Mettre en colonne
            comparisonRow.style.flexDirection = "column";
            comparisonRow.style.alignItems = "center";
            comparisonRow.style.gap = "15px"; // Espacement entre les éléments
            compareButton.style.width = "100%"; // Le bouton Comparer prend toute la largeur
            compareButton.style.marginTop = "10px"; // Espacement entre le bouton et les autres éléments
    
        } else {
            // Mode Desktop
            comparisonRow.style.flexDirection = "row";
            comparisonRow.style.alignItems = "flex-start";
            comparisonRow.style.gap = "20px"; // Espacement entre les colonnes
            compareButton.style.width = "auto"; // Le bouton reprend sa taille normale
            compareButton.style.marginTop = "0"; // Pas d'espacement supplémentaire en mode desktop
        }
    }
    
    // Initialisation lors du chargement de la page
    window.addEventListener("load", updateComparisonLayout);
    
    // Réagir aux changements de taille de la fenêtre
    window.addEventListener("resize", updateComparisonLayout);
    
      
  //////////// CODE TEST CI-DESSUS //////////
*/

  document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.querySelector('.map-container');
    const interactiveMap = document.querySelector('.interactive-map');
  
    // Ajuster l'espace blanc au-dessus de la carte pour les mobiles
    function adjustMapContainer() {
        const windowWidth = window.innerWidth;
        
        if (windowWidth <= 600) {
            // Réduire l'espace au-dessus de la carte (padding ou margin)
            mapContainer.style.paddingTop = '0';  // Réduit le padding au-dessus
            mapContainer.style.marginTop = '0';   // Réduit la marge au-dessus
        } else {
            // Rétablir les styles pour les grands écrans
            mapContainer.style.paddingTop = '20px'; // Valeur à ajuster si nécessaire
            mapContainer.style.marginTop = '20px';  // Valeur à ajuster si nécessaire
        }
    }

    // Appliquer l'ajustement au redimensionnement de la fenêtre
    window.addEventListener('resize', adjustMapContainer);
    
    // Forcer l'ajustement lors du chargement initial
    adjustMapContainer();

    // Empêcher la carte de disparaître
    interactiveMap.addEventListener('click', function(e) {
        // Empêche tout changement de visibilité ou de position
        e.stopPropagation();

        // S'assurer que la carte reste bien visible
        interactiveMap.style.visibility = 'visible';
        interactiveMap.style.zIndex = 9999;
    });

    // Écouter le redimensionnement de la fenêtre pour s'assurer que la carte reste au centre
    window.addEventListener('resize', function() {
        const mapHeight = interactiveMap.offsetHeight;
        const containerHeight = mapContainer.offsetHeight;

        // Ajuster la carte si elle déborde
        if (mapHeight > containerHeight) {
            interactiveMap.style.top = '50%';
            interactiveMap.style.transform = 'translate(-50%, -50%)'; // Centre correctement
        }
    });

    // Forcer l'initialisation pour être sûr que la carte est bien centrée au chargement
    const mapHeight = interactiveMap.offsetHeight;
    const containerHeight = mapContainer.offsetHeight;

    if (mapHeight < containerHeight) {
        interactiveMap.style.top = '50%';
        interactiveMap.style.transform = 'translate(-50%, -50%)'; // Centre au démarrage
    }
});

/////////////////////
// List of non-clickable regions
const nonClickableRegions = [
  'Bretagne',
  'Grand-Est',
  'PACA',
  'Ile-de-France',
];

// Function to disable the click only, but keep the hover active
function disableRegionClicks() {
  const isTouchDevice = 'ontouchstart' in window;

  nonClickableRegions.forEach(region => {
    const regionElement = document.getElementById(region);

    if (regionElement) {
      // If it's a touch device, we prevent interaction with the region
      if (isTouchDevice) {
        regionElement.addEventListener('touchstart', (event) => {
          event.preventDefault(); // Prevent default touch interaction (no navigation)
          event.stopImmediatePropagation(); // Stop event propagation
          showComingSoonMessage(regionElement); // Show custom "Prochainement dévoilé" message
        });
      } else {
        // If it's a non-touch device (desktop), we prevent clicking
        regionElement.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default click behavior (no navigation)
          event.stopImmediatePropagation(); // Prevent click propagation
          showComingSoonMessage(regionElement); // Show custom "Prochainement dévoilé" message
        });
      }

      // Optional: Handle hover for desktop devices
      if (!isTouchDevice) {
        regionElement.addEventListener('mouseenter', () => {
          const hoverPopup = document.getElementById('popup-hover-js');
          const clickForMore = hoverPopup.querySelector('.click-for-more');
          
          hoverPopup.style.display = 'block'; // Display hover popup
          
          // Hide the "Click for more" section for non-clickable regions
          if (clickForMore) {
            clickForMore.style.display = 'none'; // Hide "Click for more"
          }
        });

        regionElement.addEventListener('mouseleave', () => {
          const hoverPopup = document.getElementById('popup-hover-js');
          const clickForMore = hoverPopup.querySelector('.click-for-more');
          
          hoverPopup.style.display = 'none'; // Hide hover popup
          
          // Ensure the "Click for more" is shown again when mouse leaves
          if (clickForMore) {
            clickForMore.style.display = 'block'; // Show "Click for more"
          }
        });
      }

      // Disable interaction visually by adding a 'disabled' class
      regionElement.classList.add('disabled'); // Add disabled class
    }
  });
}

// Function to display the custom "Prochainement dévoilé" message
function showComingSoonMessage(regionElement) {
  // Remove any existing "Prochainement dévoilé" messages
  const existingMessage = document.querySelector('.coming-soon-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create a new div element to show the "Prochainement dévoilé" message
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('coming-soon-message'); // Add a class for styling
  messageDiv.textContent = 'Prochainement dévoilé'; // Set the text of the message

  // Position the message near the region (you can adjust this as needed)
  const regionRect = regionElement.getBoundingClientRect();
  messageDiv.style.top = `${regionRect.top + window.scrollY - 50}px`; // Adjust positioning above the region (adjust -50px as needed)
  messageDiv.style.left = `${regionRect.left + window.scrollX + (regionRect.width / 2) - 50}px`; // Center the message over the region

  document.body.appendChild(messageDiv); // Add the message to the DOM

  // Remove the message after a few seconds (you can adjust the timing)
  setTimeout(() => {
    messageDiv.remove();
  }, 1000);
}

// Call function to apply restrictions
disableRegionClicks();



//////// fin code bloquage régions///


const hoverPopup = document.createElement('div');
hoverPopup.id = 'popup-hover-js';

Object.assign(hoverPopup.style, {
   position: 'absolute',
   backgroundColor: 'white',
   border: '1px solid #07275f',
   borderRadius: '0px',
   padding: '5px',
   boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
   display: 'none',
   zIndex: '9999',
   width: '300px',
   maxWidth: '100%',
   fontFamily: "'Noto Serif', serif",
   fontWeight: 'normal',
   color: '#07275f',
   fontSize: '0.8rem',
   lineHeight: '1.2',
});
document.body.appendChild(hoverPopup);

// Create a container for the content in the popup
const popupContent = document.createElement('div');
Object.assign(popupContent.style, {
   padding: '5px',
});

// Adding the title
const popupTitle = document.createElement('div');
popupTitle.id = 'region-title';
popupTitle.textContent = 'Titre ici';
Object.assign(popupTitle.style, {
   fontSize: '1.25rem',
   fontWeight: 'normal',
   marginBottom: '10px',
   textAlign: 'center',
});

// Adding the region section
const popupSection = document.createElement('div');
popupSection.id = 'region-section';
popupSection.textContent = 'Cliquez sur la région pour en savoir plus'; // Default content
Object.assign(popupSection.style, {
   fontSize: '1rem',
   marginTop: '5px',
   textAlign: 'center',
});

// Creating the "Click to find out more" section with an arrow and bold font
const clickForMore = document.createElement('div');
clickForMore.classList.add('click-for-more'); // Add a class for easy targeting
clickForMore.innerHTML = '&#8594; <b>Cliquez pour en savoir plus</b>';  // Adding an arrow (→) and making the text bold
Object.assign(clickForMore.style, {
   fontSize: '1rem',
   marginTop: '10px',
   textAlign: 'center',
   backgroundColor: 'white', // Background color
   color: '#07275f', // Text color
   padding: '10px',
   cursor: 'pointer', // Indicate it’s clickable
   borderRadius: '0', // No border radius
   border: '1px solid #07275f', // Border color
});

popupContent.appendChild(popupTitle);
popupContent.appendChild(popupSection);
popupContent.appendChild(clickForMore);
hoverPopup.appendChild(popupContent);

// Update the content as per the region
const updatePopupContent = (regionName, regionData) => {
   // Update the region title
   popupTitle.innerHTML = `<h1 style="font-weight: normal;">${regionName}</h1>`;

   // Update the first section title
   const firstSectionTitle = regionData.sections[0].title;
   const sectionTitleElement = document.createElement('div');
   sectionTitleElement.innerHTML = firstSectionTitle;
   popupSection.innerHTML = '';
   popupSection.appendChild(sectionTitleElement);

   // Add the click-for-more section text
   clickForMore.innerHTML = '&#8594; <b>Cliquez pour en savoir plus</b>'; // Reset the "click for more" text with arrow and bold
};





  // Logique pour gérer les actions de survol et de clic sur les régions
  let activeRegionId = null; // Variable pour suivre la région active

  regions.forEach(regionId => {
    const region = document.getElementById(regionId);
    if (region) {
      // Détection des appareils Android et Firefox Android
      const isAndroid = /Android/i.test(navigator.userAgent);
      const isFirefox = /Firefox/i.test(navigator.userAgent);
  
      // Gestion des survols uniquement pour les écrans non tactiles
      if (!('ontouchstart' in window)) {
        region.addEventListener('mouseover', (event) => {
          if (window.innerWidth >= 600) {
            const data = regionData[regionId];
            if (data) {
              updatePopupContent(data.title, data); // Mise à jour de la popup
              hoverPopup.style.left = `${event.pageX + 10}px`;
              hoverPopup.style.top = `${event.pageY + 10}px`;
              hoverPopup.style.display = 'block';
            }
          }
        });
  
        region.addEventListener('mouseout', () => {
          hoverPopup.style.display = 'none';
        });
      }
  
      // Fonction de gestion de clic et de touchstart
      const handleRegionClick = (event) => {
        event.preventDefault();
  
        // Si la région est déjà active, réafficher les popups
        if (activeRegionId === regionId) {
          const data = regionData[regionId];
          if (data) {
            showPopup(regionId, data);  // Réafficher la popup
            showRightPopup(regionId);  // Réafficher la popup à droite
          }
          return; // Ne fait rien si la région est déjà active
        }
  
        // Réinitialiser la couleur de la région précédemment active
        if (activeRegionId && activeRegionId !== regionId) {
          const previousRegion = document.getElementById(activeRegionId);
          if (previousRegion) {
            previousRegion.style.fill = ''; // Réinitialise au style par défaut
            previousRegion.style.stroke = '';
          }
        }
  
        // Définir la nouvelle région active
        activeRegionId = regionId;
  
        // Appliquer les styles de la région active
        region.style.fill = '#637FB2'; // Exemple : couleur de sélection
        region.style.stroke = '#d1af6c';
  
        // (Facultatif) Afficher des informations ou exécuter d'autres actions
        const data = regionData[regionId];
        if (data) {
          showPopup(regionId, data); // Afficher la popup
          showRightPopup(regionId);  // Afficher la popup à droite
          trackRegionClick(regionId); // Traquer le clic
        }
      };
  
      // Ajout de gestionnaires d'événements pour le clic et le touchstart
      region.addEventListener('click', handleRegionClick);
      region.addEventListener('touchstart', handleRegionClick);
  
      // Réinitialisation du style après perte de focus (pour Android)
      if (isAndroid) {
        region.addEventListener('mouseleave', () => {
          region.style.fill = ''; // Réinitialise au style par défaut
          region.style.stroke = '';
        });
      }
  
      // Gestion spécifique pour Firefox sur Android
      if (isAndroid && isFirefox) {
        region.addEventListener('click', () => {
          console.log(`Firefox Android - Région cliquée : ${regionId}`);
          // Appliquer un style visuel particulier pour Firefox Android
          region.style.fill = '#e0c081'; // Exemple de couleur personnalisée
          region.style.stroke = '#e0c081';
        });
  
        region.addEventListener('touchstart', () => {
          region.style.fill = '#e0c081'; // Couleur tactile pour Firefox Android
          region.style.stroke = '#e0c081';
        });
  
        // Réinitialisation après interaction dans Firefox
        region.addEventListener('mouseleave', () => {
          region.style.fill = ''; // Réinitialise au style par défaut
          region.style.stroke = '';
        });
      }
    }
  });

  let lastScrollTop = 0;
  const scrollThreshold = 30; // The scroll distance threshold in pixels (now 50px)
  
  window.addEventListener('scroll', () => {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      // Check if the user has scrolled more than 50px
      if (Math.abs(currentScrollTop - lastScrollTop) >= scrollThreshold) {
          popup.style.display = 'none';
          rightPopup.style.display = 'none';
          resetMapPosition(); // Reset the map
  
          if (selectedRegion) {
              highlightRegion(selectedRegion, '#ECEDEC');
              selectedRegion = null;
          }
      }
  
      // Update the last scroll position
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  });
  

// Fonction pour vérifier si l'appareil est iOS
function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Appliquer des styles spécifiques si l'on détecte un appareil iOS
if (isIOS()) {
  // On applique du JavaScript pour forcer l'affichage de la barre de défilement
  document.querySelectorAll('#region-popup, #right-popup').forEach(function(popup) {
      // Ajouter un événement 'touchstart' pour activer le défilement sur iOS
      popup.addEventListener('touchstart', function() {
          popup.style.webkitOverflowScrolling = 'touch'; // Défilement fluide
          popup.style.overflowY = 'scroll'; // S'assurer que le défilement est activé
      });
  });
}

  // Création de la popup region-popup
  const popup = document.createElement('div');
  popup.id = 'region-popup';
  // Configuration initiale de `popup`
  Object.assign(popup.style, {
      position: 'fixed',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      padding: '15px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
      display: 'none',
      zIndex: '1000',
      transition: 'transform 0.5s ease, width 0.5s ease',
      right: '10px',
      top: '120px',
      width: '420px',
      maxHeight: '80vh',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch' // Défilement fluide pour Safari mobile

  });
  // Ajout du bouton de fermeture une seule fois
const closePopupButton = document.createElement('button');
closePopupButton.id = 'close-popup';
closePopupButton.innerHTML = '&times;';
Object.assign(closePopupButton.style, {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#07275f",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: "1010",
    transition: "background-color 0.3s ease"
});

// Ajout de l'événement une seule fois
closePopupButton.addEventListener('click', () => {
    console.log("Fermeture de la popup...");
    popup.style.display = "none"; // Masquer la popup
});

// Ajouter le bouton à la popup
popup.appendChild(closePopupButton);
document.body.appendChild(popup);
  document.body.appendChild(popup);


// Création de la right-popup
const rightPopup = document.createElement('div');
rightPopup.id = 'right-popup';
// Configuration initiale de `rightPopup`
Object.assign(rightPopup.style, {
    position: 'fixed',
    backgroundColor: '#f5f0ea',
    border: '1px solid #ccc',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
    display: 'none',
    zIndex: '1000',
    right: '10px',
    top: '140px',
    width: '400px',
    maxHeight: '80vh',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch' // Défilement fluide pour Safari mobile

});
document.body.appendChild(rightPopup);

// Ajout de styles pour les scrollbars
const style = document.createElement('style');
style.textContent = `
    #region-popup::-webkit-scrollbar,
    #right-popup::-webkit-scrollbar {
        width: 8px;
    }

    #region-popup::-webkit-scrollbar-track,
    #right-popup::-webkit-scrollbar-track {
        background: #f0f0f0;
    }

    #region-popup::-webkit-scrollbar-thumb,
    #right-popup::-webkit-scrollbar-thumb {
        background: #07275f;
        border-radius: 10px;
        border: 2px solid #f0f0f0;
    }

    #region-popup::-webkit-scrollbar-thumb:hover,
    #right-popup::-webkit-scrollbar-thumb:hover {
        background: #05305a;
    }

    /* Styles pour Firefox */
    #region-popup,
    #right-popup {
        scrollbar-width: thin; /* Fine barre de défilement */
        scrollbar-color: #07275f #f0f0f0; /* Couleurs pouce/piste */
    }
`;
document.head.appendChild(style);

// Bouton de fermeture pour `rightPopup`
const closeRightPopupButton = document.createElement('button');
closeRightPopupButton.id = 'close-right-popup';
closeRightPopupButton.innerHTML = '&times;';
closeRightPopupButton.addEventListener('click', () => {
    rightPopup.style.display = 'none';
});
rightPopup.appendChild(closeRightPopupButton);


  // Fonction pour ajuster la responsivité
const adjustPopupsForMobile = () => {
  if (window.innerWidth < 600) {
      // Petit écran
      rightPopup.style.bottom = '0';
      rightPopup.style.top = '';
      rightPopup.style.width = '90%';
      rightPopup.style.left = '5%';
      rightPopup.style.height = '45vh'; // Définir une hauteur adaptée pour mobile


      popup.style.bottom = '55vh';
      popup.style.top = '';
  } else {
      // Grand écran
      rightPopup.style.bottom = '';
      rightPopup.style.top = '140px';
      rightPopup.style.width = '400px';
      rightPopup.style.left = '';

      popup.style.bottom = '';
      popup.style.top = '120px';
  }
};

// Appel de la fonction pour ajuster la position au chargement et au redimensionnement
window.addEventListener('load', adjustPopupsForMobile);
window.addEventListener('resize', adjustPopupsForMobile);
  // Crée une variable pour garder une trace de la région sélectionnée
  let selectedRegion = null;

  // Styliser la région surlignée
  const highlightRegion = (region, color) => {
      region.setAttribute('fill', color);
  };

// Fonction pour ajouter un hash à l'URL sans recharger la page ni modifier l'URL côté serveur
const updateURLWithRegionHash = (regionId) => {
  const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "#" + regionId;
  window.history.replaceState({ path: newUrl }, '', newUrl);
};

// Ajout des événements de clic sur les régions
regions.forEach(regionId => {
  const regionElement = document.getElementById(regionId);
  if (regionElement) {
      regionElement.addEventListener('click', () => {
          updateURLWithRegionHash(regionId); // Met à jour l'URL avec un hash
          trackRegionClick(regionId);       // Suit le clic dans Google Analytics
      });
  }
});

  // Réinitialiser la position de la carte
  const resetMapPosition = () => {
      const mapElement = document.querySelector('.interactive-map .map');
      mapElement.style.transform = 'scale(1)';  // Remettre à l'échelle d'origine
      mapElement.style.position = 'relative'; // Position absolue
      mapElement.style.left = '0';  // Réinitialiser le déplacement horizontal
      mapElement.style.top = '0';   // Réinitialiser le déplacement vertical
  };

  // Fonction pour afficher la popup
  const showPopup = (regionId, data) => {
    const sectionsHTML = data.sections.map(section => `
        <div class="popup-section">
            <h4>${section.title}</h4>
            <p>${section.content}</p>
        </div>
    `).join('');

    // On met à jour le contenu de la popup sans toucher au bouton de fermeture
    popup.innerHTML = `
        <h3>${data.title}</h3>
        ${sectionsHTML}
        <a href="${data.pdfLink}" target="_blank" class="download-link">Télécharger le PDF</a>
    `;

    // On s'assure que le bouton de fermeture reste dans la popup
    popup.appendChild(closePopupButton);

    // Afficher la popup
    popup.style.display = 'block';
    popup.style.transform = 'translateX(0)';
};

  // Fonction pour afficher l'image dans le right-popup
  // Objet contenant les images associées aux régions
  const regionImages = {
    "Île-de-France": "src/data/ile-de-france.png",
    "Provence-Alpes-Côte d'Azur": "src/data/paca.png",
    "Auvergne-Rhône-Alpes": "src/data/auvergne-rhone-alpes.png",
    // Ajoutez ici toutes les régions et leur chemin d'image .png
  };

// Fonction pour afficher `rightPopup`
function showRightPopup(regionId) {
    const data = regionData[regionId]; 
    if (!data) return;

  // Création du bouton de fermeture
  const closeRightPopupButton = document.createElement('button');
  closeRightPopupButton.id = 'close-right-popup';
  closeRightPopupButton.innerHTML = '&times;'; // Le caractère "x" pour fermer

  // Ajouter l'événement pour fermer la popup
  closeRightPopupButton.addEventListener('click', () => {
      rightPopup.style.display = 'none'; // Cache la popup
      if (selectedRegion) {
          highlightRegion(selectedRegion, '#ECEDEC');
          selectedRegion = null;
      }
  });

  // Vide le contenu actuel de la popup avant d'ajouter le bouton et l'image
  rightPopup.innerHTML = ''; // Effacer tout le contenu actuel de la popup
  rightPopup.appendChild(closeRightPopupButton); // Ajouter le bouton de fermeture
  rightPopup.innerHTML += `
      <img src="${data.imageSrc}" alt="${regionId}" style="max-width: 100%;">`;

  // Afficher la popup
  rightPopup.style.display = 'block';
  rightPopup.style.transform = 'translateX(0)';
}


  // Fonction pour gérer les clics sur les régions
  regions.forEach(regionId => {
      const region = document.getElementById(regionId);
      if (region) {
          // Survol : surbrillance
          region.addEventListener('mouseover', () => highlightRegion(region, '#FF5733'));
          region.addEventListener('mouseout', () => {
              if (selectedRegion !== region) {
                  highlightRegion(region, '#ECEDEC');
              }
          });

          // Clic : affichage des informations et zoom/dézoom
          region.addEventListener('click', () => {
              const data = regionData[regionId];
              if (data) {
                  updateURLWithRegion(regionId);
                  trackRegionClick(regionId);

                  if (selectedRegion) {
                      highlightRegion(selectedRegion, '#ECEDEC');
                  }
                  selectedRegion = region;
                  highlightRegion(region, '#FF5733');
                  showPopup(regionId, data);
                  showRightPopup(regionId);
              }
          });
      }
  });

// Function to simulate a click on a region based on the URL hash
function simulateClickFromHash() {
  const hash = window.location.hash.substring(1);  // Get the hash without the "#"
  console.log("Hash from URL:", hash);  // Log the hash to ensure it's read correctly

  // Check if the hash matches any of the region IDs
  if (hash && regions.includes(hash)) {
    const region = document.getElementById(hash);  // Get the region element by ID
    console.log("Region found, simulating click:", region);  // Log the region element

    // If the region exists, simulate a click event after a small delay
    if (region) {
      setTimeout(() => {
        // Scroll the region into view if it's not already visible
        region.scrollIntoView({ behavior: "smooth", block: "center" });

        // Simulate a real user interaction (using mouse click event)
        const clickEvent = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        });

        region.dispatchEvent(clickEvent);  // Dispatch the click event to the region

        console.log("Simulated click on:", region);
      }, 200);  // 200ms delay to ensure everything is ready
    }
  }
}

// Trigger the click simulation when the page is loaded or when the hash changes
window.addEventListener("load", () => setTimeout(simulateClickFromHash, 500));  // Delay to ensure elements are loaded
window.addEventListener("hashchange", simulateClickFromHash);



  // Fermeture du right-popup à droite
  rightPopup.addEventListener('click', e => {
      if (e.target.id === 'close-right-popup') {
          rightPopup.style.display = 'none';
          resetMapPosition();
          if (selectedRegion) {
              highlightRegion(selectedRegion, '#ECEDEC');
              selectedRegion = null;
          }
      }
  });

  // Ferme les popups si l'utilisateur clique en dehors
  document.addEventListener('click', e => {
      if (!popup.contains(e.target) && !rightPopup.contains(e.target) && !e.target.classList.contains('region')) {
          popup.style.display = 'none';
          rightPopup.style.display = 'none';
          resetMapPosition();
          if (selectedRegion) {
              highlightRegion(selectedRegion, '#ECEDEC');
              selectedRegion = null;
          }
      }
      resetMapPosition();  // Sassurer que la carte revienne à son état d'origine
  });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 600) {
        // Sur petit écran, ajuster la popup
        rightPopup.style.position = 'fixed';
        rightPopup.style.bottom = '0';
        rightPopup.style.top = ''; // Supprime top
    } else {
        // Sur grand écran, remettre en position normale
        rightPopup.style.position = 'fixed';
        rightPopup.style.bottom = '';
        rightPopup.style.top = '100px'; // Position normale
    }
});

const ensurePopupPosition = () => {
  if (rightPopup.style.position !== 'fixed') {
      rightPopup.style.position = 'fixed';
      rightPopup.style.top = '100px';
      rightPopup.style.right = '10px';
  }
  if (popup.style.position !== 'fixed') {
      popup.style.position = 'fixed';
      popup.style.top = '100px';
      popup.style.right = '10px';
  }
};

// Appelle cette fonction après avoir ajouté les popups
ensurePopupPosition();

// Ajouter des classes pour activer la scrollbar en toutes circonstances
const regionPopup = document.querySelector('.region-popup');
const rightPopup = document.querySelector('.right-popup');

// Forcer l'affichage des scrollbars
regionPopup.style.overflowY = 'scroll';
rightPopup.style.overflowY = 'scroll';

// Appliquer les styles personnalisés
regionPopup.classList.add('custom-scrollbar');
rightPopup.classList.add('custom-scrollbar');
