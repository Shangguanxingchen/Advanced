<template>
  <div id="main">
    <ul class="items-list">

      <!-- <router-link :to="'/detail/'+item.id" tag="li" class="panel" v-for="item of items" :key="item.id"> -->
      <router-link :to="{
          name: 'Detail',
          params: {
              id: item.id
            }
        }" tag="li" class="panel" v-for="item of items" :key="item.id">
        <img :src="item.cover" alt class="cover" />
        <div class="name">{{item.name}}</div>
        <div class="price">{{item.price|price}}</div>
      </router-link>

    </ul>

    <div class="pagination-container">
      <KPagination :page="page" :total="total" :prepage="prepage" @change="changePage" />
    </div>
  </div>
</template>

<script>
import {getItems} from '@/api';
import price from '@/filters/price';
import KPagination from '@/components/KPagination';

// let obj = {
//   'a-b': 1,
// }

export default {
    name: 'Main',
    data() {
        return {
            items: [],
            page: 1,
            total: 0,
            prepage: 8
        }
    },
    filters: {
        price
    },
    components: {
      KPagination
    },
    async created() {

        let isLogin = !!localStorage.getItem('token');

        if (!isLogin) {
          this.$router.push({name: 'Login'});
        } else {
          await this.getItems();
        }
        
    },

    watch: {
      async $route() {
        console.log('变了');
        await this.getItems();
      }
    },

    methods: {
      async changePage(p) {
        this.$router.push({
          name: 'Main',
          query: {
            page: p
          }
        });
      },

      async getItems() {
        this.page = Number(this.$route.query.page) || 1;
          let {data: {items, page, prepage, total}} = await getItems({
              page: this.page,
              prepage: this.prepage
          });

          this.items = items;
          this.page = page;
          this.total = total;
          this.prepage = prepage;
      }
    }
}
</script>