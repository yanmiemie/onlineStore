
<template>
  <div class="about"> 
    <Navbar></Navbar>  
    <div class="m-20">
      
      <div id="todo"> 

        <div class="grid grid-cols-2 gap-1">
        <div> 
            <h2>客戶清單建立中  </h2>
        </div>
        <div> 
             <button class="text-lg text-gray-100 m-3 px-3 py-0.5 ml-4 rounded-full bg-red-400"
            v-on:click="addTodo">新增</button>  
        </div>
        </div> 
          <el-checkbox-group v-model="newTodo.CRMway">
            <el-checkbox label="官方Line"    ></el-checkbox>
            <el-checkbox label="小寶的Line"  ></el-checkbox>
            <el-checkbox label="小妹的Line"  ></el-checkbox>
            <el-checkbox label="大哥的Line"  ></el-checkbox>
            <el-checkbox label="Fb"         ></el-checkbox>
            <el-checkbox label="IG"         ></el-checkbox>
            <el-checkbox label="手機號碼"    ></el-checkbox>
            <el-checkbox label="聯繫管道"    ></el-checkbox> 
          </el-checkbox-group>

 <el-checkbox v-model="checked">Option</el-checkbox>
 
                    <input type="text" 
                                    v-model="newTodo.name" 
                                    placeholder="顧客姓名"
                                    class="px-10 m-3 py-2 rounded-full bg-gray-100 "
                                    /> 
                    <input type="text" 
                                    v-model="newTodo.phone" 
                                    placeholder="顧客電話"
                                    class="px-10 m-3 py-2 rounded-full bg-gray-100 "
                                    /> 
                    <input type="text" 
                                    v-model="newTodo.ads" 
                                    placeholder="顧客地址"
                                    class="px-10 m-3 py-2 rounded-full bg-gray-100 "
                                    /> 


                                          <div class="flex border-1">
                          <div class="flex-1 text-center text-lx py-5">
                            <a>{{ 1 }}</a>
                          </div>  
                          <div class="flex-1 text-gray-700 text-center bg-gray-200 px-4 py-2 m-2">
                            <el-date-picker
                              v-model="newTodo.dateNote[1]"
                              type="date"
                              placeholder="Pick a day"
                              :picker-options="pickerOptions"
                              value-format="yyyy-MM-dd">
                            </el-date-picker>
                          </div>
                          <div class="flex-1 text-gray-700 text-center bg-gray-200 px-4 py-2 m-2">
                              <el-input-number placeholder=":大瓶:" v-model="newTodo.pd_950[1]" @change="handleChange" :min="1" :max="10"></el-input-number>
                              <el-input-number placeholder=":中瓶:" v-model="newTodo.pd_500[1]" @change="handleChange" :min="1" :max="10"></el-input-number>
                              <!-- <el-input-number v-model="newTodo.pd_250[item]" @change="handleChange" :min="1" :max="10"></el-input-number> -->
                          </div> 
                        </div>    



   
      <div class="grid grid-cols-2 gap-1">
        <div> 
          {{ newTodo }}

          {{ v }}
          <form v-on:submit.prevent="addTodo">  
            <!-- <m-date-picker v-model="newTodo.dateNote" 
                      :multi="multi" 
                      :always-display="false" 
                      ></m-date-picker> -->
 

                      

                    <!-- <el-date-picker
                      v-model="newTodo.dateNote[0]"
                      type="date"
                      placeholder="Pick a day"
                      :picker-options="pickerOptions"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>

                          <el-date-picker
                      v-model="newTodo.dateNote[1]"
                      type="date"
                      placeholder="Pick a day"
                      :picker-options="pickerOptions"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>

                          <el-date-picker
                      v-model="newTodo.dateNote[2]"
                      type="date"
                      placeholder="Pick a day"
                      :picker-options="pickerOptions"
                      value-format="yyyy-MM-dd">
                    </el-date-picker>

                          <el-date-picker
                      v-model="newTodo.dateNote[3]"
                      type="date"
                      placeholder="Pick a day"
                      :picker-options="pickerOptions"
                      value-format="yyyy-MM-dd">
                    </el-date-picker> -->

            <div class="block"> 
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                  <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>   
            </div>   
          </form> 

        </div> 
      <div>

    <button class="text-lg text-gray-100 m-3 px-3 py-0.5 ml-4 rounded-full bg-red-400"
            v-on:click="addTodo">新增 addTodo </button>    
  </div>
</div> 
 
<hr>
<!-- {{ g }}

{{ todo }}  -->
      <ul class="todo-list  ">
        <li v-for="todo in todos"
            class="border-2 border-gray-200 rounded-full py-1 px-4 my-2" > 
            <input type="text" 
                    v-model="todo.text" 
                    placeholder="Add new todo"
                    class="px-10 m-3 py-2 rounded-full bg-gray-100 focus:ring-2 focus:ring-blue-600 "  />  


<!-- {{ todo.creatTime }} -->




      <!-- <el-date-picker
        v-model=" todo.creatTime"
        type="date"
        placeholder="Pick a day"
        :picker-options="pickerOptions">
      </el-date-picker> -->

            <button class="text-ms font-blod text-red-100 m-1 px-3 py-0.5 ml-4 rounded-full bg-red-400"
                  @click="removeTodo(todo.key)">刪除</button>

            <button class="bg-green-500 text-gray-900  text-ms font-blod 
                          m-1 px-3 py-0.5 ml-4 rounded-full 
                          hover:bg-green-700 hover:text-gray-100  "
                  @click="updateTodo(todo.key,todo)">更新</button>   
        </li> 
      </ul> 


    </div> 
    </div>  
   </div>


  
</template>


<script>
import { WordDataServiceEXP } from "../services/TodoService";  

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
      d:"",
      v2:"",
      D1: '',
      D2: '',
      D3: '',
      D4: '',  
      newTodo:{ 
        text:"",
        name:"",
        ads:"",
        phone:"",
        CRMway:['selected and disabled'],
        creatTime: "", // Date 
        dateNote:[],
        pdcoed:[],
        pd_950:[],
        pd_500:[],
        pd_250:[],
        pd_100:[],
        memo:[],
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
        checkList: ['selected and disabled','Option A'],
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
      // this.newTodo.creatTime= WordDataServiceEXP.getdb();
      // this.newTodo.creatTime = getTimeTrans(this.newTodo.creatTime) ;
      this.newTodo.creatTime = '2020-12-02' ;
      this.newTodo.dateNote = this.newTodo.dateNote;
      WordDataServiceEXP.create(this.newTodo)

      Swal.fire({
              position: 'top',
              icon: 'success',
              title: '更新成功',
              showConfirmButton: false,
              timer: 1500
            }); 
      

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
        dateNote: this.currentTutorial.dateNote,
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
            // dateNote: data.dateNote,
 
        // name: data.name,
        // ads: data.ads,
        // phone: data.phone, 
        // dateNote: data.dateNote,
         
        // memo: data.memo,
        // pd_950: data.pd_950,
        // pd_500: data.pd_500,
        // memo: data.memo,

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
  },
  watch: {
     
    // tutorial: function(tutorial) {
    //   this.currentTutorial = { ...tutorial };
    //   this.message = "";
    // },
  },
  computed: {
    v: function () { 
      return this.newTodo.dateNote[0] + this.newTodo.dateNote[1] + this.newTodo.dateNote[2] + this.newTodo.dateNote[3]  
    },

    DayAll: function() {
      rr = [ this.D1,this.D2,this.D3,this.D4 ]
      return  rr
    },
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



