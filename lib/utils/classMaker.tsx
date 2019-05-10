function classMaker(prefix?: string) {
    return function scopedClass(name ?: string) {
        return [prefix, name].filter(Boolean).join('-')
    }
}

export default classMaker;