#!/usr/bin/env node


var fs = require( 'fs' ),
    execSync = require( 'exec-sync' );


if ( fs.existsSync( './dist' ) ) {
    execSync( 'rm -rf ./dist' );
}

fs.mkdirSync( './dist' );

execSync( 'cp *.js* ./dist/ ');

touch ./dist/test

