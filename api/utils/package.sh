#!/bin/bash

echo "removing old bin/ and lambda.zip"
rm -r bin/
rm terraform/bus_lambda_payload.zip

echo "performing install..."
npm i

echo "fixing vulns..."
npm audit fix

echo "transpiling and building src/ to bin/"
npm run transpile

echo "zipping bin/ lambda.js app.js and node_modules"
zip -rq bus_lambda_payload.zip bin/ lambda.js node_modules

mv bus_lambda_payload.zip terraform/