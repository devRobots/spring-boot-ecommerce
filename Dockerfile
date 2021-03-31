#
# Build stage
#
FROM maven:3.6.3-openjdk-8-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package -DskipTests

#
# Package stage
#
FROM openjdk:8-jre-slim
COPY --from=build /home/app/target/spring-boot-ecommerce.jar /usr/local/lib/ecommerce.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/local/lib/ecommerce.jar"]