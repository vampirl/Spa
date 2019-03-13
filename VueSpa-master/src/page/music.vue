<template>
    <div class="musicContent clearfix">
        <div class="head clearfix">
            <div class="input">
                <div class="title">
                <p>歌曲类型:</p>
                </div>
                <div class="select">
                    <el-select size="mini" v-model='searchData.songsType' class="secector" filterable placeholder="歌曲类型">
                        <el-option
                        v-for='item in typeOptions' :key='item.value'
                        :label="item.value"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="input">
                <div class="title">
                <p>发行国家:</p>
                </div>
                <div class="select">
                    <el-select size="small" v-model='searchData.productCountry' filterable placeholder="歌曲类型">
                        <el-option
                        v-for='item in countryOptions' :key='item.value'
                        :label="item.value"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="input">
                <div class="title">
                <p>歌曲语种:</p>
                </div>
                <div class="select">
                    <el-select size="small" v-model='searchData.language' filterable placeholder="歌曲类型">
                        <el-option
                        v-for='item in languageOptions' :key='item.value'
                        :label="item.value"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="input">
                <div class="title">
                <p>发行时间段:</p>
                </div>
                <div class="select">
                    <el-date-picker
                    v-model="searchData.productTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
            </div>
            <div class="buttonGroup">
                <div class="button">
                    <el-button type="primary" icon="el-icon-refresh" @click="reset">重置</el-button>
                </div>
            </div>
        </div>
        <div class="tableContainer clearfix">
            <div class="addButton">
                <el-button type="primary" @click="$store.commit('switch_addDialog')">添加</el-button>
            </div>
            <div class="table">
                <el-table
                :data="tableData"
                height="500px"
                >
                    <el-table-column
                        label="序号"
                        type="index"
                        width="100px"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="songName"
                        label="歌曲名"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="singer"
                        label="歌手"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="productCountry"
                        label="发行国家"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="language"
                        label="语种"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="productTime"
                        label="发行时间"
                        >
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        >
                            <template slot-scope="scope">
                                <div>
                                    <el-button icon="el-icon-edit" @click="editMusic(scope.row)" title="修改"></el-button>
                                    <el-button icon="el-icon-delete" @click="deleteMusic(scope.row)" title="删除"></el-button>
                                </div>
                            </template>
                    </el-table-column>
                </el-table>
     <el-pagination
      style="margin-top: 20px; float: right"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
            </div>
        </div>
        <!-- <el-dialog title="添加音乐" :visible="show" @close="$store.commit('switch_addDialog')">
            <add-music ref="addMusic"></add-music>
        </el-dialog> -->
        <add-music ref="addMusic"></add-music>
        <!-- 编辑 -->
        <el-dialog title="修改音乐" :visible.sync="editDialog">
            <div class="editMusicFrom">
                <el-form label-position="right" label-width="80px" :model="editData" ref="form">
                    <el-form-item label="歌曲名:">
                        <el-input v-model="editData.songName"></el-input>
                    </el-form-item>
                    <el-form-item label="歌手名:">
                        <el-input v-model="editData.singer"></el-input>
                    </el-form-item>
                    <el-form-item label="发行国家:">
                        <el-select v-model="editData.productCountry" placeholder="请选择">
                            <el-option
                            v-for='item in countryOptions' :key='item.value'
                            :label="item.value"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="歌曲语种:">
                        <el-select v-model="editData.songsType" placeholder="请选择">
                            <el-option
                            v-for='item in languageOptions' :key='item.value'
                            :label='item.value'
                            :value='item.value'>
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label='发行时间:'>
                        <el-date-picker
                            v-model="editData.productTime"
                            type="date"
                            range-separator="至"
                            placeholder="选择日期"
                            value-format='yyyy-MM-dd'>
                        </el-date-picker>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editDialog=false">取消</el-button>
                <el-button type="primary" @click="editOk()">保存</el-button>
            </span>
        </el-dialog>
        <!-- 删除 -->
        <el-dialog :visible.sync="deleteDialog">
            <h4>确定要删除吗</h4>
            <span slot="footer" class="dialog-footer">
                <el-button @click="deleteDialog=false">取消</el-button>
                <el-button type="primary" @click="deleteOk()">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import addMusic from '../component/addMusic'
import editMusic from '../component/editMusic'
import axios from 'axios'
export default {
    components: {
        addMusic,
        editMusic,
    },
    data() {
        return {
            searchData: {
                songsType: '全部',
                productCountry: "全部",
                language: "全部",
                productTime: [],
            },
            addDialog: false,
            editDialog: false,
            deleteDialog: false,
            editData: {},
            deleteData: {},
            songData: [],
            tableDats: [],
            size: 10,
            currentPage: 1,
            total: 0,
            flag: false
        }
    },
    created() {
        this.getSongs();
    },
    computed: {
        ...mapState({
            countryOptions: state=>state.addDialog.countryOptions,
            languageOptions: state=>state.addDialog.languageOptions,
            typeOptions: state=>state.addDialog.typeOptions,
            show:state=>state.addDialog.show
        }),
        tableDatas() {
            return this.songData.filter(item => {
                if(this.searchData.songsType == '全部'){
                    return true
                }
                if(item.songsType.indexOf(this.searchData.songsType) === -1){
                    return false
                }
                return true
            }).filter(item => {
                if(this.searchData.productCountry == '全部'){
                    return true
                }
                if(item.productCountry.indexOf(this.searchData.productCountry) === -1){
                    return false
                }
                return true
            }).filter(item => {
                if(this.searchData.language == '全部'){
                    return true
                }
                if(item.language.indexOf(this.searchData.language) === -1){
                    return false
                }
                return true
            }).filter(item => {
                if(this.searchData.productTime.length == 0){
                    return true
                }
                if(item.productTime < this.searchData.productTime[0] || item.productTime > this.searchData.productTime[1]){
                    return false
                }
                return true
            })
        },
        tableData() {            
            this.total = this.tableDatas.length
            this.flag = true
            let from = (this.currentPage - 1) * this.size;
            let to = this.currentPage*this.size;
            let tableData = [];
            for (; from < to; from++) {
                if (this.tableDatas[from]) {
                    tableData.push(this.tableDatas[from]);
                }
            }
            return tableData
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.currentPage = val; 

        },
        handleSizeChange(val) {
            this.size = val;
            
        },
        getSongs() {
            axios.get('/getsong').then(res => {
                this.songData = res.data.tableData
            })
        },
        addMucis() {
            this.addDialog = true;
        },
        reset() {
            this.searchData.productCountry = "全部";
            this.searchData.language = "全部";
            this.searchData.productTime = [];
            this.searchData.songsType = "全部"
        },
        editMusic(row) {
            this.editDialog = true;
            this.editData = row;
        },
        editOk() {
            let params = this.editData
            axios.post('/editsong', params).then( res => {
                if(res.data.status){
                    this.$message({
                        type: 'success',
                        message: res.data.data
                    })
                    this.editDialog = false;
                    this.getSongs();
                } else {
                    this.$message({
                        type: 'error',
                        message: res.data.data
                    })
                }
            })
        },
        deleteMusic(row) {
            this.deleteData = row;
            this.$confirm("确定删除此歌曲吗？", "删除歌曲", {
                    confirmButtonText: "确定",
                    cancleButtonText: "取消",
                    type:'warning'
                }
            ).then(() => {
                axios.post('/deletesong',{deleteItem: this.deleteData}).then(res => {
                    if(res.data.status) {
                        this.$message({
                            type: "success",
                            message: res.data.data
                        })
                        this.getSongs();
                    } else {
                        this.$message({
                            type: "error",
                            message: res.data.data
                        })
                    }
                })
            }).catch(() => {
                this.$message({
                    type: "info",
                    message: "已取消删除"
                })
            }) 
        },
    }
}
</script>

<style>
.musicContent .el-dialog .el-input__inner {
    width: 300px;
}
.musicContent {
    background-color: white;
    width: 100%;
    height: 100%;
    
}
.el-dialog__header {
    background: #f9f9f9;
    border-bottom: 1px solid #cccccc
}
.title {
    text-align: right;
    font-size: 14px;
    width: 100px;
    float: left;
}
.select {
    display: block;
    margin-top: 5px;
    margin-left: 11px;
    margin-right: 11px;
    position: relative;
    line-height: 30px;
    float: left;
    
    
}
 .clearfix:before,
   .clearfix:after {
      content:"";
      display:table;
   }
   .clearfix:after {
     clear:both;
     overflow:hidden;
   }
  .clearfix {
     zoom:1; /* IE < 8 */
  }
.head {
    background-color: #f9f9f9;
    margin-top: 20px;
    width: 100%
}
.input {
    font-size: 14px;
    margin-top: 10px;
    margin-right: 5px;
    float: left;
}
.buttonGroup {
    margin-top: 10px;
    float: left;
}
.button {
    margin-right: 10px;
    float: left;
}
.addButton {
    float: right;
    position: relative;
    margin-right: 20px;

}
.tableContainer {
    width: 100%;
    height: 100%;
}
.table {
    
    margin-right: 30px;
    width: 100%;
    height: 100%;
}
.el-dialog {

  width: 25%;
}


</style>


