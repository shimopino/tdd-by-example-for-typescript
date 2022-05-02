import * as assert from 'assert';

class TestCase {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public setUp() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public tearDown() {}

  public run() {
    this.setUp();
    // Pythonの getattr と同じことを実現するために危険な eval をあえて使用する
    const method = `this.${this.name}()`;
    eval(method);
    this.tearDown();
  }
}

class WasRun extends TestCase {
  public log: string;

  constructor(name: string) {
    super(name);
    this.log = '';
  }

  public setUp() {
    this.log = 'setUp ';
  }

  public tearDown() {
    this.log += 'tearDown ';
  }

  private testMethod() {
    this.log += 'testMethod ';
  }
}

class TestCaseTest extends TestCase {
  public testTemplateMethod() {
    const test = new WasRun('testMethod');
    test.run();
    assert.equal(test.log, 'setUp testMethod tearDown ');
  }
}

new TestCaseTest('testTemplateMethod').run();

export {};
