<template>
  <!-- class="todo-main" -->
 <div class="ml-0 p-0 rounded-[2px] border border-[#ccc] "  >   
     <ListItem 
     v-for="todoObj in todos" 
     :key=todoObj.id 
     :todo="todoObj" >
    </ListItem>
  </div>  
</template>

<script>
import ListItem from './ListItem'
export default{
 name:'ListTodo',
 components: {
   ListItem
  },
  props:['todos']
}
</script>
  
<style scoped>
    /*main*/
    /* .todo-main {
      margin-left: 0px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 0px;
    } */
    /* .todo-empty {
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding-left: 5px;
      margin-top: 10px;
    } */
</style>
