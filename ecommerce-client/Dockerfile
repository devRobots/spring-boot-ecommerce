FROM ubuntu:20.04
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN apt-get update -y && apt-get install curl -y
#ENTRYPOINT ["sleep", "360"]
CMD sleep 60 && bash add-products.sh && bash add-categories.sh