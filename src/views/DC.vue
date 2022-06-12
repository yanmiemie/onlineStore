
<template>
  <div class="about"> 
    <Navbar></Navbar>  
    <div class="m-20">
      
      <div id="todo">
  <h2>客戶清單建立中 , 時間：{{ newTodo.creatTime }} </h2> 
   

<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="fireBase 列表 " name="1">
    <div>
       <ul class="todo-list  ">
        <li v-for="todo in todos"
            class="border-2 border-gray-200 rounded-full py-1 px-4 my-0.5" > 
            <input type="text" 
                    v-model="todo.text" 
                    placeholder="Add new todo"
                    class="px-10 mx-1 py-1 rounded-full bg-gray-100 focus:ring-2 focus:ring-blue-600 "  />  

            <input type="text" 
                    v-model="todo.name" 
                    placeholder="Add new todo"
                    class="px-10 mx-1 py-1 rounded-full bg-gray-100 focus:ring-2 focus:ring-blue-600 "  />  
 
 

            <button class="text-ms font-blod text-red-100 m-1 px-3 py-0.5 ml-4 rounded-full bg-red-400"
                  @click="removeTodo(todo.key)">刪除</button>

            <button class="bg-green-500 text-gray-900  text-ms font-blod 
                          m-1 px-3 py-0.5 ml-4 rounded-full 
                          hover:bg-green-700 hover:text-gray-100  "
                  @click="updateTodo(todo.key,Todos)">更新</button>   
        </li> 
      </ul> 

    </div>
  
  </el-collapse-item>
  <el-collapse-item title="尚未測試的 " name="2">
    <!-- <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div> -->
  

    
    <div class="block">
      <span class="demonstration">Display all tags (default)</span>
      <el-cascader
      v-model="value3"
        :options="options"
        :props="props"
        clearable></el-cascader>
    </div>



     <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker
        v-model="value1"
        multiple
        type="date"
        placeholder="Pick a day">
      </el-date-picker>
    </div>

  </el-collapse-item>

 <el-collapse-item title="新增工具 Add Tools" name="3">
    <div class="grid grid-cols-2 gap-1">
  <div>
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
   

      <!-- <span class="demonstration"> 時間日期 </span>
      <el-date-picker
        v-model="newTodo.creatTime"
        type="date"
        placeholder="Pick a day"
        :picker-options="pickerOptions">
      </el-date-picker>  -->

    </div>       
  </form> 
  </div> 
  <div>
    <button class="text-lg text-gray-100 m-3 px-3 py-0.5 ml-4 rounded-full bg-red-400"
            v-on:click="addTodo">新增</button>    
  </div>
</div> 
</el-collapse-item>

<!--
  
  <el-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item> -->
</el-collapse> 
 
     
      </div> 
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


activeNames: ['1'],
// - - - -  

         checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true,

        // - - - - 
      showModal:false,
      g:"",
      d:"",
      v2:"",
      todos: [], 
      newTodo:{ 
        text:"",
        name:"",
        creatTime: "", // Date 
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

         props: { multiple: true },
        options: [{
          value: 1,
          label: 'Asia',
          children: [{
            value: 2,
            label: 'China',
            children: [
              { value: 3, label: 'Beijing' },
              { value: 4, label: 'Shanghai' },
              { value: 5, label: 'Hangzhou' }
            ]
          }, {
            value: 6,
            label: 'Japan',
            children: [
              { value: 7, label: 'Tokyo' },
              { value: 8, label: 'Osaka' },
              { value: 9, label: 'Kyoto' }
            ]
          }, {
            value: 10,
            label: 'Korea',
            children: [
              { value: 11, label: 'Seoul' },
              { value: 12, label: 'Busan' },
              { value: 13, label: 'Taegu' }
            ]
          }]
        }, {
          value: 14,
          label: 'Europe',
          children: [{
            value: 15,
            label: 'France',
            children: [
              { value: 16, label: 'Paris' },
              { value: 17, label: 'Marseille' },
              { value: 18, label: 'Lyon' }
            ]
          }, {
            value: 19,
            label: 'UK',
            children: [
              { value: 20, label: 'London' },
              { value: 21, label: 'Birmingham' },
              { value: 22, label: 'Manchester' }
            ]
          }]
        }, {
          value: 23,
          label: 'North America',
          children: [{
            value: 24,
            label: 'US',
            children: [
              { value: 25, label: 'New York' },
              { value: 26, label: 'Los Angeles' },
              { value: 27, label: 'Washington' }
            ]
          }, {
            value: 28,
            label: 'Canada',
            children: [
              { value: 29, label: 'Toronto' },
              { value: 30, label: 'Montreal' },
              { value: 31, label: 'Ottawa' }
            ]
          }]
        }] 
    };
  },
  methods: { 

    handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
    

    // 這邊理解安排，看看todoList 相關參考的範例。
    // https://codepen.io/Jasonjam/pen/WPBbGG

    getTimeTrans(newTime) {
			if (typeof newTime === 'undefined') return;
			let time = new Date(newTime);
			let year = time.getFullYear();
			let month = ["Jan","Feb","Mar","Apr","May","June",
							 "July","Aug","Sep","Oct","Nov","Dec"]
			let day = time.getDate();
			let week = time.day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
			let hour = time.getHours();
			let minute = time.getMinutes();
			return month[time.getMonth()] + "/" + (parseInt(day, 10) < 10 ? '0' + day:day)  + "/" + year + "<br> " + hour + ":" + (parseInt(minute, 10) < 10 ? '0' + minute : minute) + "&nbsp;" + week[time.getDay()];
		},
     // Push new post in to Todos
    
    
    addTodo(){  
      var data ={ 
        text:this.newTodo.text,
        creatTime:this.newTodo.creatTime,
        name:this.newTodo.name, 
      };


      WordDataServiceEXP.create(this.newTodo);
      Swal.fire({
              position: 'top',
              icon: 'success',
              title: '更新成功',
              showConfirmButton: false,
              timer: 1500
            }); 

    },

    // updateTutorial() {
    //   const data = {
    //     title: this.currentTutorial.title,
    //     description: this.currentTutorial.description,
    //   };

    //   WordDataServiceEXP.update(this.currentTutorial.key, data)
    //     .then(() => {
    //       this.message = "更新成功!";
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // }, 


    // WordDataServiceEXP.getAll().child(key).update(value);
    
      // Swal.fire({
      //         position: 'top',
      //         icon: 'success',
      //         title: '更新成功'+ key +  'value = ' + value ,
      //         showConfirmButton: false,
      //         timer: 1500
      //       }); 

      //  this..tmp_idx="";
      // this.currentTutorial.left_time="";
      // this.currentTutorial.memo="";

    updateTodo(key, data) {
      

      const v = {   
        name: data.name, 
        text: data.text, 
      };

      WordDataServiceEXP.update(key, v)
        .then(() => {
           Swal.fire({
              position: 'top',
              icon: 'success',
              title: '更新成功'+ key +  'value = ' + value ,
              showConfirmButton: false,
              timer: 1500
            });  
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // updateTodo(key, value) { 
      
    //   WordDataServiceEXP.getAll().child(key).update(value);
    //   Swal.fire({
    //           position: 'top',
    //           icon: 'success',
    //           title: '更新成功',
    //           showConfirmButton: false,
    //           timer: 1500
    //         }); 
    // },
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
    
    onDataChange(items) {
        let _tutorials = [];  
        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          _tutorials.push({
            key: key, 
            text     : data.text, 
            creatTime: data.creatTime,
            name: data.name,
            pd_500: data.pd_500,
          });
        });
        this.todos = _tutorials; 
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

// - - - - 協助這個東西是在修飾 的部分 - - 
    handleChange(val) {
        console.log(val);
      }
  },
  watch: {
     
    // tutorial: function(tutorial) {
    //   this.currentTutorial = { ...tutorial };
    //   this.message = "";
    // },
  },
  computed: {
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



