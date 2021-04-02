#!/bin/bash

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Notebooks","picture": "https://www.oficinadanet.com.br/imagens/post/33710/750xNxtop-10-notebooks-para-black-friday.jpg.pagespeed.ic.b0a906a96e.jpg"}' \
http://myapp-backend:8080/api/categories/add

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Consoles","picture": "https://ovicio.com.br/wp-content/uploads/2020/05/20200525-capa-consoles-1513704274993_v2_1920x1080-1200x675.jpg"}' \
http://myapp-backend:8080/api/categories/add

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Smartphones","picture": "https://www.oficinadanet.com.br/imagens/post/25420/top-10-smartphones-de-1000-ate-1500-reais.jpg"}' \
http://myapp-backend:8080/api/categories/add

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Microfones","picture": "https://locfacilsomeimagem.com.br/wp-content/uploads/2019/11/microphones-678x339.jpg"}' \
http://myapp-backend:8080/api/categories/add