
function getComponent() {
   return import('lodash').then(({ default: _ }) => {
      const element = document.createElement('div');

      // Lodash, now imported by this script
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   
      return element;
   }).catch(() => {
      return "An error occurred while loading the component";
   });
}

getComponent().then((component) => {
   document.body.appendChild(component);
});
