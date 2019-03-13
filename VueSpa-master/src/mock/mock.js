import Mock from 'mockjs'

Mock.mock('/login', {
    "status":true,
    "data":{
        username:"123"
    }
})

Mock.mock('/getsong', {
    "tableData|20":[{
        'number|+1': 1,
        'songName': '@city()',
        'singer': '@cname',
        'productCountry|1': ['内地','港台','欧美','韩国','其他'],
        'language|1': ['粤语','英语','国语','韩语','闽南语'],
        'songsType|1': ['流行','摇滚榜','新歌榜','爵士','热歌榜'],
        "productTime": '@date("yyyy-MM-dd")'
    }]
})

Mock.mock('/addsong', {
    "status":true,
    "data":"添加成功"
})

Mock.mock('/editsong', {
    "status":true,
    "data":"修改成功"
})

Mock.mock('/deletesong', {
    "status":true,
    "data":"删除成功"
})

Mock.mock('echart/yAxis/data', {
    "series": [
        5,
        6,
        7,
        10,
        11,
        13,
        14,
        15,
        16,
        18,
        20,
        23,
        25,
        30,
        28,
        27,
        26,
        25,
        24,
        22,
        20,
        22,
        23,
        26,
        28,
        30,
        32,
        34,
        36,
        38,
        40,
        43,
        45,
        46,
        47,
        48,
        50,
        45,
        43,
        42,
        39,
        36,
        33,
        30,
        27,
        25,
        24,
        22,
        20,
        18
    ],
    "xAxisData": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "50"
    ]
})