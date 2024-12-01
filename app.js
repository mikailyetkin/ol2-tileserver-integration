let map;
function init(){
    const baseDomain = "{your tileserver base domain, eg https://api.maptiler.com/ }";
    const center = new OpenLayers.LonLat(13.404954,52.52);

    map = new OpenLayers.Map('map', {
        layers: [new OpenLayers.Layer.XYZ( "Tileserver",
        baseDomain +"/styles/basic-preview/${z}/${x}/${y}.png",
        {sphericalMercator: true}    )]
    });
    center.transform(new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject());    
    map.setCenter(center,10);
}