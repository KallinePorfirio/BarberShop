// Importar o SDK do Firebase e configurar as credenciais
var firebaseConfig = {
  apiKey: "AIzaSyBlzR2RQZBxAZcz9g2B4Ol-4ik1xJVEhmc",
  authDomain: "barbershop-887e5.firebaseapp.com",
  databaseURL: "https://barbershop-887e5-default-rtdb.firebaseio.com",
  projectId: "barbershop-887e5",
  storageBucket: "barbershop-887e5.appspot.com",
  messagingSenderId: "875492769133",
  appId: "1:875492769133:web:a70c5d3af13e9c3063ae64",
  measurementId: "G-J7MH4PD9NT"
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);

// Obter uma referência para o Realtime Database
var database = firebase.database();

// Função para enviar os dados do formulário para o Firebase
function enviarFormulario(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obter os valores dos campos do formulário
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('telefone').value;
  var data = document.getElementById('data').value;
  var horario = document.getElementById('horario').value;

  // Criar um objeto com os dados do formulário
  var formularioData = {
    nome: nome,
    email: email,
    telefone: telefone,
    data: data,
    horario: horario
  };

  // Enviar os dados para o Realtime Database
  database.ref('agendamentos').push(formularioData)
    .then(function() {
      // Limpar os campos do formulário após o envio
      document.getElementById('nome').value = '';
      document.getElementById('email').value = '';
      document.getElementById('telefone').value = '';
      document.getElementById('data').value = '';
      document.getElementById('horario').value = '';

      // Exibir uma mensagem de sucesso
      alert('Agendamento enviado com sucesso!');
    })
    .catch(function(error) {
      // Exibir uma mensagem de erro, caso ocorra algum problema
      console.error('Erro ao enviar o agendamento:', error);
      alert('Erro ao enviar o agendamento. Por favor, tente novamente mais tarde.');
    });
}

// Adicionar um evento de envio ao formulário
document.getElementById('formulario').addEventListener('submit', enviarFormulario);
