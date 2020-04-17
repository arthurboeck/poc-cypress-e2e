#!/bin/bash
echo "Rodando os testes com imagem Docker"

# explanation of the "docker run" command line arguments
#
#  -it          = interactive terminal
#  -v $PWD:/e2e = map current folder to /e2e inside the container
#  -w /e2e      = set working directy to /e2e
#  $@           = pass any arguments to this script to the Cypress command
#                 like "./cy-run.sh --record"
#
# Docker image "cypress/included:3.2.0" has its entrypoint
# set to "cypress run" by default

if [ -z $1 ]; then
    URL_BASE="https://sicredi.tst.sicredi.net/agro/portal";
elif [ $1 = "hom" ]; then
    URL_BASE="https://sicredi.hom.sicredi.net/agro/portal";
fi

echo $URL_BASE
#docker stop cypress 
#docker rm cypress 
docker run --rm -dit --name cypress  \
    -v $PWD:/e2e \
    -e CYPRESS_BASE=$URL_BASE \
    -w /e2e \
    --entrypoint cypress \
    soppagr-local.docker.sicredi.net/cypress/included:3.8.0 run --headless 
#docker run --rm -dit --name cypress -v $PWD:/e2e -e CYPRESS_BASE=$URL_BASE -w /e2e docker.sicredi.net/cypress/base "./run-tests.sh"
docker logs -f cypress
