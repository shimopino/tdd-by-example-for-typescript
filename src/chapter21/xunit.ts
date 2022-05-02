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
    const result = new TestResult();
    result.testStarted();

    this.setUp();
    // Pythonの getattr と同じことを実現するために危険な eval をあえて使用する
    const method = `this.${this.name}()`;
    eval(method);
    this.tearDown();

    return result;
  }
}

class TestResult {
  private runCount: number;

  constructor() {
    this.runCount = 0;
  }

  public testStarted() {
    this.runCount += 1;
  }

  public summary() {
    return `${this.runCount} run, 0 failed`;
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

  public testBrokenMethod() {
    throw new Error('テストの実行が失敗した');
  }
}

class TestCaseTest extends TestCase {
  public testTemplateMethod() {
    const test = new WasRun('testMethod');
    test.run();
    assert.equal(test.log, 'setUp testMethod tearDown ');
  }

  public testResult() {
    const test = new WasRun('testMethod');
    const result = test.run();
    assert.equal(result.summary(), '1 run, 0 failed');
  }

  public testFailedResult() {
    const test = new WasRun('testBrokenMethod');
    const result = test.run();
    assert.equal(result.summary(), '1 run, 1 failed');
  }
}

new TestCaseTest('testTemplateMethod').run();
new TestCaseTest('testResult').run();
// new TestCaseTest('testFailedResult').run();

export {};
