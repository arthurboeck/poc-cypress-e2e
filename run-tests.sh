#!/bin/bash
echo "Atualizando dependencias"
npm install
echo "Rodando os testes"
cypress run --browser chrome