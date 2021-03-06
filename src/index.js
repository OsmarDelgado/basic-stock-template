import app from './app';

// Set port number to the server, if exist a defined port take that if not put port in 3000
app.set( 'port', process.env.PORT || 8080 );

// Stylize jsons
app.set( 'json spaces', 4 );

// Starting server
app.listen( app.get( 'port' ), () => {
    console.log(`Server on port ${ app.get('port') }`);
} );
