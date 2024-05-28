# Client Portal for Culley & McAlpine Solicitors

This project involves developing a client portal for Culley & McAlpine Solicitors, alongside making edits to their WordPress site. A staged version of the site is currently in progress and will be linked here upon completion.

## Technology Stack

The following technologies will be utilized in the development of this web application:

- HTML & CSS
- JavaScript
- Node.js
- Prisma
- SQL

## Deployment

The site will be deployed here.

## Domain Model

The following domain model represents the key entities and their relationships within the client portal for Culley & McAlpine Solicitors.

### Entities and Attributes

1. **Client**
   - `id` (Primary Key)
   - `name`
   - `email`
   - `phone`
   - `address`

2. **Lawyer**
   - `id` (Primary Key)
   - `name`
   - `email`
   - `phone`
   - `specialization`

3. **Case**
   - `id` (Primary Key)
   - `title`
   - `description`
   - `status`
   - `client_id` (Foreign Key referencing Client)
   - `lawyer_id` (Foreign Key referencing Lawyer)
   - `start_date`
   - `end_date`

4. **Document**
   - `id` (Primary Key)
   - `title`
   - `file_path`
   - `case_id` (Foreign Key referencing Case)
   - `uploaded_date`

5. **Appointment**
   - `id` (Primary Key)
   - `date`
   - `time`
   - `location`
   - `client_id` (Foreign Key referencing Client)
   - `lawyer_id` (Foreign Key referencing Lawyer)

6. **Invoice**
   - `id` (Primary Key)
   - `amount`
   - `date_issued`
   - `due_date`
   - `case_id` (Foreign Key referencing Case)

## Entity-Relationship Diagram (ERD)

![ERD](assets/ERD.jpg)
