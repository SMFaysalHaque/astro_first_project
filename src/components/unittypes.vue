<template>
    <div>
        <div class="flex items-center justify-between">
            <p class="font-bold text-lg">Unit Types</p>
            <button class="border border-green-700 bg-green-700 hover:bg-green-500 hover:border-green-500 text-white px-10 py-2">Add New Unit</button>
        </div>
        <div class="grid grid-cols-6 bg-slate-100">
            <div class="col-span-2 flex justify-center items-center border border-cyan-700 p-2">
                <p>Type</p>
            </div>
            <div class="col-span-4 flex justify-center items-center border border-cyan-700 p-2">
                <p>Details</p>
            </div>
        </div>
        <div class="grid grid-cols-6">
            <div class="col-span-2 flex justify-center items-center border border-cyan-700">
                <p>Computer</p>
            </div>
            <div class="col-span-4 flex flex-col justify-center border border-cyan-700 ps-10 py-10 space-y-3">
                <p>Name:</p>
                <p>Model Name:</p>
                <p>Serial No.:</p>
            </div>
        </div>
        <div class="grid grid-cols-6">
            <div class="col-span-2 flex justify-center items-center border border-cyan-700">
                <p>Headphone</p>
            </div>
            <div class="col-span-4 flex flex-col justify-center border border-cyan-700 ps-10 py-10 space-y-3">
                <p>Name:</p>
                <p>Model Name:</p>
                <p>Serial No.:</p>
            </div>
        </div>
    </div>
</template>