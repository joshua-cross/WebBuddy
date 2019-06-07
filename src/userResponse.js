//the message the user has sent over.
var mMessage;
//the response we want to send to the user.
var mResponse;

export default class UserResponse {
    constructor(message) {
        mMessage = message.toLowerCase();
    }
    
    //checking to see if the message contains certain key words.
    containsKeyWords = () => {
        if(this.containsGreeting(mMessage) !== null) {
            return this.containsGreeting(mMessage);
        } else {
            return "Sorry, we could not understand you 😞";
        }
    }

    //whether the message contains a given phrase.
    containsPhrase = (phrase, message) => {
        if (message != "" && message != null) {
            if (message.includes(phrase))
                return true;
            else
                return false;
        }
    }

    //checking if the message contains a greeting.
    containsGreeting = (message) => {
        //if the user has said either hello or hi.
        if(this.containsPhrase("hello", message) ||
           this.containsPhrase("hi", message)) {
            return "Hello there, I'm WebBuddy";
        }
        //if the user has asked how WebBudi is.
        else if(this.containsPhrase("how are you", message) ||
           this.containsPhrase("you alright", message) || 
           this.containsPhrase("okay", message) ||
           this.containsPhrase("ok", message)) {
               return "Yes, I am very good thank you.";
        }
        //else this is not a greeting so return false and check the next criteria
        else {
            return null;
        }
    }
}