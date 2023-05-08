<template>
    <div>
        <div class="headline-searchBar flex items-center justify-between border border-purple-600">
        <p class="font-bold text-lg">Persons</p>
        <input class="border rounded-lg contrast-more:border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 p-2" type="search" name="" id="" placeholder="Search Employee Name">
    </div>

    <div class="grid grid-cols-12 border border-cyan-700 bg-slate-100">
        <div class="flex items-center justify-center col-span-1 border border-cyan-700">
            <p>Employee Serial No.</p>
        </div>
        <div class="flex items-center justify-center col-span-3 border border-cyan-700">
            <p>Employee Info.</p>
        </div>
        <div class="flex items-center justify-center col-span-6 border border-cyan-700">
            <p>All Units</p>
        </div>
        <div class="flex items-center justify-center col-span-2 border border-cyan-700">
            <p>Assign Units</p>
        </div>
    </div>
    
    <div class="grid grid-cols-12 border border-cyan-700">
        <div class="flex justify-center items-center col-span-1">
            <p>01</p>
        </div>
        <div class="flex flex-col justify-center ps-10 space-y-3 border border-cyan-700 col-span-3">
            <p>Name:</p>
            <p>Mobile:</p>
            <p>E-mail:</p>
        </div>
        <div class="border border-cyan-700 col-span-6">
            <table class="mx-5 my-5">
                <thead>
                    <tr>
                        <th class="border border-slate-300 bg-slate-100 w-32 py-2 text-center">Status</th>
                        <th class="border border-slate-300 bg-slate-100 w-32 py-2 text-center">Serial</th>
                        <th class="border border-slate-300 bg-slate-100 w-32 py-2 text-center">Type</th>
                        <th class="border border-slate-300 bg-slate-100 w-32 py-2 text-center">Name</th>
                        <th class="border border-slate-300 bg-slate-100 w-32 py-2 text-center">Assign To</th>
                        <th class="border border-slate-300 bg-slate-100 w-32 py-2 text-center">From</th>
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
                        <td class="border border-slate-300 text-center py-3">Indiana</td>
                        <td class="border border-slate-300 text-center py-3">Indianapolis</td>
                        <td class="border border-slate-300 text-center py-3">Ohio</td>
                        <td class="border border-slate-300 text-center py-3">Columbus</td>
                        <td class="border border-slate-300 text-center py-3">Michigan</td>
                        <td class="border border-slate-300 text-center py-3">Detroit</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 text-center py-3">Indiana</td>
                        <td class="border border-slate-300 text-center py-3">Indianapolis</td>
                        <td class="border border-slate-300 text-center py-3">Ohio</td>
                        <td class="border border-slate-300 text-center py-3">Columbus</td>
                        <td class="border border-slate-300 text-center py-3">Michigan</td>
                        <td class="border border-slate-300 text-center py-3">Detroit</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex items-center justify-center border border-cyan-700 col-span-2">
            <button class="border rounded-lg contrast-more:border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 hover:bg-sky-600 hover:text-white px-10 py-3 me-2">Assign Product Units</button>
        </div>
    </div>
    <div class="grid grid-cols-12 border border-cyan-700">
        <div class="flex justify-center items-center col-span-1">
            <p>02</p>
        </div>
        <div class="flex flex-col justify-center ps-10 space-y-3 border border-cyan-700 col-span-3">
            <p>Name:</p>
            <p>Mobile:</p>
            <p>E-mail:</p>
        </div>
        <div class="border border-cyan-700 col-span-6">
            <table class="mx-5 my-5">
                <thead>
                    <tr>
                        <th class="border border-slate-300 bg-slate-100 w-32 py-2 text-center">Status</th>
                        <th class="border border-slate-300 bg-slate-100 w-32 py-2 text-center">Serial</th>
                        <th class="border border-slate-300 bg-slate-100 w-32 py-2 text-center">Type</th>
                        <th class="border border-slate-300 bg-slate-100 w-32 py-2 text-center">Name</th>
                        <th class="border border-slate-300 bg-slate-100 w-32 py-2 text-center">Assign To</th>
                        <th class="border border-slate-300 bg-slate-100 w-32 py-2 text-center">From</th>
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
                        <td class="border border-slate-300 text-center py-3">Indiana</td>
                        <td class="border border-slate-300 text-center py-3">Indianapolis</td>
                        <td class="border border-slate-300 text-center py-3">Ohio</td>
                        <td class="border border-slate-300 text-center py-3">Columbus</td>
                        <td class="border border-slate-300 text-center py-3">Michigan</td>
                        <td class="border border-slate-300 text-center py-3">Detroit</td>
                    </tr>
                    <tr>
                        <td class="border border-slate-300 text-center py-3">Indiana</td>
                        <td class="border border-slate-300 text-center py-3">Indianapolis</td>
                        <td class="border border-slate-300 text-center py-3">Ohio</td>
                        <td class="border border-slate-300 text-center py-3">Columbus</td>
                        <td class="border border-slate-300 text-center py-3">Michigan</td>
                        <td class="border border-slate-300 text-center py-3">Detroit</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex items-center justify-center border border-cyan-700 col-span-2">
            <button class="border rounded-lg contrast-more:border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 hover:bg-sky-600 hover:text-white px-10 py-3 me-2">Assign Product Units</button>
        </div>
    </div>
    </div>

</template>