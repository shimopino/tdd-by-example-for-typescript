import * as assert from 'assert';

class TestCase {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public setUp() {}

  public tearDown() {}

  public run(result: TestResult) {
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

class TestSuite {
  private tests: TestCase[];

  constructor() {
    this.tests = [];
  }

  public add(test: TestCase) {
    this.tests.push(test);
  }

  public run(result: TestResult) {
    this.tests.forEach((testCase) => {
      testCase.run(result);
    });
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
  // @ts-expect-error setUpで初期化を行い、コンストラクタでの初期化は行わない
  private result: TestResult;

  public setUp() {
    this.result = new TestResult();
  }

  public testTemplateMethod() {
    const test = new WasRun('testMethod');
    test.run(this.result);
    assert.equal(test.log, 'setUp testMethod tearDown ');
  }

  public testResult() {
    const test = new WasRun('testMethod');
    test.run(this.result);
    assert.equal(this.result.summary(), '1 run, 0 failed');
  }

  public testFailedResult() {
    const test = new WasRun('testBrokenMethod');
    test.run(this.result);
    assert.equal(this.result.summary(), '1 run, 1 failed');
  }

  public testFailedResultFormatting() {
    this.result.testStarted();
    this.result.testFailed();
    assert.equal(this.result.summary(), '1 run, 1 failed');
  }

  public testSuite() {
    const suite = new TestSuite();
    suite.add(new WasRun('testMethod'));
    suite.add(new WasRun('testBrokenMethod'));
    suite.run(this.result);
    assert.equal(this.result.summary(), '2 run, 1 failed');
  }
}

const suite = new TestSuite();
suite.add(new TestCaseTest('testTemplateMethod'));
suite.add(new TestCaseTest('testResult'));
suite.add(new TestCaseTest('testFailedResult'));
suite.add(new TestCaseTest('testFailedResultFormatting'));
suite.add(new TestCaseTest('testSuite'));

const result = new TestResult();
suite.run(result);
console.log(result.summary());

export {};
