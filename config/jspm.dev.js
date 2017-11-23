SystemJS.config({
  map: {
    "plugin-typescript": "github:frankwallis/plugin-typescript@7.1.0",
    "typescript": "npm:typescript@2.5.3",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "net": "npm:jspm-nodelibs-net@0.2.1"
  },
  packages: {
    "npm:typescript@2.5.3": {
      "map": {
        "source-map-support": "npm:source-map-support@0.5.0"
      }
    },
    "npm:source-map-support@0.5.0": {
      "map": {
        "source-map": "npm:source-map@0.6.1"
      }
    }
  }
});
