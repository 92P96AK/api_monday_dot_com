#!/bin/bash

# Create the destination directory if it doesn't exist
mkdir -p dist/swagger

# Copy the Swagger files to the dist directory
cp -R src/swagger/* dist/swagger/
