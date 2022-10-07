// const jsonServer = requier("json-server")
// const server = jsonServer.create();
// const route = jsonServer.router("./db.json");
// const middlewares = jsonServer.defaults({
//     static:"./build",
// });

// const port =process.env.port || 5000;
// server.use(middlewares);
// server.use(
//     jsonServer.rewriter({
//         "/api/*": "/$1",
//     })
// );
// server.use(router);
// server.listen(port,() => {
//     console.log(`server is running on ${port}`);
// });