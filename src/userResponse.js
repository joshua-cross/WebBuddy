//the message the user has sent over.
var mMessage;
//the response we want to send to the user.
var mResponse;

export default class UserResponse {
    constructor(message) {
        mMessage = message;
    }
    
    //checking to see if the message contains certain key words.
    containsKeyWords = () => {
        if(this.containsGreeting(mMessage) !== null) {
            return this.containsGreeting(mMessage);
        }
    }

    //whether the message contains a given phrase.
    containsPhrase = (phrase, message) => {
        if (message.includes(phrase))
            return true;
        else
            return false;
    }

    //checking if the message contains a greeting.
    containsGreeting = (message) => {
        //if the user has said either hello or hi.
        if(this.containsPhrase("hello", message) ||
           this.containsPhrase("hi", message)) {
            return "Hello there, I'm WebBuddy";
        }
        //if the user has asked how WebBudi is.
        else if(this.containsPhrase("How are you", message) ||
           this.containsPhrase("You alright", message) || 
           this.contains("okay", message) ||
           this.contains("ok", message)) {
               return "Yes, I am very good thank you.";
        }
        //else this is not a greeting so return false and check the next criteria
        else {
            return null;
        }
    }
}