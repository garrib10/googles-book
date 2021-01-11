## Google Books Search

## Overview
In this activity, we were told to make a MERN stack application that uses the google api to be able to search for books. You should be able to search books and then save the books and it should show up on your Save Books page. 

## Instructions


This application requires at minimum 2 pages, check out the following mockup images for each page:


Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.


Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.






Start by using the 01-Ins_Mern/create-react-express example as a base for your application.


Add code to connect to a MongoDB database named googlebooks using the mongoose npm package.


Using mongoose, then create a Book schema.


At a minimum, books should have each of the following fields:




title - Title of the book from the Google Books API


authors - The books's author(s) as returned from the Google Books API


description - The book's description as returned from the Google Books API


image - The Book's thumbnail image as returned from the Google Books API


link - The Book's information link as returned from the Google Books API


Creating documents in your books collection similar to the following:
{
  authors: ["Suzanne Collins"]
  description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
  image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
  title: "The Hunger Games"
}



Create a layout similar to the mockups displayed above. This should be a SPA (Single Page Application) that uses react-router-dom to navigate, hide and show your React components without changing the route within Express.



The layout should include at least two React Components for each page Search and Saved.


Feel free to try out alternative CSS framework to Bootstrap.



Add the following Express routes for your app:



/api/books (get) - Should return all saved books as JSON.


/api/books (post) - Will be used to save a new book to the database.


/api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.


* (get) - Will load your single HTML page in client/build/index.html. Make sure you have this after all other routes are defined.


Deploy your application to Heroku once complete. You must use Create React App and current versions of React and React-Router-Dom for this assignment.




## Bonus Live Updates to Saved Books


Use React routing and socket.io to create a notification or a component that triggers whenever a user saves an book. Your message should include the title of the saved book.


Say you have multiple browsers open, each one visiting your site. If you save an book in one browser, then all of your browsers should notify you that a new book was saved.


Socket.io NPM package


## Minimum Requirements
Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.


* Create a README.md
Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way:


* About READMEs


* Mastering Markdown

##  Submission on BCS

Github Link: https://github.com/garrib10/googles-book

Deployed: Heroku Link: https://fierce-caverns-09775.herokuapp.com/

## Screenshots

<img width="1440" alt="Screen Shot 2021-01-11 at 6 32 46 PM" src="https://user-images.githubusercontent.com/68867054/104250692-1d395680-543c-11eb-85ca-ce3cf223b508.png">

<img width="1440" alt="Screen Shot 2021-01-11 at 6 33 00 PM" src="https://user-images.githubusercontent.com/68867054/104250740-3e01ac00-543c-11eb-955a-0fdf3124b7a6.png">

<img width="1439" alt="Screen Shot 2021-01-11 at 6 33 15 PM" src="https://user-images.githubusercontent.com/68867054/104250764-4a860480-543c-11eb-9f30-3802d499bb80.png">




