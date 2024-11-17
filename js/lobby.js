let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if(displayName){
    form.name.value = displayName
    
}


    


// Статический список комнат с id и name
const rooms = [
    { id: 1, name: 'Терминал 1' },
    { id: 2, name: 'Терминал 2' },
    { id: 3, name: 'Терминал 3' },
    { id: 4, name: 'Терминал 4' }
];

// Контейнер для отображения комнат
const roomListContainer = document.getElementById('room__list__items');

// Функция для отображения списка комнат
const renderRoomList = () => {
    roomListContainer.innerHTML = ''; // Очистить предыдущий список

    if (rooms.length === 0) {
        roomListContainer.innerHTML = '<li>Комнат нет</li>';
        return;
    }

    rooms.forEach((room) => {
        const listItem = document.createElement('li');
        listItem.textContent = room.name + " ";

        const joinButton = document.createElement('button');
        joinButton.textContent = 'Присоединиться';
        joinButton.addEventListener('click', () => {
            // Установка имени пользователя в формате "Терминал + id"
            const userName = `Терминал ${room.id}`;
            sessionStorage.setItem('display_name', userName);

            // Переход в комнату с id
            window.location = `room.html?room=${room.id}`;
        });

        listItem.appendChild(joinButton);
        roomListContainer.appendChild(listItem);
    });
};

// Вызов функции отображения комнат при загрузке страницы
document.addEventListener('DOMContentLoaded', renderRoomList);

// Обработка отправки формы для создания комнаты

if (displayName) {
    form.name.value = displayName;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sessionStorage.setItem('display_name', e.target.name.value);

    let inviteCode = e.target.room.value;
    if (!inviteCode) {
        inviteCode = String(Math.floor(Math.random() * 10000));
    }
    
    const newRoom = {
        id: rooms. e.target.room.value, 
        name: inviteCode
    };
    rooms.push(newRoom);

    renderRoomList(); // Обновление списка комнат
    window.location = `room.html?room=${newRoom.id}`;
});
