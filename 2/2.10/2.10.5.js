let login = '';
let message = (login == 'Сотрудник') ? 'Привет':
    (login == 'Директор')? 'Здраствуйте':
    (login == '')? 'Нет логина':
    '';

console.log(message);