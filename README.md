# AssignmentHub

## Overview

AssignmentHub is a web application that allows a user to have all of their school assignments in the same view. It will present the user all of the necessary information for the assignments. 
* Class Name
* Assignment Name
* Due Date
* Description/Additional Information
* Files that are required for the assignment

## Installation
1. Clone the repo into your directory `git clone git@github.com:ChristopherAChase/AssignmentHub.git <directory name>`
2. Make the directory you just cloned the repo into your current directory: `cd <directory name from step 1>`
3. Install the application dependencies: `npm install`
4. Then you'll be able to run the application: `npm start`

## How It Works

A user registers/logs into their account. On the user's first time signing in, they will be prompted to add/remove the school(s) they attend from the list of available schools. Then they will enter their credentials for that school's website. From this point on, when the user signs in, this step will not be needed

Behind the scenes, a web scraping tool goes to work. It will sign in to the user's school account, going through each of their courses, and grabbing the next two incomplete assignments for each class. It will grab all information related to the assignments. Then it will be presented to the user in a pretty, user-friendly manner. 

On the front end, the website will be ran on React.js, allowing the site to be flexible, fast, and responsive. 

## The UI
The site will consist of only a few pages:
* Login/Register Page
* User Settings page 
  * Manage School(s) and the credentials
  * Maybe adjust the number of assignments that are pulled per class???
* Home Page
  * Display the contents of each class and their assignments
  * Each Class can be a tab (like a notebook? :) )
  * Each Assignment for the class will be displayed when that tab is selected
