<template>
  <div class=" flex justify-center  ">
    
    
    <div class="w-full ">
      <h4 class="mt-10 text-2xl font-black " >靶道列表</h4>


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
            > 
              <v-list-item-content 
                      class=" text-xs py-2 pl-3 my-1 border-2 rounded-sm bg-red-100 border-red-300 "
                       v-if="tutorial.sno == 1 | tutorial.sno == 2 "  
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5">
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>
                    <div class="  w-2/5   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span> 
                    
                      , {{ tutorial.left_time }}離</div>  
                    <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div>
                    
                  </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-yellow-100 border-yellow-300 "
                      v-if="tutorial.sno == 3 | tutorial.sno == 4 "
                      @click="sh()"
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5">
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>
                    <div class="  w-2/5   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span> 
                    
                      , {{ tutorial.left_time }}離</div>  
                    <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div>
                      
                  </div> 
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs bg-green-100 py-2 pl-3 my-1 border-2 rounded-sm border-green-300 "
                      v-if="tutorial.sno == 5 | tutorial.sno == 6 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5">
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>
                    <div class="  w-2/5   text-xs font-black">  
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span> 
                    
                      , {{ tutorial.left_time }}離</div>  
                    <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div>
                    
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
                      
                        , {{ tutorial.left_time }}離</div>    
                    <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div>
                    
                  </div>
              </v-list-item-content>

             <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-indigo-100 border-indigo-300 "
                      v-if="tutorial.sno == 9 | tutorial.sno == 10 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5">
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>
                    <div class="  w-2/5   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span> 
                      
                        , {{ tutorial.left_time }}離</div>    
                    <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-pink-100 border-pink-300 "
                      v-if="tutorial.sno == 11 | tutorial.sno == 12 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5">
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>
                    <div class="  w-2/5   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span> 
                      
                        , {{ tutorial.left_time }}離</div>    
                    <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div> 
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
            > 
                  
              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-blue-100 border-blue-300 "
                      v-if="tutorial.sno == 13 | tutorial.sno == 14 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5">
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>
                    <div class="  w-2/5   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span> 
                      
                        , {{ tutorial.left_time }}離</div>    
                    <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>   

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-green-100 border-green-300 "
                      v-if="tutorial.sno == 15 | tutorial.sno == 16 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5">
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>
                    <div class="  w-2/5   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span> 
                      
                        , {{ tutorial.left_time }}離</div>    
                    <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>

              <v-list-item-content 
                      class=" text-xs  py-2 pl-3 my-1 border-2 rounded-sm bg-red-100 border-red-300 "
                      v-if="tutorial.sno == 17 | tutorial.sno == 18 "
              >
                <div class=" flex  w-full">
                    <div class=" w-1/5">
                      {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                    </div>
                    <div class="  w-2/5   text-xs font-black"> 
                      <span class=" p-1 bg-red-500 rounded-full text-white text-xs font-black"> {{ tutorial.tmp_idx }} </span> 
                      
                        , {{ tutorial.left_time }}離</div>    
                    <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div> 
                  </div>
              </v-list-item-content>
              
            </v-list-item>
          </v-list-item-group>
        </v-tab-item>


      </v-tabs-items>
    </div> 

        <!-- <div class="w-2/3 ml-10">
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
        </div> -->
    <hr> 
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
      tab:"",
      // - - - - 
show: false,
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  }, 
  methods: { 
sh(){

alert('gooo');
},

    onDataChange(items) {
       
      let _tutorials = []; 


      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key, 
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
    },

    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
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
  /* max-width: 750px; */
  margin: auto;
}
</style>
