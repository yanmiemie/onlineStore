<template>
    <div class="footer">
        <div class="h-auto">
            <div class="row h-auto justify-content-center align-items-center">
           
            <!--footer畫面右區-->
            <div class="col-sm-12 col-md-8 m-2">
                <img src="https://firebasestorage.googleapis.com/v0/b/nm-tayal.appspot.com/o/PDF%2Ffirefish.jpeg?alt=media&token=af06762c-aa4e-433d-8c81-5d6058afc102" alt="" width="1300">
            </div>

             <!--footer畫面左區-->
            <div class="col-sm-12 col-md-2">
                <h3>盤點各校資源</h3>
                <p>新竹尖石地區的 泰雅核心素養，逐漸成形，1L.2S.3T 將是我們重要的願景</p>
                <button @click="gostores" class="btn custom-btn btn-outline-primary">
                  瞭解更多
                </button>
            </div>

            </div>
        </div>
    </div>
</template>
 
<script>
export default {
  name: "Footer",
  props: {
    msg: String
  },
  methods:{
    gostores(){
      this.$router.replace('stores');
    },
  }
};
</script>
 
<style scoped lang="scss">
  .footer{
    // padding-top: 3rem;
    width: 100%;
    // min-height: 500px;
    text-align: left;
    color: #ffffff;
    background-color:darkslategray;
  }
</style>