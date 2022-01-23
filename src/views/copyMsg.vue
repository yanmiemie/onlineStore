
<template>
  <div class="about"> 
    <Navbar></Navbar>  
    <div class="m-2">
      
      <div id="todo"> 

        <div class="grid grid-cols-2 gap-1">
        
        <!-- <div> 
             <button class="text-lg text-gray-100 m-3 px-3 py-0.5 ml-4 rounded-full bg-red-400"
            v-on:click="addTodo">新增</button>  
        </div> -->
        <h3> 請設定. 相關的日期 </h3> 
        <div class="col-span-2" >
             <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="1月" name="first">
                    <el-checkbox-group v-model="datePicked._1M"   >  
                        <el-checkbox-button label=26 disabled   class="w-10" ></el-checkbox-button>
                        <el-checkbox-button label=27 disabled   class="w-10"></el-checkbox-button>
                        <el-checkbox-button label=28 disabled   class="w-10"></el-checkbox-button>
                        <el-checkbox-button label=29 disabled   class="w-10"></el-checkbox-button>
                        <el-checkbox-button label=31 disabled   class="w-10" ></el-checkbox-button> 
                        <el-checkbox-button label=01    @change="transDay_Mdf1(1)"  class="w-10" ></el-checkbox-button>
                        <el-checkbox-button label=02    @change="transDay_Mdf1(1)"  class="w-10"></el-checkbox-button>
                        <br>
                        <el-checkbox-button label=03    @change="transDay_Mdf1(1)"  class="w-10"></el-checkbox-button>
                        <el-checkbox-button label=04    @change="transDay_Mdf1(1)"  class="w-10"></el-checkbox-button>
                        <el-checkbox-button label=05    @change="transDay_Mdf1(1)"  class="w-10"></el-checkbox-button>
                        <el-checkbox-button label=06    @change="transDay_Mdf1(1)"  class="w-10"></el-checkbox-button>
                        <el-checkbox-button label=07    @change="transDay_Mdf1(1)"  class="w-10"></el-checkbox-button>
                        <el-checkbox-button label=08    @change="transDay_Mdf1(1)"  class="w-10"></el-checkbox-button>
                        <el-checkbox-button label=09    @change="transDay_Mdf1(1)"  class="w-10"></el-checkbox-button>
                        <br>
                        <el-checkbox-button label=10    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=11    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=12    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=13    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=14    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=15    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=16    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <br>
                        <el-checkbox-button label=17    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=18    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=19    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=20    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=21    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=22    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=23    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <br>
                        <el-checkbox-button label=24    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=25    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=26    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=27    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=28    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=29    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <el-checkbox-button label=30    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                        <br> 
                        <el-checkbox-button label=31    @change="transDay_Mdf1(1)" ></el-checkbox-button>
                    </el-checkbox-group> 
                </el-tab-pane>
                <el-tab-pane label="2月" name="second">
                    <el-checkbox-group v-model="datePicked._2M">    
                        <el-checkbox-button label=31 disabled  ></el-checkbox-button> 
                        <el-checkbox-button label=01    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=02    @change="transDay_Mdf1(2)" ></el-checkbox-button> 
                        <el-checkbox-button label=03    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=04    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=05    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=06    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <br>
                        <el-checkbox-button label=07    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=08    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=09    @change="transDay_Mdf1(2)" ></el-checkbox-button> 
                        <el-checkbox-button label=10    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=11    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=12    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=13    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <br>
                        <el-checkbox-button label=14    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=15    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=16    @change="transDay_Mdf1(2)" ></el-checkbox-button> 
                        <el-checkbox-button label=17    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=18    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=19    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=20    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <br>
                        <el-checkbox-button label=21    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=22    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=23    @change="transDay_Mdf1(2)" ></el-checkbox-button> 
                        <el-checkbox-button label=24    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=25    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=26    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=27    @change="transDay_Mdf1(2)" ></el-checkbox-button>
                        <el-checkbox-button label=28    @change="transDay_Mdf1(2)" ></el-checkbox-button>  
                       
                    </el-checkbox-group>
                </el-tab-pane>
                <el-tab-pane label="3月" name="third">
                    <el-checkbox-group v-model="datePicked._3M">  
                        <el-checkbox label=00 disabled  ></el-checkbox>
                        <el-checkbox label=00 disabled  ></el-checkbox>  
                        <el-checkbox label=01    @change="transDay" ></el-checkbox>
                        <el-checkbox label=02    @change="transDay" ></el-checkbox>
                        <el-checkbox label=03    @change="transDay" ></el-checkbox>
                        <el-checkbox label=04    @change="transDay" ></el-checkbox>
                        <el-checkbox label=05    @change="transDay" ></el-checkbox>
                        <el-checkbox label=06    @change="transDay" ></el-checkbox>
                        <br>
                        <el-checkbox label=07    @change="transDay" ></el-checkbox>
                        <el-checkbox label=08    @change="transDay" ></el-checkbox>
                        <el-checkbox label=09    @change="transDay" ></el-checkbox> 
                        <el-checkbox label=10    @change="transDay" ></el-checkbox>
                        <el-checkbox label=11    @change="transDay" ></el-checkbox>
                        <el-checkbox label=12    @change="transDay" ></el-checkbox>
                        <el-checkbox label=13    @change="transDay" ></el-checkbox>
                        <br>
                        <el-checkbox label=14    @change="transDay" ></el-checkbox>
                        <el-checkbox label=15    @change="transDay" ></el-checkbox>
                        <el-checkbox label=16    @change="transDay" ></el-checkbox> 
                        <el-checkbox label=17    @change="transDay" ></el-checkbox>
                        <el-checkbox label=18    @change="transDay" ></el-checkbox>
                        <el-checkbox label=19    @change="transDay" ></el-checkbox>
                        <el-checkbox label=20    @change="transDay" ></el-checkbox>
                        <el-checkbox label=21    @change="transDay" ></el-checkbox>
                        <br>
                        <el-checkbox label=22    @change="transDay" ></el-checkbox>
                        <el-checkbox label=23    @change="transDay" ></el-checkbox> 
                        <el-checkbox label=24    @change="transDay" ></el-checkbox>
                        <el-checkbox label=25    @change="transDay" ></el-checkbox>
                        <el-checkbox label=26    @change="transDay" ></el-checkbox>
                        <el-checkbox label=27    @change="transDay" ></el-checkbox>
                        <br>
                        <el-checkbox label=28    @change="transDay" ></el-checkbox>
                        <el-checkbox label=29    @change="transDay" ></el-checkbox>
                        <el-checkbox label=30    @change="transDay" ></el-checkbox> 
                        <el-checkbox label=31    @change="transDay" ></el-checkbox>
                    </el-checkbox-group>
                </el-tab-pane>
                <el-tab-pane label="4月" name="fourth">
                  <br>
                        <el-checkbox-button label=28    @change="transDay" ></el-checkbox-button>
                        <el-checkbox-button label=29    @change="transDay" ></el-checkbox-button>
                        <el-checkbox-button label=30    @change="transDay" ></el-checkbox-button> 
                        <el-checkbox-button label=31    @change="transDay" ></el-checkbox-button>
                        <br>
                    <el-checkbox-group v-model="checkboxGroup1">
                        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                   


                    <!-- <el-checkbox-group v-model="datePicked._4M">  
                        <el-checkbox label=00 disabled @change="transDay" ></el-checkbox>
                        <el-checkbox label=00 disabled @change="transDay" ></el-checkbox>
                        <el-checkbox label=00 disabled @change="transDay" ></el-checkbox>
                        <el-checkbox label=00 disabled @change="transDay" ></el-checkbox>  
                        <el-checkbox label=01    @change="transDay" ></el-checkbox>
                        <el-checkbox label=02    @change="transDay" ></el-checkbox>
                        <el-checkbox label=03    @change="transDay" ></el-checkbox>
                        <br>
                        <el-checkbox label=04    @change="transDay" ></el-checkbox>
                        <el-checkbox label=05    @change="transDay" ></el-checkbox>
                        <el-checkbox label=06    @change="transDay" ></el-checkbox>
                        <el-checkbox label=07    @change="transDay" ></el-checkbox>
                        <el-checkbox label=08    @change="transDay" ></el-checkbox>
                        <el-checkbox label=09    @change="transDay" ></el-checkbox> 
                        <el-checkbox label=10    @change="transDay" ></el-checkbox>
                        <br>
                        <el-checkbox label=11    @change="transDay" ></el-checkbox>
                        <el-checkbox label=12    @change="transDay" ></el-checkbox>
                        <el-checkbox label=13    @change="transDay" ></el-checkbox>
                        <el-checkbox label=14    @change="transDay" ></el-checkbox>
                        <el-checkbox label=15    @change="transDay" ></el-checkbox>
                        <el-checkbox label=16    @change="transDay" ></el-checkbox> 
                        <el-checkbox label=17    @change="transDay" ></el-checkbox>
                        <br>
                        <el-checkbox label=18    @change="transDay" ></el-checkbox>
                        <el-checkbox label=19    @change="transDay" ></el-checkbox>
                        <el-checkbox label=20    @change="transDay" ></el-checkbox>
                        <el-checkbox label=21    @change="transDay" ></el-checkbox>
                        <el-checkbox label=22    @change="transDay" ></el-checkbox>
                        <el-checkbox label=23    @change="transDay" ></el-checkbox> 
                        <el-checkbox label=24    @change="transDay" ></el-checkbox>
                        <br>
                        <el-checkbox label=25    @change="transDay" ></el-checkbox>
                        <el-checkbox label=26    @change="transDay" ></el-checkbox>
                        <el-checkbox label=27    @change="transDay" ></el-checkbox>
                        <el-checkbox label=28    @change="transDay" ></el-checkbox>
                        <el-checkbox label=29    @change="transDay" ></el-checkbox>
                        <el-checkbox label=30    @change="transDay" ></el-checkbox>  
                    </el-checkbox-group> -->
                </el-tab-pane>
            </el-tabs>
        </div>
        
        </div> 
        <div> 
            <h6>{{ dispBkinfo }}  </h6> 
            <hr>
           <h6> {{this.dispBkinfo.transOUTPUT}}</h6> 
        </div>
          



 
 
 
  


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
      datePicked:{  
        _1M:[],
        _2M:[],
        _3M:[],
        _4M:[],
        }
      ,
      dispBkinfo:{  
          transOUTPUT:"xx",
        _1M:[],
        _2M:[],
        _3M:[],
        _4M:[],
        }
      ,
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

      transDay_Mdf1(M_Type){
 

        let ReB_date;
        let day = ['(日)','(一)','(二)','(三)','(四)','(五)','(六)'];

        let tempString="";
        let get_M_CNT=1;


        switch(M_Type) {
        case 1:
            get_M_CNT = this.datePicked._1M.length ;
            // code block
            break;
        case 2:
            get_M_CNT = this.datePicked._2M.length ;
            // code block
            break;
        case 3:
            get_M_CNT = this.datePicked._3M.length ;
            // code block
            break;
        case 4:
            get_M_CNT = this.datePicked._4M.length ;
            // code block
            break;    
        default:
            // code block
        } ;
        
        for (let i = 0; i < get_M_CNT; i++) 
        { 
            switch(M_Type) {
            case 1:
                ReB_date = new Date('"2022-01-'+this.datePicked._1M[i]+'"') ;
                tempString = tempString + M_Type+"/"+this.datePicked._1M[i]+"("+ReB_date.getDay()  +")"+ " , ";
                this.dispBkinfo._1M = tempString ;
                // code block
                break;
            case 2:
                ReB_date = new Date('"2022-02-'+this.datePicked._2M[i]+'"') ;
                tempString = tempString + M_Type+"/"+this.datePicked._2M[i]+day[ReB_date.getDay()]  + " , ";
                this.dispBkinfo._2M = tempString ;
                // code block
                break;
            case 3:
                ReB_date = new Date('"2022-03-'+this.datePicked._3M[i]+'"') ;
                tempString = tempString + M_Type+"/"+this.datePicked._3M[i]+day[ReB_date.getDay()]  + " , ";
                this.dispBkinfo._3M = tempString ;
                // code block
                break;
            case 4:
                ReB_date = new Date('"2022-04-'+this.datePicked._4M[i]+'"') ;
                tempString = tempString + M_Type+"/"+this.datePicked._4M[i]+day[ReB_date.getDay()]  + " , ";
                this.dispBkinfo._4M = tempString ; 
                // code block
                break;    
            default:
                // code block
            }   
        } ; 
        this.dispBkinfo.transOUTPUT = "即將為您安排在以下幾日: "+this.dispBkinfo._1M+this.dispBkinfo._2M+this.dispBkinfo._3M+this.dispBkinfo._4M;    
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



