// IMPORTS PACKAGES
import '@babel/polyfill';
import express from 'express';              // Import Express
import morgan from 'morgan';                // Import Morgan
import pkg from '../package.json';          // Import as pkg the package.json

// IMPORTS ROUTES
import brandRoutes from './routes/brand';
import categoryRoutes from './routes/category';
import typeSupplyRoutes from './routes/typesupply';
import unitMeasureRoutes from './routes/unitmeasure';
import supplyRoutes from './routes/supply';

// Initialization
const app = express();

app.set('pkg', pkg);                        // Import data from package.json for get its information

// MIDDLEWARES
// Morgar
app.use( morgan('dev') );
app.use( express.json() );
app.use( express.urlencoded({ extended : false }) );

// ROUTES
app.use( '/api/brands', brandRoutes );                  // Routes Brands
app.use( '/api/categories', categoryRoutes );           // Routes Categories
app.use( '/api/type_supplies', typeSupplyRoutes );      // Routes Categories
app.use( '/api/unit_measures', unitMeasureRoutes );     // Routes Categories
app.use( '/api/supplies', supplyRoutes );     // Routes Supplies

// GET home
app.get('/', (req, res) => {
    res.json({                                          // Show in client the name, author, description and version from package.json (pkg)
        application : app.get('pkg').name,
        author : app.get('pkg').author,
        description : app.get('pkg').description,
        version : app.get('pkg').version
    });
});

export default app;
