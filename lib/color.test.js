const colorValidator = require('./colorValidator');
const it = require('@jest/globals');

describe('textColor', () => {

    describe('colorValidator', () => {

        it ('should return true if the input is a color word', () => {
            const input = 'red';
            const actual = colorValidator(input);
            expect(actual).toBe(true);
        });

        it ('should return true if the input is a color code', () => {
            const input = '#ffffff';
            const actual = colorValidator(input);
            expect(actual).toBe(true);
        });

        it ('should return false if the input is not a color word or color code', () => {
            const input = 'redf';
            const actual = colorValidator(input);
            expect(actual).toBe(false);
        }

        it ('should return false if the input is not a color word or color code', () => {
            const input = '#fffff';
            const actual = colorValidator(input);
            expect(actual).toBe(false);
        }

        it ('should return false if the input is not a color word or color code', () => {
            const input = 'red#fffff';
            const actual = colorValidator(input);
            expect(actual).toBe(false);
        }

        it ('should return false if the input is not a color word or color code', () => {
            const input = '#fffffred';
            const actual = colorValidator(input);
            expect(actual).toBe(false);
        }
    });
});