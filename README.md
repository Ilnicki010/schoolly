# schoolly

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

## api docs

[GET] Number of all definitions in physic: <pre>localhost:8000/fizyka/count</pre>
[GET] Number of all definitions in english: <pre>localhost:8000/angielski/count</pre>
[GET] 2 random definitions from physic: <pre>localhost:8000/fizyka/limit?q=2</pre>
[GET] 2 random definitions from english: <pre>localhost:8000/angielski/limit?q=2</pre>
[POST] send user question to our e-mails: <pre>localhost:8000/pytanie
parametrs:
q - definitions name
time - time when should append on a page

  </pre>
