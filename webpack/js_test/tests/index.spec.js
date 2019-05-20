//自己测试代码
//工作流里面标准的自测方法，可以将代码的准确性 99%
const { add } = require('../index')
//代码能够如约运行
const expect = require('chai').expect

//测试代码  descibe 测试  it   expect 期望的结果
describe("两数相加的结果为和", () => {
  it('两个字符串相加，应该转变类型后返回其值', () => {
    expect(add("13", "14")).to.equal(27);
  });
  it("当参数类型错误时，请返回NaN", () => {
    expect(add(0, null)).to.equal(NaN)
  });
});


