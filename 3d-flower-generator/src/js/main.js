import dom from './dom.js';
import flowerHTML from '../templates/flower.html';
import petalHTML from '../templates/petal.html';

function FlowerGenerator(flowerTemplate, petalTemplate) {

  var defaultColours = [
    'orange', 'red', 'blue', 'pink'
  ];

  this.createFlower = function (pistilRadius, petals) {
    var flower = flowerTemplate.cloneNode(true);
    var petalsContainer = flower.querySelector('.petals');

    petals.forEach((petalSettings) => {
      var numPetals = petalSettings.number || (Math.round(Math.random() * 12) + 4);
      var colour = petalSettings.colour || defaultColours[Math.floor(Math.random() * defaultColours.length)];

      for (var i = 0; i < numPetals; ++i) {
        var petalContainer = petalTemplate.cloneNode(true);
        petalContainer.style.transform = 'rotate(' + (360/numPetals*i) + 'deg)';
        petalsContainer.appendChild(petalContainer);
        petalContainer.firstElementChild.classList.add(colour);
      }
    });


    flower.classList.add('debug');

    return flower;
  };
}

document.addEventListener('DOMContentLoaded', () => {
  var stage = document.querySelector('#stage');
  var flowerTemplate = dom.createElementFromTemplate(flowerHTML);
  var petalTemplate = dom.createElementFromTemplate(petalHTML);

  var flowerGenerator = new FlowerGenerator(flowerTemplate, petalTemplate);
  
  var flower = flowerGenerator.createFlower(100, [
    {
      number: 6,
      colour: 'blue'
    }
  ]);

  stage.appendChild(flower);

  document.addEventListener('mousemove', (e) => {
    var p = e.clientY / window.innerHeight;
    
    document.querySelector('.flower-transform').style.transform = 'rotateX(' + (-50*p) + 'deg)';
  });
});
