<template>
    <div class="header">
        <div class="container h-auto">
          <div class="row h-auto justify-content-center align-items-center">
            <!--header畫面左區-->
            <div class="col-sm-12 col-md-3">
              <div class="header-content">
                <h1 class="header-title">
                  羊咩咩
                </h1>
                <p>嘉興＆義興 一同傳承，新竹尖石地區的泰雅文化，點點滴滴將記錄於此.</p>

                
                <div class="header-btn mt-3">
                    <button @click="goabout" class="btn custom-btn btn-info mr-4">
                        進入教室
                    </button>
                      <!-- <button @click="goproducts" class="btn custom-btn btn-outline-secondary">
                        Products
                      </button> -->
                </div>
              </div>
            </div>
            <!--header畫面右區-->
            <div class="col-sm-12 col-md-8 mt-3">
                <div class="graphic">
                    <img src="https://firebasestorage.googleapis.com/v0/b/nm-tayal.appspot.com/o/PDF%2F20191126%E5%9B%9B%E5%B9%B4%E7%B4%9A%E5%8C%97%E5%BE%97%E6%8B%89%E6%9B%BC%E9%81%8A%E8%A8%98_200809_3-1140x570.jpeg?alt=media&token=86be97de-e950-4b0f-8a93-d6570809e899" 
                         alt="" width="1200">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>
 
<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  methods:{
    goabout(){
      this.$router.replace('about');
    },
    goproducts(){
      this.$router.replace('products');
    },
  }
};
</script>
 
<style scoped lang="scss">
  .header{
    
    width: 100%;
    // min-height: 500px;
    text-align: left;
    background-color:rgb(46, 153, 163);
  }
</style>