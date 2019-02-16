var backgroundColors = ['rgb(0, 159, 251)', 'rgb(234, 86, 107)', 'rgb(84, 43, 0)', 'rgb(84, 43, 0)', 'forestgreen'];
var phrases = ['sh', 'oo', 'ch', 'ing', 'to', 'the', 'a', 'ee', 'ow', 'th', 'me', 'we', 'cat', 'dog',
    'tr', 'ay', 'at', 'it', 'i', 'ot'
];
var app = new Vue({
    el: '#app',
    data: {
        word: 'sh'
    },
    mounted: function () {
        var vm = this;
        window.addEventListener('keyup', function (event) {
            if (event.keyCode == 32) {
                vm.refresh();
            }
        });
    },
    methods: {
        refresh() {
            document.getElementById("app").style.backgroundColor = getRandom(backgroundColors, document.getElementById("app").style.backgroundColor);
            this.word = getRandom(phrases, this.word);
        }
    }
})
function getRandom(array, previous) {
    var newItem;
    do {
        const min = 0;
        const max = array.length - 1;
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        newItem = array[randomNumber];
    }
    while (previous === newItem);
    return newItem;
}