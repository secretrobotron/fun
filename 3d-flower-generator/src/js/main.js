import FlowerGenerator from './flower-generator.js';
import Stage from './stage.js';

document.addEventListener('DOMContentLoaded', () => {
  var stage = new Stage();
  var flowerGenerator = new FlowerGenerator();
  
  var flower = flowerGenerator.createRandomFlower(100);


  flower.style.transform = 'translateX(100px) translateY(100px) translateZ(-700px) rotateX(-10deg)';
  stage.add(flower);

  stage.enableMouseDragging();
});
