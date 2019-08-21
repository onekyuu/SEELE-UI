import classes from '../classMaker'
import { classMaker } from '../classMaker';

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

describe('classMaker', () => {
    it('接受字符串或对象', () => {
        const sc = classMaker('seele-layout')
        expect(sc('')).toEqual('seele-layout')
        expect(sc('a')).toEqual('seele-layout-a')
        expect(sc({'a': true, 'b': false})).toEqual('seele-layout-a')
        expect(sc({'a': true, 'b': true})).toEqual('seele-layout-a' +
            ' seele-layout-b')
        expect(sc({'a': true, 'b': true}, {extra: 'hi'})).toEqual('seele-layout-a seele-layout-b hi')
    })
})