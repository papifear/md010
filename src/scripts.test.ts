import { FormValidator, add, multiply, processData, fetchData } from './scripts';

describe('Form Validation Case Test', () => {
    test('Valid name', () => {
        const validator = new FormValidator();
        expect(validator.validateName('CODELEX')).toBe(true);
    });

    test('Invalid name (less than 2 characters)', () => {
        const validator = new FormValidator();
        expect(validator.validateName('Z')).toBe(false);
    });

    test('Valid email', () => {
        const validator = new FormValidator();
        expect(validator.validateEmail('programmer@codelex.io')).toBe(true);
    });

    test('Invalid email (incorrect format)', () => {
        const validator = new FormValidator();
        expect(validator.validateEmail('invalid-email')).toBe(false);
    });

    test('Valid password', () => {
        const validator = new FormValidator();
        expect(validator.validatePassword('Abcd!123')).toBe(true);
    });

    test('Invalid password (missing special symbol)', () => {
        const validator = new FormValidator();
        expect(validator.validateEmail('password123')).toBe(false);
    });
});

describe('Math Function Case Test', () => {
    test('Add 2, 2', () => {
        const validator = new FormValidator();
        expect(add(2, 2)).toBe(4);
    });

    test('Multiply 2, 2', () => {
        const validator = new FormValidator();
        expect(multiply(2, 2)).toBe(4);
    });

    test('processData [2, 2, 2, 2]', () => {
        const validator = new FormValidator();
        expect(processData([2, 2, 2, 2])).toBe(8);
    });

    test('fetchData', () => {
        const validator = new FormValidator();
        expect(fetchData()).resolves.toBeInstanceOf(String);
    });
});