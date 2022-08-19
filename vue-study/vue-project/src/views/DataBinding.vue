<template>
    <div>
        <div>
            <h3>html바인딩 테스트</h3>
            <div>{{htmlString}}</div>
            <div v-html="htmlString"></div>
        </div>
        <div>
            <h3>From 입력 데이터 바인딩 테스트</h3>
            <label for="t-text">문자열:&nbsp;</label>
            <input id="t-text" type="text" v-model="valueModel"/>
            <br/>
            <label for="t-number">숫자:&nbsp;</label>
            <input id="t-number" type="number" v-model="numberModel.number"/>            
        </div>
        <div>
            <h3>Textarea사용</h3>
            <textarea v-model="message"></textarea>
        </div>
        <div>
            <h3>select 객체 사용</h3>
            <select v-model="city">
                <option value="02">서울</option>
                <option value="21">부산</option>
                <option value="064">제주</option>
            </select>
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
            city: "064"
        };
    }
}
</script>