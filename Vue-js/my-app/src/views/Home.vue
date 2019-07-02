<template>
  <div class="home">
    
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Action } from 'vuex-class';

  export default class Home extends Vue {
    //ts  继承vue
    private cate: string = 'in_theaters';
    private active: number = 0;
    private loading: boolean = true;
    private movieListData = null;
    @Action private movieList!: (cate: string) => any;

    private created() {
      // console.log();
      this.movieList(this.cate)
        .then((res: any) => {
          this.movieListData = res.subject;
          this.loading = false;
          console.log(res.subject);
          //豆瓣返回的数据
        })
    }
  }
</script>
