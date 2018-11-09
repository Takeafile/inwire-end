# inwire-end

Push an `end` message on `finish` event in streams that can't end

This is useful when you are using underlaying streams that can `end` or `close`
themselves, while at application level the stream could be still alive (for
example, changing the underlaying stream, like using a different transport
layer).

You can use several instances of `inwire-end` in your pipeline, wrapping the
underlaying streams and matching the correct pair like when using parenthesis or
like a matrioska.

## Install

```sh
npm install inwire-end
```

## API

### duplex

- *duplex*: `Duplex` stream to be wrapped
- *options*
  - *receiver*: options passed to `Readable` stream
  - *sender*: options passed to `Writable` stream

### receiver

- *options*: options given to underlaying `Transform` stream

### sender

- *options*: options given to underlaying `Transform` stream
