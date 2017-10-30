const frisby = require('icedfrisby')
const Joi = require('joi')

describe('Wiktionary', function(){
    it('should define a word @important', function(){
        frisby.create(this.test.title + ' - Define purple')
            .get('https://en.wiktionary.org/api/rest_v1/page/definition/purple')
            .expectStatus(200)
            .after(function(error,response){
                frisby.create(this.test.title + ' - Define violet')
                    .get('https://en.wiktionary.org/api/rest_v1/page/definition/violet')

            })
        .toss()
    })

    it('should define a second word', function(){
        frisby.create(this.test.title)
            .get('https://en.wiktionary.org/api/rest_v1/page/definition/orange')
            .expectStatus(200)
        .toss()
    })

    it('should define a third word', function(){
        frisby.create('Define the word "important"')
            .get('https://en.wiktionary.org/api/rest_v1/page/definition/important')
            .expectStatus(200)
        .toss()
    })

    it('should define a fourth word', function(){
        frisby.create(this.test)
            .get('https://en.wiktionary.org/api/rest_v1/page/definition/word')
            .expectStatus(200)
        .toss()
    })
})