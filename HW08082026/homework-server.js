const http = require("http");

const server = http.createServer((req, res) => {

    // Bài 1 
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Welcome to my Node.js homework");
    }

    else if (req.url === "/profile") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(
            "Name: Ngan Nguyen Phuong\n" +
            "Class: Node.js\n" +
            "Goal: Learn Node.js and server-side development"
        );
    }


    else if (req.url === "/nodejs") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(
            "Node.js is a JavaScript runtime that allows JavaScript to run on the server side."
        );
    }

    // Bài 2 
    else if (req.url === "/api/server-info") {
        const serverInfo = {
            runtime: "Node.js",
            language: "JavaScript",
            type: "server-side"
        };

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(serverInfo));
    }

    // Bài 3
    else if (req.url === "/about") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(`
            <h1>About Server-side Development</h1>
            <p>Server-side programming processes logic on the server.</p>
        `);
    }


    else {
        res.writeHead(404, {
            "Content-Type": "text/plain; charset=utf-8"
        });

        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});