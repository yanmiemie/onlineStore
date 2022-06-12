<template> 

  <div class=" flex justify-center  "> 

    <div class="w-1/3"> 

      
 
      <v-tabs
            v-model="tab"
            background-color="primary" 
            fixed-tabs
              
          > 
            <v-tab key='k1' href='#k1' v-if="!hide"  >    
              中央 _北場
            </v-tab>

            <v-tab key='k2' href='#k2' > 
              中央 _南場
            </v-tab>

            <v-tab key='k3' href='#k3' v-if="!hide"  >    
              北北東 _場  
            </v-tab> 
      </v-tabs>  
      <v-tabs-items v-model="tab">
 

        <v-tab-item key='k1' value='k1'> 
          <v-list-item-group 
            color="primary" >
            <v-list-item
              v-for="(tutorial, index) in tutorials"  
              :key="index"
              v-if="tutorial.pos =='北'"
              @click="setActiveTutorial(tutorial, index)"
            > 

            <!-- <p-check v-model="ckbx" value=index class="p-icon p-round p-pulse mt-6 mx-3" color="success"> </p-check> -->

              <v-list-item-content 
                      class=" text-xs py-2 pl-3 my-1 border-2 rounded-sm bg-red-100 border-red-300 "
                       v-if="tutorial.sno == 1 | tutorial.sno == 2 "  
              >

              <div class="grid grid-cols-7 gap-1"> 
                 <div class=" "> 
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>  
                 <div class="  col-span-2    text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                      , {{ tutorial.left_time }} 離場 </div>  
                    <div class=" col-span-4   text-xs text-blue-500 "> {{ tutorial.memo }}   </div> 
              </div>
                <!-- <div class=" flex  w-full">  


                    <div class=" w-1/6 flex"> 
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>
                    <div class="  w-2/6   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span> 
                    
                      , {{ tutorial.left_time }} 離場 </div>  
                    <div class=" w-3/6  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div>
                    
                  </div> -->


              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-yellow-100 border-yellow-300 "
                      v-if="tutorial.sno == 3 | tutorial.sno == 4 "
                      @click="sh()"
              >
                <div class="grid grid-cols-7 gap-1"> 
                 <div class=" "> 
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>  
                 <div class="  col-span-2    text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                      , {{ tutorial.left_time }} 離場 </div>  
                    <div class=" col-span-4   text-xs text-blue-500 "> {{ tutorial.memo }}   </div> 
              </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs bg-green-100 py-2 pl-3 my-1 border-2 rounded-sm border-green-300 "
                      v-if="tutorial.sno == 5 | tutorial.sno == 6 "
              >
              <div class="grid grid-cols-7 gap-1"> 
                 <div class=" "> 
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>  
                 <div class="  col-span-2    text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                      , {{ tutorial.left_time }} 離場 </div>  
                    <div class=" col-span-4   text-xs text-blue-500 "> {{ tutorial.memo }}   </div> 
              </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs py-2 pl-3 my-1 border-2 rounded-sm  bg-gray-100 border-gray-300 "
                      v-if="tutorial.sno == 7 | tutorial.sno == 8 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5">
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>
                    <div class="  w-2/5   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span> 
                      
                        , {{ tutorial.left_time }} 離場 </div>    
                    <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div>
                    
                  </div>
              </v-list-item-content>

             <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-indigo-100 border-indigo-300 "
                      v-if="tutorial.sno == 9 | tutorial.sno == 10 "
              >
                <div class="grid grid-cols-7 gap-1"> 
                 <div class=" "> 
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>  
                 <div class="  col-span-2    text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                      , {{ tutorial.left_time }} 離場 </div>  
                    <div class=" col-span-4   text-xs text-blue-500 "> {{ tutorial.memo }}   </div> 
              </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-pink-100 border-pink-300 "
                      v-if="tutorial.sno == 11 | tutorial.sno == 12 "
              >
                <div class="grid grid-cols-7 gap-1"> 
                 <div class=" "> 
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>  
                 <div class="  col-span-2    text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                      , {{ tutorial.left_time }} 離場 </div>  
                    <div class=" col-span-4   text-xs text-blue-500 "> {{ tutorial.memo }}   </div> 
              </div>
              </v-list-item-content>
              
              
            </v-list-item>
          </v-list-item-group>
        </v-tab-item>

                <v-tab-item key='k2' value='k2' > 
                  
          <v-list-item-group 
            color="primary" 
            >
            <v-list-item
              v-for="(tutorial, index) in tutorials"  
              :key="index" 
              v-if="tutorial.pos =='南'"
              @click="setActiveTutorial(tutorial, index)"
            > 
                  
              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-blue-100 border-blue-300 "
                      v-if="tutorial.sno == 13 | tutorial.sno == 14 "
              >
                <div class="grid grid-cols-7 gap-1"> 
                 <div class=" "> 
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>  
                 <div class="  col-span-2    text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                      , {{ tutorial.left_time }} 離場 </div>  
                    <div class=" col-span-4   text-xs text-blue-500 "> {{ tutorial.memo }}   </div> 
              </div>
              </v-list-item-content>   

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-green-100 border-green-300 "
                      v-if="tutorial.sno == 15 | tutorial.sno == 16 "
              >
                <div class="grid grid-cols-7 gap-1"> 
                 <div class=" "> 
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>  
                 <div class="  col-span-2    text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                      , {{ tutorial.left_time }} 離場 </div>  
                    <div class=" col-span-4   text-xs text-blue-500 "> {{ tutorial.memo }}   </div> 
              </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-red-100 border-red-300 "
                      v-if="tutorial.sno == 17 | tutorial.sno == 18 "
              >
               <div class="grid grid-cols-7 gap-1"> 
                 <div class=" "> 
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>  
                 <div class="  col-span-2    text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span>  
                      , {{ tutorial.left_time }} 離場 </div>  
                    <div class=" col-span-4   text-xs text-blue-500 "> {{ tutorial.memo }}   </div> 
              </div>
              </v-list-item-content>
              
            </v-list-item>
          </v-list-item-group>
        </v-tab-item>


      </v-tabs-items>

    </div>

 




    <div class="w-2/3 ml-10">
    <v-banner  
      sticky
    >
<!-- grid grid-cols-5 gap-1  -->
<div class="flex justify-center w-full "> 
                <div class="mx-1"> 
  <v-switch
                color="primary"
                value
                label="快速複製 離場時間"
                v-model="copyRight_T"
                input-value="true"
                 
              ></v-switch> 

              <v-text-field filled clearable  
              v-model="bch_left_time" 
              class="text-xs " 
              label="離場時間"  
              placeholder="離場時間"  >
              </v-text-field>   

</div>

<div class="mx-1">

            <v-switch
                color="primary"
                value
                label="快速複製 號碼"
                v-model="copyRight_N"
                input-value="true"
                
              ></v-switch> 

              <v-text-field filled 
              v-model="bch_tmp_idx" 
              class="text-xs  " 
              label="第一號"  
              placeholder="第一號"

              type="number"   
              step="1"
              min="0"
              ref="input"
              :rules="[numberRule]"
                >
              </v-text-field>   
          </div>

          <div class="mx-1">

            <v-switch
                color="primary"
                value
                label="快速複製 備註"
                v-model="copyRight_M"
                input-value="true"
                
              ></v-switch> 

              <v-text-field filled 
              v-model="bch_memo" 
              class="text-xs  " 
              label="備註內容"  
              placeholder="備註內容"
 
                >
              </v-text-field>   
          </div>


              <v-dialog
                transition="dialog-top-transition"
                max-width="600"
              >
              
              <!-- <v-text-field v-model="left_time" fill >  </v-text-field> -->


                <template v-slot:activator="{ on, attrs }">
                  <v-btn 
                    class   = "purple accent-3 text-white mt-3 "
                    v-bind="attrs"
                    v-on="on"
                  > 重置靶位 (換場使用) </v-btn>
                </template>

                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar
                      color="purple accent-3"
                      dark
                    >修改 大批資料...謹慎操作</v-toolbar>
                    <v-card-text>
                      <div class="text-h2 pa-12">請選 北場 or 南場 </div>
                    </v-card-text>
                    <v-card-actions class="justify-end">

                      <v-btn
                        solo
                        @click="reSet_pos_0"
                      >全場(01 ~ 20)</v-btn>

                      <v-btn
                        solo
                        @click="reSet_pos_1"
                      >北場(01 ~ 12)</v-btn>

                      <v-btn
                        solo
                        @click="reSet_pos_2"
                      >南場(13 ~ 18)</v-btn>

                      <v-btn
                        text
                        @click="dialog.value = false"
                      >取消</v-btn>

                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            <!-- </v-col> -->
          <!-- </v-row>    -->
  <!-- <div class="...">01</div>  -->
  <!-- <div class="col-span-2 ...">04</div>
  <div class="...">05</div>
  <div class="...">06</div>
  <div class="col-span-2 ...">07</div> -->
</div>
<hr>
      <div v-if="currentTutorial">
        <tutorial-details
          :tutorial="currentTutorial"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Please 確認 on a Tutorial...</p>
      </div>
      </v-banner>
    </div>

     
  </div>
</template>
 

<script>

import TutorialDetails from "./od4_Mdf";
 
import SeatDataService from "../services/odService";

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  

  data() {
    return {  
      dialog: false,
      tab:"",
      ckbx:"",
      copyRight_N:false,
      copyRight_T:false, 
      copyRight_M:false, 
      
      bch_left_time:"",
      bch_tmp_idx:"",
      bch_memo:"",
 
      show: false,
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  }, 
  methods: { 
    onDataChange(items) {
       
      let _tutorials = []; 


      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key,
          // title: data.title,
          // description: data.description,
          // published: data.published,
          // date_s:data.date_s,
          // date_mor:data.date_mor,
            pos: data.pos,
            sno: data.sno,
            sno_idx: data.sno_idx,
            tmp_idx: data.tmp_idx,
            left_time: data.left_time,
            memo: data.memo,
            slted: data.slted,
            statu: data.statu
        });
      });

      this.tutorials = _tutorials;

    // //  ::  藉由使用  ::
    // var temp_ary = _tutorials.map(function(item, index, array){ 
    //     if (item.description !== '') {
    //           return item.description;
    //         }  
    //   }) ; 
    // this.FVB = temp_ary ;
    // console.log('- - - < temp_ary > - - -');  
    // console.log(temp_ary);  
 
    },
    
    

    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

setActiveTutorial(tutorial, index) {
       
      this.currentTutorial = tutorial;
      this.currentIndex = index;  

        if( this.copyRight_N != false)
        {
              this.currentTutorial.tmp_idx = this.bch_tmp_idx; 
              this.bch_updta();
              this.message = "複製更新 成功!";
        } 
        
        if( this.copyRight_T != false)
        { 
              this.currentTutorial.left_time = this.bch_left_time;
              this.bch_updta();
              this.message = "複製更新 成功!";
        } 

         if( this.copyRight_M != false)
        { 
              this.currentTutorial.memo = this.bch_memo;
              this.bch_updta();
              this.message = "複製更新 成功!";
        } 

        

},

bch_updta()
{
  const data = {   
        tmp_idx: this.currentTutorial.tmp_idx, 
        left_time: this.currentTutorial.left_time,
        memo: this.currentTutorial.memo,  
      };

      SeatDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "更新成功!";
        })
        .catch((e) => {
          console.log(e);
        }); 
}

// reSet_bch_N(){ if(this.copyRight_N == false) { this.bch_left_time = ""; }  },
// reSet_bch_T(){ if(this.copyRight_T == false) { this.bch_tmp_idx = ""  ; }  },
      
,


 reSet_pos_0() { 
       
      for (let index = 0; index <= 100; index++) {  
        
          this.setActiveTutorial(this.tutorials[index] , index);
          this.reSetOne(this.tutorials[index] , index); 
      }
      this.dialog.value = false;

  },
    reSet_pos_1() { 
       
      for (let index = 0; index <= 36; index++) {  
        
          this.setActiveTutorial(this.tutorials[index] , index);
          this.reSetOne(this.tutorials[index] , index);

          
      }
      this.dialog.value = false;

  },

  reSet_pos_2() { 
       
      for (let index = 37; index <= 100; index++) {  
        
          this.setActiveTutorial(this.tutorials[index] , index);
          this.reSetOne(this.tutorials[index] , index);
          
      }
      this.dialog.value = false;

  },

    reSetOne(tutorial, index) {
       
      this.currentTutorial = tutorial;
      this.currentIndex = index; 

      this.currentTutorial.tmp_idx="";
      this.currentTutorial.left_time="";
      this.currentTutorial.memo="";

      const data = {   
        tmp_idx: "", 
        left_time: "",
        memo: "",  
      };

      SeatDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "更新成功!";
        })
        .catch((e) => {
          console.log(e);
        }); 
    },

    removeAllTutorials() {
      SeatDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    
  },
  mounted() {
    // console.log(_tutorials.title);  
     SeatDataService.getAll().on("value", this.onDataChange);  
  },
  beforeDestroy() {
     SeatDataService.getAll().off("value", this.onDataChange);
  }, 

    
};
</script>

<style>
/* .submit-form {
  max-width: 300px;
  margin: auto;
} */
</style>


<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
