const supertest = require("supertest");
const assert = require('assert');
const account = require('../routes/apis/account');

describe("GET /", function() {
    it("it should have a response of all the bank accounts", function() {
        supertest(account)
          .get("/")
          .expect({ 
            id: "id",
            image: "image",
            name: "name",
            email: "email",
            cardNumber: "number" })
          .end(function(err, res){
            if (err) done(err);
            done();
          });
    });
  });

  describe("GET /one/:id", function() {
    it("it should have details of a single bank account", function() {
        let oneAccount = { 
            id: "id",
            image: "image",
            name: "name",
            email: "email",
            cardNumber: "number"
        }
        supertest(account)
          .get("/one/:id")
          .expect(oneAccount)
          .expect(function(res) {
            assert.equal(res.body.message, 'Details of a single account gotten');
            done();
          });
    });
  });
    
  describe("POST /createnew", function(){
    it("To create a new bank account", function() {
        let oneAccount = { 
            id: "id",
            image: "image",
            name: "name",
            email: "email",
            cardNumber: "number"
        }
              supertest(account)
                .post("/createnew")
                .send(oneAccount)
                .expect(oneAccount)
                .expect(function(res) {
                    assert.equal(res.body.message, 'Account Created');
                    done();
                });
            });
          });

    it("it shoud return status code 400 if nothing is sent", function(){
        supertest(account)
        .post("/createnew")
        .send({})
        .expect(400)
        .expect(function(res) {
            assert.equal(res.body.message, 'No details inputed');
            done();
     });
});
describe("PUT /edit/:id", function(){
    it("To edit an existing bank account", function() {
        let editedAccount = { 
            id: "id",
            image: "image",
            name: "name",
            email: "email",
            cardNumber: "number"
        }
              supertest(account)
                .post("/edit/:id")
                .send(editedAccount)
                .expect(editedAccount)
                .expect(function(res) {
                    assert.equal(res.body.message, 'Account Edited Successfully');
                    done();
                });
            });
          });

    it("It should return a status code 400 if nothing is sent", function(){
        supertest(account)
        .post("/edit/:id")
        .send({})
        .expect(400)
        .expect(function(res) {
            assert.equal(res.body.message, 'No details inputed');
            done();
     });
});
describe("DELETE /:id", function() {
    it("It should have details of a single bank account", function() {
        let editedAccount = { 
            id: "id",
            image: "image",
            name: "name",
            email: "email",
            cardNumber: "number"
        }
        supertest(account)
          .get("/:id")
          .expect(editedAccount)
          .expect(function(res) {
            assert.equal(res.body.message, 'Account Deleted Successfully');
            done();
          });
    });
  });
    