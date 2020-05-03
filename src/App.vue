<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-btn v-show="isChanged" class="mx-2" fab @click="saveLocal">
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-sheet width="800" height="600" elevation="3">
              <textarea class="textspace" :maxlength="charPageLimit" v-model="currentPage"></textarea>
              <div id="the-count">
                <span>{{pageIndex+1}}/{{pages.length}}</span>
              </div>
            </v-sheet>
          </v-col>
          <v-col>
            <v-row>
              <v-btn class="mx-2" fab small @click="addPage">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-row>
            <v-row>
              <v-btn v-show="pages.length>1" class="mx-2" fab small @click="deletePage">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </v-row>
            <v-row>
              <v-btn v-show="pageIndex>0" class="mx-2" fab small @click="movePage('back')">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </v-row>
            <v-row>
              <v-btn
                v-show="pageIndex+1<pages.length"
                class="mx-2"
                fab
                small
                @click="movePage('next')"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-snackbar v-model="snackbar" :top="true" :timeout="500" color="success">Saved!</v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    pages: [""],
    pageIndex: 0,
    isChanged: false,
    charPageLimit: 2250,
    //spaceFillerVar: "          ",
    snackbar: false
  }),
  mounted: function() {
    this.loadFromLocal();
  },
  computed: {
    currentPage: {
      cache: false,
      get: function() {
        return this.pages[this.pageIndex];
      },
      set: function(newValue) {
        this.pages[this.pageIndex] = newValue;
        this.isChanged = true;
      }
    }
  },
  watch: {},
  methods: {
    // fillWithSpaces: function() {
    //   this.currentPage = "";
    //   for (let i = 0; i < 225; i++) {
    //     this.currentPage += this.spaceFillerVar;
    //   }
    // },
    //changeSpaceForKey: function() {},
    addPage: function() {
      this.pageIndex = this.pages.push("") - 1;
    },
    deletePage: function() {
      this.pages.splice(this.pageIndex, 1);
      this.movePage("back");
      this.isChanged = true;
    },
    movePage: function(direct) {
      if (direct == "next") {
        if (this.pageIndex + 1 < this.pages.length) {
          this.pageIndex++;
        }
      } else {
        if (this.pageIndex - 1 >= 0) {
          this.pageIndex--;
        }
      }
    },
    saveLocal: function() {
      for (let i = 0; i < this.pages.length; i++) {
        localStorage.setItem("page" + i, this.pages[i]);
      }
      localStorage.setItem("lastPageIndex", this.pageIndex);
      localStorage.setItem("totalPages", this.pages.length);
      this.isChanged = false;
      this.snackbar = true;
    },
    loadFromLocal: function() {
      const total = localStorage.getItem("totalPages");
      if (total) {
        this.pages = [];
        for (let i = 0; i < total; i++) {
          this.pages.push(localStorage.getItem("page" + i));
        }
        this.pageIndex = +localStorage.getItem("lastPageIndex");
      }
    }
  }
};
</script>


<style scoped>
.textspace {
  /* set textarea width 100% width border-box */
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  overflow-x: hidden;
  font-family: monospace, monospace;
  white-space: break-spaces;
}
#the-count {
  float: right;
  padding: 0.1rem 0 0 0;
  font-size: 0.875rem;
}
</style>

<style>
/**
  Link
**/

a {
  color: #2098f3;
  text-decoration: none;
  word-wrap: break-word;
  cursor: pointer;
}

a:hover {
  color: #40a9ff;
  text-decoration: none;
}

/**
  Button
**/

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 0 20px;
  font-size: 14px;
  border-radius: 4px;
  height: 45px;
  line-height: 45px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  color: rgba(0, 0, 0, 0.65);
  background-color: transparent;
  border-color: #e8e8e8;
  outline: none;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-lg {
  padding: 0 30px;
}

.btn-primary {
  color: #fff;
  background-color: #2098f3;
  border-color: #2098f3;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active {
  background-color: #40a9ff;
  border-color: #40a9ff;
}

.btn-success {
  color: #fff;
  background-color: #52c41a;
  border-color: #52c41a;
}

.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active {
  background-color: #52c41a;
  border-color: #52c41a;
}

.btn-link {
  border: none;
  height: 34px;
  padding: 0 15px;
}

.btn-link:hover {
  background-color: rgba(158, 158, 158, 0.2);
}
</style>