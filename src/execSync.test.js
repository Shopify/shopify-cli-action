const childProcess = require('child_process');
const execSync = require('./execSync');

jest.mock('child_process');

describe('execSync', () => {
  it('runs the command through execSync', () => {
    // Given
    childProcess.execSync = jest.fn();

    // When
    execSync('shopify command');

    // Then
    expect(childProcess.execSync).toHaveBeenCalledWith(
      'shopify command',
      {},
    );
  });
});
