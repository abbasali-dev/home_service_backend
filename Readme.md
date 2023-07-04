# Home Service Application Backend

This repository contains the backend code for a home service application. The application allows sellers to register their services, and customers can easily book and avail them. Services such as cleaning, electrician, plumbing, painting, and more are available. An admin can approve or reject newly added services by sellers, and customers can review and rate their experiences after availing a service.

## Project Requirements

### Registration and Authorization

- Users can register as customers or sellers.
- Admin accounts are added by default.
- User registration requires providing name, gender, age, email, password, and role (seller or customer).
- Users can log in using their email and password.
- Email confirmation is required for account activation.
- After 5 incorrect login attempts, the user's login should be disabled for 5 minutes.

### Customer Dashboard

Customers will have the following features in their dashboard:

- View all available services.
- Sort available services based on date.
- Search services by category.
- View individual service details.
- Book a service.
- Provide ratings and reviews for services.
- Make payments using Stripe integration.
- View ongoing and completed services.
- Rate and review services they have availed.

### Admin Dashboard

Admins will have the following features in their dashboard:

- Manage categories for services.
- Add new categories.
- Delete categories.
- View all newly added services.
- Approve or reject newly added services.
- Provide reasons for rejection.
- View lists of approved and rejected services.
- Review and approve previously rejected services.

### Seller Dashboard

Sellers will have the following features in their dashboard:

- View all services they have added.
- Each service will display its status (pending, approved, or rejected).
- Resolve admin comments and request re-approval for rejected services.
- Register new services.
- View reviews submitted for individual services.

## Models

### User

- Name
- Gender
- Email
- Password
- Role

### Service

- Title
- Description
- Location
- Price
- Average Rating
- CategoryId

Please note that these models can be extended or modified based on your specific requirements and discussions with your team.

## Installation and Setup

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Configure the environment variables for the database connection and other settings.
4. Run the backend server using `npm start`.

Make sure to also set up the frontend application to interact with the backend API.

## API Endpoints

- `/api/users` - User-related endpoints (registration, login, etc.)
- `/api/services` - Service-related endpoints (listing, booking, etc.)
- `/api/admin` - Admin-related endpoints (service approval, category management, etc.)
- `/api/sellers` - Seller-related endpoints (service management, review viewing, etc.)

Please refer to the API documentation for detailed information on each endpoint and its functionality.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Stripe

Please make sure to install and configure the necessary dependencies and services before running the application.

## Next Steps

Congratulations on completing the backend implementation for the home service application! Now, it's time to proceed with the frontend development. Please discuss with your team and decide on the next steps to be taken, such as:

- Developing the frontend application using React or any other preferred framework.
- Integrating the frontend with the backend API endpoints.
- Implementing user interfaces for customer, admin, and seller dashboards.
- Testing the application thoroughly to ensure its functionality and performance.

