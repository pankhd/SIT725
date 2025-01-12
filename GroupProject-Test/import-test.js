//import env module from local file 
const env = require('./env-test');
const axios = require('axios');



// Test pollen api 
function getNormalizedCoord(coord, zoom) {
    const y = coord.y;
    let x = coord.x;
    // Define the tile range in one direction. The range is dependent on zoom level:
    // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc.
    const tileRange = 1 << zoom;

    // don't repeat across y-axis (vertically)
    if (y < 0 || y >= tileRange) {
      return null;
    }

    // repeat across x-axis
    if (x < 0 || x >= tileRange) {
      x = ((x % tileRange) + tileRange) % tileRange;
    }
    return { x: x, y: y };
  }

  let pollen = "TREE_UPI"
  class PollenMapType {
    tileSize = 256;
    alt = null;
    maxZoom = 12;
    minZoom = 3;
    name = null;
    projection = null;
    radius = 6378137;
    constructor(tileSize) {
      this.tileSize = tileSize;
    }

    getTile(coord, zoom, ownerDocument) {
      const img = ownerDocument.createElement("img");
      const mapType = pollen;
      const normalizedCoord = getNormalizedCoord(coord, zoom);

      const x = coord.x;
      const y = coord.y;
      const key = "AIzaSyCi7FfK3Ck_N0NgZF_0xz0UsXuxxKrg7LY";
      img.style.opacity = 0.8;
      img.src = `https://pollen.googleapis.com/v1/mapTypes/${mapType}/heatmapTiles/${zoom}/${x}/${y}?key=${key}`;
      return img;
    }
    releaseTile(tile) {}
  }