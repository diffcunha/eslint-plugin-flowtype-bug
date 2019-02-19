// @flow 

type Foo = {
  foo: string
}

export type Exact = {
  ...$Exact<Foo>
}

function call(i: number) {
  return {
    foo: 'bar',
    i: i
  }
}

export type Call = $Call<typeof call>

export type ReadOnly = $ReadOnly<{
  array: $ReadOnlyArray<number>,
  object: $ReadOnly<{ [key: string]: any }>
}>
