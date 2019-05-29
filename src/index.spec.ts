import inputTypes, {HTMLInputTypesLength} from './index';

describe('HTML input types test', () => {
  it('should be defined ', () => {
    expect(inputTypes).toBeDefined();
  });

  it('lenght should be the hardcoded length ', () => {
    expect(Object.keys(inputTypes).length).toBe(HTMLInputTypesLength);
  });
});
