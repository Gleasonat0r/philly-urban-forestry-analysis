var wms_layers = [];

var format_NeighborhoodTreeAnalysis_0 = new ol.format.GeoJSON();
var features_NeighborhoodTreeAnalysis_0 = format_NeighborhoodTreeAnalysis_0.readFeatures(json_NeighborhoodTreeAnalysis_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NeighborhoodTreeAnalysis_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeighborhoodTreeAnalysis_0.addFeatures(features_NeighborhoodTreeAnalysis_0);
var lyr_NeighborhoodTreeAnalysis_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NeighborhoodTreeAnalysis_0, 
                style: style_NeighborhoodTreeAnalysis_0,
                popuplayertitle: 'Neighborhood Tree Analysis',
                interactive: true,
    title: 'Neighborhood Tree Analysis<br />\
    <img src="styles/legend/NeighborhoodTreeAnalysis_0_4.png" /> 0 - 500<br />\
    <img src="styles/legend/NeighborhoodTreeAnalysis_0_3.png" /> 500 - 1000<br />\
    <img src="styles/legend/NeighborhoodTreeAnalysis_0_2.png" /> 1000 - 2000<br />\
    <img src="styles/legend/NeighborhoodTreeAnalysis_0_1.png" /> 2000 - 3000<br />\
    <img src="styles/legend/NeighborhoodTreeAnalysis_0_0.png" /> 3000 - 5000<br />' });

lyr_NeighborhoodTreeAnalysis_0.setVisible(true);
var layersList = [lyr_NeighborhoodTreeAnalysis_0];
lyr_NeighborhoodTreeAnalysis_0.set('fieldAliases', {'neighborhood_name': 'Neighborhood', 'total_trees': 'Tree Count', 'avg_tree_dbh': 'Average Diameter (in)', 'most_common_species': 'Most Common Species', });
lyr_NeighborhoodTreeAnalysis_0.set('fieldImages', {'neighborhood_name': 'TextEdit', 'total_trees': 'TextEdit', 'avg_tree_dbh': 'TextEdit', 'most_common_species': 'TextEdit', });
lyr_NeighborhoodTreeAnalysis_0.set('fieldLabels', {'neighborhood_name': 'inline label - always visible', 'total_trees': 'inline label - always visible', 'avg_tree_dbh': 'inline label - always visible', 'most_common_species': 'inline label - always visible', });
lyr_NeighborhoodTreeAnalysis_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
