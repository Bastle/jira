# jira

# TypeScript

联合类型

let myNumber: string | number = 1

类型别名

类型别名很多情况下可以和 interface 互换
interface Person {
name: string
}
type Person = {
name: string
}

const jack: Person = {name: 'jack'}

在这种情况下 interface 无法替代 type

type MyNumber = string | number

let jacksNumber: MyNumber = '2'
jacksNumber = 2

inerface 也无法实现 Utility type
