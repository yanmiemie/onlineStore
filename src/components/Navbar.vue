<template>
  <div class="navbar">
      <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
 
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/wordList" class="nav-link">尖石.泰雅族語</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/wordList" class="nav-link">文化課程札記</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/todoList" class="nav-link">文化素養</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link to="/imgList" class="nav-link">IMG-List</router-link>
            </li> -->
            <li class="nav-item">
              <router-link to="/UpLoadFile" class="nav-link">教案列表</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/FileZone" class="nav-link">檔案上傳</router-link>
            </li> 

            <li class="nav-item"> 
              <a
                 href="https://www.facebook.com/Nahuy5841004"
                class="bg-blue-500 hover:bg-blue-400 
                       text-white font-bold py-2 px-2 mx-2
                       border-b-4 border-blue-700 
                       hover:border-blue-500 rounded">
                        FaceBook.粉專
              </a>
            </li>

            <li class="nav-item"> 
              <a
                 href="https://www.facebook.com/Nahuy5841004"
                class="bg-yellow-500 hover:bg-yellow-400 
                       text-black font-bold py-2 px-2 mx-2
                       border-b-4 border-yellow-700 
                       hover:border-yellow-500 rounded">
                       尖石.泰雅實驗教育.成功專案
              </a>
            </li>

            <li class="nav-item"> 
              <a
                 href="http://songlaaa.xyz/"
                class="bg-red-500 hover:bg-red-400 
                       text-white font-bold py-2 px-2 mx-2
                       border-b-4 border-red-700 
                       hover:border-red-500 rounded">
                       近期課表動態
              </a>
            </li>

            
<!--             
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/news" class="nav-link">News</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/stores" class="nav-link">Stores</router-link>
            </li> -->
            
            </ul>

            <form class="form-inline my-2 my-lg-0">
              <a class="btn btn-outline-success my-2 my-sm-0" type="submit" data-toggle="modal" data-target="#login" v-show="isLogin == 'no'">登入/註冊</a>
              <a class="btn btn-outline-success my-2 my-sm-0" @click="logout()" v-show="isLogin == 'yes'">登出</a>
            </form>

            <a class="nav-link" @click="gomenber"><span>會員中心</span></a>

        </div>
    </nav>
  </div>
</template>
 
<script>
import {fb, db} from '../firebase';

export default {
  name: 'Navbar',
  props: {
    msg: String
  },
  data(){
    return{
      name:null,
      level:null,
      isLogin:'no', 
    }
  },
  methods:{
    logout(){ 
      //會員登出
      fb.auth().signOut()
        //會員登出通知
        .then(() => { 
          Swal.fire({
          position: 'top-end',
          icon: 'info',
          title: 'you are already logged out',
          showConfirmButton: false,
          timer: 1500
        });
        })
        .catch((err) => { 
          console.log(err); 
        });
    },
 
    gomenber(){
      //登入後才可到會員中心
      let user = fb.auth().currentUser;
      if (user !== null) {
        this.$router.replace('user');
      } else {
      //未登入提醒
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Please Login or Register!',
          showConfirmButton: false,
          timer: 2000
        });
      }
    },
  },
  created(){
    // 由firebase的Authentication中取得使用者
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLogin = 'yes';
      }
    });
  }
}
</script>
 
<style scoped lang="scss">
  @media (min-width: 992px) { 
    .navbar.custom-nav{
      padding-top:16px;
      padding-bottom:16px;
      background-color: #d9d6b5 !important;
    }
   }
</style>