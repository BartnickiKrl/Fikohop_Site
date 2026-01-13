let cena = 0
const maxPeople = 6;
const container = document.getElementById('people-container');
const addBtn = document.getElementById('add-person');
const removeBtn = document.getElementById('remove-person');

addBtn.addEventListener('click', () => {
    const currentPeople = container.querySelectorAll('.person').length;
    if(currentPeople < maxPeople){
        const firstPerson = container.querySelector('.person');
        const newPerson = firstPerson.cloneNode(true);
        newPerson.querySelector('.email').style.display = 'none';
        newPerson.dataset.index = currentPeople + 1;
        newPerson.querySelector('legend h2').textContent = `Uzupełnij dane osoby ${currentPeople + 1}`;
        newPerson.querySelectorAll('input').forEach(input => input.value = '');
        container.appendChild(newPerson);
    } else {
        alert("Możesz dodać maksymalnie 6 osób");
    }
});

removeBtn.addEventListener('click', () => {
    const people = container.querySelectorAll('.person');
    if(people.length > 1){
        container.removeChild(people[people.length - 1]);
    } else {
        alert("Musisz mieć przynajmniej jedną osobę");
    }
});

function Money() { 
    const osoby = document.querySelectorAll('.person');   
    
    const znizki = Array.from(osoby).map(person => {
        return person.querySelector('select[name="znizki[]"]').value;
    });

    let godzina = 0;
    if(cena == 30)
    {
        godzina = '1.5h';
    }
    if(cena == 50)
    {
        godzina = '3h';
    }
    if(cena == 70)
    {
        godzina = 'cały dzień';
    }
    if(godzina == 0)
    {
        alert("Wybierz czas pobytu");
        return 0
    }

    let kosztCalkowity = 0;
    // Pętla for, która mnoży cenę przez każdą zniżke
    for (let i = 0; i < znizki.length; i++) {
        kosztCalkowity += cena * Number(znizki[i])/100;
    }

    for (let i = 0; i < osoby.length; i++) {
        osoby[i].classList.add('hide');
    }

    document.querySelectorAll('button').forEach(el => {
        el.classList.add('hide');
    });

    document.querySelectorAll('.napis').forEach(el => {
        el.classList.add('hide');
    });
    let tickety = 'biletów';
    if(osoby.length == 1)
    {
        tickety = 'bilet';
    }
    document.getElementById('Koszt').innerHTML =
    `Koszyk:<br><br>
    Wybrałeś ${osoby.length} ${tickety} na ${godzina}.<br>
    <b>RAZEM ${kosztCalkowity} zł</b>`;
    document.getElementById('Koszt').classList.remove('hide');

    document.getElementById('powrot').classList.remove('hide');
    document.getElementById('later').classList.remove('hide');
}     
function wstecz() {
    document.querySelectorAll('.person').forEach(el => {
        el.classList.remove('hide');
    });

    document.querySelectorAll('button').forEach(el => {
        el.classList.remove('hide');
    });

    document.querySelectorAll('.napis').forEach(el => {
        el.classList.remove('hide');
    });
    document.getElementById('Koszt').classList.add('hide');
    document.getElementById('powrot').classList.add('hide');
    document.getElementById('later').classList.add('hide');
}


function Pick(self, koszt) {
    cena = koszt;
    unPick();
    self.classList.add('picked')
}
function unPick() {
    document.querySelectorAll('.ticket_type').forEach(ele => {
        ele.classList.remove('picked');
    });
}