export class Triangle {
  private a: number = 3;
  private b: number = 4;
  get A() {
    return this.a;
  }
  private validate(val: number) {
    if (val >= 0) return true
    else

      throw "Від'ємний катет";
  }
  set A(value) {
    if (this.validate(value))
      this.a = value;

  }
  get B() {
    return this.b;
  }
  set B(value) {
    if (this.validate(value))
      this.b = value;
  }
  get C() {
    return Math.sqrt(this.a * this.a + this.b * this.b);
  }
}
