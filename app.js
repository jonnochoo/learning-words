var library = [
  {
    name: 'magic-100-gold',
    phrases: [
      'a',
      'and',
      'be',
      'I',
      'in',
      'is',
      'it',
      'of',
      'that',
      'the',
      'to',
      'was',
    ],
  },
  {
    name: 'magic-100-red',
    phrases: [
      'all',
      'as',
      'are',
      'at',
      'but',
      'for',
      'had',
      'have',
      'her',
      'his',
      'not',
      'on',
      'one',
      'said',
      'so',
      'they',
      'we',
      'with',
      'you',
    ],
  },
  {
    name: 'magic-100-blue',
    phrases: ['an', 'by', 'do', 'go', 'if', 'me', 'my', 'no', 'or', 'up'],
  },
  {
    name: 'magic-100-green',
    phrases: [
      'big',
      'can',
      'did',
      'get',
      'has',
      'him',
      'new',
      'now',
      'off',
      'old',
      'our',
      'out',
      'see',
      'she',
      'two',
      'who',
    ],
  },
  {
    name: 'magic-100-orange',
    phrases: [
      'back',
      'been',
      'came',
      'down',
      'from',
      'into',
      'just',
      'like',
      'made',
      'much',
      'over',
      'them',
      'this',
      'well',
      'went',
      'when',
    ],
  },
  {
    name: 'magic-100-indigo',
    phrases: [
      'all',
      'come',
      'here',
      'make',
      'must',
      'only',
      'some',
      'then',
      'were',
      'what',
      'will',
      'your',
    ],
  },
]
var app = new Vue({
  el: '#app',
  data: {
    word: '',
    phrases: library[0].phrases,
  },
  mounted: function() {
    var vm = this
    var name = window.location.search.replace('?name=', '')
    var set = library.find(x => x.name == name)
    this.phrases = set ? set.phrases : this.phrases
    this.setBackgroundToRandomColor()
    this.word = getRandom(this.phrases, this.word)
    window.addEventListener('keyup', function(event) {
      if (event.keyCode == 32) {
        vm.refresh()
      }
    })
  },
  methods: {
    refresh() {
      this.word = getRandom(this.phrases, this.word)
      this.setBackgroundToRandomColor()
    },
    setBackgroundToRandomColor() {
      document.getElementById('app').style.backgroundColor = randomColor({
        luminosity: 'dark',
      })
    },
  },
})
function getRandom(array, previous) {
  var newItem
  do {
    const min = 0
    const max = array.length - 1
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    newItem = array[randomNumber]
  } while (previous === newItem)
  return newItem
}
