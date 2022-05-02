class TestCase {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public run() {
    // @ts-expect-error 動的な getattr の方法がわからないのでベタ書きする
    this.testMethod();
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
  public testMethod() {
    const test = new WasRun('testMethod');
    console.assert(test.wasRun === 0);
    test.run();
    console.assert(test.wasRun === 0);
  }
}

new TestCaseTest('testRunning').run();
