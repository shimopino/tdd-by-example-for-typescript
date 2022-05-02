import * as assert from 'assert';

class TestCase {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public setUp() {}

  public tearDown() {}

  public run() {
    const result = new TestResult();
    result.testStarted();

    this.setUp();

    try {
      // Pythonの getattr と同じことを実現するために危険な eval をあえて使用する
      const method = `this.${this.name}()`;
      eval(method);
    } catch (err) {
      result.testFailed();
    }

    this.tearDown();

    return result;
  }
}

class TestResult {
  private runCount: number;
  private errorCount: number;

  constructor() {
    this.runCount = 0;
    this.errorCount = 0;
  }

  public testStarted() {
    this.runCount += 1;
  }

  public testFailed() {
    this.errorCount += 1;
  }

  public summary() {
    return `${this.runCount} run, ${this.errorCount} failed`;
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

  public testFailedResultFormatting() {
    const result = new TestResult();
    result.testStarted();
    result.testFailed();
    assert.equal(result.summary(), '1 run, 1 failed');
  }
}

console.log(new TestCaseTest('testTemplateMethod').run().summary());
console.log(new TestCaseTest('testResult').run().summary());
console.log(new TestCaseTest('testFailedResult').run().summary());
console.log(new TestCaseTest('testFailedResultFormatting').run().summary());

export {};
