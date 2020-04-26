<template>
  <nav class="nav_mobile">
    <v-row class="bar d-flex align-center">
      <v-col>
        <v-btn text @click="handleDrawer()">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-end align-center">
        <v-autocomplete
          v-model="values"
          label="Search"
          :items="items"
          solo
          rounded
          dense
          chips
          small-chips
          hide-details
          hide-no-data
          light
        ></v-autocomplete>
      </v-col>
    </v-row>
    <div class="nav-bg" v-if="navDrawer" @click="handleDrawer"></div>
    <div 
      class="nav"
      :class="{'show':navDrawer}"
      transition="slide-x-transition"
    >
      <v-list-item-group color="#01040b">
        <div style="padding-top: 2rem" ></div>
        <v-list-item v-for="(item, index) in navItems" :key="index" :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium white--text">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user_profile: null,

      navDrawer: false,
      mini: true,
      active: false,
      navItems: [
        { path: '/' , text: 'Movie', icon: 'fas fa-wallet' },
        { path: '/tvshows' , text: 'TV Show', icon: 'fas fa-list' },
        { path: '/actors' , text: 'Actors', icon: 'fas fa-arrow-up' },
      ]
    }
  },
  methods: {
    handleDrawer() {
      this.navDrawer = !this.navDrawer;
    },
    handleSignout() {
      this.$store.dispatch('users/handleLogout');
    },
  }
}
</script>

<style lang="less" scoped>
  .bar {
    background: #01040b!important;;
    height: 60px;
    width: 100vw;
    margin: 0;
  }
  .nav-bg {
    width: 100vw;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    z-index: 8;
  }
  .nav {
    width: 0;
    min-height: 100vh;
    background: #1A1E27;
    position: absolute;
    z-index: 9;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
  }
  &.show {
    width: 60%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1199px){
    .nav_mobile {
      display: none!important;
    }  
  }
  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    .nav_mobile {
      display: none!important;
    }  
  }
  @media only screen and (max-height: 500px) {
    .nav_mobile {
      display: none!important;
    }    
  }
  @media only screen and (min-width: 1920px) {
    .nav_mobile {
      display: none!important;
    } 
  }
</style>