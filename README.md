# Simple eCommerce Application with SpringBoot and React

This example app shows a simple eCommerce Application with Spring Boot API and CRUD (create, read, update, and delete) its data with a React app.

**Tools:** For this project it was necessary to use tools such as those shown below.

- **Language:** Java
- **Framework backend:** SpringBoot with Maven
- **Framework frontend:** React with Semantic UI

**Objective:** Make an application for a product catalog with the front end separated from the backend applying micro service patterns.

**Prerequisites:** [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), [Node.js 8+](https://nodejs.org/) and [Mysql Server 5.7](https://dev.mysql.com/downloads/windows/installer/5.7.html).

- [Getting Started](#getting-started)
- [Links](#links)
- [License](#license)

## Getting Started

To install this application, run the following commands:

```bash
git clone https://github.com/devRobots/spring-boot-ecommerce.git spring-boot-ecommerce
cd spring-boot-ecommerce
```

This will get a copy of the project installed locally. To configure all of its dependencies and start each app, follow the instructions below.

### Configure Database

Once MySQL is installed you must configure a username and password. By default the user and password should be `root` . If not, you must configure in the file `application.configure` located in the path `src/main/resources/`.

In the file `application.configure` you must edit the parameters `spring.datasource.username` and `spring.datasource.password` with the values you defined.

### Create Database & Tables

Now you just need to create the database where the project will store the information. To create it, just follow the steps below.

```bash
mysql -u {username} -p
```

This command will ask for your MySQL password. Once inside the MySQL monitor you can create the database with the following command.

```SQL
CREATE DATABASE ecommerce;
```

Now you can run the server which generates the database tables. To run the server, run:

```bash
./mvnw spring-boot:run
```

### Create admin user

Before continuing you must create the user `admin`, in order to perform administrator operations in the application. For this you must create a user on the MySQL monitor with the following command.

```SQL
USE ecommerce;
INSERT INTO user (username, email, is_admin, password) values ('{admin.username}', '{admin.email}', true, '{admin.password}');
```

### Run Frontend Client

Now you can run the frondent client to use the web application. To run the client, run:

```bash
cd ecommerce-frontend
npm start
```

## Links

This example uses the following open source libraries:

- [React](https://reactjs.org/)
- [Semantic UI](https://react.semantic-ui.com/)
- [Spring Boot](https://spring.io/projects/spring-boot)

## License

Apache 2.0, see [LICENSE](LICENSE).
