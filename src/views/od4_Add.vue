
<template>
  <div class="about"> 
    <Navbar></Navbar>  
        <div class="m-20">
        
            <div id="todo">
                <h4>客戶清單建立中   </h4> 


                <div id="todolistApp">
                        <h1>To-Do List</h1>
                        <div class="todoInputSection">
                            <!--prevent 提交不重載頁面-->
                            <form @submit.prevent="submitHandler">
                                <input 
                                        type="text" 
                                        placeholder="Add new todo" 
                                        v-model.trim="newTodo" 
                                        @input="inputTyping" 
                                        @keyup.esc="editCancel"					 
                                        />
                                <span v-if="editOption">
                                    <button class="doneBtn" @click="editDone()">Done</button>
                                    <button class="cxlBtn" @click="editCancel">Cxl</button>
                                </span>
                                <p class="inputWarning" v-html="warningLabel" :class="{emptyWarning: redWarning}"></p>
                            </form>
                            <button class="addBtn" @click="submitHandler">Add</button>
                            <div class="title">
                                <h2>List:</h2>
                                <span>Date:</span>
                            </div>
                            <hr>
                        </div>

                        <ul class="todo-list">
                            <li v-for="(todo,idx) in todos">
                                <div class="todo">
                                    <p>
                                        {{todo.newTodo}}
                                        <span class="idx">{{idx}}</span>
                                    </p>
                                    
                                </div>
                                <!--如果用 {{}} 做資料綁定，HTML TAG 無法作用，必須改用 v-html -->
                                
                                <span class="date" v-html="getTime(todo.newTime)"></span>
                                <button class="editBtn" @click="editHandler(idx)">Edit</button>
                                <button class="deleteBtn" @click="removeHandler(idx)">Del</button>
                            </li>
                        </ul>
                        <button @click="testt()">Test</button>
                    </div>


            </div>
        </div>
  </div>
  
</template>


<script>
import { TodoService } from "../services/TodoService";
  

  

// import {fb, db, datab} from '../firebase';
// import TutorialDetails from "./WordMdf"; // 連接至 Mdf 的部分

// 這邊理解安排，看看todoList 相關參考的範例。
// https://codepen.io/Jasonjam/pen/WPBbGG


export default {
  name: "tutorials-list",
  components: {   },
  data() {
    return {
        todos: [],
		newTodo: '',
		editOption: false,
		tempKey:'',
		warningLabel: '',
		redWarning: false,
 
        // - - - - - - 
    };
  }, 
	methods: {
		testt(){
			console.log(this.getDate(todo.time))
		},		
		// 把 Warning關閉 (inputWarning)
		inputTyping(){
			this.warningLabel = '';
			this.redWarning = false;
		},
		// Push new post(newTodo) in to Todos
		submitHandler() {
			// Empty input can't be submit
			if (	this.newTodo.length == 0 
				 || this.newTodo.length == ""
				 || this.redWarning == "true"
			){ 
				this.warningLabel = 'Todo can not be empty!';
				this.redWarning = true;
				return
			}
			// Main Function
			else{
				let newTodoList = {
					newTodo : this.newTodo, // new post
					newTime: firebase.database.ServerValue.TIMESTAMP, // Date 
				};
				TodoService.getAll().push(newTodoList)
				this.newTodo = '';
				this.warningLabel = '';
				this.redWarning = false;
			}
		},
		
		editHandler(idx){
			// 按鈕開啟
			this.editOption = true;
			this.tempKey = idx; // editHandler(idx)參數取出，存進tempKey裡
			console.log("editHandler.idx is",idx); // 測試現在的idx參數(被選取到的idx)
			// edit 主要程式碼 開始:
			TodoService.getAll().once('value', (snapshot) => {
				var todos = snapshot.val();
				// "this.newTodo" 是 "v-model"綁定的欄位(v-model="newTodo")
				this.newTodo = todos[idx].newTodo; // edit 主要程式碼 結束.
				this.redWarning = false;
				this.warningLabel = " 'Done' to finish edit " // inputWarning 警告視窗
				this.$refs.newTodo.focus();
			});
		},
		
		editDone(){
			var idx = this.tempKey; // 把tempKey的參數內容，塞回 idx 要給下面的child(idx)用
			var editOfTodo = this.newTodo;
			console.log("idx is ",idx); // 測試 選取到的idx
			if( editOfTodo == '' ){
				return
			}else{
				TodoService.getAll().child(idx).update({
					newTodo: editOfTodo
				}, function(error) {
					console.log(error);
				});
			};

			this.newTodo = ''; // input clean
			this.editOption = false; // close button
			this.warningLabel = ''; // close warning
		},

		editCancel(){
			this.newTodo = '';
			this.editOption = false;
			this.warningLabel = '';
		},
		// Remove child based on key - firebase function
		removeHandler(idx) {
			// 防止 edit中 可以 del , 輸入框裡有資料時，無法刪除任何一筆資料
			if (			this.newTodo.length != 0 
				 || this.newTodo.length != ""
				){
				return	
			}else{
				let target = this.todos[idx];
				// child(idx) 的 idx = @click="removeHandler(idx)"
				if (confirm(`Do you want to Del this \n" ${target.newTodo} " ?`)) {
					TodoService.getAll().child(idx).remove()
				}
			}
		},

		getTime(newTime) {
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
	},
	
	mounted() {
		// Watch for value changes on Todos, set todoList.todos property as the value
		TodoService.getAll().on('value', (snapshot) => {
			todoList.todos = snapshot.val();
		})
	},
   
  watch: {
     
   
  },
  computed: {
   
  },
//   mounted() {
    // this.g=this.getTime();
    // WordDataServiceEXP.getAll().on("value", this.onDataChange); 
//   },
//   beforeDestroy() {
    // WordDataServiceEXP.getAll().off("value", this.onDataChange);
//   }
}; 

</script>
 

