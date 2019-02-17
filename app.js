var phrases = ['sh', 'oo', 'ch', 'ing', 'to', 'the', 'a', 'ee', 'ow', 'th', 'me', 'we', 'cat', 'dog',
    'tr', 'ay', 'at', 'it', 'i', 'ot'
];

var app = new Vue({
    el: '#app',
    data: {
        word: ''
    },
    mounted: function () {
        var vm = this;
        this.setBackgroundToRandomColor();
        this.word = getRandom(phrases, this.word);
        window.addEventListener('keyup', function (event) {
            if (event.keyCode == 32) {
                vm.refresh();
            }
        });
    },
    methods: {
        refresh() {
            this.word = getRandom(phrases, this.word);
            this.setBackgroundToRandomColor();
        },
        setBackgroundToRandomColor() {
            document.getElementById("app").style.backgroundColor = randomColor();
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