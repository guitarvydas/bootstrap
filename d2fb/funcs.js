const queryDirectory = "/Users/tarvydas/quicklisp/local-projects/bootstrap/d2fb/das2f/";

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
    // console.log (_result.toString ());
    fs.writeFileSync ('tempfb.json', _result);
    console.log ('see tempfb.pl and tempfb.json');
    return true;
}

function queryAndExtendFB (fb, script) {
    // fb <= factase
    // script <= .bash script to perform a PROLOG query
    // tack query results onto fb and return the new fb

    const { exec, execSync } = require("child_process");

    // brute-force implementation like the
    // original das2fb/run-fb-pipeline.bash script
    // this needs optimization (or not)
    
    fs.writeFileSync ('fb.pl', fb);

    var _newfacts = execSync (queryDirectory + script).toString ();
    // console.error (_newfacts);
    var _extendedFB = fb + '\n' +_newfacts;
    return _extendedFB;
}

function sfkinds (fb) {
    console.error ('kinds');
    return queryAndExtendFB (fb, 'layerkind_query.bash');
}

function sfnames (fb) {
    console.error ('names');
    return queryAndExtendFB (fb, 'layername_query.bash');
}

function sfcolor (fb) {
    console.error ('color');
    return queryAndExtendFB (fb, 'layercolor_query.bash');
}

function sfboundingbox (fb) {
    console.error ('bounding box');
    return queryAndExtendFB (fb, 'layerboundingbox_query.bash');
}

function sfdirection (fb) {
    console.error ('direction');
    return queryAndExtendFB (fb, 'layerdirection_query.bash');
}

function sfcontains (fb) {
    console.error ('contains');
    return queryAndExtendFB (fb, 'layerallcontains_query.bash');
}


function sfcontainsport (fb) {
    console.error ('contains port');
    return queryAndExtendFB (fb, 'layer4_query.bash');
}

function sfindirectcontainment (fb) {
    console.error ('indirect containment');
    return queryAndExtendFB (fb, 'layer5_query.bash');
    return fb;
}

function sfdirectcontainment (fb) {
    console.error ('direct containment');
    return queryAndExtendFB (fb, 'layer6_query.bash');
    return fb;
}

function sfedgecontainment1 (fb) {
    console.error ('edge containment 1');
    // return queryAndExtendFB (fb, 'layer6.bash');
    return fb;
}

function sfedgecontainment2 (fb) {
    console.error ('edge containment 2');
    return fb;
}

function sfedgecontainment3 (fb) {
    console.error ('edge containment 3');
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
