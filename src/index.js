const express = require("express");
const compression = require("compression");
const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");

const startServer = async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(compression())
    app.use("/api", ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Server start at ${PORT}`);
    });
}

startServer();
