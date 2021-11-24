import 컴포넌트 from '../Component/Component';
export default class 검색_버튼 extends 컴포넌트 {
    constructor(부모, 속성) {
        super(부모);
        this.속성 = 속성;
    }
    HTML_추가() {
        const { 부모 } = this;
        부모.innerHTML = `
    <button data-testid="search-btn" type="button">검색</button>
    `;
    }
    이벤트_설정() {
        const 버튼 = this.부모.querySelector('[data-testid="search-btn"]');
        버튼.addEventListener('click', this.클릭_이벤트.bind(this));
    }
    async 클릭_이벤트() {
        const { 검색, 검색어 } = this.속성;
        await 검색(검색어);
    }
}
