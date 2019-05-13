<template>
  <div>
      <div style="background:#eee;padding: 20px">
          <Card :bordered="false">
              <p slot="title">No border title</p>
              <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          </Card>
      </div>
</div>
</template>

<script>
export default {
  name: 'OverallTrend',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
