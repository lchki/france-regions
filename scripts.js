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
  
    // Sélectionne l'élément du popup
    const popup = document.createElement('div');
    popup.id = 'region-popup';
    popup.style.position = 'absolute';
    popup.style.top = '50px';
    popup.style.right = '10px';
    popup.style.width = '250px';
    popup.style.backgroundColor = '#fff';
    popup.style.border = '1px solid #ccc';
    popup.style.padding = '10px';
    popup.style.display = 'none';
    popup.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.15)';
    document.body.appendChild(popup);
  
    // Récupère chaque région et ajoute des événements d'interaction
    regions.forEach(regionId => {
      const region = document.getElementById(regionId);
  
      if (region) {
        // Change la couleur au survol
        region.addEventListener('mouseover', () => {
          region.setAttribute('fill', '#FF5733'); // Couleur de surbrillance
        });
  
        // Remet la couleur d'origine après le survol
        region.addEventListener('mouseout', () => {
          region.setAttribute('fill', '#ECEDEC'); // Couleur d'origine
        });
  
        // Action au clic : affiche un popup avec les informations de la région
        region.addEventListener('click', () => {
          // Récupère les informations de la région
          const info = regionInfo[regionId];
  
          if (info) {
            // Met à jour le contenu du popup avec les informations supplémentaires
            popup.innerHTML = `
              <h3>${regionId.replace(/-/g, ' ')}</h3>
              <p><strong>Population:</strong> ${info.population}</p>
              <p><strong>Capitale:</strong> ${info.capital}</p>
              <p><strong>Superficie:</strong> ${info.area}</p>
            `;
  
            // Affiche le popup
            popup.style.display = 'block';
          }
        });
      }
    });
  
    // Fermer le popup si l'utilisateur clique en dehors du popup
    document.addEventListener('click', (e) => {
      if (!popup.contains(e.target) && !regions.some(regionId => document.getElementById(regionId).contains(e.target))) {
        popup.style.display = 'none';
      }
    });
  });
  