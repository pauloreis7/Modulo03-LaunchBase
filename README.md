# Modulo03-LaunchBase
 Projetos e conceitos realizados durante o terceiro módulo do bootCamp

# Sobre backend

## Dependências

São projetos que já foram criados por outras pessoas e colocamo-os dentro do nosso projeto para que possamos fazer o uso das funcionalidades desse projeto externo sem precisar programar tais funcionalidades facilitando no desenvolvimento do seu próprio projeto

### NPM

O npm é um gerenciador de pacotes é por ele que nós instalamos e inserimos essas dependências, pacotes no nosso projeto facilitando seu dessenvolvimento.
O npm irá buscar o pacote desejado que outros já fizeram e trazê-lo para dentro do nosso projeto.

### .JSON

É um arquivo de notação de objeto JS o seu conteúdo é muito semelhante a um objeto JS. Abre e fecha chaves igual a um objeto e dentro das chaves temos um identificador e um valor cada um dos elementos entre " bem semelhante as propriedades e valores dos objetos JS e no final de cada linha(propriedade) deve-se ter uma virgula para iniciar a outa linha(propriedade), somente o último elemento não pode conter uma vírgula no final, pois não há nenhum outro depois dele.

## Express

O express é um pacote de servidor ou seja é um servidor que inserimos no projeto pelo npm. O express é um servidor bem enxuto que nós permite adicionar a ideia de um servidor na nossa aplicação e podendo construi-lo da forma que quiser.

### Require

É uma opção do JS e Node para que possamos chamar o express, pois ele tem que ser chamado ,por meio de uma varivel em js mesmo, na nossa pasta em que está o conteúdo do servidor e ao fazer isso a variável com o express passa a ser uma função.

### Listen

Com a variável do server já criada utiliza-se o nome da variavel.listen(porta) para que o servidor fique ouvindo a porta desejada e assim seja criado.

### get

O get significa pegar em JS e por meio disso conseguimos informar para algo pegar outro algo.

### req e res

Diz respeito a requisição(req) e resposta(res) do servidor

#### Servidor auto reinicia

Usa-se o comando: npm install -D nodemon no terminal para que o servidor auto resete facilitando o desenvolvimento e o -D torna essa uma dependência só de desenvolvimento. Ao instalar o nodemon ir até o .json e mudar no objeto o valor da propriedade de "start" para "Start: nodemon server.js".Basicamente troca o Node por Nodemon que acabou de instalar. Isso ajuda muito facilitando no desenvolvimento.