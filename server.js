var http = require('http');

function serve(ip, port)
{
        http.createServer(function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(req.headers));
            res.end("\nThere's no place like "+ip_address+":"+port+"\n");
        }).listen(port, ip);
        console.log('Server running at http://'+ip_address+':'+port+'/');
}

// Create three servers for
// the load balancer, listening on any
// network on the following three ports
serve('0.0.0.0', 80);
