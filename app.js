var library = 
[
    {
        name: "ing",
        phrases: ['ring', 'thing', 'king', 'wing', 'sing', 'ping','bring','swing','string']
    },
    {
        name: "at",
        phrases: ['cat', 'dog', 'hat', 'sat', 'mat', 'rat', 'pat', 'bat', 'fat']
    },
    {
        name: "random",
        phrases: ['cat', 'dog', 'hat', 'sat', 'mat', 'rat', 'me', 'he', 'we', 'see', 'tree', 'bee']
    }
]
var app = new Vue({
    el: '#app',
    data: {
        word: '',
        phrases: library[0].phrases
    },
    mounted: function () {
        var vm = this
        var name= window.location.search.replace('?name=','');
        var set = library.find(x => x.name == name);
        this.phrases = set ? set.phrases : this.phrases;
        this.setBackgroundToRandomColor();
        this.word = getRandom(this.phrases, this.word);
        window.addEventListener('keyup', function (event) {
            if (event.keyCode == 32) {
                vm.refresh();
            }
        });
    },
    methods: {
        refresh() {
            this.word = getRandom(this.phrases, this.word);
            this.setBackgroundToRandomColor();
        },
        setBackgroundToRandomColor() {
            document.getElementById("app").style.backgroundColor = randomColor({
                luminosity: 'dark'
            });
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