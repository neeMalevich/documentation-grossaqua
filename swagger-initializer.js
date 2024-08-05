window.onload = function() {
  window.ui = SwaggerUIBundle({
    url: "https://neemalevich.github.io/documentation-grossaqua/swagger.json",
    
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });
};
