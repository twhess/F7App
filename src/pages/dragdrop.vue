//https://learnvue.co/2020/01/how-to-add-drag-and-drop-to-your-vuejs-project/

<style scoped>
  .drop-zone {
    background-color: #eee;
    margin-bottom: 10px;
    padding: 10px;
  }

  .drag-el {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;
  }
  .active{
  background-color:red;
  }
</style>

<template>
<f7-page name="dragdrop">
<f7-list>
<f7-list-item link="/" title="Home"></f7-list-item>
</f7-list>
<!-- Top Navbar -->
<f7-navbar large>
  <f7-nav-title>Drag Drop</f7-nav-title>
  <f7-nav-title-large>Drag Drop</f7-nav-title-large>
</f7-navbar>
<!-- Toolbar-->
<ul class="flex-boxed dropzone">
 <ul class="flex-boxed dropzone">
 <li class="flex-boxed">
              <div draggable="true">DRAG ME!</div>
          </li>
          <li class="flex-boxed">
                <div draggable="true">DRAG ME2!</div>
            </li>
            </ul>
            </ul>
  <div>
    <div class='drop-zone' @drop='onDrop($event, 1)'  @dragover.prevent
      @dragenter.prevent>

      <div  class='drag-el' v-for='item in listOne' :key='item.title' draggable
        @dragstart='startDrag($event, item)' >
        {{ item.title }}
      </div>

    </div>
    <br><br>


    <div class='drop-zone'  @drop='onDrop($event, 2)'  @dragover.prevent
      @dragenter.prevent>
      <div class='drag-el' v-for='item in listTwo' :key='item.title'  draggable
        @dragstart='startDrag($event, item)'>
        {{ item.title }}
      </div>
    </div>

  </div>
  </f7-page>
</template>

<script>

export default {

computed: {
    listOne () {
      return this.items.filter(item => item.list === 1)
    },
    listTwo () {
      return this.items.filter(item => item.list === 2)
    }
},



data () {
 return {
   items: [
   {
     id: 0,
     title: 'Item A',
     list: 1
   },
   {
     id: 1,
     title: 'Item B',
     list: 1
   },
   {
     id: 2,
     title: 'Item C',
     list: 2
   }]
 }

 },
methods:{

startDrag: (evt, item) => {
console.log('Started');
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
},

onDrop (evt, list) {
console.log('Dropped');
     const itemID = evt.dataTransfer.getData('itemID')
     const item = this.items.find(item => item.id == itemID)
     item.list = list
}



}



}


</script>
