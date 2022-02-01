var faker =  require('faker')//estala a faker via cmd com o comando = npm install faker --save-dev, ai chamamos ela aqui no terte

var cpf = require('gerador-validador-cpf')//biblioteca para gerar CPF, dar o comando = npm install gerador-validador-cpf --save-dev, chamamos essa biblioteca pois o faker não 
// gera cpf pois foi criado na gringa 

export default {

    deliver: function() {

        var firstName = faker.name.firstName() //chamando o faker, e pedindo primeiro nome, e jogando na variavel
        var lastName = faker.name.lastName()//chamando o faker, e pedindo sobre nome, e jogando na varianel

        var data = {
            name: `${firstName} ${lastName}`, //concatenado o nome e sobrenome, na massa de testes 
            cpf: cpf.generate(),//chamando a biblioteca que cria um cpf
            email: faker.internet.email(firstName),//chamando faker pra criar um email dinamico, e passando o parametro que eu quero que tenha o primeiro nome
            whatsapp: '11999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }

}