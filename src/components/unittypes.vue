<template>
    <div>
        <div class="flex items-center justify-between my-2.5">
            <p class="font-bold text-lg">Unit Types</p>
            <button @click="showModal()" class="border border-green-700 bg-green-700 hover:bg-green-500 hover:border-green-500 rounded-sm text-white px-10 py-2">Add New Unit</button>
        </div>

        <!-- addnewunit start here -->
        <div class="py-2" v-if="isModalVisible">
            <Addnewunit @close='closeModal()'/>
        </div>
        <!-- addnewunit end here -->
        
        <div class="grid grid-cols-6 bg-slate-100 border border-cyan-700">
            <div class="col-span-2 flex justify-center items-center p-2">
                <p>Type</p>
            </div>
            <div class="col-span-4 flex justify-center items-center border p-2">
                <p>Details</p>
            </div>
        </div>
        <div class="grid grid-cols-6 border border-cyan-700">
            <div class="col-span-2 flex justify-center items-center border-e-2">
                <p>Computer</p>
            </div>
            <div class="col-span-4 flex flex-col justify-center ps-10 py-10 space-y-3">
                <p>Name:</p>
                <p>Model Name:</p>
                <p>Serial No.:</p>
            </div>
        </div>
        <div class="grid grid-cols-6 border border-cyan-700">
            <div class="col-span-2 flex justify-center items-center border-e-2">
                <p>Headphone</p>
            </div>
            <div class="col-span-4 flex flex-col justify-center ps-10 py-10 space-y-3">
                <p>Name:</p>
                <p>Model Name:</p>
                <p>Serial No.:</p>
            </div>
        </div>
    </div>
</template>

<script>
import Addnewunit from '../components/addnewunit.vue';
    export default {
        components: {
            Addnewunit,
        },
        data() {
            return {
                isModalVisible: false,
            }
        },
        methods: {
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>