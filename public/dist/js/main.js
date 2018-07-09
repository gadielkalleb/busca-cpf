$(function(){
  document.getElementById('btnPesquisa').setAttribute('disabled', '')
  document.getElementById('btnSalvar').setAttribute('disabled', '')

  $('#cpfSearch > .cpf-input, #numero').mask('000.000.000-00', {reverse: true});

  $('.cpf-input').on('change', () => {
    if(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test($('.cpf-input').val())) {
      document.getElementById('btnPesquisa').removeAttribute('disabled', '')
    } else {
      document.getElementById('btnPesquisa').setAttribute('disabled', '')
    }
  })

  $('#numero').on('change', () => {
    if(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test($('#numero').val())) {
      document.getElementById('btnSalvar').removeAttribute('disabled', '')
    } else {
      document.getElementById('btnSalvar').setAttribute('disabled', '')
    }
  })


})