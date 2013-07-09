/********************************************************************************/
var	exec = require('child_process').exec;

var hxmd_cat_file = function(file_path) {
    var file_name = file_path.split('/').pop();
    var cat = 'cat ' + file_path;

    var child = exec(cat, function(err, stdout, stderr) {
        if (err) console.log(stderr);
        else console.log('Contenido del archivo ' + file_name + ':\n' + stdout);
    });
};
/********************************************************************************/

/********************************************************************************/
// Editar campo FILE_PATH antes de ejecutar el script en el RPi.                //
/********************************************************************************/
hxmd_cat_file("/etc/passwd");