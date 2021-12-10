
<template>
  <div class="about"> 
    <Navbar></Navbar>  
    <div class="m-20">
      
       
   <div class="row">
    <div class="col-12 text-center">
      <h1 class="mb-3">Upload Image</h1>
    </div>
    <div class="col-md-5 offset-md-1">
      <h5>1. single file {{ msg }} // {{ msg2 }}</h5>
      <button class="text-gray-900 text-xl font-black 
                            m-1 px-1 py-0.5 rounded-full 
                            bg-green-500
                            hover:bg-blue-700 hover:text-gray-100  "
                  @click="uploadFile">更新</button>   

                   <button class="text-gray-900 text-xl font-black 
                            m-1 px-1 py-0.5 rounded-full 
                            bg-green-500
                            hover:bg-blue-700 hover:text-gray-100  "
                  @click="d()">刪除</button>   

                  <button class="text-gray-900 text-xl font-black 
                            m-1 px-1 py-0.5 rounded-full 
                            bg-green-500
                            hover:bg-blue-700 hover:text-gray-100  "
                  @click="g()">get</button>   


      <form>
        <div class="form-group">




          <label for="my-file">Select Image</label>
          <input type="file" 
                 accept="image/*" 
                 @change="previewImage" 
                 class="form-control-file" 
                 id="my-file">
    
          <div class="border p-2 mt-3">
            <p>Preview Here:</p>
            <template v-if="preview">
              <img :src="preview" class="img-fluid" />
              <p class="mb-0">file name: {{ image.name }}</p>
              <p class="mb-0">size: {{ image.size/1024 }}KB</p>
            </template>
          </div>
        </div>
      </form>
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
      preview: null,
      image: null,
      preview_list: [],
      image_list: [],
      msg:"執行中",
      msg2:"檔案路徑",
    };
  },
  methods: {
    g(){ 
      // .ref 指向已存在 storage 中的檔案位置後 可以透過 getDownloadURL 取得連結
      firebase.storage().ref(this.msg2).getDownloadURL().then(function(url) {
      console.log(".url==" + url); 
        });  
    }, 
    d(){ firebase.storage().ref(this.msg2).delete(); },
    previewImage: function(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          console.log(".Done...00");
          this.preview = e.target.result;
          // 進行修改...
          var blob = new Blob([e.target.result], { type: "image/jpeg" });
          // var storageUrl = 'noticias/imagenes/';
          var storageUrl ='';
          var storageRef = firebase.storage().ref(storageUrl + input.files[0].name);
          var storageRef2 = firebase.storage().ref(storageUrl + input.files[0]);
          console.warn(input.files[0]); // Watch Screenshot
          storageRef.put(input.files[0]);
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
      //取得檔案資訊
      // const file = event.target.files[0];

      // 路徑包含檔案名稱給.ref指向正確位置
      // this.image.name = file.name;

      // 檔案名稱在下載時會用到
      // name = file.name;
console.log(".put() 方法把東西丟到該位置裡" + this.image.name);
      // 取得 storage 中對應的位置
      // const storageReference = firebase.storage().ref(fullPath);
      // const storageReference = fb.storage().ref(this.image.name);


      // const storageReference = WordDataServiceEXP.getST().ref(this.image.name);
      
      // 
      // storageReference.put(this.image.name);
      const path = "/demo/" + this.image.name;
      WordDataServiceEXP.putST(path,this.image.name);
      
      console.log(".put() 方法把東西丟到該位置裡...."+ path);
      // const task = storageReference.put(this.image.name);

      // .on()監聽並連動 progress 讀取條
      // task.on(
      //   "state_changed",
        // function progress(snapshot) {
        //   let uploadValue = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        //   uploader.value = uploadValue;
        // },
        // function error(err) {
        //   this.msg.textContent = "上傳失敗";
        // },
      //   function complete() {
      //     this.msg.textContent = "上傳成功";
      //   }
      // );
 
 
  // .ref 指向已存在 storage 中的檔案位置後 可以透過 getDownloadURL 取得連結
  // storageReference.getDownloadURL().then(function(url) {
  //   this.msg2.textContent = "下載中" + url;});
      

    },
  },
  watch: {
   
  },
  // mounted() {
  //   WordDataServiceEXP.getAll().on("value", this.onDataChange); 
  // },
  // beforeDestroy() {
  //   WordDataServiceEXP.getAll().off("value", this.onDataChange);
  // }
}; 

</script>

<style scoped>


</style>>

