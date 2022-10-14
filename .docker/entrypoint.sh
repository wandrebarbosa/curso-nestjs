#!/bin/bash

yarn
yarn run build
npx typeorm migration:run
yarn start:dev