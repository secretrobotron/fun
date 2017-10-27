import dom from './dom.js';
import flowerHTML from '../templates/flower.html';
import petalHTML from '../templates/petal.html';

function FlowerGenerator(flowerTemplate, petalTemplate) {

  this.createFlower = function (petals, pistilRadius) {
    var flower = flowerTemplate.cloneNode(true);

    // Up
    for (var i = 0; i < petals; ++i) {
      var petal = petalTemplate.cloneNode(true);
      petal.style.transform = 'rotate(' + (360/petals*i) + 'deg)';
      flower.querySelector('.petals').appendChild(petal);
    }

    flower.classList.add('debug');

    return flower;
  };
}

document.addEventListener('DOMContentLoaded', () => {
  var stage = document.querySelector('#stage');
  var flowerTemplate = dom.createElementFromTemplate(flowerHTML);
  var petalTemplate = dom.createElementFromTemplate(petalHTML);

  var flowerGenerator = new FlowerGenerator(flowerTemplate, petalTemplate);
  
  var flower = flowerGenerator.createFlower(8, 100);

  stage.appendChild(flower);

  document.addEventListener('mousemove', (e) => {
    var p = e.clientY / window.innerHeight;
    
    document.querySelector('.flower-transform').style.transform = 'rotateX(' + (-50*p) + 'deg)';
  });
});
