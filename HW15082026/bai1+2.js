const http = require("http");

const products = [
    { id: 1, name: "Laptop", price: 20000000 },
    { id: 2, name: "Mouse", price: 500000 },
    { id: 3, name: "Keyboard", price: 1000000 }
];

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(`
            <h1>Welcome to Product Server</h1>
            <p>This is the home page.</p>
        `);
    }

    else if (req.method === "GET" && req.url === "/products") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        const productList = products.map(product => `
            <li>
                ${product.name} - ${product.price} VND
            </li>
        `).join("");

        res.end(`
            <h1>Product List</h1>
            <ul>
                ${productList}
            </ul>
        `);
    }

    else if (req.method === "GET" && req.url === "/api/products") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(products));
    }

    else if (req.method === "GET" && req.url.startsWith("/search")) {
    const url = new URL(req.url, "http://localhost:3000");
    const keyword = url.searchParams.get("q");

    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    if (keyword) {
        res.end(`Search keyword: ${keyword}`);
    } else {
        res.end("Missing search keyword");
    }
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