## Notes:
    * BDD (Behavioral Driven Development)
    - Jasmine (full feature), 
    - Mocha (just a test runner), 
    - JEST build on top of Jasmine 
    - Sinon got Fake Http Server

    - Mocha, Jasmine & Jest all uses (describe, it)
## Assertion Libraries
    Chai (expect, should, assert)
    should.js (should)
    expect.js (expect)

# JEST Testing

## Notes:
    .toEquals() - test object values
    .toBe() - test primitive values

## --------- actions.test.js -------------
import * as actions from './actions'

## group similar tests and test snapshots

    describe('calculator', function() {
    describe('add()', function() {
        it('should add 2 numbers togoether', function() {
        // assertions here
        });
    });
    });

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
    --------- sum.test.js -------------

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

## Terms
    Spies, Mock, Fake Objects, Test Doubles

## Future Readings
    Asynchronous Testing

    Functional Testing is black box testing not concerned with source code
    https://www.guru99.com/functional-testing.html

### Types of Functional testing are (run first)
    Unit Testing
    Smoke Testing
    Sanity Testing
    Integration Testing
    White box testing
    Black Box testing
    User Acceptance testing
    Regression Testing

### Types of Non functional testing are (run second)
    Performance Testing
    Load Testing
    Volume Testing
    Stress Testing
    Security Testing
    Installation Testing
    Penetration Testing
    Compatibility Testing
    Migration Testing