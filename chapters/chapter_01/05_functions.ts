module functions_demo {

    // named function
    function greet1(name? : string) : string {
        if(name){
            return "Hi! " + name;
        } else {
            return "Hi!";
        }
    }

    // anonymous function
    var greet2 = function(name? : string) : string {
        if (name) {
            return "Hi! " + name;
        } else {
            return "Hi!";
        }
    }

    var greet = (name: string) : string =>  {
        if(name){
            return "Hi! " + name;
        } else {
            return "Hi! my name is " + this.fullname;
        }
    };

    var greet: (name: string) => string = function(name: string): string {
        if (name) {
            return "Hi! " + name;
        } else {
            return "Hi!";
        }
    };

    function add(a: number, b: number, callback :(result: number) => void) {
        callback(a + b);
    }

}
