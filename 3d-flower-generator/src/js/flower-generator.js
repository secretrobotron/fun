import dom from './dom.js';
import flowerHTML from '../templates/flower.html';
import petalHTML from '../templates/petal.html';

function FlowerGenerator() {
  var flowerTemplate = dom.createElementFromTemplate(flowerHTML);
  var petalTemplate = dom.createElementFromTemplate(petalHTML);

  var defaultColours = [
    'orange', 'red', 'blue', 'pink'
  ];

  this.createFlower = function (pistilRadius, petals) {
    var flower = flowerTemplate.cloneNode(true);
    var petalsContainer = flower.querySelector('.petals');

    petals.forEach((petalSettings) => {
      var numPetals = petalSettings.number;
      var colour = petalSettings.colour;
      var rotation = petalSettings.rotation || 0;

      for (var i = 0; i < numPetals; ++i) {
        var petalContainer = petalTemplate.cloneNode(true);
        var petal = petalContainer.firstElementChild;

        petalContainer.style.transform = 'rotateZ(' + (360/numPetals*i) + 'deg)';
        petal.style.transform = 'translateZ(-40px) rotateX(' + rotation + 'deg) rotateY(-' + rotation + 'deg)';
        
        petal.classList.add(colour);
        petalsContainer.appendChild(petalContainer);
      }
    });

    flower.classList.add('debug');

    return flower;
  };

  this.createRandomFlower = function(pistilRadius) {
    var layers = [];

    var numLayers = 1 + Math.round(Math.random() * 3);

    for (var i = 0; i < numLayers; ++i) {
      layers.push({
        number: Math.round(Math.random() * 12) + 4,
        colour: defaultColours[Math.floor(Math.random() * defaultColours.length)],
        rotation: 15 + Math.round(Math.random() * 15)
      });
    }

    return this.createFlower(pistilRadius, layers);
  };
}

export default FlowerGenerator;
