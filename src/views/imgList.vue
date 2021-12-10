
<template>
  <div class="about"> 
    <Navbar></Navbar>

     

    <div class="m-20">
      
      
  <h2>Here-Here </h2>
<progress value="0" max="100" id="uploader">0%</progress>
<br>
<input type="file" value="upload" id="uploadBtn"><br>
<button class="bg-gray-200 p-2 m-2 rounded-full " id="downloadBtn">download</button><br>
<button class="bg-red-200  p-2 m-2 rounded-full " id="deleteBtn">delete</button><br>
<div class="bg-gary-200 " id="fileImg">fileImg</div><br>
<div id="msg"></div>

<hr>
  <input type="file" @change="imageLoaded">
  <img v-if="image" :src="image" width="200"/> 
  <button @click="upload">
    Upload
  </button>

  <hr>
  {{ image}}


  
   </div> 

  </div>
</template>


<script>

 
//   var firebaseConfig = {
//      apiKey: "AIzaSyBfGRf3rz_p6R21JDLYjpYjXjwKrLaHb8c",
//   authDomain: "nm-tayal.firebaseapp.com",
//   databaseURL: "https://nm-tayal-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "nm-tayal",
//   storageBucket: "nm-tayal.appspot.com",
//   messagingSenderId: "816237299811",
//   appId: "1:816237299811:web:507e570a2200ce90dd1056",
//   measurementId: "G-FD3QSMYTP3"
//   };

// const db = firebase.initializeApp(firebaseConfig);



// const uploader = document.getElementById("uploader");
// const uploadBtn = document.getElementById("uploadBtn");
// const downloadBtn = document.getElementById("downloadBtn");
// const fileImg = document.getElementById("fileImg");
// const msg = document.getElementById("msg");

// let fullPath;  // 填入容器
// let name;

// uploadBtn.addEventListener("change", event => {
//   msg.textContent = "";

//   // 取得檔案資訊
//   const file = event.target.files[0];

//   // 路徑包含檔案名稱給.ref指向正確位置
//   fullPath = file.name;

//   // 檔案名稱在下載時會用到
//   name = file.name;

//   // 取得 storage 中對應的位置
//   const storageReference = firebase.storage().ref(fullPath);

//   // .put() 方法把東西丟到該位置裡
//   const task = storageReference.put(file);

//   // .on()監聽並連動 progress 讀取條
//   task.on(
//     "state_changed",
//     function progress(snapshot) {
//       let uploadValue = snapshot.bytesTransferred / snapshot.totalBytes * 100;
//       uploader.value = uploadValue;
//     },
//     function error(err) {
//       msg.textContent = "上傳失敗";
//     },
//     function complete() {
//       msg.textContent = "上傳成功";
//     }
//   );
// });

// downloadBtn.addEventListener("click", () => {
//   // 取得 storage 中對應的檔案位置
//   const fileRef = firebase.storage().ref(fullPath);
  

  
//   // .ref 指向已存在 storage 中的檔案位置後 可以透過 getDownloadURL 取得連結
//   fileRef.getDownloadURL().then(function(url) {
//     msg.textContent = "下載中" + url;
//     fetch(url)
//       .then(res => res.blob())
//       .then(blob => {
//         console.log(blob)
//         let a = document.createElement("a");
      
//         // 用 createObjectURL 將 blob 創建一個我們本地端瀏覽器中的 URL 對象
//         let url = window.URL.createObjectURL(blob);
//         a.href = url;
//         a.download = name;

//         // Firefox 需要將 JS 建立出的 element appendChild 到 DOM 上才可以 work
//         a.style.display = "none";
//         document.body.appendChild(a);

//         a.click();

//         // 刪除多餘的 DOM 與 釋放記憶體
//         document.body.removeChild(a);
//         window.URL.revokeObjectURL(url);
//       });
//   });
// });






// import { WordDataServiceEXP } from "../services/TodoService";
import { WordDataServiceEXP } from "../services/imgService";
// import TutorialDetails from "./WordMdf"; // 連接至 Mdf 的部分
// import {fb} from '../firebase';

// const uploader = document.getElementById("uploader");
// const uploadBtn = document.getElementById("uploadBtn");
// const msg = document.getElementById("msg");

export default {
  name: "tutorials-list",
  components: {   },
  data() {
    return {

      preview: null,
      image: null,
      preview_list: [],
      image_list: [],

      files: [],
    input: null,

       
      getIMG_name: 'null',
      showModal:false,
      todos: [], 
      


      newTodo:{ 
        text:"",
        },

      tempDt: {
        temp_key:"",
        temp_text:"",
        }, 
      currentDt:[],
    };
  },
  methods: {   
    fileSelected(e) {
       console.log("event")

      // const file = e.target.files.item(0);
      // const reader = new FileReader();
      // reader.addEventListener('load', this.imageLoaded);
      // reader.readAsDataURL(file);
    },
    imageLoaded(e) {
      this.image = e.target.result;
    },

 removeFile(index) {
      this.files.splice(index, 1)
    },
    
    showUpload() {
      // const event = new MouseEvent('click', {
      //   'view': window,
      //   'bubbles': true,
      //   'cancelable': true
      // });
      console.log("event")
      // this.input.dispatchEvent(event)
    },
onFileSelection() {
      
      // add all selected files
      for (let file of this.input.files) {
        this.files.push({ name: file.name })
      }
      
      // reset file input
      this.input.value = null;
    },
   
 previewImage(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    // previewMultiImage(event) {
    //   var input = event.target;
    //   var count = input.files.length;
    //   var index = 0;
    //   if (input.files) {
    //     while(count --) {
    //       var reader = new FileReader();
    //       reader.onload = (e) => {
    //         this.preview_list.push(e.target.result);
    //       }
    //       this.image_list.push(input.files[index]);
    //       reader.readAsDataURL(input.files[index]);
    //       index ++;
    //     }
    //   }
    // },
    // reset() {
    //   this.image = null;
    //   this.preview = null;
    //   this.image_list = [];
    //   this.preview_list = [];
    // },
     
 // uploadFile new f in to Todos
    uploadFile(){
      //取得檔案資訊
      const file = event.target.files[0];

      // 路徑包含檔案名稱給.ref指向正確位置
      fullPath = file.name;

      // 檔案名稱在下載時會用到
      name = file.name;

      // 取得 storage 中對應的位置
      // const storageReference = firebase.storage().ref(fullPath);


      const storageReference = WordDataServiceEXP.getST().ref(fullPath);
      // .put() 方法把東西丟到該位置裡
      const task = storageReference.put(file);

      // .on()監聽並連動 progress 讀取條
      task.on(
        "state_changed",
        function progress(snapshot) {
          let uploadValue = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          uploader.value = uploadValue;
        },
        function error(err) {
          msg.textContent = "上傳失敗";
        },
        function complete() {
          msg.textContent = "上傳成功";
        }
      );

    },
    
     // Push new post in to Todos
    addTodo(){
      WordDataServiceEXP.create(this.newTodo)
      this.newTodo.text = ''

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


</style>>

