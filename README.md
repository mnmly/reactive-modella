# reactive-modella

[reactive](https://github.com/component/reactive) adapter for [modella](https://github.com/modella/modella) to update the reactive view with modella model changes.

```js
var model = require('modella');
var reactive = require('reactive');
var Adapter = require('reactive-modella');
var Person = model('Person');

Person
  .attr('id')
  .attr('name');

var person = new Person({name: 'Good guy'});

var view = reactive('<p>{name}</p>', person, {
    adapter: Adapter
});

//=> <p>Good guy</p>
```

## License

MIT
