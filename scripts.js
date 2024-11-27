document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 600) {
        popup.style.width = '90%';  // Taille de la popup pour mobile
    }
    

    // Sélectionne toutes les régions par leur id
    const regions = [
      'Centre-Val-de-Loire', 'Bretagne', 'Bourgogne-Franche-Comte', 'Grand-Est',
      'Occitanie', 'Hauts-de-France', 'Auvergne-Rhone-Alpes', 'Normandie', 'Pays-de-la-Loire',
      'PACA', 'Ile-de-France', 'Nouvelle-Aquitaine'
    ];
  
    // Crée un objet contenant les informations supplémentaires des régions
    //const regionInfo = {
     // 'Centre-Val-de-Loire': { population: '2,570,000', capital: 'Orléans', area: '39,151 km²' },
      //'Bretagne': { population: '3,300,000', capital: 'Rennes', area: '27,208 km²' },
      //'Bourgogne-Franche-Comte': { population: '2,800,000', capital: 'Dijon', area: '47,784 km²' },
       //'Grand-Est': { population: '5,500,000', capital: 'Strasbourg', area: '57,433 km²' },
       //'Occitanie': { population: '5,900,000', capital: 'Toulouse', area: '72,724 km²' },
       //'Hauts-de-France': { population: '6,000,000', capital: 'Lille', area: '31,813 km²' },
       //'Auvergne-Rhone-Alpes': { population: '8,000,000', capital: 'Lyon', area: '69,711 km²' },
       //'Normandie': { population: '3,300,000', capital: 'Rouen', area: '29,907 km²' },
       //'Pays-de-la-Loire': { population: '3,700,000', capital: 'Nantes', area: '32,082 km²' },
       //'PACA': { population: '5,000,000', capital: 'Marseille', area: '31,400 km²' },
       //'Ile-de-France': { population: '12,000,000', capital: 'Paris', area: '12,012 km²' },
       //'Nouvelle-Aquitaine': { population: '6,000,000', capital: 'Bordeaux', area: '84,036 km²' },
     //};
  

  const regionData = {
      'Centre-Val-de-Loire': {
        title: '<h1>Centre-Val-de-Loire</h1>',
        sections: [
          { title: '<h2>Sous titre</h2>', content: 'Un attachement au territoire plus fort que les inégalités territoriales' },
          { title: '<h2>Le regarde de l&apos;Institut Montaigne</h2>', content: 'Le Centre-Val-de-Loire est plutôt cool, alors allons y passer des vacances' },
          { title: '<h2>Population</h2>', content: '6 069 352' },
          { title: '<h2>Sondés</h2>', content: '4 000 346' },
          {       title: '<h2>Qualité de vie</h2>', 
              content: `
                <ul>
                  <li>72% heureux</li>
                  <li>74% en sécurité</li>
                  <li>69% satisfaits de leur quartier</li>
                  <li>46% pessimistes pour leur avenir</li>
                  <li>72% pessimistes pour la société</li>
                </ul>` 
            },
            { 
              title: '<h2>Économie & Service publics</h2>', 
              content: `
                <ul>
                  <li>50% ont des difficultés financières</li>
                  <li>39% à découvert régulièrement</li>
                  <li>41% estiment les services publics en recul</li>
                  <li>31% trouvent les transports insuffisants</li>
                </ul>`
            },
            { 
              title: '<h2>Inégalités sociales</h2>', 
              content: `
                <ul>
                  <li>84% considèrent la société injuste</li>
                  <li>68% estiment l’impôt inefficace</li>
                </ul>`
            }
          ],
        pdfLink: 'Centre-Val-de-Loire'
      },

      'Bretagne': {
        title: '<h1>Bretagne</h1>',
        sections: [
          { title: '<h2>Sous titre</h2>', content: 'Un attachement au territoire plus fort que les inégalités territoriales' },
          { title: '<h2>Le regarde de l&apos;Institut Montaigne</h2>', content: 'La Bretagne est une région charmante, idéale pour les vacances.' },
          { title: '<h2>Population</h2>', content: '3 300 000' },
          { title: '<h2>Sondés</h2>', content: '2 000 000' },
          {       title: '<h2>Qualité de vie</h2>', 
              content: `
                <ul>
                  <li>72% heureux</li>
                  <li>74% en sécurité</li>
                  <li>69% satisfaits de leur quartier</li>
                  <li>46% pessimistes pour leur avenir</li>
                  <li>72% pessimistes pour la société</li>
                </ul>` 
            },
            { 
              title: '<h2>Économie & Service publics</h2>', 
              content: `
                <ul>
                  <li>50% ont des difficultés financières</li>
                  <li>39% à découvert régulièrement</li>
                  <li>41% estiment les services publics en recul</li>
                  <li>31% trouvent les transports insuffisants</li>
                </ul>`
            },
            { 
              title: '<h2>Inégalités sociales</h2>', 
              content: `
                <ul>
                  <li>84% considèrent la société injuste</li>
                  <li>68% estiment l’impôt inefficace</li>
                </ul>`
            }
          ],
        pdfLink: 'Bretagne'
      },

      'Bourgogne-Franche-Comte': {
        title: '<h1>Bourgogne-Franche-Comte</h1>',
        sections: [
          { title: '<h2>Sous titre</h2>', content: 'Un attachement au territoire plus fort que les inégalités territoriales' },
          { title: '<h2>Le regarde de l&apos;Institut Montaigne</h2>', content: 'Bourgogne-Franche-Comté est une belle région pour la gastronomie et le vin.' },
          { title: '<h2>Population</h2>', content: '2 800 000' },
          { title: '<h2>Sondés</h2>', content: '1 500 000' },
          {       title: '<h2>Qualité de vie</h2>', 
              content: `
                <ul>
                  <li>72% heureux</li>
                  <li>74% en sécurité</li>
                  <li>69% satisfaits de leur quartier</li>
                  <li>46% pessimistes pour leur avenir</li>
                  <li>72% pessimistes pour la société</li>
                </ul>` 
            },
            { 
              title: '<h2>Économie & Service publics</h2>', 
              content: `
                <ul>
                  <li>50% ont des difficultés financières</li>
                  <li>39% à découvert régulièrement</li>
                  <li>41% estiment les services publics en recul</li>
                  <li>31% trouvent les transports insuffisants</li>
                </ul>`
            },
            { 
              title: '<h2>Inégalités sociales</h2>', 
              content: `
                <ul>
                  <li>84% considèrent la société injuste</li>
                  <li>68% estiment l’impôt inefficace</li>
                </ul>`
            }
          ],
        pdfLink: 'Bourgogne-Franche-Comte'
      },

      'Grand-Est': {
        title: '<h1>Grand-Est</h1>',
        sections: [
          { title: '<h2>Sous titre</h2>', content: 'Un attachement au territoire plus fort que les inégalités territoriales' },
          { title: '<h2>Le regarde de l&apos;Institut Montaigne</h2>', content: 'Le Grand-Est est un carrefour européen avec une grande diversité culturelle.' },
          { title: '<h2>Population</h2>', content: '5 500 000' },
          { title: '<h2>Sondés</h2>', content: '3 000 000' },
          {       title: '<h2>Qualité de vie</h2>', 
              content: `
                <ul>
                  <li>72% heureux</li>
                  <li>74% en sécurité</li>
                  <li>69% satisfaits de leur quartier</li>
                  <li>46% pessimistes pour leur avenir</li>
                  <li>72% pessimistes pour la société</li>
                </ul>` 
            },
            { 
              title: '<h2>Économie & Service publics</h2>', 
              content: `
                <ul>
                  <li>50% ont des difficultés financières</li>
                  <li>39% à découvert régulièrement</li>
                  <li>41% estiment les services publics en recul</li>
                  <li>31% trouvent les transports insuffisants</li>
                </ul>`
            },
            { 
              title: '<h2>Inégalités sociales</h2>', 
              content: `
                <ul>
                  <li>84% considèrent la société injuste</li>
                  <li>68% estiment l’impôt inefficace</li>
                </ul>`
            }
          ],
        pdfLink: 'Grand-Est'
      },

      'Occitanie': {
        title: '<h2>Occitanie</h2>',
        sections: [
          { title: '<h2>Sous titre</h2>', content: 'Un attachement au territoire plus fort que les inégalités territoriales' },
          { title: '<h2>Le regarde de l&apos;Institut Montaigne</h2>', content: 'Occitanie est connue pour son climat et ses paysages magnifiques.' },
          { title: '<h2>Population</h2>', content: '5 900 000' },
          { title: '<h2>Sondés</h2>', content: '2 800 000' },
          {       title: '<h2>Qualité de vie</h2>', 
              content: `
                <ul>
                  <li>72% heureux</li>
                  <li>74% en sécurité</li>
                  <li>69% satisfaits de leur quartier</li>
                  <li>46% pessimistes pour leur avenir</li>
                  <li>72% pessimistes pour la société</li>
                </ul>` 
            },
            { 
              title: '<h2>Économie & Service publics</h2>', 
              content: `
                <ul>
                  <li>50% ont des difficultés financières</li>
                  <li>39% à découvert régulièrement</li>
                  <li>41% estiment les services publics en recul</li>
                  <li>31% trouvent les transports insuffisants</li>
                </ul>`
            },
            { 
              title: '<h2>Inégalités sociales</h2>', 
              content: `
                <ul>
                  <li>84% considèrent la société injuste</li>
                  <li>68% estiment l’impôt inefficace</li>
                </ul>`
            }
          ],
        pdfLink: 'Occitanie'
      },

      'Hauts-de-France': {
        title: '<h1>Hauts-de-France</h1>',
        sections: [
          { title: '<h2>Sous titre</h2>', content: 'Un attachement au territoire plus fort que les inégalités territoriales' },
          { title: '<h2>Le regarde de l&apos;Institut Montaigne</h2>', content: 'Les Hauts-de-France sont une région riche en histoire et en patrimoine.' },
          { title: '<h2>Population</h2>', content: '6 000 000' },
          { title: '<h2>Sondés</h2>', content: '4 500 000' },
          {       title: '<h2>Qualité de vie</h2>', 
              content: `
                <ul>
                  <li>72% heureux</li>
                  <li>74% en sécurité</li>
                  <li>69% satisfaits de leur quartier</li>
                  <li>46% pessimistes pour leur avenir</li>
                  <li>72% pessimistes pour la société</li>
                </ul>` 
            },
            { 
              title: '<h2>Économie & Service publics</h2>', 
              content: `
                <ul>
                  <li>50% ont des difficultés financières</li>
                  <li>39% à découvert régulièrement</li>
                  <li>41% estiment les services publics en recul</li>
                  <li>31% trouvent les transports insuffisants</li>
                </ul>`
            },
            { 
              title: '<h2>Inégalités sociales</h2>', 
              content: `
                <ul>
                  <li>84% considèrent la société injuste</li>
                  <li>68% estiment l’impôt inefficace</li>
                </ul>`
            }
          ],
        pdfLink: 'Hauts-de-France'
      },

      'Auvergne-Rhone-Alpes': {
        title: '<h1>Auvergne-Rhone-Alpes</h1>',
        sections: [
          { title: '<h2>Sous titre</h2>', content: 'Un attachement au territoire plus fort que les inégalités territoriales' },
          { title: '<h2>Le regarde de l&apos;Institut Montaigne</h2>', content: 'Une région montagneuse avec un fort potentiel touristique et économique.' },
          { title: '<h2>Population</h2>', content: '8 000 000' },
          { title: '<h2>Sondés</h2>', content: '5 000 000' },
          {       title: '<h2>Qualité de vie</h2>', 
              content: `
                <ul>
                  <li>72% heureux</li>
                  <li>74% en sécurité</li>
                  <li>69% satisfaits de leur quartier</li>
                  <li>46% pessimistes pour leur avenir</li>
                  <li>72% pessimistes pour la société</li>
                </ul>` 
            },
            { 
              title: '<h2>Économie & Service publics</h2>', 
              content: `
                <ul>
                  <li>50% ont des difficultés financières</li>
                  <li>39% à découvert régulièrement</li>
                  <li>41% estiment les services publics en recul</li>
                  <li>31% trouvent les transports insuffisants</li>
                </ul>`
            },
            { 
              title: '<h2>Inégalités sociales</h2>', 
              content: `
                <ul>
                  <li>84% considèrent la société injuste</li>
                  <li>68% estiment l’impôt inefficace</li>
                </ul>`
            }
          ],
        pdfLink: 'Auvergne-Rhone-Alpes'
      },
      'Normandie': {
        title: '<h1>Normandie</h1>',
        sections: [
          { title: '<h2>Sous titre</h2>', content: 'Un attachement au territoire plus fort que les inégalités territoriales' },
          { title: '<h2>Le regarde de l&apos;Institut Montaigne</h2>', content: 'La Normandie est une région historique avec des paysages variés et une forte tradition maritime.' },
          { title: '<h2>Population</h2>', content: '3 300 000' },
          { title: '<h2>Sondés</h2>', content: '1 800 000' },
          {       title: '<h2>Qualité de vie</h2>', 
              content: `
                <ul>
                  <li>72% heureux</li>
                  <li>74% en sécurité</li>
                  <li>69% satisfaits de leur quartier</li>
                  <li>46% pessimistes pour leur avenir</li>
                  <li>72% pessimistes pour la société</li>
                </ul>` 
            },
            { 
              title: '<h2>Économie & Service publics</h2>', 
              content: `
                <ul>
                  <li>50% ont des difficultés financières</li>
                  <li>39% à découvert régulièrement</li>
                  <li>41% estiment les services publics en recul</li>
                  <li>31% trouvent les transports insuffisants</li>
                </ul>`
            },
            { 
              title: '<h2>Inégalités sociales</h2>', 
              content: `
                <ul>
                  <li>84% considèrent la société injuste</li>
                  <li>68% estiment l’impôt inefficace</li>
                </ul>`
            }
          ],
        pdfLink: 'Normandie'
      },
      'Pays-de-la-Loire': {
        title: '<h1>Pays-de-la-Loire</h1>',
        sections: [
          { title: '<h2>Sous titre</h2>', content: 'Un attachement au territoire plus fort que les inégalités territoriales' },
          { title: '<h2>Le regarde de l&apos;Institut Montaigne</h2>', content: 'Les Pays-de-la-Loire sont réputés pour leur économie dynamique et leur littoral.' },
          { title: '<h2>Population</h2>', content: '3 700 000' },
          { title: '<h2>Sondés</h2>', content: '2 000 000' },
          {       title: '<h2>Qualité de vie</h2>', 
              content: `
                <ul>
                  <li>72% heureux</li>
                  <li>74% en sécurité</li>
                  <li>69% satisfaits de leur quartier</li>
                  <li>46% pessimistes pour leur avenir</li>
                  <li>72% pessimistes pour la société</li>
                </ul>` 
            },
            { 
              title: '<h2>Économie & Service publics</h2>', 
              content: `
                <ul>
                  <li>50% ont des difficultés financières</li>
                  <li>39% à découvert régulièrement</li>
                  <li>41% estiment les services publics en recul</li>
                  <li>31% trouvent les transports insuffisants</li>
                </ul>`
            },
            { 
              title: '<h2>Inégalités sociales</h2>', 
              content: `
                <ul>
                  <li>84% considèrent la société injuste</li>
                  <li>68% estiment l’impôt inefficace</li>
                </ul>`
            }
          ],
        pdfLink: 'Pays-de-la-Loire'
      },
      'PACA': {
        title: '<h1>PACA</h1>',
        sections: [
          { title: '<h2>Sous titre</h2>', content: 'Un attachement au territoire plus fort que les inégalités territoriales' },
          { title: '<h2>Le regarde de l&apos;Institut Montaigne</h2>', content: 'PACA, une région dynamique avec une belle côte méditerranéenne.' },
          { title: '<h2>Population</h2>', content: '5 000 000' },
          { title: '<h2>Sondés</h2>', content: '2 500 000' },
          {       title: '<h2>Qualité de vie</h2>', 
              content: `
                <ul>
                  <li>72% heureux</li>
                  <li>74% en sécurité</li>
                  <li>69% satisfaits de leur quartier</li>
                  <li>46% pessimistes pour leur avenir</li>
                  <li>72% pessimistes pour la société</li>
                </ul>` 
            },
            { 
              title: '<h2>Économie & Service publics</h2>', 
              content: `
                <ul>
                  <li>50% ont des difficultés financières</li>
                  <li>39% à découvert régulièrement</li>
                  <li>41% estiment les services publics en recul</li>
                  <li>31% trouvent les transports insuffisants</li>
                </ul>`
            },
            { 
              title: '<h2>Inégalités sociales</h2>', 
              content: `
                <ul>
                  <li>84% considèrent la société injuste</li>
                  <li>68% estiment l’impôt inefficace</li>
                </ul>`
            }
          ],
        pdfLink: 'PACA'
      },
      'Ile-de-France': {
        title: '<h1>Ile-de-France</h1>',
        sections: [
          { title: '<h2>Sous titre</h2>', content: 'Un attachement au territoire plus fort que les inégalités territoriales' },
          { title: '<h2>Le regarde de l&apos;Institut Montaigne</h2>', content: 'La région capitale est un centre économique et culturel majeur.' },
          { title: '<h2>Population</h2>', content: '12 000 000' },
          { title: '<h2>Sondés</h2>', content: '7 000 000' },
          {       title: '<h2>Qualité de vie</h2>', 
              content: `
                <ul>
                  <li>72% heureux</li>
                  <li>74% en sécurité</li>
                  <li>69% satisfaits de leur quartier</li>
                  <li>46% pessimistes pour leur avenir</li>
                  <li>72% pessimistes pour la société</li>
                </ul>` 
            },
            { 
              title: '<h2>Économie & Service publics</h2>', 
              content: `
                <ul>
                  <li>50% ont des difficultés financières</li>
                  <li>39% à découvert régulièrement</li>
                  <li>41% estiment les services publics en recul</li>
                  <li>31% trouvent les transports insuffisants</li>
                </ul>`
            },
            { 
              title: '<h2>Inégalités sociales</h2>', 
              content: `
                <ul>
                  <li>84% considèrent la société injuste</li>
                  <li>68% estiment l’impôt inefficace</li>
                </ul>`
            }
          ],
          pdfLink: 'Ile-de-France'
      },
      'Nouvelle-Aquitaine': {
        title: '<h1>Nouvelle-Aquitaine</h1>',
        sections: [
          { title: '<h2>Sous titre</h2>', content: 'Un attachement au territoire plus fort que les inégalités territoriales' },
          { title: '<h2>Le regarde de l&apos;Institut Montaigne</h2>', content: 'Nouvelle-Aquitaine, un grand territoire aux paysages variés et à l’économie solide.' },
          { title: '<h2>Population</h2>', content: '6 000 000' },
          { title: '<h2>Sondés</h2>', content: '3 200 000' },
          {       title: '<h2>Qualité de vie</h2>', 
              content: `
                <ul>
                  <li>72% heureux</li>
                  <li>74% en sécurité</li>
                  <li>69% satisfaits de leur quartier</li>
                  <li>46% pessimistes pour leur avenir</li>
                  <li>72% pessimistes pour la société</li>
                </ul>` 
            },
            { 
              title: '<h2>Économie & Service publics</h2>', 
              content: `
                <ul>
                  <li>50% ont des difficultés financières</li>
                  <li>39% à découvert régulièrement</li>
                  <li>41% estiment les services publics en recul</li>
                  <li>31% trouvent les transports insuffisants</li>
                </ul>`
            },
            { 
              title: '<h2>Inégalités sociales</h2>', 
              content: `
                <ul>
                  <li>84% considèrent la société injuste</li>
                  <li>68% estiment l’impôt inefficace</li>
                </ul>`
            }
          ],
        pdfLink: 'Nouvelle-Aquitaine'
      }
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


/////////////////////////////
// NEW CODE CI-DESSSOUS
