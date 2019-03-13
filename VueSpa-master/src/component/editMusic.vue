<template>
    <div class="editMusicFrom">
        <el-form inline="true" :model="form" ref="form">
            <el-form-item label="歌曲名">
                <el-input v-model="editData.songName"></el-input>
            </el-form-item>
            <el-form-item label="歌手名">
                <el-input v-model="editData.singer"></el-input>
            </el-form-item>
            <el-form-item label="发行国家">
                <el-select v-model="editData.productCountry" placeholder="请选择">
                    <el-option
                    v-for='item in countryOptions' :key='item.value'
                    :label="item.value"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="歌曲语种">
                <el-select v-model="editData.songsType" placeholder="请选择">
                    <el-option
                    v-for='item in languageOptions' :key='item.value'
                    :label='item.value'
                    :value='item.value'>
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label='发行时间'>
                <el-date-picker
                    v-model="editData.productTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    value-format='yyyy-MM-dd'>
                </el-date-picker>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data() {
        props:["editData"]
        return {
            form: {
                songName: "",
                singer: "",
                productCountry: "",
                songsType: "",
                productTime: []
            }
        }
    },
    computed: {
        ...mapState({
            countryOptions: state=>state.addDialog.countryOptions,
            languageOptions: state=>state.addDialog.languageOptions,
            typeOptions: state=>state.addDialog.typeOptions
        })
    }
}
</script>

<style scoped>
.el-input__inner {
    width: 300px;
}
</style>
