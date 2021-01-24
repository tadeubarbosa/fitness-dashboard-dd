import { HashFunction } from "./hash-function";

describe('HashFunction', () => {
    test('should receive an valid password', () => {
        const hashFunc = new HashFunction();

        const hashFuncSpy = jest.spyOn(hashFunc, 'hash').mockReturnValueOnce('valid_password');
        expect(hashFuncSpy).toHaveBeenCalledWith('valid_password');
    });
});