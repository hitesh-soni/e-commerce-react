const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#0096dc",
              "@input-height-base": "40px",
              "@label-color": "#000014",
              "@input-color": "#000014",
              "@input-border-color": "#dddddd",
              "@btn-height-base": "30px",
              "@btn-height-lg": "53px",
              "@btn-height-sm": "26px",
              "@input-padding-horizontal-base": "12px",
              "@border-radius-base": "4px",
              "@btn-font-weight": "500",
              "@btn-font-size-lg": "18px",
              "@btn-default-ghost-color": "#0096dc",
              "@btn-default-ghost-border": "#0096dc",
              "@checkbox-size": "20px",
              "@btn-default-border": "#e8eaf0",
              "@btn-default-color": "#434b57",
              "@input-placeholder-color": "#000014",
              "@error-color": "#dc5959",
              "@switch-min-width": "35px",
              "@switch-height": "20px",
              "@select-single-item-height-lg": "40px",
              "@select-dropdown-height": "40px",
              "@input-height-lg": "40px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
