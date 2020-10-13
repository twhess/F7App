<template>
 <f7-page name="viewdevice">
   <!-- Top Navbar -->
   <f7-navbar large>
     <f7-nav-title>View Device</f7-nav-title>
     <f7-nav-title-large>View Device</f7-nav-title-large>
   </f7-navbar>
   <!-- Toolbar-->
   <f7-toolbar bottom>
     <f7-link>Left Link</f7-link>
     <f7-link>Right Link</f7-link>
   </f7-toolbar>
   <!-- Page content-->
   <f7-list>
   <f7-list-item link="/" title="Home"></f7-list-item>
   </f7-list>
   <f7-block strong>
     <p>Here is your blank Framework7 app. Let's see what we have here.</p>
   </f7-block>

<ul>Test
<li v-for="post in posts" v-text="">{{post.id}}-{{post.name}}
</li>

</ul>


 </f7-page>


</template>

<script>

export default {

   mounted() {

 axios.get('https://app.truckserviceco.com/api/devices',  {headers: {
   'Accept': 'application/json',
   'Content-Type':'application/json'}
 }).then(response => this.posts = response.data.data).catch(function(error){console.log(error)});

 //.then(response => console.log(response))
//.then(response => this.posts = response.data.data)
     this.$f7ready((f7) => {



       //f7.dialog.alert('Component mounted');


     });
   },
   data: function(){
       return{
           posts: null,
             }
   }
 };
</script>




</script>
