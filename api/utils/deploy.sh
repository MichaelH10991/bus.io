#!/bin/bash

npm run package

cd terraform/

terraform init

terraform apply