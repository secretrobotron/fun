document.addEventListener('DOMContentLoaded', function () {
  function makeFlower(radius, numPetals, petalWidth, petalColour, pistilRadius, pistilBackground, rotation) {
    console.log(radius, numPetals, petalWidth, petalColour, pistilRadius, pistilBackground, rotation);

    var flowerDiv = document.createElement('div');
    var centerDiv = document.createElement('div');
    var pistilDiv = document.createElement('div');

    var petal;

    var pistilBackgrounds = [
      null, 'striped', 'dotted'
    ];

    flowerDiv.classList.add('flower');
    centerDiv.classList.add('center');
    pistilDiv.classList.add('pistil');
    flowerDiv.style.width = radius + 'px';
    flowerDiv.style.height = radius + 'px';
    flowerDiv.style.marginTop = (-radius/2) + 'px';
    flowerDiv.style.marginLeft = (-radius/2) + 'px';

    for (var i = 0; i < numPetals; ++i) {
      petal = document.createElement('div');
      petal.classList.add('petal');
      petal.style.top = (-radius/2) + 'px';
      petal.style.left = (-petalWidth/2) + 'px';
      petal.style.transform = 'rotate(' + (i*Math.PI*2/numPetals) + 'rad)';
      petal.style.width = petalWidth + 'px';
      petal.style.height = radius/2 + 'px';
      petal.style.backgroundColor = 'rgb(' + Math.round(petalColour[0]) + ',' + Math.round(petalColour[1]) + ',' + Math.round(petalColour[2]) + ')';
      centerDiv.appendChild(petal);
    }

    pistilDiv.style.width = pistilRadius + 'px';
    pistilDiv.style.height = pistilRadius + 'px';
    pistilDiv.style.borderRadius = pistilRadius + 'px';
    pistilDiv.style.marginTop = -pistilRadius/2 + 'px';
    pistilDiv.style.marginLeft = -pistilRadius/2 + 'px';

    pistilDiv.classList.add(pistilBackground);

    centerDiv.appendChild(pistilDiv);
    flowerDiv.appendChild(centerDiv);

    centerDiv.style.transform = 'rotate( ' + rotation + 'rad)';

    return flowerDiv;
  }

  function addFlower() {
    currentFlower && document.body.removeChild(currentFlower);
    currentFlower = makeFlower(
      flowerModel.radius,
      flowerModel.numPetals,
      flowerModel.petalWidth,
      flowerModel.petalColour,
      flowerModel.pistilRadius,
      flowerModel.pistilBackground,
      flowerModel.flowerRotation
    );
    document.body.appendChild(currentFlower);
  }

  var currentFlower;

  var pistilBackgrounds = ['none', 'striped', 'dotted'];

  var constraints = {
    radius: [50, 1000],
    numPetals: [3, 20],
    petalWidth: [10, 250],
    pistilRadius: [10, 250],
    flowerRotation: [0, Math.PI*2]
  }

  var flowerModel = {
    radius: 200,
    numPetals: 4,
    petalColour: [Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255)],
    petalWidth: 10,
    pistilRadius: 10,
    pistilBackground: pistilBackgrounds[Math.floor(Math.random() * pistilBackgrounds.length)],
    flowerRotation: 0
  };

  Object.keys(flowerModel).forEach(function(key) {
    if (constraints[key]) {
      flowerModel[key] = (Math.random()*(constraints[key][1]-constraints[key][0])) + constraints[key][0];
    }
  });

  flowerModel.numPetals = Math.round(flowerModel.numPetals);

  var gui = new dat.GUI();

  gui.add(flowerModel, 'radius', constraints.radius[0], constraints.radius[1]).onChange(addFlower);
  gui.add(flowerModel, 'numPetals', constraints.numPetals[0], constraints.numPetals[1]).step(1).onChange(addFlower);
  gui.add(flowerModel, 'petalWidth', constraints.petalWidth[0], constraints.petalWidth[1]).onChange(addFlower);
  gui.add(flowerModel, 'pistilRadius', constraints.pistilRadius[0], constraints.pistilRadius[1]).onChange(addFlower);
  gui.add(flowerModel, 'pistilBackground', pistilBackgrounds).onChange(addFlower);
  gui.addColor(flowerModel, 'petalColour').onChange(addFlower);
  gui.add(flowerModel, 'flowerRotation', constraints.flowerRotation[0], constraints.flowerRotation[1]).onChange(addFlower);

  addFlower();
});