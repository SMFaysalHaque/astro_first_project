<template>

    <div class="dashboard-area">
        <div class="grid grid-cols-2">
            <div class="text-center border border-slate-200 p-2 bg-red-200">All Units</div>
            <div class="text-center border border-slate-200 p-2 bg-red-200">Product Summary</div>
            <div class="text-center border border-slate-200 p-2">
                <table class="border-collapse border border-slate-400">
                    <thead>
                            <tr>
                                <th class="border border-slate-300 bg-slate-100 w-1/12 py-2 text-center">Status</th>
                                <th class="border border-slate-300 bg-slate-100 w-2/12 py-2 text-center">Serial</th>
                                <th class="border border-slate-300 bg-slate-100 w-2/12 py-2 text-center">Type</th>
                                <th class="border border-slate-300 bg-slate-100 w-2/12 py-2 text-center">Name</th>
                                <th class="border border-slate-300 bg-slate-100 w-3/12 py-2 text-center">Assign To</th>
                                <th class="border border-slate-300 bg-slate-100 w-2/12 py-2 text-center">From</th>
                            </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td class="border border-slate-300 text-center py-3">Indiana</td>
                                <td class="border border-slate-300 text-center py-3">Indianapolis</td>
                                <td class="border border-slate-300 text-center py-3">Ohio</td>
                                <td class="border border-slate-300 text-center py-3">Columbus</td>
                                <td class="border border-slate-300 text-center py-3">Michigan</td>
                                <td class="border border-slate-300 text-center py-3">Detroit</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 text-center py-3">Ohio</td>
                                <td class="border border-slate-300 text-center py-3">Columbus</td>
                                <td class="border border-slate-300 text-center py-3">Indiana</td>
                                <td class="border border-slate-300 text-center py-3">Indianapolis</td>
                                <td class="border border-slate-300 text-center py-3">Michigan</td>
                                <td class="border border-slate-300 text-center py-3">Detroit</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 text-center py-3">Michigan</td>
                                <td class="border border-slate-300 text-center py-3">Detroit</td>
                                <td class="border border-slate-300 text-center py-3">Ohio</td>
                                <td class="border border-slate-300 text-center py-3">Columbus</td>
                                <td class="border border-slate-300 text-center py-3">Indiana</td>
                                <td class="border border-slate-300 text-center py-3">Indianapolis</td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <div class="text-center border border-slate-200 p-2">
                <table class="border-collapse border border-slate-400">
                        <thead>
                            <tr>
                                <th class="border border-slate-300 w-80 py-2 bg-slate-100">Product Type</th>
                                <th class="border border-slate-300 w-64 py-2 bg-slate-100">Available</th>
                                <th class="border border-slate-300 w-64 py-2 bg-slate-100">Taken</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-slate-300 text-center py-3">Indiana</td>
                                <td class="border border-slate-300 text-center py-3">Indianapolis</td>
                                <td class="border border-slate-300 text-center py-3">Ohio</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 text-center py-3">Ohio</td>
                                <td class="border border-slate-300 text-center py-3">Columbus</td>
                                <td class="border border-slate-300 text-center py-3">Indianapolis</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 text-center py-3">Michigan</td>
                                <td class="border border-slate-300 text-center py-3">Detroit</td>
                                <td class="border border-slate-300 text-center py-3">Indiana</td>
                            </tr>
                        </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>