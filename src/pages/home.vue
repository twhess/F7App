<style>
.container {  display: grid;  grid-template-columns: repeat(5, 1fr);  gap: 10px;}.box {  border: 3px solid #666;  background-color: #ddd;  border-radius: .5em;  padding: 10px;  cursor: move;}
</style>

 <template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar large>
      <f7-nav-title>Home</f7-nav-title>
      <f7-nav-title-large>Home</f7-nav-title-large>
    </f7-navbar>
    <!-- Toolbar-->
    <f7-toolbar bottom>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>
<div class="container">  <div draggable="true" class="box">A</div>  <div draggable="true" class="box">B</div>  <div draggable="true" class="box">C</div></div>    <f7-list>
    <f7-list-item link="/viewdevice/" title="View Device"></f7-list-item>
<f7-list-item link="/signature/" title="Sig Page"></f7-list-item>
<f7-list-item link="/dragdrop/" title="Drag Drop Page"></f7-list-item>
    </f7-list>

    <f7-block strong>
    <a class="link external"  href="http://maps.google.com/?q=453+e+troy+pike+covington+oh" target="_blank">Map Link</a>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>
<ul>Test
<li v-for="post in posts" v-text="post.name">
</li>

</ul>


  </f7-page>


</template>

<script>

export default {

    mounted() {

//  axios.get('https://app.truckserviceco.com/api/devices',  {headers: {
  //  'Accept': 'application/json',
  //  'Content-Type':'application/json'}
//  }).then(response => this.posts = response.data.data).catch(function(error){console.log(error)});

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
