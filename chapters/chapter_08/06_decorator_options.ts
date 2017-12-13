namespace decorator_option {

    function logClass(option: string) {
        return function(target: any) {
            // class decorator logic goes here
            // we have access to the decorator parameters
            console.log(target, option);
        };
    }

}
