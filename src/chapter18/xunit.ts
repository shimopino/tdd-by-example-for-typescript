import * as assert from 'assert';

class TestCase {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public run() {
    // Pythonの getattr と同じことを実現するために危険な eval をあえて使用する
    const method = `this.${this.name}()`;
    eval(method);
  }
}

class WasRun extends TestCase {
  public wasRun: number;

  constructor(name: string) {
    super(name);
    this.wasRun = 0;
  }

  private testMethod() {
    this.wasRun = 1;
  }
}

class TestCaseTest extends TestCase {
  public testRunning() {
    const test = new WasRun('testMethod');
    assert.equal(test.wasRun, 0);
    test.run();
    assert.equal(test.wasRun, 0);
  }
}

new TestCaseTest('testRunning').run();

export {};
