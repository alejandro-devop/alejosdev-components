import { renderHook } from '@testing-library/react-hooks/native'
import useInputId from './useInputId'

jest.mock('../../utils/generate-random', () => () => 'generated-id')

describe('Hooks: ', () => {
    describe('When calling it without configuration', () => {
        it('Should generate random number', async () => {
            const { result } = renderHook(useInputId)
            expect(result.current).toBe('input-generated-id')
        })
    })
    describe('When calling it with only the name', () => {
        it('Should generate an id using the given name', () => {
            const { result } = renderHook(() => useInputId({ name: 'user-field' }))
            expect(result.current).toBe('user-field')
        })
    })
    describe('When calling it with only the id attribute', () => {
        it('Should generate an id using the given id', () => {
            const { result } = renderHook(() => useInputId({ id: 'user-id' }))
            expect(result.current).toBe('user-id')
        })
    })
})
