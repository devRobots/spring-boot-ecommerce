# Simple eCommerce Application with SpringBoot and React


This example app shows a simple eCommerce Application with Spring Boot API and CRUD (create, read, update, and delete) its data with a React app.


**Tools:** For this project it was necessary to use tools such as those shown below.

* **Language:** Java
* **Framework backend:** SpringBoot with Maven
* **Framework frontend:** React with Semantic UI


**Objective:** Make an application for a product catalog with the front end separated from the backend applying micro service patterns.


**Prerequisites:** [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), [Node.js 8+](https://nodejs.org/) and [Mysql Server 5.7+](https://downloads.mysql.com/archives/community/).


* [Getting Started](#getting-started)
* [Links](#links)
* [License](#license)

## Getting Started

To install this application, run the following commands:


```bash git clone https://github.com/devRobots/spring-boot-ecommerce.git spring-boot-ecommerce
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

### Database Configuration

You will need to create an MySQL Table in MySQL Server to get and persist your data.

Log in to your MySQL Client session and navigate to **Applications** > **Add Application**. Click **Web**, click **Next**, and give the app a name you’ll remember. Specify `http://localhost:8080/login/oauth2/code/okta` as a Login redirect URI. Click **Done**, then click **Edit** to edit General Settings. Add `http://localhost:3000` and `http://localhost:8080` as Logout redirect URIs, then click **Save**. 

Set the `issuer` and copy the `clientId` and `clientSecret` into `src/main/resources/application.yml`. 

### Server Configuration

Set the `issuer` and copy the `clientId` and `clientSecret` into `src/main/resources/application.yml`. 

**NOTE:** The value of `{yourOktaDomain}` should be something like `dev-123456.oktapreview.com`. Make sure you don't include `-admin` in the value!


## Links

This example uses the following open source libraries:

* [React](https://reactjs.org/)
* [Semantic UI](https://reactjs.org/)
* [Spring Boot](https://spring.io/projects/spring-boot)

## License

Apache 2.0, see [LICENSE](LICENSE).