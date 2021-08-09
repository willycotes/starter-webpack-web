/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const ogImage = require('../assets/images/party-girl.jpg');

const template = (templateData) => {
  const { htmlWebpackPlugin, siteName } = templateData;
  const { options } = htmlWebpackPlugin;
  const { filename } = options;
  // in webpack the title default is Webpack App string
  const title = options.title === 'Webpack App' ? '' : `${options.title} | `;
  const description = options.description || '';
  const page = options.page || '';

  const baseURL = options.baseURL || '';
  const header = require('../partials/header.ejs')(templateData);
  const navigation = require('../partials/navigation.ejs')(templateData);
  let content = '';
  try {
    content = require(`../pages/${page}.ejs`)(templateData);
  } catch (error) {
    content = '<h2>Sin Contenido definido</h2>';
  }
  const footer = require('../partials/footer.ejs')(templateData);

  return `
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}${siteName}</title>
        <meta name="description" content="${description}" />
        <meta property="og:title" content="${title}${siteName}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="${baseURL + ogImage}" />
        <meta name="url" content="${baseURL + filename}" />
      </head>
      <body>
        <div id="page" class="site">
        ${header}
        ${navigation}
        ${content} 
        ${footer} 
        </div>
      </body>
    </html>
  `;
};
module.exports = template;
