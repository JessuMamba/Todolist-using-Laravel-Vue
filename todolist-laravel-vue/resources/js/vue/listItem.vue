<template>
    <div class="item">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="isTemplateElement.completed"
            />
            <span :class="[item.completed ? 'completed' : '', 'itemText']">{{ item.name }} </span>
            <button @click="removeItem()" class="trashcan" >
                <font-awesome-icon icon="trash" />
            </button>
    </div>
</template>

<script>
import axios from 'axios';
// import { response } from 'express';

export default {
    props: ['item'],
    methods: {
        updateCheck() {
            axios.put('api/item/' + this.item.id, {
                item: this.item
            } )
            .then( response => {
                if( response.status == 200) {
                    this.$emit('itemchanged');
                }
            })
            .catch( error => {
                console.log( error );
            })

        },
        removeItem() {
            axios.delete('api/item/' + this.item.id)
            .then( response => {
                if( response.status == 200 ) {
                    this.$emit('itemchanged');
                }
            })
            .catch ( error => {
                console.log( error );
            })
        }
    }
}
</script>

<style scoped>
.completed{
    text-decoration: line-through;
    color: gray;
}
.itemText{
    width: 100px;
    margin-left: 20px;
}
.item{
    display: flex;
    justify-content: center;
    align-items: center;
}
.trashcan{
    background: crimson;
    border: none;
    color: green;
    outline: none;
}
</style>