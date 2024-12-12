document.addEventListener('DOMContentLoaded', () => {
  // Masquer la popup-hover sur les petits écrans
  if (window.innerWidth < 600) {
    const hoverPopup = document.getElementById('popup-hover');
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

const regionData = {
    'Centre-Val-de-Loire': {
        title: '<h1 style="font-weight: normal;">Centre-Val-de-Loire</h1>',
        sections: [
            { title: '<h2 style="font-weight: normal"> Un attachement au territoire plus fort que les inégalités territoriales</h2>', content: '' },
            { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'Le Centre-Val-de-Loire est plutôt cool, alors allons y passer des vacances' },
        ],
        pdfLink: 'Centre-Val-de-Loire',
        imageSrc: 'src/data/centre-val-de-loire.png' // Chemin vers l'image

    },

    'Bretagne': {
      title: '<h1 style="font-weight: normal;">Bretagne</h1>',
      sections: [
        { title: '<h2 style="font-weight: normal"> Un attachement au territoire plus fort que les inégalités territoriales</h2>', content: '' },
        { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'La Bretagne est une région charmante, idéale pour les vacances.' },
        ],
      pdfLink: 'Bretagne',
      imageSrc: 'src/data/bretagne.png' // Chemin vers l'image

    },

    'Bourgogne-Franche-Comte': {
      title: '<h1 style="font-weight: normal;">Bourgogne-Franche-Comte</h1>',
      sections: [
        { title: '<h2 style="font-weight: normal"> Un attachement au territoire plus fort que les inégalités territoriales</h2>', content: '' },
        { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'Bourgogne-Franche-Comté est une belle région pour la gastronomie et le vin.' },
        ],
      pdfLink: 'Bourgogne-Franche-Comte',
      imageSrc: 'src/data/bourgogne-franche-comte.png' // Chemin vers l'image

    },

    'Grand-Est': {
      title: '<h1 style="font-weight: normal;">Grand-Est</h1>',
      sections: [
        { title: '<h2 style="font-weight: normal"> Un attachement au territoire plus fort que les inégalités territoriales</h2>', content: '' },
        { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'Le Grand-Est est un carrefour européen avec une grande diversité culturelle.' },
        ],
      pdfLink: 'Grand-Est',
      imageSrc: 'src/data/grand-est.png' // Chemin vers l'image

    },

    'Occitanie': {
      title: '<h1 style="font-weight: normal;">Occitanie</h1>',
      sections: [
        { title: '<h2 style="font-weight: normal"> Un attachement au territoire plus fort que les inégalités territoriales</h2>', content: '' },
        { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'Occitanie est connue pour son climat et ses paysages magnifiques.' },
        ],
      pdfLink: 'Occitanie',
      imageSrc: 'src/data/occitanie.png' // Chemin vers l'image

    },

    'Hauts-de-France': {
      title: '<h1 style="font-weight: normal;">Hauts-de-France</h1>',
      sections: [
        { title: '<h2 style="font-weight: normal"> Un attachement au territoire plus fort que les inégalités territoriales</h2>', content: '' },
        { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'Les Hauts-de-France sont une région riche en histoire et en patrimoine.' },
        ],
      pdfLink: 'Hauts-de-France',
      imageSrc: 'src/data/hauts-de-france.png' // Chemin vers l'image

    },

    'Auvergne-Rhone-Alpes': {
      title: '<h1 style="font-weight: normal;">Auvergne-Rhone-Alpes</h1>',
      sections: [
        { title: '<h2 style="font-weight: normal"> Un attachement au territoire plus fort que les inégalités territoriales</h2>', content: '' },
        { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'Une région montagneuse avec un fort potentiel touristique et économique.' },
        ],
      pdfLink: 'Auvergne-Rhone-Alpes',
      imageSrc: 'src/data/auvergne-rhone-alpes.png' // Chemin vers l'image

    },
    'Normandie': {
      title: '<h1 style="font-weight: normal;">Normandie</h1>',
      sections: [
        { title: '<h2 style="font-weight: normal"> Un attachement au territoire plus fort que les inégalités territoriales</h2>', content: '' },
        { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'La Normandie est une région historique avec des paysages variés et une forte tradition maritime.' },
        ],
      pdfLink: 'Normandie',
      imageSrc: 'src/data/normandie.png' // Chemin vers l'image

    },
    'Pays-de-la-Loire': {
      title: '<h1 style="font-weight: normal;">Pays-de-la-Loire</h1>',
      sections: [
        { title: '<h2 style="font-weight: normal"> Un attachement au territoire plus fort que les inégalités territoriales</h2>', content: '' },
        { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'Les Pays-de-la-Loire sont réputés pour leur économie dynamique et leur littoral.' },
        ],
      pdfLink: 'Pays-de-la-Loire',
      imageSrc: 'src/data/pays-de-la-loire.png' // Chemin vers l'image

    },
    'PACA': {
      title: '<h1 style="font-weight: normal;">PACA</h1>',
      sections: [
        { title: '<h2 style="font-weight: normal"> Un attachement au territoire plus fort que les inégalités territoriales</h2>', content: '' },
        { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'PACA, une région dynamique avec une belle côte méditerranéenne.' },
        ],
      pdfLink: 'PACA',
      imageSrc: 'src/data/paca.png' // Chemin vers l'image

    },
    'Ile-de-France': {
      title: '<h1 style="font-weight: normal;"> Ile-de-France</h1>',
      sections: [
        { title: '<h2 style="font-weight: normal"> Un attachement au territoire plus fort que les inégalités territoriales</h2>', content: '' },
        { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'La région capitale est un centre économique et culturel majeur.' },
        ],
        pdfLink: 'Ile-de-France',
        imageSrc: 'src/data/ile-de-france.png' // Chemin vers l'image

    },
    'Nouvelle-Aquitaine': {
      title: '<h1 style="font-weight: normal;">Nouvelle-Aquitaine</h1>',
      sections: [
        { title: '<h2 style="font-weight: normal"> Un attachement au territoire plus fort que les inégalités territoriales</h2>', content: '' },
        { title: '<h2 style="font-weight: normal"> Le regard de l&apos;Institut Montaigne</h2>', content: 'Nouvelle-Aquitaine, un grand territoire aux paysages variés et à l’économie solide.' },
        ],
      pdfLink: 'Nouvelle-Aquitaine',
      imageSrc: 'src/data/nouvelle-aquitaine.png' // Chemin vers l'image

    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.querySelector('.map-container');
    const interactiveMap = document.querySelector('.interactive-map');

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

  // Crée la popup-hover
  const hoverPopup = document.createElement('div');
  hoverPopup.id = 'popup-hover';
  
  Object.assign(hoverPopup.style, {
    position: 'absolute',
    backgroundColor: 'white', // Couleur de fond
    border: '1px solid #ccc', // Bordure fine
    borderRadius: '8px', // Coins arrondis
    padding: '5px', // Réduction de l'espacement interne
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)', // Ombre douce
    display: 'none', // Initialement masquée
    zIndex: '9999', // Priorité visuelle
    width: '300px', // Taille plus petite de la popup
    maxWidth: '100%', // Responsivité
    fontFamily: "'Noto Serif Bengali', serif", // Police spécifique
    fontWeight: 'normal', // Enlève le gras
    color: '#07275f', // Couleur du texte
    fontSize: '0.8rem', // Texte plus petit
    lineHeight: '1.2', // Hauteur de ligne réduite
});
// Ajout de la popup au DOM
document.body.appendChild(hoverPopup);

// Crée un conteneur pour le contenu de la popup
const popupContent = document.createElement('div');
Object.assign(popupContent.style, {
    padding: '5px', // Réduction de l'espacement interne
});

// Ajout du titre
const popupTitle = document.createElement('div');
popupTitle.id = 'region-title';
popupTitle.textContent = 'Titre ici'; // Texte par défaut
Object.assign(popupTitle.style, {
    fontSize: '0.9rem', // Réduction de la taille du titre
    fontWeight: 'normal',
    marginBottom: '5px',
});

// Ajout de la section de contenu
const popupSection = document.createElement('div');
popupSection.id = 'region-section';
popupSection.textContent = 'Contenu ici'; // Texte par défaut
Object.assign(popupSection.style, {
    fontSize: '0.7rem', // Texte plus petit
    marginTop: '5px',
});

// Ajout des éléments à la popup
popupContent.appendChild(popupTitle);
popupContent.appendChild(popupSection);
hoverPopup.appendChild(popupContent);

  // Logic to handle hover and click actions on regions
  regions.forEach(regionId => {
    const region = document.getElementById(regionId);
    if (region) {
      region.addEventListener('mouseover', (event) => {
        // Ne montrer la popup-hover que si l'écran est suffisamment large
        if (window.innerWidth >= 600) {
          const data = regionData[regionId];
          if (data) {
            hoverPopup.innerHTML = `
            <h3>${data.title}</h3>
            ${data.sections.map(section => 
              `<div class="popup-section">
                <h4>${section.title}</h4>
                <p>${section.content}</p>
              </div>`
            ).join('')}
          `;
            hoverPopup.style.left = `${event.clientX + 10}px`;
            hoverPopup.style.top = `${event.clientY + 10}px`;
            hoverPopup.style.display = 'block';
          }
        }
      });

      region.addEventListener('mouseout', () => {
        hoverPopup.style.display = 'none';
      });

      // Clic sur la région
      region.addEventListener('click', () => {
        const data = regionData[regionId];
        if (data) {
          showPopup(regionId, data);
          showRightPopup(regionId);
          trackRegionClick(regionId);
        }
      });
    }
  });


// Création de la popup
const popup = document.createElement('div');
popup.id = 'region-popup';
popup.style.position = 'fixed';
popup.style.backgroundColor = '#fff';
popup.style.border = '1px solid #ccc';
popup.style.padding = '15px';
popup.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.15)';
popup.style.display = 'none';
popup.style.zIndex = '1000';
popup.style.transition = 'transform 0.5s ease, width 0.5s ease';
popup.style.right = '10px';  // Position de la popup à droite
popup.style.top = '50px'; // Décale la popup vers le bas
popup.style.width = '400px'; // Largeur de la popup
popup.style.maxHeight = '80vh'; // Limite la hauteur à 80% de la fenêtre
popup.style.overflowY = 'auto'; // Permet le défilement vertical
document.body.appendChild(popup);

// Créer un second popup : right-popup
const rightPopup = document.createElement('div');
rightPopup.id = 'right-popup';
rightPopup.style.position = 'fixed';
rightPopup.style.backgroundColor = '#f5f0ea';
rightPopup.style.border = '1px solid #ccc';
rightPopup.style.padding = '15px';
rightPopup.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.15)';
rightPopup.style.display = 'none';  // Initialement caché
rightPopup.style.zIndex = '1000';
rightPopup.style.transition = 'transform 0.5s ease, width 0.5s ease';
rightPopup.style.right = '10px';  // Position à droite
rightPopup.style.top = '50px';    // Décale la popup vers le bas
rightPopup.style.width = '600px'; // Largeur de la popup
rightPopup.style.maxHeight = '80vh'; // Limite la hauteur à 80% de la fenêtre
rightPopup.style.overflowY = 'auto'; // Permet le défilement vertical
document.body.appendChild(rightPopup);

// Gestion du redimensionnement de la fenêtre pour la responsivité
window.addEventListener('resize', () => {
    if (window.innerWidth < 600) {
        // Sur petit écran, place la popup à la base de l'écran
        rightPopup.style.bottom = '0';
        rightPopup.style.top = ''; // Supprime la position top pour éviter le conflit
    } else {
        // Sur grand écran, remet la popup en position normale
        rightPopup.style.bottom = '';
        rightPopup.style.top = '50px'; // Positionne la popup à 50px du haut
    }
});


// Crée une variable pour garder une trace de la région sélectionnée
let selectedRegion = null;

// Styliser la région surlignée
const highlightRegion = (region, color) => {
    region.setAttribute('fill', color);
};

// Fonction pour modifier l'URL sans recharger la page
const updateURLWithRegion = (regionId) => {
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?region=" + regionId;
    window.history.pushState({ path: newUrl }, '', newUrl);
};

// Fonction pour suivre les clics via Google Analytics
const trackRegionClick = (regionId) => {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'region_click', {
            'event_category': 'Carte des régions',
            'event_label': regionId,  // Nom de la région cliquée
            'value': 1
        });
    }
};

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

  // Fonction pour afficher la popup à droite
  function showRightPopup(regionId) {
    const rightPopup = document.getElementById('right-popup');
    const data = regionData[regionId];
    rightPopup.style.display = 'block';
    rightPopup.innerHTML = `
      <img src="${data.imageSrc}" alt="${regionId}" style="max-width: 100%;">`;
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
    resetMapPosition();  // Assure-toi que la carte revienne à son état d'origine
});
});
