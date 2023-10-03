var graph = new DirectedGraph(); //Required by connector
var INFINITY = 1 / 0;
var x_path = [];

function route_setup(){
    
    var end_point = parseInt(document.getElementById("end_point").value);
    
    
    connector();
    console.log("crossed conn"); 
    var out = djikstra(graph, '0');
    console.log("crossed djikstra");
    for (i = 0; i < data.features.length; i++) {
        for (j = 0; j < out.shortestPaths[end_point].length; j++) {
            if (String(i) == out.shortestPaths[end_point][j]) {
                var x_i = i;
                x_path.push({
                    lat: data.features[x_i].geometry.coordinates[1],
                    lng: data.features[x_i].geometry.coordinates[0]
                });
            }
        }
    }
    x_path.push({
        lat: data.features[end_point].geometry.coordinates[1],
        lng: data.features[end_point].geometry.coordinates[0]
    });

    return x_path;
}

function DirectedGraph() {
    this.vertices = {};
    this.addVertex = function(name, edges) {
        edges = edges || null;
        this.vertices[name] = edges;
    };
}

function djikstra(graph, startVertex) {
    var dist = {};
    var prev = {};
    var q = {};
    var shortestPaths = {};

    for (var vertex in graph.vertices) {
        dist[vertex] = INFINITY;
        prev[vertex] = null;
        q[vertex] = graph.vertices[vertex];
        shortestPaths[vertex] = [];
    }

    dist[startVertex] = 0;

    while (Object.keys(q).length !== 0) {
        var smallest = findSmallest(dist, q);
        var smallestNode = graph.vertices[smallest];
        //searches for the vertex u in the vertex set Q that has the least dist[smallest] value.

        for (var neighbor in smallestNode) {
            var alt = dist[smallest] + smallestNode[neighbor];
            //smallestNode[neighbor] is the distance between smallest and neighbor
            if (alt < dist[neighbor]) {
                dist[neighbor] = alt;
                prev[neighbor] = smallest;
            }
        }
    }

    getShortestPaths(prev, shortestPaths, startVertex, dist);
    return {
        shortestPaths: shortestPaths,
        shortestDistances: dist
    };
}

function findSmallest(dist, q) {
    var min = Infinity;
    var minNode;

    for (var node in q) {
        if (dist[node] <= min) {
            min = dist[node];
            minNode = node;
        }
    }

    delete q[minNode];
    return minNode;
}

function getShortestPaths(previous, shortestPaths, startVertex, dist) {
    for (var node in shortestPaths) {
        var path = shortestPaths[node];

        while (previous[node]) {
            path.push(node);
            node = previous[node];
        }

        //gets the starting node in there as well if there was a path from it
        if (dist[node] === 0) {
            path.push(node);
        }
        path.reverse();
    }
}

function weight(a, b) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(b[1] - a[1]); // deg2rad below
    var dLon = deg2rad(b[0] - a[0]);
    var temp =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(a[1])) * Math.cos(deg2rad(b[1])) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(temp), Math.sqrt(1 - temp));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
