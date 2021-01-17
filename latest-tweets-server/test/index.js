process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect
const server = "localhost:8080"


chai.use(chaiHttp);

describe('/POST /api/getUserTweets', () => {
    it('it should not POST user tweets without username field', (done) => {
        let username = "username=twitter"
        chai.request(server)
            .post('/api/getUserTweets')
            .send(username)
            .end((err, res) => {
                expect(res.status).to.equal(200)
                expect(res.body).to.be.a('object')
                expect(res.body).to.have.property("data")
                expect(res.body).to.have.property("includes")
                expect(res.body.data).to.be.a('array')
                expect(res.body.includes).to.have.property("media")
                expect(res.body.includes.media).to.be.a('array')
                expect(res.body.data).to.have.lengthOf(10);
                expect(res.body.data[0]).to.have.property("text");
                expect(res.body.data[0]).to.have.property("created_at");
                done();
            });
    });

});