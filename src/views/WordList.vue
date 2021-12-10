
<template>
  <div class="about"> 
    <Navbar></Navbar>

     

    <div class="m-20">
      
      <div id="todo">
  <h2>尖石地區.泰雅詞語.對照表</h2>
   
   <div class="tabs" v-cloack>
    <ul>
      <li v-for="(tab, index) in tabs" :class="{'is-active': show == index}"><a @click.prevent="show = index">{{tab.title}}</a></li>
    </ul>

  </div>
  <div class="texts" v-cloack>
    <transition-group name="fade-up" target="div" appear @click.native="navigate($event); alerts($event);">
      <div v-for="(tab, index) in tabs" v-if="show == index" :key="index" v-html="tab.content"></div>
    </transition-group>
  </div>



<!-- <img src="https://firebasestorage.googleapis.com/v0/b/nm-tayal.appspot.com/o/223.jpeg?alt=media&token=fc990cf1-1274-447a-b602-8e461cac4434"> -->



<div class="grid grid-cols-2 gap-1">
  <div>
    <form v-on:submit.prevent="addTodo">
    <input type="text" 
           v-model="newTodo.spell_tayal" 
           placeholder="Add new todo"
           class="px-10 m-3 py-2 rounded-full bg-gray-100 "
           /> 
  </form> 
  </div> 
  <div>
    <button class="text-lg text-gray-100 m-3 px-3 py-0.5 ml-4 rounded-full bg-red-400"
            v-on:click="addTodo">新增</button>    
  </div>
</div>



<div> 
      <div class="todo-list  ">
        <div v-for="todo in todos"
            class="border-1 border-gray-200 rounded-full 
                   px-4 my-2" > 
            
            <div class="grid grid-cols-9 gap-1">
            <input type="text" 
                    v-model="todo.spell_tayal" 
                    placeholder="Add new todo"
                    class="px-3 m-1 py-1 
                           rounded-full bg-gray-100 
                           col-span-2
                           focus:ring-2 focus:ring-blue-600 "  />  

<div class="items-center 
            col-span-5
            grid grid-cols-5 gap-1 ">
              <span>{{ todo.spell_zh_tw }}  </span>
              <span>{{ todo.topic }}  </span>
              <span>{{ todo.temp_sort }}  </span>
              <span>{{ todo.description }}  </span>
              <span>{{ todo.season }}  </span> 
             </div>
             <button class="text-gray-600 text-xl font-black
                            m-1 px-1 py-0.5 rounded-full 
                            bg-gray-200
                            hover:bg-red-600 hover:text-gray-100  "
                  @click="removeTodo(todo.key)">刪除</button>

            <button class="text-gray-900 text-xl font-black 
                            m-1 px-1 py-0.5 rounded-full 
                            bg-green-500
                            hover:bg-blue-700 hover:text-gray-100  "
                  @click="updateTodo(todo.key,todo)">更新</button>   
          </div>         
        </div> 
      </div> 

      </div>
    </div>
  
    </div>
  </div>
</template>


<script>
// import { WordDataServiceEXP } from "../services/TodoService";
import { WordDataServiceEXP } from "../services/WordDataService";
// import TutorialDetails from "./WordMdf"; // 連接至 Mdf 的部分

export default {
  name: "tutorials-list",
  components: {   },
  data() {
    return { 
      


      showModal:false,
      todos: [], 
      newTodo:{ 
        spell_tayal:"",
        },

      tempDt: {
        temp_key:"",
        temp_text:"",
        }, 
      currentDt:[],
    };
  },
  methods: {  
    navigate: function(e){
      if (e.target.dataset.show) {
        e.preventDefault();
        this.show = e.target.dataset.show;
      }
    },
    alerts: function(e){
      if (e.target.dataset.alert) {
        e.preventDefault();
        alert(e.target.dataset.alert);
      }
    },
     // Push new post in to Todos
    addTodo(){
      WordDataServiceEXP.create(this.newTodo)
      this.newTodo.spell_tayal= '';

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
        spell_tayal: this.currentTutorial.spell_tayal,
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
            text  : data.text, 
            
            spell_tayal: data.spell_tayal,
            spell_zh_tw  : data.spell_zh_tw, 
            description  : data.description,
            description2 : data.description2,

            season       : data.season,
            topic        : data.topic,
            temp_sort    : data.temp_sort,
            field        : data.field, 
            
          });
        });
        this.todos = _tutorials; 
    },

        

  },
  computed: {
    famous: function() {
      return this.stories.filter(function(item) {
        return item.upvotes > 30;
      })
    },
    poschker: function(num) {
      return this.odrList.filter(function(item) {
        return item.NowPos == num;
      })
    },
    topic_1: function() {
      return this.todos.filter(function(item) {
        return item.description == '5大文化面向';
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
  watch: {
    // $('#modal').modal({
    //   show: true
    // }),
    // tutorial: function(tutorial) {
    //   this.currentTutorial = { ...tutorial };
    //   this.message = "";
    // },
  },
  mounted() {
    WordDataServiceEXP.getAll().on("value", this.onDataChange); 
  },
  beforeDestroy() {
    // WordDataServiceEXP.getAll().off("value", this.onDataChange);
  }
};






</script>

<style scoped>
.section {
  padding: 2em 0;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-up-enter,
.fade-up-leave-to {
  height: 0;
  transform: translateY(30px);
  opacity: 0;
}

</style>>

