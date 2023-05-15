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
                                    <th class="border border-slate-300 w-64 py-2 bg-slate-100">Available</th>
                                    <th class="border border-slate-300 w-64 py-2 bg-slate-100">Taken</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-slate-300 text-center py-3">Computer</td>
                                    <td class="border border-slate-300 text-center py-3">10</td>
                                    <td class="border border-slate-300 text-center py-3">01</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-300 text-center py-3">Headphone</td>
                                    <td class="border border-slate-300 text-center py-3">02</td>
                                    <td class="border border-slate-300 text-center py-3">10</td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {employeeData} from '../Store/store.js'
export default {
    mounted () {
        // console.log(employeeData.get());
    },
}
</script>

<style scoped>

</style>