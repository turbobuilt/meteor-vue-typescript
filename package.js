Package.describe({
  name: 'turbobuilt:vue-typescript',
  version: '0.0.2',
  summary: 'Add typescript support for vue components',
  git: 'https://github.com/nathantreid/meteor-vue-typescript',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "vue-component-typescript",
  use: [
    'ecmascript@0.5.8',
    'turbobuilt:typescript-compiler@0.9.5'
  ],
  sources: [
    'partial-input-file.js',
    'vue-typescript.js',
  ],
  npmDependencies: {
    'meteor-project-path': '0.0.3',
    'hasha': '2.2.0',
  }
});

Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin@1.0.0');
  api.imply('barbatus:typescript-runtime@1.0.0');
});
