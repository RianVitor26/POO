export class Message {
    message: string = ""
    constructor(message: string) {
        this.message = message
    }

    showMessage(): void {
        console.log(this.message)
    }
}

const defaultMessage = new Message("This class it's ready to be exported")
defaultMessage.showMessage()