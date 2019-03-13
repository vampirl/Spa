export default {
    state: {
        typeOptions: [{
            value: "新歌榜"
        }, {
            value: "热歌榜"             
        }, {
            value: "爵士"  
        }, {
            value: "流行"
        }, {
            value: "摇滚榜"
        }],
        countryOptions: [{
            value: "内地"             
        }, {
            value: "港台"  
        }, {
            value: "欧美"
        }, {
            value: "韩国"
        }, {
            value: "其他"
        }],
        languageOptions: [{
            value: "国语"             
        }, {
            value: "英语"  
        }, {
            value: "粤语"
        }, {
            value: "韩语"
        }, {
            value: "闽南语"
        }],
        show:false
    },
    mutations: {
        switch_addDialog(state) {
            state.show = state.show?false:true;
        }
    }
}