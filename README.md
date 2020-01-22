# Simple eCommerce Application with SpringBoot and React


This example app shows a simple eCommerce Application with Spring Boot API and CRUD (create, read, update, and delete) its data with a React app.


**Tools:** For this project it was necessary to use tools such as those shown below.

* **Language:** Java
* **Framework backend:** SpringBoot with Maven
* **Framework frontend:** React with Semantic UI


**Objective:** Make an application for a product catalog with the front end separated from the backend applying micro service patterns.


**Prerequisites:** [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), [Node.js 8+](https://nodejs.org/) and [Mysql Server 5.7](https://dev.mysql.com/downloads/windows/installer/5.7.html).


- [Simple eCommerce Application with SpringBoot and React](#simple-ecommerce-application-with-springboot-and-react)
  - [Getting Started](#getting-started)
  - [Links](#links)
  - [License](#license)

## Getting Started

To install this application, run the following commands:


```bash 
git clone https://github.com/devRobots/spring-boot-ecommerce.git spring-boot-ecommerce
cd spring-boot-ecommerce
```

This will get a copy of the project installed locally. To install all of its dependencies and start each app, follow the instructions below.

To run the server, run:
 
```bash
./mvnw spring-boot:run
```

To run the client, run:
 
```bash
cd ecommerce-frontend
npm start
```


## Links

This example uses the following open source libraries:

* [React](https://reactjs.org/)
* [Semantic UI](https://react.semantic-ui.com/)
* [Spring Boot](https://spring.io/projects/spring-boot)

## License

Apache 2.0, see [LICENSE](LICENSE).