<template>
<el-dialog title="添加音乐" :visible="show" @close="$store.commit('switch_addDialog')">
    <div class="addMusicFrom">
        <el-form label-position="right" label-width="100px" :model="form" ref="form" :rules="rules" class="demo-ruleForm">
            <el-form-item prop="songName" label="歌曲名:">
                <el-input v-model="form.songName"></el-input>
            </el-form-item>
            <el-form-item prop="singer" label="歌手名:">
                <el-input v-model="form.singer"></el-input>
            </el-form-item>
            <el-form-item prop="productCountry" label="发行国家:">
                <el-select v-model="form.productCountry" placeholder="请选择">
                    <el-option
                    v-for='item in countryOptions' :key='item.value'
                    :label="item.value"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop='songsType' label="歌曲语种:">
                <el-select v-model="form.songsType" placeholder="请选择">
                    <el-option
                    v-for='item in languageOptions' :key='item.value'
                    :label='item.value'
                    :value='item.value'>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="productTime" label='发行时间:'>
                <el-date-picker
                    v-model="form.productTime"
                    type="date"
                    range-separator="至"
                    placeholder="选择日期"
                    value-format='yyyy-MM-dd'>
                </el-date-picker>
            </el-form-item>
        </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
                <el-button @click="$store.commit('switch_addDialog')">取消</el-button>
                <el-button type="primary" @click="addOk('form',$store.commit)">保存</el-button>
            </span>
    </el-dialog>
</template>
<script>
import {mapState, Store} from 'vuex'
import axios from 'axios'
export default {
    data() {
        let checkCountry = (rule, value, callback) => {
            if(!value) {
                return callback(new Error('发行国家不能为空'))
            }
            callback();
        }
        let checkSinger = (rule, value, callback) => {
            if(!value) {
                return callback(new Error('歌手不能为空'))
            }
            callback();
        }
        let checkSong = (rule, value, callback) => {
            if(!value) {
                return callback(new Error('歌曲名不能为空'))
            }
            callback();
        }
        let checkTime = (rule, value, callback) => {
            if(!value) {
                return callback(new Error('发行时间不能为空'))
            }
            callback();
        }
        let checkType = (rule, value, callback) => {
            if(!value) {
                return callback(new Error('歌曲类型不能为空'))
            }
            callback();
        }
        return {
            form: {
                songName: "",
                singer: "",
                productCountry: "",
                songsType: "",
                productTime: ""
            },
            rules: {
                songName: [{required: true, validator: checkSong}],
                singer: [{required: true, validator: checkSinger}],
                productCountry: [{required: true, validator: checkCountry}],
                songsType: [{required: true, validator: checkType}],
                productTime: [{required: true, validator: checkTime}]
            }
        }
    },
    computed: {
        ...mapState({
            countryOptions: state=>state.addDialog.countryOptions,
            languageOptions: state=>state.addDialog.languageOptions,
            typeOptions: state=>state.addDialog.typeOptions,
            show:state=>state.addDialog.show
        })
    },
    methods: {
      /*   addOk(form, commit) {
            this.$refs[form].validate((valid) => {
                if(valid) {
                    axios.post('/addsong',{music: this.form}).then(res => {
                        if(res.data.status) {
                            this.$message({
                                type: 'success',
                                message: res.data.data
                            })
                        } else {
                            this.$message({
                                type: "error",
                                message: res.data.data
                            })
                        }
                    })
                    commit('switch_addDialog')
                }
            })
            
        } */
    }
}
</script>
<style scoped>
.el-input__inner {
    width: 300px;
    align-self: auto
}
.footer-button {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
}
</style>



