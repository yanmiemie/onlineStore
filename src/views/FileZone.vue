<template>
  <div class="user">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
          <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
              <i class="fas fa-bars"></i>
          </a>
          <nav id="sidebar" class="sidebar-wrapper">
              <div class="sidebar-content">
                  <!--sidebar-brand-->
                  <div class="sidebar-item sidebar-brand">
                      <a href="#">教案相關列表</a></a>
                      <!--收合按鈕-->
                      <div id="close-sidebar" @click="closeMenu">
                          <i class="fas fa-times"></i>
                      </div>
                  </div>
                  <!--sidebar-header-->
                  <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                     
                  </div>
                  <!--sidebar-menu-->
                  <div class=" sidebar-item sidebar-menu">
                      <ul>
                          <li class="header-menu">
                            <span>MEAU</span>
                          </li> 
                          <li>
                            <router-link to="/">
                                <i class="fa fa-home"></i>
                                <span>返回首頁</span>
                            </router-link>
                          </li>
                           <li>
                            <router-link to="/FileNameRule">
                                <i class="fa fa-home"></i>
                                <span>教案分類規則說明</span>
                            </router-link>
                            <router-link to="/UpLoadFile">
                                <i class="fa fa-home"></i>
                                <span>上傳資料</span>
                            </router-link>
                          </li>                    
                      </ul>
                      
                  </div>
                  <!--sidebar-menu-->
              </div>
          </nav>
          <!--page-content--> 
          <main class="page-content">  
             <router-view></router-view>
          </main>
          <!--page-content"-->
      </div>
    <!--page-wrapper-->
  </div>
</template>
 
 <!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import {fb, db} from '../firebase';

export default {
  name: 'user',
    data(){
    return{
      email:null, 
      radio: 3
    }
  },
  
  methods:{
    closeMenu(){
      $(".page-wrapper").toggleClass("toggled");
    },

    logout(){ 
      fb.auth().signOut()
      //點選登出之後來到首頁頁面
      .then(() => { 
          this.$router.replace('/'); 
      })
      .catch((err) => { 
          console.log(err); 
      });
    },
  },
  created(){
    // 由firebase的Authentication中取得使用者email
    let user = fb.auth().currentUser;
    this.email = user.email;
  }
}
</script>
 
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>