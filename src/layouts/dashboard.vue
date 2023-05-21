<template>

    <div class="dashboard-area">
        <div class="grid grid-cols-2 max-xl:grid-cols-1 my-2.5">
            <div class="">
                <p class="text-center border border-slate-200 p-2 bg-red-200">All Units</p>
                <div class="text-center border border-slate-200 p-2">
                    <table class="border-collapse border border-slate-400 w-full">
                        <thead>
                                <tr>
                                    <th class="border border-slate-300 bg-slate-100 w-1/12 py-2 text-center">Status</th>
                                    <th class="border border-slate-300 bg-slate-100 w-2/12 py-2 text-center">Serial</th>
                                    <th class="border border-slate-300 bg-slate-100 w-2/12 py-2 text-center">Type</th>
                                    <th class="border border-slate-300 bg-slate-100 w-2/12 py-2 text-center">Name</th>
                                    <th class="border border-slate-300 bg-slate-100 w-3/12 py-2 text-center">Assign To</th>
                                </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td class="border border-slate-300 text-center py-3">Taken</td>
                                    <td class="border border-slate-300 text-center py-3">01</td>
                                    <td class="border border-slate-300 text-center py-3">Computer</td>
                                    <td class="border border-slate-300 text-center py-3">hp-123</td>
                                    <td class="border border-slate-300 text-center py-3">Akbar Ali</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-300 text-center py-3">Taken</td>
                                    <td class="border border-slate-300 text-center py-3">02</td>
                                    <td class="border border-slate-300 text-center py-3">Headphone</td>
                                    <td class="border border-slate-300 text-center py-3">havit-2345</td>
                                    <td class="border border-slate-300 text-center py-3">Rakib Ali</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="">
                <p class="text-center border border-slate-200 p-2 bg-red-200">Product Summary</p>
                <div class="text-center border border-slate-200 p-2">
                    <table class="border-collapse border border-slate-400 w-full">
                            <thead>
                                <tr>
                                    <th class="border border-slate-300 w-80 py-2 bg-slate-100">Product Type</th>
                                    <th class="border border-slate-300 w-80 py-2 bg-slate-100">Total Quantity</th>
                                    <th class="border border-slate-300 w-64 py-2 bg-slate-100">Available</th>
                                    <th class="border border-slate-300 w-64 py-2 bg-slate-100">Taken</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(signleProduct, i) in allProductTypes" :key="signleProduct.i">
                                    <td class="border border-slate-300 text-center py-3">{{ signleProduct.type }}</td>
                                    <td class="border border-slate-300 text-center py-3">{{ signleProduct.quantity }}</td>
                                    <td class="border border-slate-300 text-center py-3">{{ calculation() }}</td>
                                    <td class="border border-slate-300 text-center py-3">01</td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Unittypes from '../components/unittypes.vue'
import Persons from '../components/Employee.vue'
export default {
    components: {
        Unittypes, Persons
    },
    data() {
        return {
            // key: value
            allProductTypes: []
        }
    },
    mounted () {
            let arr = localStorage.getItem('allProductDetails')
            this.allProductTypes = JSON.parse(arr) ? JSON.parse(arr) : [];
            this.productNameAmount = JSON.parse(localStorage.getItem('personInfos'))
            // this.allProductTypes = JSON.parse(allProductTypes) ? JSON.parse(allProductTypes) : [];
            // console.log(productNameAmount[index].device)
            // for (let i in this.productNameAmount) {
            //     const element = this.productNameAmount[i];
            //     console.log(element) 
            // }
            

        },
    methods: {
        calculation() {
            // console.log(this.productNameAmount)
            for (let i = 0; i < this.productNameAmount.length; i++) {
                const element = this.productNameAmount[i].device;
                // console.log(Object.values(element))
                console.log(element)
                
            }
        }
    },
}
</script>

<style scoped>

</style>