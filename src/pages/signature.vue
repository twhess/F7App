//https://www.npmjs.com/package/vue-signature-pad
<template>

<f7-page name="signature">
<f7-list>
<f7-list-item link="/" title="Home"></f7-list-item>
</f7-list>
  <div id="app">
    <VueSignaturePad width="500px" height="500px" ref="signaturePad" />

    <div>

      <button @click="save">Save</button>
      <button @click="undo">Undo</button>
      <button @click="clear">Clear</button>
    </div>
  </div>
    </f7-page>
</template>
<script>

export default {
  name: 'MySignaturePad',
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    clear(){
    this.$refs.signaturePad.clearSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();

      console.log(isEmpty);
      console.log(data);


    }
  }
};



</script>
