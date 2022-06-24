import app from './app.js';
import {sequelize} from './databases/database.js';

async function main() {
    try {
        await sequelize.sync({ force: false });
        app.listen(3000);
        console.log("server on listen in port " , 3000);
    } catch (error) {
        console.log("Unable to connect to the database:", error);
    }
}

main();
