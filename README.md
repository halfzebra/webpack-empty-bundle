# CSS entry with extract-text-webpack-plugin 

extract-text-webpack-plugin produces a javascript file `bundle.js` with empty modules in it.

The expected behaviour would be to not emit `bundle.js`, if the content of all modules is extracted.