# useForm ⚛️⚓️
_Manage your forms with magic_ ✨ 🧙🏽‍♂️

[![NPM](https://img.shields.io/npm/v/@gco.c/useform)](https://www.npmjs.com/package/@gco.c/useform ) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation 💻

```bash
[npm | yarn] [install | add] @gco.c/useform
```

## Examples

####  Simple Form 📝✨

```jsx

import React from 'react';
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
        className="more-classes"
      >
        Submit
      </button>
    </form>
  );
};
```

## Form with a state object with nested values ✨
``` jsx
import React from 'react';
import { useForm } from '@gco.c/useform';

const SignUp = ({ classes }) => {
  const { values, useInput, isValid } = useForm({
    user: {
      username: '',
      email: ''
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        {...useInput('user.username', 'isRequired')}
      />

      <input
        className="some-classess"
        {...useInput('user.email', 'isRequired, isEmail')}
      />

      <button
        type="submit"
        disabled={!isValid}
        className="more-classes"
      >
        Submit
      </button>
    </form>
  );
};
```

## Form with checkboxes
```jsx
import React from 'react';
import { useForm } from '@gco.c/useform';


const SelectYourPlayers = ({ classes }) => {
  const defaultWarriors = {
    warriors: ['Raiden', 'Sub Zero']
  };

  const { values, useCheckboxGroup, isValid } = useForm(defaultWarriors);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-checkbox-group">
          <label>
            Raiden
            <input
              type="checkbox"
              {...useCheckboxGroup('warriors', 'Raiden')}
            />
      </label>
      <div className="form-checkbox-group">
          <label>
            Sub Zero
            <input
              type="checkbox"
              {...useCheckboxGroup('warriors', 'Sub Zero')}
            />
      </label>
      <div className="form-checkbox-group">
        <label>
            Scorpion
            <input
              type="checkbox"
              {...useCheckboxGroup('warriors', 'Scorpion')}
            />
      </label>
      <button
        type="submit"
        disabled={!isValid}
        className="more-classes"
      >
        Submit
      </button>
    </form>
  );
};
```

## License

MIT © [GianCastle](https://github.com/GianCastle)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
