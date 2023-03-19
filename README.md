# Portfolio

## Setup

After cloning this repository,

```
yarn install
```

## pre-commit

### Setup

```
yarn prepare
```

## Arrow function? or Function declaration?

Use arrow function if you want to define props for the component. An example:

```typescript
type UserProps = {
  name: 'John Doe'
  email: 'johndoe@gmail.com'
}

const UserPage: NextPage<UserProps> = ({ name, email }) => {
  return (...)
}

export default UserPage
```

If you don't define props, use function declaration.

```typescript
export default function Home() {
  return (...)
}
```
