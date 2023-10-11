<template>
    <div>
      <h1>{{ responseData.title }}</h1>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        responseData: {}
      };
    },
    mounted() {
      axios.get('https://nswb-dev.lamy.pw/thanakorn/v0/settings')
        .then(response => {
          this.responseData = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  </script>
  