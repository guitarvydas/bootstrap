

var design_rule_edge_containment_signature = {
    name: "design_rule_edge_containment",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var design_rule_edge_containment_protoImplementation = {
    name: "design_rule_edge_containment",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfdesignruleedgecontainment (message.data);
me.send ("out", x, message);


    }
}

function design_rule_edge_containment (container, instancename) {
    let me = new Leaf (design_rule_edge_containment_signature, design_rule_edge_containment_protoImplementation, container, instancename);
    return me;
}



var prolog_convert_to_json_signature = {
    name: "prolog_convert_to_json",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var prolog_convert_to_json_protoImplementation = {
    name: "prolog_convert_to_json",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfprolog2json (message.data);
me.send ("out", x, message);


    }
}

function prolog_convert_to_json (container, instancename) {
    let me = new Leaf (prolog_convert_to_json_signature, prolog_convert_to_json_protoImplementation, container, instancename);
    return me;
}



var finish_signature = {
    name: "finish",
    inputs: [{name:"in", structure:["in"]}],
    outputs: []
}


var finish_protoImplementation = {
    name: "finish",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        // console.log (message.data);
done ();


    }
}

function finish (container, instancename) {
    let me = new Leaf (finish_signature, finish_protoImplementation, container, instancename);
    return me;
}



var diagramparser_signature = {
    name: "diagramparser",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var diagramparser_protoImplementation = {
    name: "diagramparser",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfdiagramparser (message.data);
me.send ("out", x, message);


    }
}

function diagramparser (container, instancename) {
    let me = new Leaf (diagramparser_signature, diagramparser_protoImplementation, container, instancename);
    return me;
}



var asfactbase_signature = {
    name: "asfactbase",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var asfactbase_protoImplementation = {
    name: "asfactbase",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfasfactbase (message.data);
me.send ("out", x, message);


    }
}

function asfactbase (container, instancename) {
    let me = new Leaf (asfactbase_signature, asfactbase_protoImplementation, container, instancename);
    return me;
}



var deleteblanklines_signature = {
    name: "deleteblanklines",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var deleteblanklines_protoImplementation = {
    name: "deleteblanklines",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfdeleteblanklines (message.data);
me.send ("out", x, message);


    }
}

function deleteblanklines (container, instancename) {
    let me = new Leaf (deleteblanklines_signature, deleteblanklines_protoImplementation, container, instancename);
    return me;
}



var sortForPROLOG_signature = {
    name: "sortForPROLOG",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var sortForPROLOG_protoImplementation = {
    name: "sortForPROLOG",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfsortForPROLOG (message.data);
me.send ("out", x, message);


    }
}

function sortForPROLOG (container, instancename) {
    let me = new Leaf (sortForPROLOG_signature, sortForPROLOG_protoImplementation, container, instancename);
    return me;
}



var deleteTrailingSugar_signature = {
    name: "deleteTrailingSugar",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var deleteTrailingSugar_protoImplementation = {
    name: "deleteTrailingSugar",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfdeleteTrailingSugar (message.data);
me.send ("out", x, message);


    }
}

function deleteTrailingSugar (container, instancename) {
    let me = new Leaf (deleteTrailingSugar_signature, deleteTrailingSugar_protoImplementation, container, instancename);
    return me;
}



var kickStart_signature = {
    name: "kickStart",
    inputs: [],
    outputs: [{name:"out", structure:["out"]}]
}


var kickStart_protoImplementation = {
    name: "kickStart",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var rawbinary = sfreadfile (argv._[0]);
me.send ("out", rawbinary, null);


    }
}

function kickStart (container, instancename) {
    let me = new Leaf (kickStart_signature, kickStart_protoImplementation, container, instancename);
    return me;
}



var kinds_signature = {
    name: "kinds",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var kinds_protoImplementation = {
    name: "kinds",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfkinds (message.data);
me.send ("out", x, message);


    }
}

function kinds (container, instancename) {
    let me = new Leaf (kinds_signature, kinds_protoImplementation, container, instancename);
    return me;
}



var name_signature = {
    name: "name",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var name_protoImplementation = {
    name: "name",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfnames (message.data);
me.send ("out", x, message);


    }
}

function name (container, instancename) {
    let me = new Leaf (name_signature, name_protoImplementation, container, instancename);
    return me;
}



var color_signature = {
    name: "color",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var color_protoImplementation = {
    name: "color",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfcolor (message.data);
me.send ("out", x, message);


    }
}

function color (container, instancename) {
    let me = new Leaf (color_signature, color_protoImplementation, container, instancename);
    return me;
}



var whole_signature = {
    name: "whole",
    inputs: [],
    outputs: []
}



function whole_makechildren (container) {
      var child1 = new design_rule_edge_containment (container, "design rule edge containment");
        var child2 = new prolog_convert_to_json (container, "prolog convert to json");
        var child3 = new finish (container, "finish");
        var child4 = new diagramparser (container, "diagramparser");
        var child5 = new asfactbase (container, "asfactbase");
        var child6 = new deleteblanklines (container, "deleteblanklines");
        var child7 = new sortForPROLOG (container, "sortForPROLOG");
        var child8 = new deleteTrailingSugar (container, "deleteTrailingSugar");
        var child9 = new kickStart (container, "kickStart");
        var child10 = new kinds (container, "kinds");
        var child11 = new name (container, "name");
        var child12 = new color (container, "color");
        var child13 = new boundingbox (container, "boundingbox");
        var child14 = new direction (container, "direction");
        var child15 = new styleexpander (container, "styleexpander");
        var child16 = new contains (container, "contains");
        var child17 = new contains_port (container, "contains port");
        var child18 = new uncompress (container, "uncompress");
        var child19 = new direct_containment (container, "direct containment");
        var child20 = new edge_containment (container, "edge containment");
        var child21 = new sync_code (container, "sync code");
        var child22 = new connections (container, "connections");
      var children = [ {name: "design rule edge containment", runnable: child1}, {name: "prolog convert to json", runnable: child2}, {name: "finish", runnable: child3}, {name: "diagramparser", runnable: child4}, {name: "asfactbase", runnable: child5}, {name: "deleteblanklines", runnable: child6}, {name: "sortForPROLOG", runnable: child7}, {name: "deleteTrailingSugar", runnable: child8}, {name: "kickStart", runnable: child9}, {name: "kinds", runnable: child10}, {name: "name", runnable: child11}, {name: "color", runnable: child12}, {name: "boundingbox", runnable: child13}, {name: "direction", runnable: child14}, {name: "styleexpander", runnable: child15}, {name: "contains", runnable: child16}, {name: "contains port", runnable: child17}, {name: "uncompress", runnable: child18}, {name: "direct containment", runnable: child19}, {name: "edge containment", runnable: child20}, {name: "sync code", runnable: child21}, {name: "connections", runnable: child22} ];
      return children;
}

function whole_makeconnections (container) {
    var conn23 = {sender:{name: "uncompress", etag: "out"}, net: "NIY", receivers:  [{name: "diagramparser", etag: "in"}] };
    var conn24 = {sender:{name: "prolog convert to json", etag: "out"}, net: "NIY", receivers:  [{name: "finish", etag: "in"}] };
    var conn25 = {sender:{name: "diagramparser", etag: "out"}, net: "NIY", receivers:  [{name: "styleexpander", etag: "in"}] };
    var conn26 = {sender:{name: "styleexpander", etag: "out"}, net: "NIY", receivers:  [{name: "asfactbase", etag: "in"}] };
    var conn27 = {sender:{name: "asfactbase", etag: "out"}, net: "NIY", receivers:  [{name: "deleteblanklines", etag: "in"}] };
    var conn28 = {sender:{name: "deleteblanklines", etag: "out"}, net: "NIY", receivers:  [{name: "sortForPROLOG", etag: "in"}] };
    var conn29 = {sender:{name: "sortForPROLOG", etag: "out"}, net: "NIY", receivers:  [{name: "deleteTrailingSugar", etag: "in"}] };
    var conn30 = {sender:{name: "kickStart", etag: "out"}, net: "NIY", receivers:  [{name: "uncompress", etag: "in"}] };
    var conn31 = {sender:{name: "deleteTrailingSugar", etag: "out"}, net: "NIY", receivers:  [{name: "kinds", etag: "in"}] };
    var conn32 = {sender:{name: "kinds", etag: "out"}, net: "NIY", receivers:  [{name: "prolog convert to json", etag: "in"}] };
    var conn33 = {sender:{name: "name", etag: "out"}, net: "NIY", receivers:  [{name: "color", etag: "in"}] };
    var conn34 = {sender:{name: "color", etag: "out"}, net: "NIY", receivers:  [{name: "boundingbox", etag: "in"}] };
    var conn35 = {sender:{name: "boundingbox", etag: "out"}, net: "NIY", receivers:  [{name: "direction", etag: "in"}] };
    var conn36 = {sender:{name: "direction", etag: "out"}, net: "NIY", receivers:  [{name: "contains", etag: "in"}] };
    var conn37 = {sender:{name: "contains", etag: "out"}, net: "NIY", receivers:  [{name: "contains port", etag: "in"}] };
    var conn38 = {sender:{name: "contains port", etag: "out"}, net: "NIY", receivers:  [{name: "direct containment", etag: "in"}] };
    var conn39 = {sender:{name: "direct containment", etag: "out"}, net: "NIY", receivers:  [{name: "edge containment", etag: "in"}] };
    var conn40 = {sender:{name: "edge containment", etag: "out"}, net: "NIY", receivers:  [{name: "sync code", etag: "in"}] };
    var conn41 = {sender:{name: "sync code", etag: "out"}, net: "NIY", receivers:  [{name: "connections", etag: "in"}] };
    var conn42 = {sender:{name: "connections", etag: "out"}, net: "NIY", receivers:  [{name: "design rule edge containment", etag: "in"}] };
    var connections = [ conn23, conn24, conn25, conn26, conn27, conn28, conn29, conn30, conn31, conn32, conn33, conn34, conn35, conn36, conn37, conn38, conn39, conn40, conn41, conn42 ];
    return connections;
}

function whole_makenets (container) {
    return [];
}

var whole_protoImplementation = {
    name: "whole",
    kind: "container",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        deliverInputMessageToAllChildrenOfSelf (me, message);
    }
}

function whole (container, instancename) {
    let me = new Container (whole_signature, whole_protoImplementation, container, instancename);
    me.children = whole_makechildren (me);
    me.connections = whole_makeconnections (me);
    me.nets =  whole_makenets (me);
    me.deliver_input_from_container_input_to_child_input = deliver_input_from_container_input_to_child_input;
    me.deliver_input_from_container_input_to_me_output = deliver_input_from_container_input_to_me_output;
    return me;
}



var boundingbox_signature = {
    name: "boundingbox",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var boundingbox_protoImplementation = {
    name: "boundingbox",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfboundingbox (message.data);
me.send ("out", x, message);


    }
}

function boundingbox (container, instancename) {
    let me = new Leaf (boundingbox_signature, boundingbox_protoImplementation, container, instancename);
    return me;
}



var direction_signature = {
    name: "direction",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var direction_protoImplementation = {
    name: "direction",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfdirection (message.data);
me.send ("out", x, message);


    }
}

function direction (container, instancename) {
    let me = new Leaf (direction_signature, direction_protoImplementation, container, instancename);
    return me;
}



var styleexpander_signature = {
    name: "styleexpander",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var styleexpander_protoImplementation = {
    name: "styleexpander",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfstyleexpander (message.data);
me.send ("out", x, message);


    }
}

function styleexpander (container, instancename) {
    let me = new Leaf (styleexpander_signature, styleexpander_protoImplementation, container, instancename);
    return me;
}



var contains_signature = {
    name: "contains",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var contains_protoImplementation = {
    name: "contains",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfcontains (message.data);
me.send ("out", x, message);


    }
}

function contains (container, instancename) {
    let me = new Leaf (contains_signature, contains_protoImplementation, container, instancename);
    return me;
}



var contains_port_signature = {
    name: "contains_port",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var contains_port_protoImplementation = {
    name: "contains_port",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfcontainsport (message.data);
me.send ("out", x, message);


    }
}

function contains_port (container, instancename) {
    let me = new Leaf (contains_port_signature, contains_port_protoImplementation, container, instancename);
    return me;
}



var uncompress_signature = {
    name: "uncompress",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var uncompress_protoImplementation = {
    name: "uncompress",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var u = sfuncompress (message.data);
me.send ("out", u, message);


    }
}

function uncompress (container, instancename) {
    let me = new Leaf (uncompress_signature, uncompress_protoImplementation, container, instancename);
    return me;
}



var direct_containment_signature = {
    name: "direct_containment",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var direct_containment_protoImplementation = {
    name: "direct_containment",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfdirectcontainment (message.data);
me.send ("out", x, message);


    }
}

function direct_containment (container, instancename) {
    let me = new Leaf (direct_containment_signature, direct_containment_protoImplementation, container, instancename);
    return me;
}



var edge_containment_signature = {
    name: "edge_containment",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var edge_containment_protoImplementation = {
    name: "edge_containment",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfedgecontainment (message.data);
me.send ("out", x, message);


    }
}

function edge_containment (container, instancename) {
    let me = new Leaf (edge_containment_signature, edge_containment_protoImplementation, container, instancename);
    return me;
}



var sync_code_signature = {
    name: "sync_code",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var sync_code_protoImplementation = {
    name: "sync_code",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfsynccode (message.data);
me.send ("out", x, message);


    }
}

function sync_code (container, instancename) {
    let me = new Leaf (sync_code_signature, sync_code_protoImplementation, container, instancename);
    return me;
}



var connections_signature = {
    name: "connections",
    inputs: [{name:"in", structure:["in"]}],
    outputs: [{name:"out", structure:["out"]}]
}


var connections_protoImplementation = {
    name: "connections",
    kind: "leaf",
    begin: function () {},
    finish: function () {},
    handler: function (me, message) {
        var x = sfconnections (message.data);
me.send ("out", x, message);


    }
}

function connections (container, instancename) {
    let me = new Leaf (connections_signature, connections_protoImplementation, container, instancename);
    return me;
}


