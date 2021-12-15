interface 문자열_프로퍼티_객체 {
  readonly [키: string]: any;
}

export default abstract class 컴포넌트 {
  private _상태: 문자열_프로퍼티_객체 = {};

  constructor(private readonly _부모: HTMLElement, private readonly 속성: 문자열_프로퍼티_객체) {
    this.상태_초기화();
  }

  렌더(): void {
    this.부모_컴포넌트에_HTML_추가();
    // this.태그_속성_초기화();
    // this.이벤트_설정();
    // this.자식_렌더();
  }

  protected 상태_초기화(): void {}

  protected abstract 부모_컴포넌트에_HTML_추가(): void;

  // protected 태그_속성_초기화(): void {}

  // protected 이벤트_설정(): void {}

  // protected 자식_렌더(): void {}

  get 상태() {
    return this._상태;
  }

  set 상태(새_상태: 문자열_프로퍼티_객체) {
    this._상태 = {...this.상태, ...새_상태};
  }

  get 부모() {
    return this._부모;
  }
}
