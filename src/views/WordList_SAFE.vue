
<template>
  <div class=" "> 
    <Navbar></Navbar>
    <div class="container">
        <h1 class="text-center p-5">Aboutsss Us</h1> 
        
          <input
                class="form-control"
                id="spell_tayal"
                required
                v-model="word.spell_tayal"
                name="spell_tayal"
                placeholder="type here~"
              />
              <br>
          <button 
                @click="saveWord" 
                class="btn btn-success my-2" > 儲存
          </button> 



        <hr>

         {{ t[0].spell_zh_tw }} 
      <hr>
      {{ t }} 
      <a class="text-3xl py-2 "> 詞彙 列表 </a>  

    </div>
  </div>
</template>


<script>
import { WordDataServiceEXP } from "../services/WordDataService";
// import TutorialDetails from "./WordMdf"; // 連接至 Mdf 的部分

export default {
  name: "tutorials-list",
  components: {   },
  data() {
    return {
      tutorials: [],
      t: [],
      word: {  
              spell_tayal: "",
              spell_zh_tw: "",  
              season:"",
              topic:"",
              description: "", 
              field: "",
              published: false,
            }, 
      currentTutorial: null,
      currentIndex: -1
    };
  },
  methods: {

      
    saveWord() {
        var data = {
          spell_tayal: this.word.spell_tayal,
        
          published: true
          
        };


        alert("新增中...");

        WordDataServiceEXP.create(data)
          .then(() => {
            console.log("新增成功!");
            alert("新增成功!");
            this.submitted = true;
          })
          .catch(e => {
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
            spell_tayal  : data.spell_tayal,
            spell_zh_tw  : data.spell_zh_tw, 
            description  : data.description,
            description2 : data.description2,

            season       : data.season,
            topic        : data.topic,
            temp_sort    : data.temp_sort,
            field        : data.field,  

          // {{ tutorial.spell_tayal }}
          // {{ tutorial.spell_zh_tw }}  
          // <!-- {{ tutorial.description }} -->
          // {{ tutorial.season }}
          // {{ tutorial.topic }}


            // title: data.title,
            // published: data.published,
          });
        });
        // const obj = JSON.parse(txt);
        // this.t = _tutorials.field 
        // this.t = JSON.parse(_tutorials);
        // console.log(this.t);
        

       this.t =  JSON.parse(JSON.stringify(_tutorials));
       console.log(this.t );
// this.t = ;
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
        WordDataServiceEXP.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
      },
  },
  mounted() {
    WordDataServiceEXP.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    WordDataServiceEXP.getAll().off("value", this.onDataChange);
  }
};
</script>
