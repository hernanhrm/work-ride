export class CustomException extends Error {
  constructor(message: string) {
    // Call the parent class constructor (Error)
    super(message);

    // Set the name of your custom exception class
    this.name = 'CustomException';

    // Capture the stack trace (optional)
    Error.captureStackTrace(this, CustomException);
  }
}
