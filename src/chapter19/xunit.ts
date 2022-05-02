class TestCase {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public setUp() {
    console.log('not implemented');
  }

  public run() {
    this.setUp();
    // Pythonの getattr と同じことを実現するために危険な eval をあえて使用する
    const method = `this.${this.name}()`;
    eval(method);
  }
}

class WasRun extends TestCase {
  public wasRun: number;
  public wasSetUp: number;

  constructor(name: string) {
    super(name);
    this.wasRun = 0;
    this.wasSetUp = 0;
  }

  public setUp() {
    this.wasRun = 0;
    this.wasSetUp = 1;
  }

  private testMethod() {
    this.wasRun = 1;
  }
}

class TestCaseTest extends TestCase {
  // @ts-expect-error テストを通すために一旦無視
  public test: WasRun;

  public setUp() {
    this.test = new WasRun('testMethod');
  }

  public testRunning() {
    this.test.run();
    console.assert(this.test.wasRun === 1);
  }

  public testSetUp() {
    this.test.run();
    console.assert(this.test.wasSetUp === 1);
  }
}

new TestCaseTest('testRunning').run();
new TestCaseTest('testSetUp').run();

export {};
