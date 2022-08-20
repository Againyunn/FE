<template>
    <div>
        <div>
            <h2>html바인딩 테스트</h2>
            <div>{{htmlString}}</div>
            <div v-html="htmlString"></div>
        </div>
        <div>
            <h2>From 입력 데이터 바인딩 테스트</h2>
            <label for="t-text">문자열:&nbsp;</label>
            <input id="t-text" type="text" v-model="valueModel"/>
            <br/>
            <label for="t-number">숫자:&nbsp;</label>
            <input id="t-number" type="number" v-model="numberModel.number"/>            
        </div>
        <div>
            <label for="t-textarea"><h2>Textarea사용</h2></label>
            <textarea id="t-textarea" v-model="message"></textarea>
        </div>
        <div>
            <label for="t-select"><h2>select 객체 사용</h2></label>
            <select id="t-select" v-model="city">
                <option value="02">서울</option>
                <option value="21">부산</option>
                <option value="064">제주</option>
            </select>
        </div>
        <div>
            <label for="t-checkbox"><h2>checkbox 객체 사용</h2></label>
            <label for="t-checkbox"><input id="t-checkbox" type="checkbox" v-model="checkedData" true-value="yes" false-value="no"/>{{checkedData}}</label>
        </div>
        <div>
            <h2>다중 checkbox 객체 사용</h2>
            <label for="t-m-checkbox1">서울</label>
            <input id="t-m-checkbox1" type="checkbox" v-model="checkedCity" value="서울"/>

            <label for="t-m-checkbox2">부산</label>
            <input id="t-m-checkbox2" type="checkbox" v-model="checkedCity" value="부산"/>

            <label for="t-m-checkbox3">제주</label>
            <input id="t-m-checkbox3" type="checkbox" v-model="checkedCity" value="제주"/>

            <br/>
            <span>선택한 도시:&nbsp;{{checkedCity}}</span>
        </div>
        <div>
            <h2>radio 객체 사용</h2>
            <label for="t-radio1">{{radioValue1}}</label>
            <input id="t-radio1" type="radio" v-model="radioCheckedCity" v-bind:value="radioValue1"/>

            <label for="t-radio2">{{radioValue2}}</label>
            <input id="t-radio2" type="radio" v-model="radioCheckedCity" v-bind:value="radioValue2"/>

            <label for="t-radio3">{{radioValue3}}</label>
            <input id="t-radio3" type="radio" v-model="radioCheckedCity" v-bind:value="radioValue3"/>

            <br/>
            <span>선택한 도시:&nbsp;{{radioCheckedCity}}</span>
        </div>
        <div>
            <h2>img 객체 사용</h2>
            <div>
                <img v-bind:src="imgSrc" alt="vue"/>
            </div>
        </div>
        <div>
            <h2>button 객체의 disabled</h2>
            <div>
                <input type="text" v-model="textValue"/>
                <button type="button" v-bind:disabled="textValue==''">Click</button>
            </div>
        </div>
        <div>
            <h2>Class 바인딩</h2>
            <div>
                <span style="font-weight:bold;">방법1: object형태의 바인딩</span>
                <div class="container" v-bind:class="{
                    'active':isActive, 'text-red':hasError
                }">Class Binding</div>
                <div>특징: 특정 조건에 따른 클래스 바인딩을 true/false로 구분 가능</div>
            </div><br/>
            <div>
                <span style="font-weight:bold;">방법2: 배열형태의 바인딩</span>
                <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding</div>
                <div>특징: 특정 조건에 따른 클래스 바인딩을 true/false로 구분 불가능</div>
            </div>
        </div>
        <div>
            <h2>리스트 랜더링</h2>
            <table>
                <thead>
                    <tr>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>카테고리</th>
                        <th>배송료</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="i" v-for="(product, i) in productList">
                        <td>{{product.product_name}}</td>
                        <td>{{product.price}}</td>
                        <td>{{product.category}}</td>
                        <td>{{product.delivery_price}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <h2>랜더링 문법</h2>
            <div>
                <h4>방법1: v-if</h4>
                <span v-if="type=='A'">A</span>
                <span v-else-if="type=='B'">B</span>
                <span v-else>C</span>
            </div>
            <div>
                <h4>방법2: v-show</h4>
                <span v-show="bShow">bShow가 true이면, 현재 블록이 화면에 보이게 됩니다.</span>
            </div>
            <span style="color:red; display:inline-block; text-align:left;">*차이점:<br/>
            v-if는 변동사항 발생 시 block 자체를 생성/제거<br/>
            v-show는 변동사항 발생과 무관하게 block이 생성된 상태에서 display값만 노출/숨김으로 변경
            </span>
        </div>
        <div>
            <h3>Click Event</h3>
            <button type="button" @click="increaseCounter">Add 1</button>
            <button type="button" @click="decreaseCounter">Sub 1</button>
            <br/>
            <button type="button" @click="setCounter(7)">Set 7</button>

            <p style="color:green; font-weight:bold;">The Counter is : {{counter}}</p>
            <br/>

            <span>1번의 클릭으로 여러 함수 제어</span>
            <button type="button" @click="one(), two()">Click</button>
        </div>
        <div>
            <h3>Change Event</h3>
            <select v-model="selectedCityValue" @change="changeSelect">
                <option value="서울">서울</option>
                <option value="부산">부산</option>
                <option value="제주">제주</option>
            </select>
        </div>
        <div>
            <h3>Key Event</h3>
            <input id="inputValue" type="text" @keyup.enter="goSearch()"/>
            <br/>
            <span>{{searchData}}</span>
        </div>
        <div>
            <h3>통합 상태 관리 역할</h3>
            <div>
                <h5>computed</h5>
                <span>정의된 데이터 값의 변경과 관계 없이 최초에 1번 함수 실행<br/>
                    이후, 데이터 값의 변경이 발생 시 자동으로 함수 실행하여 데이터 업데이트<br/>
                    단, 1번의 함수 연산으로 페이지 내의 모든 값이 자동으로 변경되어 효율적
                </span><br/>
                <b>Full Name: {{fullNameComputed}}</b>
            </div>
            <div>
                <h5>watch</h5>
                <span>정의된 데이터 값의 변경이 발생했을 때만 함수 실행(랜더링 시 실행x)<br/>
                    이후, 데이터 값의 변경이 발생 시 자동으로 함수 실행하여 데이터 업데이트<br/>
                    단, 1번의 함수 연산으로 페이지 내의 모든 값이 자동으로 변경되어 효율적
                </span><br/>
                <b>Full Name: {{fullName}}</b><br/>
                <button type="button" @click="changeName">이름 변경</button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    //html과 JS코드에서 사용할 데이터 변수 선언
    data(){ 
        return{
            title: 'World',
            htmlString: '<span style="color:red;">This is a red String</span>',
            valueModel: 'South Korea',
            numberModel: 3,
            message: "여러 줄을 입력할 수 있는 textarea입니다.\n본 글은 미리 표시되는 글입니다.",
            city: "064",
            checkedData: "yes",
            checkedCity: [],
            radioCheckedCity: '',
            radioValue1: '서울',
            radioValue2: '부산',
            radioValue3: '제주',
            imgSrc: "https://kr.vuejs.org/images/logo.png",
            textValue: "",
            isActive: true,
            hasError: false,
            activeClass: 'active', 
            errorClass: 'text-red',
            productList: [
                {
                    "product_name": "기계식 키보드", "price": 25000, "category": "노트북/태블릿", "delivery_price":5000
                },
                {
                    "product_name": "무선 마우스", "price": 12000, "category": "노트북/태블릿", "delivery_price":5000
                },
                {
                    "product_name": "아이패드", "price": 725000, "category": "노트북/태블릿", "delivery_price":5000
                },
                {
                    "product_name": "태블릿 거치대", "price": 32000, "category": "노트북/태블릿", "delivery_price":5000
                },
                {
                    "product_name": "무선 충전기", "price": 42000, "category": "노트북/태블릿", "delivery_price":5000
                }                                
            ],
            type: "A",
            bShow: true,
            counter: 0,
            selectedCityValue: '서울',
            searchData: "",
            firstName: 'Jaeyun',
            lastName: 'Jung',
            fullName: ""
        };
    },
    methods: {
        increaseCounter(){
            this.counter += 1;
        },
        decreaseCounter(){
            if(this.counter > 0){
                this.counter -= 1;
            }
        },
        setCounter(num){
            this.counter = num;
        },
        one(){
            window.alert('One');
        },
        two(){
            window.alert('Two');
        },
        changeSelect(){
            window.alert(`선택된 도시: ${this.selectedCityValue}`)
        },
        goSearch(){
            this.searchData = document.getElementById('inputValue').value
            window.alert(this.searchData);
        },
        changeName(){
            this.firstName = 'Againyunn';
        }
    },
    computed: {
        fullNameComputed(){
            return this.firstName + ' ' + this.lastName;
        }
    },
    watch: {
        firstName(){
            this.fullName = this.firstName + ' ' + this.lastName;
        },
        lastName(){
            this.fullName = this.firstName + ' ' + this.lastName;
        }
    }
}
// const PrintCheckedCity = (checkedCity) => {
//     let result =''
//     checkedCity.map(city => {
//         result += `<div>${{city}}</div>`
//     })

//     return (
//         result
//     )
// }
</script>

<!-- 
질문 사항:
react의 jsx처럼 html 객체 자체를 리턴하는 함수를 사용할 수는 없나? -->

<style scoped>
    .container{
        width: 100%;
        height: 200px;
    }
    .active{
        background-color: yellow;
        font-weight: bold;
    }
    .text-red{
        color:red;
    }
    table{
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    th, td{
        border: 1px solid #ddd;
        text-align: left;
        padding: 8px;
    }
</style>