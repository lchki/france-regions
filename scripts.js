document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne toutes les régions par leur id
    const regions = [
      'Centre-Val-de-Loire', 'Bretagne', 'Bourgogne-Franche-Comte', 'Grand-Est',
      'Occitanie', 'Hauts-de-France', 'Auvergne-Rhone-Alpes', 'Normandie', 'Pays-de-la-Loire',
      'PACA', 'Ile-de-France', 'Nouvelle-Aquitaine'
    ];
  
    // Crée un objet contenant les informations supplémentaires des régions
    const regionInfo = {
      'Centre-Val-de-Loire': { population: '2,570,000', capital: 'Orléans', area: '39,151 km²' },
      'Bretagne': { population: '3,300,000', capital: 'Rennes', area: '27,208 km²' },
      'Bourgogne-Franche-Comte': { population: '2,800,000', capital: 'Dijon', area: '47,784 km²' },
      'Grand-Est': { population: '5,500,000', capital: 'Strasbourg', area: '57,433 km²' },
      'Occitanie': { population: '5,900,000', capital: 'Toulouse', area: '72,724 km²' },
      'Hauts-de-France': { population: '6,000,000', capital: 'Lille', area: '31,813 km²' },
      'Auvergne-Rhone-Alpes': { population: '8,000,000', capital: 'Lyon', area: '69,711 km²' },
      'Normandie': { population: '3,300,000', capital: 'Rouen', area: '29,907 km²' },
      'Pays-de-la-Loire': { population: '3,700,000', capital: 'Nantes', area: '32,082 km²' },
      'PACA': { population: '5,000,000', capital: 'Marseille', area: '31,400 km²' },
      'Ile-de-France': { population: '12,000,000', capital: 'Paris', area: '12,012 km²' },
      'Nouvelle-Aquitaine': { population: '6,000,000', capital: 'Bordeaux', area: '84,036 km²' },
    };
  
    const regionData = {
        'Centre-Val-de-Loire' : {
            title: 'Centre-Val-de-Loire',
            sections: [
                {
                    title: 'Introduction',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],
            pdfLink: 'Centre-Val-de-Loire'
        },
        'Bretagne': {
            title: 'Bretagne',
            sections: [
                {
                    title: 'Introduction',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],
            pdfLink: 'Bretagne'
        },
        'Bourgogne-Franche-Comte' : {
            title: 'Bourgogne-Franche-Comte',
            sections: [
                {
                    title: 'Introduction',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],
            pdfLink: 'Bourgogne-Franche-Comte'
        },
        'Grand-Est': {
            title: 'Grand-Est',
            sections: [
                {
                    title: 'Introduction',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],
            pdfLink: 'Grand-Est'
        },
        'Occitanie' : {
            title: 'Occitanie',
            sections: [
                {
                    title: 'Introduction',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],
            pdfLink: 'Occitanie'
        },
        'Hauts-de-France': {
            title: 'Hauts-de-France',
            sections: [
                {
                    title: 'Introduction',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],
            pdfLink: 'Hauts-de-France'
        },
        'Auvergne-Rhone-Alpes' : {
            title: 'Auvergne-Rhone-Alpes',
            sections: [
                {
                    title: 'Introduction',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],
            pdfLink: 'Auvergne-Rhone-Alpes'
        },
        'Normandie': {
            title: 'Normandie',
            sections: [
                {
                    title: 'Introduction',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],
            pdfLink: 'Normandie'
        },
        'Pays-de-la-Loire': {
            title: 'Pays-de-la-Loire',
            sections: [
                {
                    title: 'Introduction',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],
            pdfLink: 'Pays-de-la-Loire'
        },
        'PACA' : {
            title: 'PACA',
            sections: [
                {
                    title: 'Introduction',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],            pdfLink: 'PACA'
        },
        'Ile-de-France': {
            title: 'Ile-de-France',
            sections: [
                {
                    title: 'Introduction',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],
            pdfLink: 'Ile-de-France'
        },
        'Nouvelle-Aquitaine': {
            title: 'Nouvelle-Aquitaine',
            sections: [
                {
                    title: 'Introduction',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],
            pdfLink: 'Nouvelle-Aquitaine'
        },

    };

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
    document.body.appendChild(popup);
 
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
        mapElement.style.position = 'absolute'; // Position absolue
        mapElement.style.left = '0';  // Réinitialiser le déplacement horizontal
        mapElement.style.top = '0';   // Réinitialiser le déplacement vertical
    };

    // Réduire la carte et la déplacer
    const zoomOutMap = () => {
        const mapElement = document.querySelector('.interactive-map .map');
        mapElement.style.transform = 'scale(0.6)';
        mapElement.style.transition = 'transform 0.5s ease';
        mapElement.style.position = 'absolute';
        mapElement.style.left = '10px';
    };

    // Agrandir la popup
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

    // Fonction pour gérer les clics sur les régions
    regions.forEach(regionId => {
        const region = document.getElementById(regionId);
        if (region) {
            // Survol : surbrillance
            region.addEventListener('mouseover', () => highlightRegion(region, '#FF5733'));
            region.addEventListener('mouseout', () => {
                // Si la région est sélectionnée, on la laisse colorée
                if (selectedRegion !== region) {
                    highlightRegion(region, '#ECEDEC');
                }
            });

            // Clic : affichage des informations et zoom/dézoom
            region.addEventListener('click', () => {
                const data = regionData[regionId];
                if (data) {
                    // Mise à jour de l'URL
                    updateURLWithRegion(regionId);

                    // Suivi du clic dans Google Analytics
                    trackRegionClick(regionId);

                    // Maintenir la couleur de la région sélectionnée
                    if (selectedRegion) {
                        highlightRegion(selectedRegion, '#ECEDEC'); // Réinitialiser la couleur précédente
                    }
                    selectedRegion = region; // Marquer la région comme sélectionnée
                    highlightRegion(region, '#FF5733'); // Met en surbrillance la région
                    zoomOutMap(); // Réduit et déplace la carte
                    showPopup(regionId, data); // Affiche la popup agrandie
                }
            });
        }
    });

    // Fermeture de la popup
    popup.addEventListener('click', e => {
        if (e.target.id === 'close-popup') {
            popup.style.display = 'none';

            // Réinitialiser la carte
            resetMapPosition(); // Reset position et échelle

            // Réinitialiser la couleur de la région
            if (selectedRegion) {
                highlightRegion(selectedRegion, '#ECEDEC');
                selectedRegion = null;
            }
        }
    });

    // Quand on clique en dehors de la popup
    document.addEventListener('click', e => {
        if (!popup.contains(e.target) && !e.target.classList.contains('region')) {
            popup.style.display = 'none';

            // Réinitialiser la carte
            resetMapPosition(); // Reset position et échelle

            // Réinitialiser la couleur de la région
            if (selectedRegion) {
                highlightRegion(selectedRegion, '#ECEDEC');
                selectedRegion = null;
            }
        }
    });
});
