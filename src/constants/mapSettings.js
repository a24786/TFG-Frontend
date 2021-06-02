import colorPalette from "@/constants/mapColorPalette";


const {
  COLOR_LANDSCAPE,
  COLOR_BORDERS,
  COLOR_WATER,
  COLOR_LINE,
  COLOR_POINT_FILL,
  COLOR_SELECTED_POINT
} = colorPalette;

const COLORS = {
  BORDERS: COLOR_BORDERS,
  LANDSCAPE: COLOR_LANDSCAPE,
  LINE: COLOR_LINE,
  POINT: COLOR_SELECTED_POINT,
  POINT_FILL: COLOR_POINT_FILL,
  WATER: COLOR_WATER
};

const POINT_MARKER_ICON_CONFIG = {
  path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
  strokeOpacity: 1,
  strokeWeight: 2,
  strokeColor: COLORS.POINT,
  fillColor: COLORS.POINT_FILL,
  fillOpacity: 1,
  scale: .05
};
const POINT_MARKER_USER_ICON_CONFIG = {
  path: "M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
  strokeOpacity: 0.7,
  strokeWeight: 4,
  strokeColor: COLORS.POINT,
  fillColor: COLORS.POINT_FILL,
  fillOpacity: 0.7,
  scale: 2
};

const LINE_SYMBOL_CONFIG = {
  path: "M 0,-2 0,2",
  strokeOpacity: 1,
  strokeWeight: 2,
  scale: 1
};

const LINE_PATH_CONFIG = {
  clickable: false,
  geodesic: false,
  strokeOpacity: 0,
  strokeColor: COLORS.LINE,
  icons: [
    {
      icon: LINE_SYMBOL_CONFIG,
      repeat: "10px"
    }
  ]
};

const mapSettings = {
  clickableIcons: false,
  streetViewControl: true,
  panControlOptions: false,
  draggable: true,
  gestureHandling: "greedy",
  fullscreenControl: false,
  backgroundColor: COLORS.LANDSCAPE,
  mapTypeControl: true,
  zoomControlOptions: {
    style: "SMALL"
  },
  mapId: "83e47317a8c42fc4",
  zoom: 15,
  minZoom: 2,
  maxZoom: 20
};

export { mapSettings, LINE_PATH_CONFIG, POINT_MARKER_ICON_CONFIG, POINT_MARKER_USER_ICON_CONFIG };
 