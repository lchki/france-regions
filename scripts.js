document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne toutes les régions par leur id
    const regions = [
      'corse', 'centre-val-de-loire', 'bretagne', 'bourgogne-franche-comte', 'grand-est',
      'occitanie', 'hauts-de-france', 'auvergne-rhone-alpes', 'normandie', 'pays-de-la-loire',
      'PACA', 'ile-de-france', 'nouvelle-aquitaine', 'guyane', 'martinique', 'mayotte',
      'guadeloupe', 'reunion', 'wallis-et-futuna', 'saint-pierre-et-miquelon', 'polynesie-francaise', 
      'nouvelle-caledonie'
    ];
  
    // Crée un objet contenant les informations supplémentaires des régions
    const regionInfo = {
      'corse': { population: '330,000', capital: 'Ajaccio', area: '8,680 km²' },
      'centre-val-de-loire': { population: '2,570,000', capital: 'Orléans', area: '39,151 km²' },
      'bretagne': { population: '3,300,000', capital: 'Rennes', area: '27,208 km²' },
      'bourgogne-franche-comte': { population: '2,800,000', capital: 'Dijon', area: '47,784 km²' },
      'grand-est': { population: '5,500,000', capital: 'Strasbourg', area: '57,433 km²' },
      'occitanie': { population: '5,900,000', capital: 'Toulouse', area: '72,724 km²' },
      'hauts-de-france': { population: '6,000,000', capital: 'Lille', area: '31,813 km²' },
      'auvergne-rhone-alpes': { population: '8,000,000', capital: 'Lyon', area: '69,711 km²' },
      'normandie': { population: '3,300,000', capital: 'Rouen', area: '29,907 km²' },
      'pays-de-la-loire': { population: '3,700,000', capital: 'Nantes', area: '32,082 km²' },
      'PACA': { population: '5,000,000', capital: 'Marseille', area: '31,400 km²' },
      'ile-de-france': { population: '12,000,000', capital: 'Paris', area: '12,012 km²' },
      'nouvelle-aquitaine': { population: '6,000,000', capital: 'Bordeaux', area: '84,036 km²' },
      'guyane': { population: '300,000', capital: 'Cayenne', area: '83,534 km²' },
      'martinique': { population: '400,000', capital: 'Fort-de-France', area: '1,128 km²' },
      'mayotte': { population: '270,000', capital: 'Mamoudzou', area: '374 km²' },
      'guadeloupe': { population: '400,000', capital: 'Basse-Terre', area: '1,628 km²' },
      'reunion': { population: '860,000', capital: 'Saint-Denis', area: '2,512 km²' },
      'wallis-et-futuna': { population: '11,000', capital: 'Mata Utu', area: '274 km²' },
      'saint-pierre-et-miquelon': { population: '6,000', capital: 'Saint-Pierre', area: '242 km²' },
      'polynesie-francaise': { population: '280,000', capital: 'Papeete', area: '4,167 km²' },
      'nouvelle-caledonie': { population: '285,000', capital: 'Nouméa', area: '18,576 km²' }
    };
  
    const regionData = {
        'corse': {
            title: 'Région Corse',
            sections: [
                {
                    title: 'Introduction',
                    content: `La Corse est une île de la Méditerranée célèbre pour ses paysages magnifiques et son patrimoine unique.
                              Vivamus scelerisque in urna non consequat. Suspendisse mollis augue ac felis vulputate.`
                },
                {
                    title: 'Histoire',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit eu eros hendrerit pulvinar. 
                              Nam sit amet sapien eros.`
                }
            ],
            pdfLink: 'corse-info.pdf'
        },
        'centre-val-de-loire' : {
            title: 'centre-val-de-loire',
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
            pdfLink: 'centre-val-de-loire'
        },
        'bretagne': {
            title: 'bretagne',
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
            pdfLink: 'bretagne'
        },
        'bourgogne-franche-comte' : {
            title: 'bourgogne-franche-comte',
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
            pdfLink: 'bourgogne-franche-comte'
        },
        'grand-est': {
            title: 'grand-est',
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
            pdfLink: 'grand-est'
        },
        'occitanie' : {
            title: 'occitanie',
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
            pdfLink: 'occitanie'
        },
        'hauts-de-france': {
            title: 'hauts-de-france',
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
            pdfLink: 'hauts-de-france'
        },
        'auvergne-rhone-alpes' : {
            title: 'auvergne-rhone-alpes',
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
            pdfLink: 'auvergne-rhone-alpes'
        },
        'normandie': {
            title: 'normandie',
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
            pdfLink: 'normandie'
        },
        'pays-de-la-loire': {
            title: 'pays-de-la-loire',
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
            pdfLink: 'pays-de-la-loire'
        },
        'PACA' : {
            title: 'PACA',
            description: 'Lorem ipsum dolor',
            pdfLink: 'PACA'
        },
        'ile-de-france': {
            title: 'ile-de-france',
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
            pdfLink: 'ile-de-france'
        },
        'nouvelle-aquitaine': {
            title: 'nouvelle-aquitaine',
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
            pdfLink: 'nouvelle-aquitaine'
        },
        'guyane' : {
            title: 'guyane',
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
            pdfLink: 'guyane'
        },
        'martinique': {
            title: 'martinique',
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
            pdfLink: 'martinique'
        },
        'mayotte': {
            title: 'mayotte',
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
            pdfLink: 'mayotte'
        },
        'guadeloupe': {
            title: 'guadeloupe',
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
            pdfLink: 'guadeloupe'
        },
        'reunion': {
            title: 'reunion',
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
            pdfLink: 'reunion'
        },
        'wallis-et-futuna': {
            title: 'wallis-et-futuna',
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
            pdfLink: 'wallis-et-futuna'
        },
        'saint-pierre-et-miquelon': {
            title: 'saint-pierre-et-miquelon',
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
            pdfLink: 'saint-pierre-et-miquelon'
        },
        'polynesie-francaise': {
            title: 'polynesie-francaise',
            description: 'Lorem ipsum dolor',
            pdfLink: 'polynesie-francaise'
        },
        'nouvelle-caledonie': {
            title: 'nouvelle-caledonie',
            description: 'Lorem ipsum dolor',
            pdfLink: 'nouvelle-caledonie'
        },

    };

    // Création et stylisation de la popup
    const popup = document.createElement('div');
    popup.id = 'region-popup';
    popup.style.position = 'fixed';
    popup.style.backgroundColor = '#fff';
    popup.style.border = '1px solid #ccc';
    popup.style.padding = '15px';
    popup.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.15)';
    popup.style.display = 'none';
    document.body.appendChild(popup);

    // Gestion des interactions pour chaque région
    regions.forEach(regionId => {
        const region = document.getElementById(regionId);
        if (region) {
            // Survol : changement de couleur
            region.addEventListener('mouseover', () => {
                region.setAttribute('fill', '#FF5733');
            });
            region.addEventListener('mouseout', () => {
                region.setAttribute('fill', '#ECEDEC');
            });

            // Clic : affichage des informations et du lien de téléchargement
            region.addEventListener('click', () => {
                const info = regionInfo[regionId];
                const data = regionData[regionId];
            
                if (info && data) {
                    // Génère les sections avec leurs titres et contenus
                    let sectionsHTML = '';
                    data.sections.forEach(section => {
                        sectionsHTML += `
                            <div class="popup-section">
                                <h4>${section.title}</h4>
                                <p>${section.content}</p>
                            </div>
                        `;
                    });
            
                    // Crée le contenu complet de la popup
                    popup.innerHTML = `
                        <button id="close-popup">&times;</button>
                        <h3>${data.title}</h3>
                        ${sectionsHTML}
                        <a href="${data.pdfLink}" target="_blank" class="download-link">Télécharger le PDF</a>
                    `;
                    popup.style.display = 'block';

                    // Fermeture de la popup
                    document.getElementById('close-popup').addEventListener('click', () => {
                        popup.style.display = 'none';
                    });
                }
            });
        }
    });

    // Fermeture de la popup en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
        if (!popup.contains(e.target) && !e.target.classList.contains('region')) {
            popup.style.display = 'none';
        }
    });
});
