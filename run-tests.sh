#!/bin/bash
echo "Updating Dependencies"
npm install
echo "Running Tests"
cypress run --browser chrome