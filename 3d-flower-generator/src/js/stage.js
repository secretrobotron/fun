function Stage() {

  var stageContainer = document.querySelector('.stage-container');
  var stageRotationTransform = stageContainer.querySelector('.stage-transform.rotation');
  var stageTranslationTransform = stageContainer.querySelector('.stage-transform.translation');
  var stageElement = stageContainer.querySelector('.stage');

  var mouseDownPosition = {x: 0, y: 0};
  var currentSkyboxRotation = {x: 0, y: 0};
  var lastSkyboxRotation = {x: 0, y: 0};

  const rotationDampeningFactor = 6;

  function onMouseMove(e) {
    var dx = mouseDownPosition.x - e.clientX;
    var dy = mouseDownPosition.y - e.clientY;

    currentSkyboxRotation.x = lastSkyboxRotation.x - (dy / rotationDampeningFactor);
    currentSkyboxRotation.y = lastSkyboxRotation.y + (dx / rotationDampeningFactor);

    stageRotationTransform.style.transform ='rotateX(' + currentSkyboxRotation.x + 'deg) rotateY(' + currentSkyboxRotation.y + 'deg)';
  }

  function onMouseUp(e) {
    lastSkyboxRotation.x = currentSkyboxRotation.x;
    lastSkyboxRotation.y = currentSkyboxRotation.y;

    stageContainer.classList.remove('dragging');

    window.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

  function onMouseDown(e) {
    mouseDownPosition.x = e.clientX;
    mouseDownPosition.y = e.clientY;

    stageContainer.classList.add('dragging');
    
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
  }

  this.add = function (element) {
    stageElement.appendChild(element);
  };

  this.enableMouseDragging = function () {
    stageContainer.addEventListener('mousedown', onMouseDown);
  };
}

export default Stage;
