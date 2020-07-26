const person = {
    age: 26,
    name: 'Irina',
    'country-live': 'Russian',
    toString: function() {
        return Object.keys(this)
        .map(key => this[key])
        .join(' ')
    }
}