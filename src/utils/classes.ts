export class CustomError extends Error {
  displayMessage: React.ReactNode;

  constructor(displayMessage: React.ReactNode) {
    super();
    this.displayMessage = displayMessage;
  }
}
