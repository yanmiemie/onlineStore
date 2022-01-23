
<template>
  <div class="about"> 
    <Navbar></Navbar>  
    <div class="m-20">
     
 
  <div>
    {{  newTodo }}
    <form v-on:submit.prevent="addTodo">
    <input type="text" 
           v-model="newTodo.text" 
           placeholder="Add new todo"
           class="px-10 m-3 py-2 rounded-full bg-gray-100 "
           /> 
    <div class="block">

 
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>  
      <span class="demonstration">HHs</span>  

      <div>
        <m-date-picker v-model="newTodo.dateNote" 
                      :multi="multi" 
                      :always-display="false" 
                      ></m-date-picker>
      </div>
    </div>       
  </form>  
  <div>
    <button class="text-lg text-gray-100 m-3 px-3 py-0.5 ml-4 rounded-full bg-red-400"
            v-on:click="addTodo">新增</button>    
  </div>
</div>  

    <hr>

    
 <hr>
{{ d }}


<!-- <li v-for="item in d">{{ item }}</li> -->

<!-- <li v-for="item in d">{{ item.slice(5,10) }}</li> -->

<!-- <li v-for="item in d">{{ TransTime("Cn",item.slice(0,10)) }}</li> -->

<li v-for="item in d">{{ getTime2Trans(item.slice(0,10))  }}</li>


    <div v-for="d in ds"
            class="text-xs" > 
              
{{  d.slice(5,10)}}
        </div> 

<!-- {{ v2[0].slice(2) }} -->


  <div>
    <m-date-picker v-model="v2" 
                  :multi="multi" 
                  :always-display="false" 
                   ></m-date-picker>
  </div>

  

  {{ v2 }} 
    <!-- arr. -->
<hr> 
<li v-for="item in v2">{{ item }}</li>
<!-- <li v-for="item in v2">{{ getTime2Trans(item.slice(0,10))  }}</li> -->

    </div>
</div>


  
</template>


<script>
import { WordDataServiceEXP } from "../services/TodoService";
// import {fb, db, datab} from '../firebase';
// import TutorialDetails from "./WordMdf"; // 連接至 Mdf 的部分


const cityOptions = ['大瓶', '中瓶', 'Guangzhou', 'Shenzhen'];

export default {
  name: "tutorials-list",
  components: {   },
  data() {
    return {

        // - - - -  

         checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true,

        // - - - - 
      showModal:false,
      g:"",
      d: [ "2021-12-15T00:00:00.000Z", "2021-12-13T00:00:00.000Z", "2021-12-28T00:00:00.000Z", "2021-12-17T00:00:00.000Z", "2021-12-02T00:00:00.000Z" ],
      multi: true,
      v2:[],
      todos: [], 
      newTodo:{ 
        text:"",
        creatTime: "", // Date 
        dateNote:[],
        }, 

      // - - - - - 

      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
         value33: new Date(),

        // - - - - - -

         
    };
  },
  methods: { 

    
    

    // 這邊理解安排，看看todoList 相關參考的範例。
    // https://codepen.io/Jasonjam/pen/WPBbGG

    getTime2Trans(newTime) {
			if (typeof newTime === 'undefined') return;
			let time = new Date(newTime);
			let year = time.getFullYear();
			let month = ["01","02","03","04","05","06",
							     "07","08","09","10","11","12"]
      // let month = ["Jan","Feb","Mar","Apr","May","June",
			// 				 "July","Aug","Sep","Oct","Nov","Dec"] 
			let day = time.getDate();
			let week = time.day = ['日','一','二','三','四','五','六']
			let hour = time.getHours();
			let minute = time.getMinutes();
			return month[time.getMonth()] + "/" + (parseInt(day, 10) < 10 ? '0' + day:day)  +" ( "  + week[time.getDay()] + " ) ";
		},

    getTime(key){
      var today = new Date(); 
      var day = today.getDate();
      var month = today.getMonth() + 1;
      var year = today.getFullYear();
      let weekary_En = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      let weekary_Cn = ['日','一','二','三','四','五','六'];

      let preweek = today.getDay(); 
			let week = weekary_Cn[preweek] ;  

    // - - - - - 
    let str = '';   
      if( key == "En"){  str = year+"-"+month+"-"+day+"("+weekary_En[preweek]+")" ; }
      else if( key == 'Cn'){  str = year+"-"+month+"-"+day+"("+weekary_Cn[preweek]+")" ; }
      else{ str = today }
    return str  
    },

     // Push new post in to Todos
    addTodo(){
      // this.newTodo.creatTime= WordDataServiceEXP.getdb();
      // this.newTodo.creatTime = getTimeTrans(this.newTodo.creatTime) ;
      this.newTodo.creatTime = '2020-12-02' ;
      WordDataServiceEXP.create(this.newTodo)
      

    },
    updateTodo(key, value) {
      WordDataServiceEXP.getAll().child(key).update(value);
      Swal.fire({
              position: 'top',
              icon: 'success',
              title: '更新成功',
              showConfirmButton: false,
              timer: 1500
            }); 
    },
    // Remove child based on key - firebase function
    removeTodo(key) {  
      Swal.fire({
            title: '真的嗎?',
            text: "請確認是否移除資料!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '執行刪除!',
            cancelButtonText: '取消',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '刪除成功!',
                '你的資料，已完成刪除.',
                'success'
              ),
              WordDataServiceEXP.getAll().child(key).remove()
            }
          }) 
    }, 
    updateTutorial() {
      const data = {
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,

        
      };

      WordDataServiceEXP.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "更新成功!";
        })
        .catch((e) => {
          console.log(e);
        });
    }, 
    onDataChange(items) {
        let _tutorials = [];  
        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          _tutorials.push({
            key: key, 
            text     : data.text, 
            creatTime: data.creatTime,
          });
        });
        this.todos = _tutorials; 
    }, 
    
    
    TransTime(Date){
      var today = Date;
      var day = today.getDate();
      var month = today.getMonth() + 1;
      var year = today.getFullYear();
      let weekary_En = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      let weekary_Cn = ['日','一','二','三','四','五','六'];

      let preweek = today.getDay(); 
			let week = weekary_Cn[preweek] ;  

    // - - - - - 
    let str = ''; 

      str = year+"-"+month+"-"+day+"("+weekary_Cn[preweek]+")" ;
    return str 

    }, 
    
  },
  watch: {
     
    // tutorial: function(tutorial) {
    //   this.currentTutorial = { ...tutorial };
    //   this.message = "";
    // },
  },
  computed: {

     
    // filteredStories() {
    //   let filteredStories = this.stories.filter((story) => {
    //     return story.author.toLowerCase().includes(this.searchTerm.toLowerCase());
    //   })
    v22: function() {
      return this.v2.filter(function(item) {
        return item.slice(5,10);
      })
    }
      ,
    famous: function() {
      return this.stories.filter(function(item) {
        return item.upvotes > 30;
      })
    },
    Daychker: function(Mon,Day) {
      return this.todo.filter(function(item) {
        return item.creatTime == '2021-12-02';
      })
    },
    poschker_1: function() {
      return this.odrList.filter(function(item) {
        return item.NowPos == 1;
      })
    },
    poschker_2: function() {
      return this.odrList.filter(function(item) {
        return item.NowPos == 2;
      })
    },
    poschker_3: function() {
      return this.odrList.filter(function(item) {
        return item.NowPos == 3;
      })
    }
  },
  mounted() {
    this.g=this.getTime();
    WordDataServiceEXP.getAll().on("value", this.onDataChange); 
  },
  beforeDestroy() {
    WordDataServiceEXP.getAll().off("value", this.onDataChange);
  }
}; 

</script>

<style scoped>


</style>

 
    <!-- 取出年.月.日  
    {{ d[0].slice(0,10) }}
    <hr>
    <!-- 取出月.日 
    {{ d[0].slice(5,10) }}
    <hr>
    <!-- 取出日期 
    {{ d[0].slice(8,10) }} -->

