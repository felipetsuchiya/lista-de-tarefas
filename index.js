var inputValue = document.getElementById("inputTarefa"); //seleciona o input onde escreve as tasks no HTML
var tarefasPendentes = document.getElementById("tarefasPendentes"); //Lista onde vai aparecer as tasks que vc escreveu no input
var tarefasConcluidas = document.getElementById("tarefasConcluidas"); //Lista onde vai aparecer as tasks concluidas
var i = 0; //inicializador para fazer um id personalizado para cada tarefa registrada

function adicionaTarefa() {
  var tarefa = document.createElement("li"); //cria um elemento <li></li>
  tarefa.setAttribute("value", i); // adiciona o atributo value <li value="i"></li>
  tarefa.setAttribute("onclick", "concluirTarefa(this.value)"); // adiciona o atributo onclick <li onclick="concluirTarefa(this.value)"></li>
  tarefa.setAttribute("id", `${"tarefa" + i}`); // adiciona o atributo id <li id=`tarefa${i}`></li>
  tarefa.textContent = inputValue.value; //tarefa recebe o valor do input e transforma em string 
  tarefasPendentes.appendChild(tarefa); // coloca a tarefa no lugar reservado para tarefas pendentes
  inputValue.value = ""; // apaga  oque esta escrito no input
  inputValue.focus(); // foca no input para poder escrever uma nova tarefa
  i++; // soma um no "i"
}

function concluirTarefa(num) {
  const tc = document.getElementById(`${"tarefa" + num}`); // escolhe uma tarefa que esta na lista das tarefas pendentes
  var tarefa = document.createElement("li").appendChild(tc); // cria uma li e coloca a tarefa pendente nela
  tarefasConcluidas.appendChild(tarefa); // coloca a li que acabou de ser criada no lugar reservado para as tarefas concluidas
}
