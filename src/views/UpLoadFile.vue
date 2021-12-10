
<template>
  <div class=""> 
     
    <div class="">
      
       
   <div class="row">
    <div class="col-12 text-center">
      <h1 class="mb-8">上傳資料</h1>
    </div>
    <div class="col-md-8 offset-md-1">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="User" name="first">User</el-tab-pane>
          <el-tab-pane label="Config" name="second">Config</el-tab-pane>
          <el-tab-pane label="Role" name="third">Role</el-tab-pane>
          <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>
      <h5>單一檔案上傳 </h5>
<!-- {{ msg }} // {{ msg2 }} -->
      
      <!-- <button class="text-gray-900 text-xl font-black 
                            m-1 px-1 py-0.5 rounded-full 
                            bg-green-500
                            hover:bg-blue-700 hover:text-gray-100  "
                  @click="uploadFile">更新</button>    -->

                     

                  <!-- <button class="text-gray-900 text-xl font-black 
                            m-1 px-1 py-0.5 rounded-full 
                            bg-green-500
                            hover:bg-blue-700 hover:text-gray-100  "
                  @click="g()">get info</button>    -->


      <form>
        <div class="form-group">  
          <input type="file"  
                 @change="previewImage" 
                 class="form-control-file" 
                 id="my-file">

          <!-- <input type="file" 
                 accept="image/*" 
                 @change="previewImage" 
                 class="form-control-file" 
                 id="my-file">
     -->
          <div class="border p-2 mt-3">
            <p>圖檔預覽:</p>
            <template v-if="preview">
              <img :src="preview" class="img-fluid" />
              <p class="mb-0">file name: {{ image.name }}</p>
              <p class="mb-0">size: {{ image.size/1024 }}KB</p>
            </template>
          </div>
        </div>
      </form>

     

<div class="grid grid-cols-2 gap-1">
  <div> 
    <form v-on:submit.prevent="addTodo"> 
      <input type="text" 
            v-model="newTodo.name" 
            placeholder="已上傳檔案名稱"
            class="px-10 m-1 py-2 rounded-full bg-gray-100 "
            />   

      <select class="bg-blue-600 m-1 p-2 text-white text-center rounded-xl" 
              v-model="newTodo.grade" >
        <option value="" disabled>請選擇年級</option>
        <option v-for="grade in grades">{{ grade }}</option>
      </select>

      <select class="bg-blue-600 m-1 p-2 text-white text-center rounded-xl" 
              v-model="newTodo.topic" >
        <option value="" disabled>請選擇主題</option>
        <option v-for="topic in topics">{{ topic }}</option>  
      </select>

      <select class="bg-blue-600 m-1 p-2 text-white text-center rounded-xl" 
              v-model="newTodo.FileType" >
        <option value="" disabled>請選擇資料類別</option>
        <option v-for="FileType in FileTypes">{{ FileType }}</option>  
      </select>

      <select class="bg-blue-600 m-1 p-2 text-white text-center rounded-xl" 
              v-model="newTodo.UseToken" >
        <option value="" disabled>權限設定</option>
        <option v-for="UseToken in UseTokens">{{ UseToken}}</option>  
      </select>

      <select class="bg-blue-600 m-1 p-2 text-white text-center rounded-xl" 
              v-model="newTodo.DocType" >
        <option value="" disabled>文件類別</option>
        <option v-for="DocType in DocTypes">{{ DocType }}</option>  
      </select>

   </form> 
  </div> 
  <div>
    <button class="text-lg text-gray-100 m-3 px-3 py-0.5 ml-4 rounded-full bg-red-400"
            v-on:click="addTodo()">確認新增</button>    
            <button class="text-gray-900 text-xl font-black 
                            m-3 px-3 py-0.5 ml-4 rounded-full 
                            bg-green-500
                            hover:bg-blue-700 hover:text-gray-100  "
                  @click="d()"> 刪除上傳資料 </button> 
  </div>
</div>

 <hr>
已上傳內容：
      <!-- <ul class="todo-list  "> -->
        <ul class="todo-list  ">
        <li v-for="todo in todos"
            class="border-2 border-gray-200 rounded-full py-1 px-4 my-2" > 
            檔案名稱：
            <input type="text" 
                    v-model="todo.name" 
                    placeholder="Add new todo"
                    class="px-10 m-1 py-1 rounded-full bg-gray-100 focus:ring-2 focus:ring-blue-600 "  />  
               
             <!-- <select class="bg-blue-600 m-1 p-2 text-white text-center rounded-xl" 
                     v-model="newTodo.grade" >
              <option value="" disabled>請選擇年級</option>
              <option v-for="grade in grades">{{ grade }}</option>
            </select>

            <select class="bg-blue-600 m-1 p-2 text-white text-center rounded-xl" 
                    v-model="newTodo.topic" >
              <option value="" disabled>請選擇主題</option>
              <option v-for="topic in topics">{{ topic }}</option>  
            </select> -->

            <button class="text-ms font-blod text-gray-100 m-1 px-3 py-0.5 ml-4 rounded-full bg-red-400"
                  @click="removeTodo(todo.key)">刪除</button>
  
            <button  class="text-ms font-blod text-gray-100 m-1 px-3 py-0.5 ml-4 rounded-full bg-blue-400"
                              @click="ReadFile(todo.name)"> 前往</button>
                   

            <button class="bg-green-500 text-gray-900  text-ms font-blod 
                          m-1 px-3 py-0.5 ml-4 rounded-full 
                          hover:bg-green-700 hover:text-gray-100  "
                  @click="updateTodo(todo.key,todo)">更新</button>   
        </li> 
      </ul> 
    </div>
    
    <!-- <div class="col-md-5">
      <h5>2. multiple file</h5>
      <form>
        <div class="form-group">
          <label for="my-file">Select Image</label>
          <input type="file" accept="image/*" multiple="multiple" @change="previewMultiImage" class="form-control-file" id="my-file">
    
          <div class="border p-2 mt-3">
            <p>Preview Here:</p>
            <template v-if="preview_list.length">
              <div v-for="item, index in preview_list" :key="index">
                <img :src="item" class="img-fluid" />
                <p class="mb-0">file name: {{ image_list[index].name }}</p>
                <p>size: {{ image_list[index].size/1024 }}KB</p>
              </div>
            </template>
          </div>
        </div>
      </form>
    </div> -->  
   </div> 
  </div>
</div> 
</template>


<script>
import { WordDataServiceEXP } from "../services/imgService";
import firebase from 'firebase/app';
// import TutorialDetails from "./WordMdf"; // 連接至 Mdf 的部分
// import {fb} from '../firebase';
export default {
  name: "tutorials-list",
  components: {   },
  data() {
    return {

       activeName: 'first',

      showModal:false,
      todos: [], 
      UURL:"",   
 
      topics:    ['山林生態','燒墾','河流生態','入倉祭','收割祭','播種祭','祖靈祭','部落社會','遷徒史','建築','竹籐籐編','樂舞','播種祭','照顧小米','編織','狩獵',],
      grades:    ['1年級', '2年級', '3年級','4年級', '5年級', '6年級'],
      FileTypes: ['Youtube連結', '聲音檔', 'PDF文件','PPT投影片', '其他', '機密文件'],
      UseTokens: ['限校內使用', '可開放校外', '正在編輯中', '封存停用'],
      DocTypes:   ['教案','影片紀錄','計畫書','公用空白文件','教學札記','校內活動','校外比賽','校外參訪'],
      
      selected: '',

      newTodo:{  
          topic:"",
          grade:"",
          FileType:"",
          UseToken:"",
          Type:"",
          DocType:"",
          name:"",
          pxNote:"",
          creatDateTime:"",
          }, 

      preview: null,
      image: null,
      preview_list: [],
      image_list: [],
      msg:"執行中",
      msg2:"檔案路徑",
    };
  },
  methods: {
    ReadFile(key){  
      firebase.storage().ref(key).getDownloadURL().then(function(url) {
          console.log(".ReadFile ==" + url);  
          location.href=url;
           
         
          
      })
    }
    ,
    g(){  // .ref 指向已存在 storage 中的檔案位置後 可以透過 getDownloadURL 取得連結
          firebase.storage().ref(this.msg2).getDownloadURL().then(function(url) {
          console.log(".url==" + url);  
          let URL = url

          this.UURL = URL;
       });  
    }, 
    d(){  firebase.storage().ref(this.msg2).delete();
    },
    previewImage: function(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          console.log(".Done...00");
          this.preview = e.target.result;
          // 進行修改...
          // var blob = new Blob([e.target.result], { type: "image/jpeg" });
          // var storageUrl = 'noticias/imagenes/';
          var storageUrl ='';
          var storageRef = firebase.storage().ref(storageUrl + input.files[0].name);
          // var storageRef2 = firebase.storage().ref(storageUrl + input.files[0]);
          console.warn(input.files[0]); // Watch Screenshot
          storageRef.put(input.files[0]);
          this.newTodo.name = storageUrl + input.files[0].name;
          this.msg2 = storageUrl + input.files[0].name; 
          console.log(".msg2..." + this.msg2 ); 
          this.setTimeoutFun(); 
        };
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]); 
        console.log(".Done...2");  
      }
    },
    setTimeoutFun() { 
      this.timeOutProcessId = setTimeout(() => {
        this.g();
        
        
        // this.addTodo();
      }, 3000);
      // 在 三秒後 顯示
      // this.timeOutRefresh = window.setInterval(() => {
      //   console.log('每五秒要做的事');
      // }, 5000);
    },  
    previewMultiImage: function(event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      if (input.files) {
        while(count --) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          }
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index ++;
        }
      }
    },
    reset: function() {
      this.image = null;
      this.preview = null;
      this.image_list = [];
      this.preview_list = [];
    },
    uploadFile(){ 
      console.log(".put() 方法把東西丟到該位置裡" + this.image.name); 
      const path = "/demo/" + this.image.name;
      WordDataServiceEXP.putST(path,this.image.name); 
      console.log(".put() 方法把東西丟到該位置裡...."+ path);  
    },
    addTodo(){ 
      
      // this.newTodo.pxNote = this.msg2;
      WordDataServiceEXP.create(this.newTodo);

      // 這邊是設定後 歸零。
      // this.newTodo.name = "";
      // this.newTodo.pxNote = "";
      // this.newTodo.DocType = "";
      // this.newTodo.grade = "";
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
    onDataChange(items) {
        let _tutorials = []; 

        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          _tutorials.push({
            key: key,  
            name   : data.name, 
            pxNote :data.pxNote, 

            topic: data.topic,
            grade: data.grade,   
            DocType:data.DocType,
          });
        });
        this.todos = _tutorials; 
    },  

  },
  watch: {
   
  },
  mounted() {
    WordDataServiceEXP.getAll().on("value", this.onDataChange); 
  },
  beforeDestroy() {
    WordDataServiceEXP.getAll().off("value", this.onDataChange);
  }
}; 

</script>

<style scoped>


</style>>

