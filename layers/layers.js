var wms_layers = [];

var format_Concesiones_mineras_Raura_0 = new ol.format.GeoJSON();
var features_Concesiones_mineras_Raura_0 = format_Concesiones_mineras_Raura_0.readFeatures(json_Concesiones_mineras_Raura_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Concesiones_mineras_Raura_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Concesiones_mineras_Raura_0.addFeatures(features_Concesiones_mineras_Raura_0);
var lyr_Concesiones_mineras_Raura_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Concesiones_mineras_Raura_0, 
                style: style_Concesiones_mineras_Raura_0,
                interactive: true,
                title: '<img src="styles/legend/Concesiones_mineras_Raura_0.png" /> Concesiones_mineras_Raura'
            });
var format_Concesiones_mineras_AI_1 = new ol.format.GeoJSON();
var features_Concesiones_mineras_AI_1 = format_Concesiones_mineras_AI_1.readFeatures(json_Concesiones_mineras_AI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Concesiones_mineras_AI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Concesiones_mineras_AI_1.addFeatures(features_Concesiones_mineras_AI_1);
var lyr_Concesiones_mineras_AI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Concesiones_mineras_AI_1, 
                style: style_Concesiones_mineras_AI_1,
                interactive: true,
                title: '<img src="styles/legend/Concesiones_mineras_AI_1.png" /> Concesiones_mineras_AI'
            });
var format_Predios_2 = new ol.format.GeoJSON();
var features_Predios_2 = format_Predios_2.readFeatures(json_Predios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_2.addFeatures(features_Predios_2);
var lyr_Predios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Predios_2, 
                style: style_Predios_2,
                interactive: true,
                title: '<img src="styles/legend/Predios_2.png" /> Predios'
            });
var format_CC_Raura_3 = new ol.format.GeoJSON();
var features_CC_Raura_3 = format_CC_Raura_3.readFeatures(json_CC_Raura_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CC_Raura_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CC_Raura_3.addFeatures(features_CC_Raura_3);
var lyr_CC_Raura_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CC_Raura_3, 
                style: style_CC_Raura_3,
                interactive: true,
                title: '<img src="styles/legend/CC_Raura_3.png" /> CC_Raura'
            });
var format_LineaTransmision_4 = new ol.format.GeoJSON();
var features_LineaTransmision_4 = format_LineaTransmision_4.readFeatures(json_LineaTransmision_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineaTransmision_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineaTransmision_4.addFeatures(features_LineaTransmision_4);
var lyr_LineaTransmision_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LineaTransmision_4, 
                style: style_LineaTransmision_4,
                interactive: true,
                title: '<img src="styles/legend/LineaTransmision_4.png" /> LineaTransmision'
            });

lyr_Concesiones_mineras_Raura_0.setVisible(true);lyr_Concesiones_mineras_AI_1.setVisible(true);lyr_Predios_2.setVisible(true);lyr_CC_Raura_3.setVisible(true);lyr_LineaTransmision_4.setVisible(true);
var layersList = [lyr_Concesiones_mineras_Raura_0,lyr_Concesiones_mineras_AI_1,lyr_Predios_2,lyr_CC_Raura_3,lyr_LineaTransmision_4];
lyr_Concesiones_mineras_Raura_0.set('fieldAliases', {'CODIGOU': 'CODIGOU', 'CONCESION': 'CONCESION', 'TIT_CONCES': 'TIT_CONCES', 'D_ESTADO': 'D_ESTADO', 'CARTA': 'CARTA', 'ZONA': 'ZONA', 'SUSTANCIA': 'SUSTANCIA', 'DEPA': 'DEPA', 'PROVI': 'PROVI', 'DISTRI': 'DISTRI', 'HASDATUM': 'HASDATUM', 'FEC_DENU': 'FEC_DENU', 'LEYENDA': 'LEYENDA', });
lyr_Concesiones_mineras_AI_1.set('fieldAliases', {'CODIGOU': 'CODIGOU', 'CONCESION': 'CONCESION', 'TIT_CONCES': 'TIT_CONCES', 'D_ESTADO': 'D_ESTADO', 'CARTA': 'CARTA', 'ZONA': 'ZONA', 'SUSTANCIA': 'SUSTANCIA', 'DEPA': 'DEPA', 'PROVI': 'PROVI', 'DISTRI': 'DISTRI', 'HASDATUM': 'HASDATUM', 'FEC_DENU': 'FEC_DENU', 'LEYENDA': 'LEYENDA', });
lyr_Predios_2.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_CC_Raura_3.set('fieldAliases', {'Id': 'Id', 'NOMBRE': 'NOMBRE', 'ESTADO': 'ESTADO', 'AREA': 'AREA', });
lyr_LineaTransmision_4.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_Concesiones_mineras_Raura_0.set('fieldImages', {'CODIGOU': '', 'CONCESION': '', 'TIT_CONCES': '', 'D_ESTADO': '', 'CARTA': '', 'ZONA': '', 'SUSTANCIA': '', 'DEPA': '', 'PROVI': '', 'DISTRI': '', 'HASDATUM': '', 'FEC_DENU': '', 'LEYENDA': '', });
lyr_Concesiones_mineras_AI_1.set('fieldImages', {'CODIGOU': 'TextEdit', 'CONCESION': 'TextEdit', 'TIT_CONCES': 'TextEdit', 'D_ESTADO': 'TextEdit', 'CARTA': 'TextEdit', 'ZONA': 'TextEdit', 'SUSTANCIA': 'TextEdit', 'DEPA': 'TextEdit', 'PROVI': 'TextEdit', 'DISTRI': 'TextEdit', 'HASDATUM': 'TextEdit', 'FEC_DENU': 'DateTime', 'LEYENDA': 'TextEdit', });
lyr_Predios_2.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_CC_Raura_3.set('fieldImages', {'Id': 'TextEdit', 'NOMBRE': 'TextEdit', 'ESTADO': 'TextEdit', 'AREA': 'TextEdit', });
lyr_LineaTransmision_4.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', });
lyr_Concesiones_mineras_Raura_0.set('fieldLabels', {'CODIGOU': 'no label', 'CONCESION': 'no label', 'TIT_CONCES': 'no label', 'D_ESTADO': 'no label', 'CARTA': 'no label', 'ZONA': 'no label', 'SUSTANCIA': 'no label', 'DEPA': 'no label', 'PROVI': 'no label', 'DISTRI': 'no label', 'HASDATUM': 'no label', 'FEC_DENU': 'no label', 'LEYENDA': 'no label', });
lyr_Concesiones_mineras_AI_1.set('fieldLabels', {'CODIGOU': 'no label', 'CONCESION': 'no label', 'TIT_CONCES': 'no label', 'D_ESTADO': 'no label', 'CARTA': 'no label', 'ZONA': 'no label', 'SUSTANCIA': 'no label', 'DEPA': 'no label', 'PROVI': 'no label', 'DISTRI': 'no label', 'HASDATUM': 'no label', 'FEC_DENU': 'no label', 'LEYENDA': 'no label', });
lyr_Predios_2.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_CC_Raura_3.set('fieldLabels', {'Id': 'no label', 'NOMBRE': 'no label', 'ESTADO': 'no label', 'AREA': 'no label', });
lyr_LineaTransmision_4.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_LineaTransmision_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});