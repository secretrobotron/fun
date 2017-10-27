module.exports = {
  createElementFromTemplate: function (template) {
    var div = document.createElement('div');
    div.innerHTML = template;
    return div.firstElementChild;
  }
};