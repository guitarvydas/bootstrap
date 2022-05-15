
function sfdiagramparser (xml) {
//     | $prep '.' '$' $d2fdir/diagram.ohm $d2fdir/diagram.glue --stop=1 --support=$d2fdir/support.js \
    var rxml = prep (xml, 'diagram.ohm', 'diagram.glue', './support.js', 1);
    return rxml;
}

function sfasfactbase (xml1) {
//     | $prep '.' '$' $d2fdir/factbase.ohm $d2fdir/factbase.glue --stop=1 --support=$d2fdir/support.js \
    var fb = prep (xml1, 'factbase.ohm', 'factbase.glue', './support.js', 1);
    return fb;
}

function sfdeleteblanklines (text) {
    var rtext = text.replace(/(^[ \t]*\n)/gm, "");
    return rtext;
}

function sfsortForPROLOG (text) {
    var sarray = text.split ('\n');
    var sorted = sarray.sort ();
    var str = sorted.join ('\n');
    return str;
}

function sfdeleteTrailingSugar (text) {
    var sarray = text.split ('\n');
    sarray.forEach (s => s.trim ());
    var str = sarray.join ('\n');
    return str;
}

function sfstyleexpander (xml) {
// | $prep '.' '$' $d2fdir/styleexpander.ohm $d2fdir/styleexpander.glue --stop=1 --support=$d2fdir/support.js \
    var rxml = prep (xml, 'styleexpander.ohm', 'styleexpander.glue', './support.js', 1);
    return rxml;
}

function sfuncompress (rawdrawio) {
// $prep '.' '$' $d2fdir/drawio.ohm $d2fdir/drawio.glue --stop=1 --support=$d2fdir/support.js <$name
    var str = prep (rawdrawio, 'drawio.ohm', 'drawio.glue', './support.js', 1);
    return str;
}

function sfreadfile (fname) {
    var bytes = fs.readFileSync (fname, 'utf-8');
    return bytes;
}

function sfprolog2json (fb) {
    // maybe replace this with https://www.npmjs.com/package/tau-prolog?

    const { exec, execSync } = require("child_process");

    fs.writeFileSync( 'tempfb.pl', fb);

    var _result = execSync ("swipl -l 'rfb.pl' -g 'exec,halt.'");
    
    // exec("swipl -l 'rfb.pl' -g 'exec,halt.'", (error, stdout, stderr) => {
    // 	if (error) {
    //         console.error(`error: ${error.message}`);
    //         return;
    // 	}
    // 	if (stderr) {
    //         console.error(`stderr: ${stderr}`);
    //         return;
    // 	}
    // 	console.error (stdout);
    // });

    console.error ("done execSync sfprolog2json");
    console.error (_result.toString ());
    
    return _result.toString ();
//    return "<wait>";
}
function sfkinds (fb) {
    console.error ('kinds');
    // fs.writeFileSync ("fb.pl", fb);
    // exec("swipl -l 'kinds.pl' -g 'query,halt.'", (error, stdout, stderr) => {
    // 	if (error) {
    //         console.error(`error: ${error.message}`);
    //         return;
    // 	}
    // 	if (stderr) {
    //         console.error(`stderr: ${stderr}`);
    //         return;
    // 	}
    // 	console.error(stdout);
    // return fb;
}

function sfnames (fb) {
    console.error ('names');
    return fb;
}

function sfcolor (fb) {
    console.error ('color');
    return fb;
}

function sfboundingbox (fb) {
    console.error ('bounding box');
    return fb;
}

function sfdirection (fb) {
    console.error ('direction');
    return fb;
}

function sfcontains (fb) {
    console.error ('contains');
    return fb;
}


function sfcontainsport (fb) {
    console.error ('contains port');
    return fb;
}

function sfdirectcontainment (fb) {
    console.error ('direct containment');
    return fb;
}

function sfedgecontainment (fb) {
    console.error ('edge containment');
    return fb;
}

function sfsynccode (fb) {
    console.error ('sync code');
    return fb;
}

function sfconnections (fb) {
    console.error ('connections');
    return fb;
}

function sfdesignruleedgecontainment (fb) {
    console.error ('design rule edge containment');
    return fb;
}

function done () {
    console.error ('whole done');
}
