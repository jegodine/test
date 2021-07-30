const assert = require("assert");
const internal = require("stream");

const multiple = require("./multiple");

const result = [1,2,"Big"]

describe("Test multiple n = 3", () =>{
    it("This is for testing", () =>{
        var req = {query:{n:3}};
        var instance;
        var res = {json : (json) =>{ instance = json}};
        multiple.process(req, res);
        assert.deepStrictEqual(instance,result)
    });
});