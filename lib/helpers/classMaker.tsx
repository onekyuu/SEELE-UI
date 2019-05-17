function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export default classes;

interface Options {
    extra: string | undefined,
}

interface ClassToggles {
    [Key: string]: boolean;
}

function classMaker(prefix?: string) {
    return function scopedClass(name: string | ClassToggles, options?: Options) {
        const classes = typeof name === 'string' || name === undefined ? {[name]: name} : name;
        return Object.entries(classes)
                        .filter(v => v[1] !== false)
                        .map(v => v[0])
                            .map(n => {
                                return [prefix, n].filter(Boolean).join('-')
                        })
                        .concat(options && options.extra || [])
                        .join(' ')
    }
}

// function classMaker(prefix?: string) {
//     return function scopedClass(options?: Options, ...args: Class[]) {
//         console.log(...args);
//         console.log(options);
//         const classes = 
//     }
// }

export {classMaker};