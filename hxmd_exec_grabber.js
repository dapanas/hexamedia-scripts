/********************************************************************************/
var	exec = require('child_process').exec;

var hxmd_exec_grabber = function() {
    var exec_grabber = 'php /opt/hexamedia/hexamedia-grabber.php';

    var child = exec(exec_grabber, function(err, stdout, stderr) {
        if (err) console.log(stderr);
        else console.log('Salida del script:\n' + stdout);
    });
};
/********************************************************************************/

hxmd_exec_grabber();