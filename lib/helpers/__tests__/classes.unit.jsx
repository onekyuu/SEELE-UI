import classes from '../classes'

describe('classes', () => {
    it('接受一个className', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('接受两个参数', () => {
        const result = classes('a', 'b')
        expect(result).toEqual('a b')
    })
    it('接受三个参数', () => {
        const result = classes('a', 'b', 'c')
        expect(result).toEqual('a b c')
    })
    it('接受undefined', () => {
        const result = classes('a', undefined)
        expect(result).toEqual('a')
    })
    it('接受中文className', () => {
        const result = classes('a', '中文')
        expect(result).toEqual('a 中文')
    })
    it('接受falsy', () => {
        const result = classes('a', false, null)
        expect(result).toEqual('a')
    })
    it('接受空字符串', () => {
        const result = classes('')
        expect(result).toEqual('')
    })
})