namespace async_iterator_demo {

    let counter = 0;

    function doSomethingAsync() {
        return new Promise<number>((r) => {
            setTimeout(() => {
                counter += 1;
                r(counter);
            }, 1000);
        });
    }

    async function* g1() {
        yield await doSomethingAsync();
        yield await doSomethingAsync();
        yield await doSomethingAsync();
    }

    async function func() {
        for await (const x of g1()) {
            console.log(x);
        }
    }

}