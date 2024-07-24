# Fullstack Testcases Project

## Objective
A web page that renders test cases dynamically from a PostgreSQL database table called 'testcases'. The page displays the test case data in real-time and allow users to make changes that will be reflected back in the database.

## Technologies Used
- Frontend: React.js
- Backend: Flask (Python)
- Database: PostgreSQL

## Setting Up the Project

### Prerequisites
- Node.js and npm must be installed on your machine.
- Python and virtualenv must be installed.
- PostgreSQL must be installed and running on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Fullstack-Testcases-Project.git
   cd your-repo

2. Set up the environment variables:
    ```bash
    cp .env.example .env

3. Set up the database:
    ```bash
    ./scripts/setup_database.sh

4. Set up the backend:
    ```bash
    cd Backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt

5. Set up the frontend:
    ```bash
    cd testcases-app
    npm install

6. Running the application:
    Navigate to Backend Directory
    ```bash
    cd backend
    python app.py

    Navigate to Frontend Directory
    ```bash
    cd testcases-app
    npm start

## Screenshots

! [Database before adding a new testcase](before.png)
*Database before adding a new testcase



! [Databse updated with a new testcase](after.png)
*Database updated with a new testcase

