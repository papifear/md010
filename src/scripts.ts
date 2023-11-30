import $ from 'jquery';

export class FormValidator {
    validateName(name: string): boolean {
        const nameRegex = /^[a-zA-Z]{2,50}$/; // only letters, 2-50 characters
        return nameRegex.test(name);
    }

    validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // example@example.com
        return emailRegex.test(email);
    }

    validatePassword(password: string): boolean {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/; // 8 characters, at least 1 number and 1 special character
        return passwordRegex.test(password);
    }
}

class RegistrationForm {
    private $formContainer: JQuery;
    private formValidator: FormValidator;

    constructor() {
        this.$formContainer = $('.form');
        this.formValidator = new FormValidator();
    }

    renderForm(): void {
        const formHtml = `
            <form class="user-registration-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br>

                <button type="button" id="submit-btn">Submit</button>
            </form>
        `;

        this.$formContainer.html(formHtml);
        $('#submit-btn').on('click', this.handleSubmit.bind(this));
    }

    handleSubmit(): void {
        const name = $('#name').val() as string;
        const email = $('#email').val() as string;
        const password = $('#password').val() as string;

        if (!this.formValidator.validateName(name)) {
            alert('Please enter a valid name.');
            return;
        }

        if (!this.formValidator.validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!this.formValidator.validatePassword(password)) {
            alert('Please enter a valid password.');
            return;
        }

        alert('Success!');
    }
}

export function add(a: number, b: number): number {
    return a + b;
}
  
export function multiply(a: number, b: number): number {
    return a * b;
}
  
export function processData(data: number[]): number {
    return data.reduce((acc, num) => acc + num, 0);
}
  
import axios from 'axios';
  
export async function fetchData(): Promise<string> {
    const response = await axios.get('https://api.example.com/data&#39');
    return response.data;
}

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = new RegistrationForm();
    registrationForm.renderForm();
    
});


