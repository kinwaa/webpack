
async function getComponent() {
   try {
      const { default: _ } = await import('lodash');
      const element = document.createElement('div');

      // Lodash, now imported by this script
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

      return element;
   } catch {
      return "An error occurred while loading the component";
   }
}

getComponent().then((component) => {
   document.body.appendChild(component);
});
