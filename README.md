<h1 align="center">Live Life </h1>

# Features

 * Responsive on all device sizes

 * Interactive elements


This is a social media  website for a small community who wants to have friends online to bring positivity and enjoyment in their lives. It is designed to be responsibe and accessible on a range of devices, making it easy to navigate for potential users and owner.

[View the live project here.](https://live-life-ar.herokuapp.com/)

![main](https://user-images.githubusercontent.com/91749477/211204547-4c1b576e-31f9-46f9-8408-dec6cb096caf.png)

## Links for headings

* [User stories:](#user-stories)
   * [First Time Visitor Goals,](#first-time-visitor-goals) [Returning Visitor Goals,](#returning-visitor-goals) [Frequent User Goals](#frequent-user-goals)
* [Design:](#design)
   * [Colour Scheme and Typography,](#colour-scheme-and-typography) [Wireframes,](#wireframes) [Most reused React components](#most-reused-react-components)

* [Technologies Used:](#technologies-used)
   * [Languages Used,](#languages-used) [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
* [Testing:](#testing)
   * [Lighthouse,](#lighthouse) [Manual Testing,](#manual-testing) [Known Bugs,](#known-bugs) [Bugs left unfix](#bugs-left-unfix)
* [Deployment:](#deployment)
   * [GitHub Pages,](#github-pages) [Heroku.](#heroku)
* [Credits:](#credits)



### User Experience (UX)!

   ## User stories

  ### First Time Visitor Goals
   
   1. As a First Time Visitor, I want to easily access, understand and use the main functions of the site. 
 #### Navbar
  * I can view Navbar from every page so that I can easily navigate between pages.
   ![Screenshot (32)](https://user-images.githubusercontent.com/91749477/211206261-9dffe84b-c374-4fa1-935f-6cf14c36ca80.png)
   * I can navigate through pages qucikly so that I can view content seamlessly with page refresh.  
   ![main2](https://user-images.githubusercontent.com/91749477/211204565-2c573b2b-456c-4f2f-beb3-9f721ace6c7d.png)
#### Footer
  * I can view Footer from every page so that I can easily access social media links of this site.
  * Whichever link I click, it will be open up in a new tab to ensure the user can easily get back to the website.
   ![Screenshot (29)](https://user-images.githubusercontent.com/91749477/211206252-75b53f86-00e6-4c74-8358-e846d55694ea.png)
      * I can view message buttons on footer in polite and user friendly way to understand rules of this site.
   ![Screenshot (30)](https://user-images.githubusercontent.com/91749477/211206258-190dbe4c-6b87-4a3c-b083-35bc6da4a2af.png)


#### SignUp

2. As a First Time Vistor, I want to sign Up so that I can access all feature of this site.
   * I can sign up with an easy to signup form so that, I can access all the features for signed up users


 ![2 (2)](https://user-images.githubusercontent.com/91749477/205432359-7afd2167-42d8-451f-93e9-78ddf29163f2.jpg)
 
   * This site doesn't take similar username to avoid any duplication of profile or confusion in account.
 
![Screenshot (9)](https://user-images.githubusercontent.com/91749477/211204682-56a6fd04-05a4-489a-beb3-9bbba0536836.png)

   * This site doesn't take short passowrd to prevent phishing and social engineering.

![Screenshot (10)](https://user-images.githubusercontent.com/91749477/211204697-80d25684-63ca-4c58-8291-d98a377dd559.png)

   ### Returning Visitor Goals
   
   #### SignIn

  1. As a Returning Visitor user, I want to sign in to the app so that I can access functionality for logged in users.
   * I can tell if I am logged in or not so that I can logged in if I need to.
         
         
         
  ![signin](https://user-images.githubusercontent.com/91749477/211204736-066ad238-b542-4a6c-be40-cb2c0d6b332c.png)
      
   * It has signin user authentication procedure to prevents unauthorized users from accessing my account.
      
        

![si-error2](https://user-images.githubusercontent.com/91749477/211204743-5213135e-29d6-46b3-850d-e89c91c03112.png)

   ![si-error](https://user-images.githubusercontent.com/91749477/211204749-b9a1c1e5-ef2e-44c0-b972-bd8d7adbd005.png)
   
    
      
##### Post
2. As a logged in user I can create posts so that I can share my images with the world!

  ![Screenshot (33)](https://user-images.githubusercontent.com/91749477/211205329-f785d137-f876-485e-afe5-3da71da45440.png)
* As a logged in user I can edit or delete my post.
  ![Screenshot (37)](https://user-images.githubusercontent.com/91749477/211205438-422019fe-96cb-4088-a414-4c45b6680f61.png)

#### Profile

3. As a user I can view other users profile so that I can see their posts to learn more about them.
   * I can see most popular profile list to pick from.
   * I can see detail of their profile to know them.
![Screenshot (14)](https://user-images.githubusercontent.com/91749477/211205731-da93caf2-9473-4887-ae91-b8ec11aa3d58.png)


##### edit profile
4. As a logged in user I can edit my prfile so that I can change and update my password, username and profile picture.

![Screenshot (12)](https://user-images.githubusercontent.com/91749477/211205853-6660b034-f19f-4e9b-94c7-cfa3dea622ee.png)
   * I can update Bio and profile Avatar 

![Screenshot (36)](https://user-images.githubusercontent.com/91749477/211205271-ae16069b-afbf-45aa-9880-c7f26ba1d1f1.png)
   * I can update my username 
![Screenshot (35)](https://user-images.githubusercontent.com/91749477/211205292-2128650e-5265-49b6-8504-37f08f26cce0.png)
   * I can change my password
![Screenshot (34)](https://user-images.githubusercontent.com/91749477/211205305-0917406c-8415-419e-947c-3faecedb8bdf.png)


#### like
5. As a logged in user I can like a post so that I can show my support for the posts that interest me
![Screenshot (16)](https://user-images.githubusercontent.com/91749477/211205797-b8114e0f-62cd-4acf-8315-4f4ccf06d959.png)
   * Only signed in user can like any post
![Screenshot (19)](https://user-images.githubusercontent.com/91749477/211205653-59491816-6882-4536-b344-f0a26e43b00e.png)

   * Only other user can like my post
![Screenshot (22)](https://user-images.githubusercontent.com/91749477/211205925-2b086e02-a7c6-4d43-b839-d1fbf40009bf.png)


#### comments
6. As a logged in user I can comment on any post I like.
   ![Screenshot (17)](https://user-images.githubusercontent.com/91749477/211205872-e82f42ab-7071-48fe-bf40-f7ba996da950.png)
7. As a logged in user I can edit or delete my comment any time
   ![Screenshot (18)](https://user-images.githubusercontent.com/91749477/211205886-ea16cfd4-28db-40d4-a990-0ffbbf2d26f8.png)
   * I can not edit or delete others comments 
![Screenshot (25)](https://user-images.githubusercontent.com/91749477/211206210-2f5f87d7-af48-4678-94f3-683c7f5d4acf.png)


#### Frequent User Goals

1. As a Frequent User, I can check what comments I got for my posts.
2. As a Frequent User, I can Follow a profile I like.
3. As a Frequent User, I cab check if there are any new intersting posts from anyone easily on top without scrolling through old posts.
4. As a Frequent User, I can to  create post, update or delete a post so that I can share my best with the online community.

## Design           
### Colour Scheme and Typography
  * The two main colours used are yellow and green.
  * The DM Sans font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. DM Sans is a clean font, so it is attractive and appropriate.
    
### Wireframes

####  Home Page Wireframe 

##### Main Page
   
![wireframe (2)](https://user-images.githubusercontent.com/91749477/205432409-7f88467a-9bf4-4252-977b-bda54a0a1e4d.png)

- Sign in & Sign up
   
     
 
 ![sign in screen (2)](https://user-images.githubusercontent.com/91749477/205432455-5dfaa5e4-6151-42c5-ac74-f0f12ffeac01.png)

![sign up screen (2)](https://user-images.githubusercontent.com/91749477/205432461-1284e13a-e183-462f-b55f-0cae24e7c3dc.png)


 ####  Mobile Wireframe 
   ##### Main Page
    -

   ![mobile (3)](https://user-images.githubusercontent.com/91749477/205433873-23c2918a-6ba3-4dc9-8c89-c5dc4857f493.png)

   
 - Sign in & Sign up
    
![mobile signin (2)](https://user-images.githubusercontent.com/91749477/205432475-e3196884-fce4-4fe9-995b-c660af081a00.png) ![m signup (2)](https://user-images.githubusercontent.com/91749477/205432486-82bb990c-8d80-48d7-bb46-64220f276c0d.png)

### Most reused React components:
   * PostsPage:
      * Home, Feed, Liked
   * Post:
      * PostsPage
   * Profile:
      * PopularProfiles, PopularProfiles (mobile)
   * DropdownMenus:
      * Post, ProfilePage, Comment
   * InfiniteScrollComponent:
     * PostPage (loading Comment components)
     * PostsPage (loading all, feed or liked Post components)
     * ProfilePage (loading Post components that belong to the profile)
     
     


## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript)
-   [PYTHON](https://en.wikipedia.org/wiki/Python_(programming_language))
-   [POSTGRESQL](https://en.wikipedia.org/wiki/PostgreSQL)

### Frameworks, Libraries & Programs Used

1. [ReactJS:](https://en.wikipedia.org/wiki/React_(JavaScript_library)) 
 * React was use as a front-end JavaScript library for building user interfaces based on UI components.
2. [Django REST Framework:](https://en.wikipedia.org/wiki/Django_(web_framework))
 * DRF was used for back-end API.
4. [ElephentSQL:](https://www.elephantsql.com/)
 *  Elephant was used for SQL queries to create, read, update and delete data directly from my web browser.
5. [ReactBootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
 * It integrate Bootstrap styles into React functionality, it removes dependency on bootstrap.js and jQuery and to incorporates Bootstrap functionality into React's virtual DOM.
Methods and events using  jQuery are done imperatively 
by directly manipulating the DOM..  
6. [Hover.css:](https://ianlunn.github.io/Hover/)
 * Hover.css was used on the Social Media icons in the footer to add the float transition while being hovered over.    
7. [Google Fonts:](https://fonts.google.com/)
 * Google fonts were used to import the 'Titillium Web' font into the style.css file which is used on all pages throughout the project.     
8. [Font Awesome:](https://fontawesome.com/)
 * Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.    
9. [Git](https://git-scm.com/)
 * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
10. [GitHub:](https://github.com/)
 * GitHub is used to store the projects code after being pushed from Git
12. [JustinMind:](https://en.wikipedia.org/wiki/Justinmind_(software))
 * justinMind was used to make wireframes for this project.
13. [Wix:](https://en.wikipedia.org/wiki/Wix.com)
  * Wix was use to make logo for this website
14. [Favicon:](https://favicon.io/favicon-converter/)
  *  Favicon was used to create favicon for this website.
15. [Axios:](https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/)
  *  This popular library installed to communicate with backend server. 
16. [jwt-decode:](https://en.wikipedia.org/wiki/JSON_Web_Token)
  * A small browser library that helps decoding JWTs token
17. [React-dom:](https://www.geeksforgeeks.org/reactjs-reactdom/) 
  * a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page
18. [:](https://www.npmjs.com/package/react-icons)
  * React-icons is a small library that helps you add icons (from all different icon libraries) to your React apps.
19. [react-infinite-scroll-component:](https://www.npmjs.com/package/react-infinite-scroll-component)
  *  Infinite scroll is a popular technique that reduces the number of page loads. It can also make for a smoother user experience
20. [React-router-dom:](https://www.geeksforgeeks.org/what-is-react-router-dom/)
  * React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.
21. [React-scripts :](https://www.npmjs.com/package/react-scripts/)
  * It is a set of scripts from the create-react-app starter pack. create-react-app helps you start off projects without configuring
22. [Web Vitals:](https://www.npmjs.com/package/react-web-vitals)
  * Web Vitals are a set of useful metrics that aim to capture the user experience of a web page


## Testing

### Lighthouse

* Lighthouse scoring for Desktop view
![LH-desktop](https://user-images.githubusercontent.com/91749477/211205985-04fa5bd7-5299-475a-9bea-920a6729df2f.png)

* Lighthouse scoring for mobile view
![LH-mobile](https://user-images.githubusercontent.com/91749477/211205990-10a0991d-85b1-4549-935b-fb6f6e09d364.png)

### Manual Testing

1. The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
2. The website was viewed on a variety of devices such as Desktop, Laptop, Samsung9+, etc.
3. A large amount of testing was done to ensure that all component working properly.
4. Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

While making this projects many bugs and Errors I've found here are some worth mentioning.

1. There was an error about existing posts forlder, I did force migration of it only using "python manage.py migrate posts"
2. NavBar issue i used fluid class to sort this out.
3. Navlink wiring; I debug all code and import linked folder correctly
4. error in playing app in web browser. Error "user_not_found" I change allowed host setting in setting.py in api repo.

![error3 (2)](https://user-images.githubusercontent.com/91749477/205432578-44e9fd0c-3882-472f-bd60-b4eccf517e53.png)

5. Site was resticted so because CORS setting in api repo

### Bugs left unfix

1. Issue appears on  chrome DevTools
  * A 'cache-control' header is missing or empty.
  * -ms-filter' is not supported by Chrome, Chrome Android. Add 'filter' to support Chrome 53+, Chrome Android 53+.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.


### Heroku

**Heruku deployment for Front-End**

1. Log into Heroku and go to the Dashboard, Click “New” then Click “Create new app” then select "create a new app"

2. Give your app a name and select the region closest to you, then click “Create app”.

3. Now that our app is created, let's  connect it to our Github repository by clicking Deploy tab

4. In Deployment method section, click on “Github” and search for your repo and click Connect

5. Enable Automatic Deploys or Manual deploy, once that’s wired up and then click "Deploy Branch" which will trigger Heroku to start.

6. when log showing a successful build then your app ready and deployed.

7. Click the “open app” button and check it out, you app is up and running



**Heruku deployment for Back-End**

[Please click here to see Back-End deployment steps](https://github.com/Attstar2021/livelife-drf-api/blob/main/README.md)



## Credits

### Code

The basic code and theme of the application is influenced by Code Institute's walkthrough project "Moments"

### Media

1. [Pixbay](https://pixabay.com)
2. [code Institute](https://codeinstitute.net/)

### Acknowledgements

  * With Thanks and regards to Code Institute for getting me this far from it's excellant modules content
  *  [Stackoverflow](https://stackoverflow.com/) for helping me understanding some bugs and how to fix them
  *  Code Institute Tutor Assistance team for all help and dedications  
  *  My mentor Rohit for his expertise, guidance and support.
