$ErrorActionPreference = 'Stop'

Write-Host 'Instalando dependências...'
npm install

Write-Host 'Validando o projeto...'
npm run lint
npm run build

Write-Host 'Selecionando o projeto Firebase...'
firebase use ibgdh-site-institucional

Write-Host 'Publicando Hosting e regras do Firestore...'
firebase deploy
