# filefile

Keeping track of your redundantly-named 'file' files. Why are they all called 'file'? I don't know but now you can keep track of them!

## Using filefile

### Use from a Javascript file

Using this method, you can include filefile such that it runs as part of a script (such as a build script).

```bash
npm install --save-dev filefile
```

Then in your js file:

```js
require('filefile');
```

filefile will run automatically (nothing to call).

### Use from command line

```bash
npm install --global filefile
filefile
```

## Credits

filefile takes inspiration from the idea of [Filefile](https://github.com/cobyism/Filefile).
