
## Notes:
    .toEquals() - test object values
    .toBe() - test primitive values

## --------- actions.test.js -------------
import * as actions from './actions'

## group similar tests and test snapshots
    describe('updateUser returns actions',() => {

        it('returns an action', () => {
            expect(action.updateUser({name: 'test name'})).toMatchSnapshot()
        })

        it('returns an action when passed empty object', () => {
            expect(action.updateUser({})).toMatchSnapshot()
        })

        test('updateUser returns an action when passed empty', ()=> {
            expect(actions.updateUser({name: ''})).toMatchSnapshot()
        })
    })

## individual testing with primitives
// --------- sum.test.js -------------
    test('sum 1 and 1', () => {
        expect(sum(1,1)).toBe(2)
    })

    test('sum 0 and 0', ()=> {
        expect(sum(0,0)).toBe(0)
    })

    test('sum 20 and 30'), () => {
        expect(sum(20, 30)).toBe(50)
    })

## Command line
    npm t -- --watch is equals to
    jest --watch
