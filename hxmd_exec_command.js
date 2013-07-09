/********************************************************************************/
var exec = require('child_process').exec;

var hxmd_exec_command = function(command) {
    var child = exec(command, function(err, stdout, stderr) {
        if (err) console.log(stderr);
        else console.log('Ejecutando comando...\n' + 'Salida:\n' + stdout);
    });
};
/********************************************************************************/

/********************************************************************************/
// Editar campo FILE_PATH antes de ejecutar el script en el RPi.				//
/********************************************************************************/
hxmd_exec_command("COMMAND");