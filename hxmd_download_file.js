/********************************************************************************************/
var url = require('url'),
	exec = require('child_process').exec;

var hxmd_download_file = function(file_url, file_destination_path) {
    var file_name = url.parse(file_url).pathname.split('/').pop();
    var wget = 'wget -P ' + file_destination_path + ' ' + file_url;

    var child = exec(wget, function(err, stdout, stderr) {
        if (err) console.log(stderr);
        else console.log('Archivo ' + file_name + ' descargado en ' + file_destination_path);
    });
};
/********************************************************************************************/

/********************************************************************************************/
// Editar campos SOURCE_URL y DESTINATION_PATH antes de ejecutar el script en el RPi.       //
/********************************************************************************************/
hxmd_download_file("SOURCE_URL", "DESTINATION_PATH");