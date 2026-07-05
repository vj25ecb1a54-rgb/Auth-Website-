# QuantumAuth - Authentication Portal

A responsive single-page authentication system built with HTML, CSS, and JavaScript. It features dynamic view-switching between Login and Registration forms within a dark UI.

## Features

- Single-Page Architecture: Switches views instantly without page reloads.
- Responsive Design: Works on desktop and mobile displays.
- Client-Side Validation: Blocks invalid submissions and shows error messages.

## Form Validation Rules

### Login Page
- Email ID: Must use a valid email format (name@domain.com).
- Password: Must contain only numbers (0-9). No letters or symbols.

### Registration Page
- Full Name: Must contain only letters and spaces.
- Email ID: Must use a valid email format.
- Phone Number: Must contain exactly 10 digits.
- Password: Must contain only numbers (0-9).
- Confirm Password: Must match the password field.

## File Structure

```text
├── index.html   # Form layouts and structure
├── style.css    # Layout styles and dark theme
├── script.js    # Validation logic and view switching
└── README.md    # Project documentation
