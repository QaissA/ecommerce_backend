import { spec } from "node:test/reporters";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition : {
        openai : "3.0.0",
        info : {
            title : "Ecommerce Api",
            version : "1.0.0",
            description : "API Documentation for ecommerce project",
        },
        servers : [
            {
                url : "http://localhost:3000",
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};


const specs = swaggerJsdoc(options);


export default specs;