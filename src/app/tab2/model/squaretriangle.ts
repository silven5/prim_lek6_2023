export class TriangleMVP {
    a: number = 3;
    b: number = 4;
    c: number = 0;
    s: number = 0;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
        this.c = Math.sqrt(this.a * this.a + this.b * this.b);
        this.s = a * b / 2;
    }

}
