//shout(string)
       //receives one argument and returns it in all caps:
function shout(string){
    return string.toUpperCase();
}

//whisper(string)
    // receives one argument and returns it in all lowercase

function whisper(string){
    return string.toLowerCase();
}

//logShout(string)
     //takes a string argument and logs it in all caps using console.log()
function logShout(string){
    console.log(string.toUpperCase());
}

//logWhisper(string)
    //takes a string argument and logs it in all lowercase using console.log()
function logWhisper(string){
    console.log(string.toLowerCase());
}

//sayHiToHeadphonedRoommate(string)
       //returns "I can't hear you!" if `string` is lowercase:
function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        return "I can't hear you!"
    }//returns "YES INDEED!" if `string` is uppercase:
    else if(string === string.toUpperCase()){
        return "YES INDEED!"
    }//returns "I would love to!" if `string` is "Let's have dinner together!"`:

    else if(string === "Let's have dinner together!"){
        return "I would love to!"
    }
}