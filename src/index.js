class Police {
  constructor (schema, config) {
    this.schema = schema
    this.config = config
  }
}

const testData = new Police()
console.log(JSON.stringify(testData, null, 2))
