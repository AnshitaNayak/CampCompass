
# CampCompass

[CampCompass]( https://fine-yak-trunks.cyclic.app/) is a CRUD-based Full-Stack application  where users can create, edit, delete and review campgrounds. In order to review or create a campground, you must have an account. This project is a part of Colt Steele's web dev bootcamp course on udemy.


## Functionalities

- Everyone can view list of campgrounds created already.
- Registered and Logged In User can add, edit and delete the campground they have created.
- User can even provide feedback about campground by giving rating and reviews.
- All the data will pe persistent and is stored in the MongoDb database.


## Tech Stack

**Client:** [EJS](https://ejs.co/), [Bootstrap](https://getbootstrap.com/)

**Server:** [Node](https://nodejs.org/en), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), [MapBox](https://www.mapbox.com/), [Cloudinary](https://cloudinary.com/)

Check [package.json](https://github.com/AnshitaNayak/CampCompass/blob/master/package.json) file for more information.
## Installation

```bash
  Install node & npm first
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URL`

`CLOUDINARY_CLOUD_NAME`

`CLOUDINARY_KEY`

`CLOUDINARY_SECRET`

`MAPBOX_TOKEN`


## Getting Started

Clone the project

```bash
  git clone https://github.com/AnshitaNayak/CampCompass.git
```

Go to the project directory

```bash
  cd CampCompass
```

Install dependencies via NPM or Yarn

```bash
  npm install
```

Run the server with nodemon 

```bash
  npm run start
```
or

```bash
    node index.js
```


## Usage/Examples

- LogIN / SignUp for adding campground post, editing & deleting them, posting feedback etc.

- If you choose to stay as a guest user without login / signup you can only view & get detailed information about the existing campgrounds.


## Deployment

To see my Web Application please do visit  https://fine-yak-trunks.cyclic.app/
## Screenshots

**Homepage**
![App Screenshot](https://user-images.githubusercontent.com/51289274/113733448-1a3ac300-9718-11eb-9fc7-defb8d2cd9c1.png)

**All Campgrounds**
![App Screenshot](https://user-images.githubusercontent.com/51289274/113733438-173fd280-9718-11eb-8a0d-8e13f1ab3d45.png)

**Single Campground ShowPage**
![App Screenshot](https://user-images.githubusercontent.com/51289274/113733465-1e66e080-9718-11eb-9ffe-8b047640942a.png)

**Register & Login Page**
![App Screenshot](https://user-images.githubusercontent.com/51289274/113734300-d8f6e300-9718-11eb-801e-5cb4698a1560.png)
## Authors

- [kanhabindal](https://github.com/kanhabindal)
- [shubhikodes](https://github.com/shubhikodes)

