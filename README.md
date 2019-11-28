# useForm

> Treath your forms with magic!

[![NPM](https://img.shields.io/npm/v/@gco.c/useform)](https://www.npmjs.com/package/@gco.c/useform ) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation 💻

```bash
npm install --save @gco.c/useform
```

You can use Yarn Package Manager

```bash
yarn add @gco.c/useform
```

## Examples


####  Simple Form
```jsx

import React from 'react'
import { useForm } from '@gco.c/useform';


const SignUp = ({ classes }) => {
  const { values, useInput, isValid } = useForm({
    username: '',
    email: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        {...useInput('username', 'isRequired')}
      />

      <input
        className="some-classess"
        {...useInput('email', 'isRequired, isEmail')}
      />

      <button type="submit"
        disabled={!isValid}
        color="primary"
        className="more-classes"
      >
        Submit
      </button>
    </form>
  )
};

```

## License

MIT © [GianCastle](https://github.com/GianCastle)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
