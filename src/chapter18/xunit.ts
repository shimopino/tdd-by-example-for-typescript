class WasRun {
  public name: string;
  public wasRun: number;

  constructor(name: string) {
    this.name = name;
    this.wasRun = 0;
  }

  public run() {
    this.testMethod();
  }

  private testMethod() {
    this.wasRun = 1;
    return null;
  }
}

const test = new WasRun('testMethod');
console.log(test.wasRun);
test.run();
console.log(test.wasRun);
