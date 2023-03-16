# Health Appointments

## Timeframe
  * 1 week

## Technologies & Tools used
  * MongoDB
  * Mongoose
  * Express
  * Node
  * Javascript
  * EJS
  * Github

## Description
This project is a simplified take on the basic functions of the HealthBuddy App. The application was developed using MongoDB, Express, Node and EJS view engine while I was attending the Software Engineering Immersive course at General Assembly.

Developed by the SingHealth Group, the HealthBuddy App provides a convenient platform for users to access health information and services. By providing such services, SingHealth hopes to empower users to take charge of their health and well-being. The app currently provides many unique services, which includes booking medical appointments, ordering medicines, checking test results and many more.

Incorporating many extensive and complicated features into the application usually entails considerable amount of bugs and issues. This problem becomes fairly evident through the app ratings and reviews. By emulating a small part of HealthBuddy, my aim was to gain a better understanding of the complex structures involving the backend servers and databases, as well as the difficulties encountered during debugging.

![login](readme_resource/Login.png)


## Deployment
The application can be found at:
https://clumsy-deer-earrings.cyclic.app


## Project Architecture
To emulate the application, I navigated around HealthBuddy to understand the services and utilities it offered. After handpicking several important features of the application, I crafted my data model and wireframe to base my project upon.

![model](readme_resource/model.jpg)
![wireframe](readme_resource/wireframe.jpg)

I used the MVC approach for this application, separating "views", "models", "routes" and "controllers" into different compartments. Data manipulation was done within "models" and "controllers" to render the "views" at the frontend.


## User Stories
| As a User, when...                       |  I want to be able to...                
| :--------------------------------------- |:-----------------------------------------------|
| Viewing the Appointments page            |  See a list of my appointments                 
| Viewing the Appointment page details     |  - See more details about that specific appointment<br>- Update the appointment details<br>- Add medicines related to the appointment
| Accessing the Add Appointments page      |  See a drop-list of institutions, speciality and date
| Accessing the Add Medicine page          |  Add medicine and speciality to a list of existing medicines
| Viewing the Patient List (Doctors only)  |  - See a list of all the patients<br>-Select a patient to access more patient specific information<br>Select different patients


## Development Approach
I broke down the process into several main components:
  * Part 1: Setting up the main models and their controllers (user, appointments, medicines)
  * Part 2: Referencing and embedding the appropriate models 
  * Part 3: Validate the controllers, models and routes
  * Part 4: Create individualised web sessions for different user accounts
  * Part 5: Implement authentication and authorisation for different user types


## Breakdown of some features
Upon logging in, each user will be able to view their own medical appointments and medicine list.
![appointment_list](readme_resource/Appointment_List.png)

Users would be able to ammend each appointment as desired, which includes a more detailed view of each appointment.
![appointment_details](readme_resource/Appointment_Details.png)

Some features require varying authorisation levels to access. (E.g. Only doctors can ammend the medicine list)
![medicine_list](readme_resource/Medicine_List.png)

Doctors are able to access different patient information using the patient list.
![patient_list](readme_resource/Patient_List.png)


## Key Learning Points
  1. Through the project, I learned how to use MongoDB, Mongoose, and Express.
  2. It is important to have a good understanding of both frontend and backend concepts; it also helps identifying errors and bugs easier.
  3. Be careful and meticulous at all times, even small errors can cause issues which are difficult to trace.
  4. Constantly test small chunks of code before proceesing to subsequent steps.


## Future Development
As this was a course project for submission, there would unlikely be further changes made. However, if there were, possible improvements could include: 
  * Adding more data models (e.g. Test Results & Reports)
  * Implementing an interface individualised for each user (e.g. Welcome,"username" message)
  * Adding more occupations with varying authorisation levels (e.g. nurses, pharmacist)
  * Improve CSS design
