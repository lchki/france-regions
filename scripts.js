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
          title: '<h1 style="font-weight: normal;">Centre-Val-de-Loire</h1>',
          sections: [
              { title: '<h2 style="font-weight: normal">Prochainement dévoilé</h2>', content: '' },
              { title: '<h2 style="font-weight: normal"> </h2>', content: 'Prochainement dévoilé' },
          ],
          pdfLink: 'Centre-Val-de-Loire',
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
        title: '<h1 style="font-weight: normal;">Bourgogne-Franche-Comté</h1>',
         sections: [
          { title: '<h2 style="font-weight: normal"> Prochainement dévoilé</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Prochainement dévoilé' },
          ],
        pdfLink: 'Bourgogne-Franche-Comte',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/grand-est.png' // Chemin vers l'image */

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
          { title: '<h2 style="font-weight: normal"> Prochainement dévoilé</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Prochainement dévoilé' },
          ],
        pdfLink: 'Occitanie',
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
        title: '<h1 style="font-weight: normal;">Auvergne-Rhone-Alpes</h1>',
         sections: [
          { title: '<h2 style="font-weight: normal"> Prochainement dévoilé</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Prochainement dévoilé' },
          ],
        pdfLink: 'Auvergne-Rhone-Alpes',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/auvergne-rhone-alpes.png' // Chemin vers l'image */

      },
      'Normandie': {
        title: '<h1 style="font-weight: normal;">Normandie</h1>',
        sections: [
          { title: '<h2 style="font-weight: normal"> Prochainement dévoilés</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Prochainement dévoilé' },
          ],
        pdfLink: 'Normandie',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/normandie.png' // Chemin vers l'image */

      },
      'Pays-de-la-Loire': {
        title: '<h1 style="font-weight: normal;">Pays-de-la-Loire</h1>',
         sections: [
          { title: '<h2 style="font-weight: normal"> Prochainement dévoilés</h2>', content: '' },
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Prochainement dévoilé' },
          ],
        pdfLink: 'Pays-de-la-Loire',
        imageSrc: '/themes/custom/imv4/templates/publications/im_barometre_des_territoires/data/pays-de-la-loire.png' // Chemin vers l'image */

      },
      'PACA': {
        title: '<h1 style="font-weight: normal;">PACA</h1>',
        sections: [
          { title: '<h2 style="font-weight: normal"> Prochainement</h2>', content: '' },
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
          { title: '<h2 style="font-weight: normal"> </h2>', content: 'Les habitants de Nouvelle-Aquitaine jugent qu&rsquo;ils vivent dans un <b>endroit qui va bien</b> (69 %, +4 points par rapport à la moyenne nationale) malgré la forte <b>exposition aux risques climatiques</b> (41 %, +5 pts moy. nat.). 34 % ( +9 pts moy. nat., 1ère place du classement région par région) des habitants ont déjà eu<b>des dégâts sur leur logement</b> à cause de catastrophes naturelles.' }
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
// code pour bloquer les régions non publiées 
// Liste des régions non cliquables
const nonClickableRegions = [
  'Centre-Val-de-Loire',
  'Bretagne',
  'Occitanie',
  'Bourgogne-Franche-Comte', 
  'Grand-Est',
  'Occitanie',
  'Auvergne-Rhone-Alpes',
  'Normandie',
  'PACA',
  'Pays-de-la-Loire',
  'Ile-de-France',
];

// Fonction pour désactiver le clic uniquement, mais garder le hover actif
function disableRegionClicks() {
  // Détecter les appareils tactiles
  const isTouchDevice = 'ontouchstart' in window;

  nonClickableRegions.forEach(region => {
    const regionElement = document.getElementById(region);

    if (regionElement) {
      // Si c'est un appareil tactile, on empêche l'interaction avec la région
      if (isTouchDevice) {
        regionElement.addEventListener('touchstart', (event) => {
          event.preventDefault(); // Empêche toute interaction tactile sur les régions inactives
          event.stopImmediatePropagation(); // Empêche la propagation du touche
        });
      } else {
        // Si c'est un appareil non tactile (desktop), on empêche le clic
        regionElement.addEventListener('click', (event) => {
          event.stopImmediatePropagation(); // Empêche le clic de se propager
        });
      }

      // Ajouter un gestionnaire de survol pour afficher la popup (seulement pour les appareils non tactiles)
      if (!isTouchDevice) {
        regionElement.addEventListener('mouseenter', () => {
          const hoverPopup = document.getElementById('popup-hover-js');
          hoverPopup.style.display = 'block'; // Affiche la popup au survol
        });

        regionElement.addEventListener('mouseleave', () => {
          const hoverPopup = document.getElementById('popup-hover-js');
          hoverPopup.style.display = 'none'; // Masque la popup lorsque le survol disparaît
        });
      }

      // Ajouter une classe disabled pour les styles de hover personnalisés
      regionElement.classList.add('disabled');
    }
  });
}

// Appeler la fonction pour appliquer les restrictions
disableRegionClicks();

//////// fin code bloquage régions///


 // Crée la popup-hover-js
 const hoverPopup = document.createElement('div');
 hoverPopup.id = 'popup-hover-js';
 
 Object.assign(hoverPopup.style, {
   position: 'absolute',
   backgroundColor: 'white',
   border: '1px solid #ccc',
   borderRadius: '8px',
   padding: '5px',
   boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
   display: 'none',
   zIndex: '9999',
   width: '300px',
   maxWidth: '100%',
   fontFamily: "'Noto Serif Bengali', serif",
   fontWeight: 'normal',
   color: '#07275f',
   fontSize: '0.8rem',
   lineHeight: '1.2',
 });
 document.body.appendChild(hoverPopup);

// Crée un conteneur pour le contenu de la popup
  const popupContent = document.createElement('div');
  Object.assign(popupContent.style, {
    padding: '5px',
  });

  // Ajout du titre
  const popupTitle = document.createElement('div');
  popupTitle.id = 'region-title';
  popupTitle.textContent = 'Titre ici';
  Object.assign(popupTitle.style, {
    fontSize: '1.25rem',
    fontWeight: 'normal',
    marginBottom: '10px',
    textAlign: 'center',

  });

  // Ajout de la section de contenu
  const popupSection = document.createElement('div');
  popupSection.id = 'region-section';
  popupSection.textContent = 'Cliquez sur la région pour en savoir plus'; // Contenu par défaut
  Object.assign(popupSection.style, {
    fontSize: '1rem', // Taille ajustée
    marginTop: '5px',
    textAlign: 'center',
    
  });

  // Ajout des éléments à la popup
  popupContent.appendChild(popupTitle);
  popupContent.appendChild(popupSection);
  hoverPopup.appendChild(popupContent);

  // Mise à jour du contenu selon la région
  const updatePopupContent = (regionName, regionData) => {
    // Met à jour le titre de la région avec la balise <h1>
    popupTitle.innerHTML = `<h1 style="font-weight: normal;">${regionName}</h1>`;

    // Met à jour la première section title (en h2)
    const firstSectionTitle = regionData.sections[0].title; // Prendre le premier title
    const sectionTitleElement = document.createElement('div');
    sectionTitleElement.innerHTML = firstSectionTitle; // Ajouter la première section en tant que HTML
    popupSection.innerHTML = ''; // Vider le contenu de popupSection
    popupSection.appendChild(sectionTitleElement); // Ajouter le title à la section

    popupSection.innerHTML += '<p style="font-style: italic;">Cliquez sur la région pour en savoir plus</p>'; // Ajouter le texte supplémentaire
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
        region.style.fill = '#d1af6c'; // Exemple : couleur de sélection
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

    // Masquer les popups lors du défilement de la page
    window.addEventListener('scroll', () => {
      popup.style.display = 'none';
      rightPopup.style.display = 'none';
      resetMapPosition(); // Réinitialise la carte
      if (selectedRegion) {
          highlightRegion(selectedRegion, '#ECEDEC');
          selectedRegion = null;
      }
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

      popup.innerHTML = `
          <button id="close-popup">&times;</button>
          <h3>${data.title}</h3>
          ${sectionsHTML}
          <a href="${data.pdfLink}" target="_blank" class="download-link">Télécharger le PDF</a>
      `;
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
    const data = regionData[regionId]; // Assurez-vous que `regionData` existe
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

  // Fermeture du popup à gauche
  popup.addEventListener('click', e => {
      if (e.target.id === 'close-popup') {
          popup.style.display = 'none';
          resetMapPosition();
          if (selectedRegion) {
              highlightRegion(selectedRegion, '#ECEDEC');
              selectedRegion = null;
          }
      }
  });

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

