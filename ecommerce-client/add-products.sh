#!/bin/bash

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Macbook", "description": "Apple Notebook", "weight":"3.0", "price":"8000.00", "picture1":"https://www.notebookcheck.info/uploads/tx_nbc2/air13teaser.jpg"}' \
http://myapp-backend:8080/api/products/add

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Notebook Dell", "description": "Dell Notebook Inspiron", "weight":"4.0", "price":"3000.00", "picture1":"https://images-na.ssl-images-amazon.com/images/I/51jKcbLftHL._AC_SL1000_.jpg"}' \
http://myapp-backend:8080/api/products/add

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Playstation 5", "description": "Sony console", "weight":"7.0", "price":"5000.00", "picture1":"https://www.hardware.com.br/filters:format:(jpeg)/@/static/wp/2021/03/09/ps5-slims.jpg"}' \
http://myapp-backend:8080/api/products/add

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Xbox SeriesX", "description": "Microsoft console", "weight":"7.0", "price":"4800.00", "picture1":"https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png"}' \
http://myapp-backend:8080/api/products/add

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Samsung Galaxy S20", "description": "Samsung Smartphone", "weight":"1.0", "price":"3694.00", "picture1":"https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-s20-fe-128gb-cloud-red-6gb-ram-tela-65-cam-tripla-selfie-32mp/magazineluiza/155592100/7d905e7ba135ea6a4fb251303426fe1e.jpg"}' \
http://myapp-backend:8080/api/products/add

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Iphone 12", "description": "Apple smartphone", "weight":"1.0", "price":"8000.00", "picture1":"https://http2.mlstatic.com/D_NQ_NP_2X_816716-MLA43976066482_112020-V.webp"}' \
http://myapp-backend:8080/api/products/add

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Microfone Shure", "description": "Modelo SM7B", "weight":"1.0", "price":"2250.00", "picture1":"https://cdn.iset.io/assets/38047/produtos/7205/preview.jpg"}' \
http://myapp-backend:8080/api/products/add

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Microfone presonus", "description": "Modelo M7", "weight":"1.0", "price":"600.00", "picture1":"https://a-static.mlcdn.com.br/600x600/kit-interface-presonus-audio-box-96-studio/x5-music/12404146/8f58140b5e0656f18aa51ec580327673.jpg"}' \
http://myapp-backend:8080/api/products/add