
```markdown
# WYSA BACKEND DEVELOPER TASK

This API is designed to help users track and manage their sleep patterns.
It allows for user registration, updating various sleep metrics, and retrieving sleep efficiency data.

## Features

- **User Registration**: Allows new users to register and receive authentication tokens.
- **JWT Authentication**: Secures endpoints to ensure only authenticated users can access them.
- **Update Sleep Metrics**: Users can update their sleep-related data, including weekly sleep patterns, sleep time, hours slept, and more.
- **Retrieve Sleep Efficiency**: Users can retrieve their sleep efficiency data.

## Tech Stack

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Web framework for Node.js that provides robust features for building web and mobile applications.
- **MongoDB**: NoSQL database for storing user data and sleep metrics.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Token)**: For securing API endpoints and managing user sessions.
- **Bcrypt**: Library to hash passwords for secure storage.
- **Postman**: Tool for testing API endpoints.


###  Run the Application

Start the server with:

```bash
npm i
npm start
```

The application will be running on `http://localhost:8000`.

## Sample ENV File 

- **PORT**: The port number on which the server will listen (e.g., `8080`).
- **MONGODB_URI**: The connection string for MongoDB.
- **ACCESS_TOKEN_SECRET**: The secret key used for signing JWT for user authentication.
- **REFRESH_TOKEN_SECRET**: The secret key used for signing JWTs for refreshing access tokens.

## API Endpoints

### User Registration

- **Endpoint**: `/api/v1/register`
- **Method**: `POST`
- **Description**: Registers a new user and returns an access token and refresh token.
- **Request Body**:
  ```json
  {
    "nickname": "JohnDoe"
  }
  ```
- **Response**:
  ```json
  {
    "status": 201,
    "message": "User registered successfully",
    "data": {
      "accessToken": "your-access-token",
      "refreshToken": "your-refresh-token",
      "nickname": "JohnDoe"
    }
  }
  ```

### Update Sleep Metrics

These endpoints allow users to update various sleep-related metrics.

#### Update Weekly Sleep Pattern

- **Endpoint**: `/api/v1/weekSleeping`
- **Method**: `PATCH`
- **Description**: Updates the number of weeks the user has been tracking their sleep.
- **Authorization**: Bearer Token
- **Request Body**:
  ```json
  {
    "weekSleeping": 4
  }
  ```
- **Response**:
  ```json
  {
    "status": 200,
    "message": "weekSleeping updated successfully",
    "data": {
      "_id": "user-id",
      "weekSleeping": 4
    }
  }
  ```

#### Update Number of Weeks

- **Endpoint**: `/api/v1/noOfWeeks`
- **Method**: `PATCH`
- **Description**: Updates the total number of weeks the user has tracked their sleep.
- **Authorization**: Bearer Token
- **Request Body**:
  ```json
  {
    "noOfWeeks": 6
  }
  ```
- **Response**:
  ```json
  {
    "status": 200,
    "message": "noOfWeeks updated successfully",
    "data": {
      "_id": "user-id",
      "noOfWeeks": 6
    }
  }
  ```

#### Update Sleep Time

- **Endpoint**: `/api/v1/sleepTime`
- **Method**: `PATCH`
- **Description**: Updates the time the user goes to sleep.
- **Authorization**: Bearer Token
- **Request Body**:
  ```json
  {
    "sleepTime": "23:00"
  }
  ```
- **Response**:
  ```json
  {
    "status": 200,
    "message": "sleepTime updated successfully",
    "data": {
      "_id": "user-id",
      "sleepTime": "23:00"
    }
  }
  ```

#### Update Wake Time

- **Endpoint**: `/api/v1/sleepOut`
- **Method**: `PATCH`
- **Description**: Updates the time the user wakes up.
- **Authorization**: Bearer Token
- **Request Body**:
  ```json
  {
    "sleepOut": "07:00"
  }
  ```
- **Response**:
  ```json
  {
    "status": 200,
    "message": "sleepOut updated successfully",
    "data": {
      "_id": "user-id",
      "sleepOut": "07:00"
    }
  }
  ```

#### Update Sleep Hours

- **Endpoint**: `/api/v1/hours`
- **Method**: `PATCH`
- **Description**: Updates the total hours of sleep.
- **Authorization**: Bearer Token
- **Request Body**:
  ```json
  {
    "hours": 8
  }
  ```
- **Response**:
  ```json
  {
    "status": 200,
    "message": "hours updated successfully",
    "data": {
      "_id": "user-id",
      "hours": 8
    }
  }
  ```

### Retrieve Sleep Efficiency

- **Endpoint**: `/api/v1/sleepEfficiency`
- **Method**: `GET`
- **Description**: Retrieves the sleep efficiency data for the logged-in user.
- **Authorization**: Bearer Token
- **Response**:
  ```json
  {
    "status": 200,
    "message": "user Sleep Efficiency fetched successfully",
    "data": {
      "nickname": "userNickname",
      "sleepEfficiency": 0.85
    }
  }
  ```
