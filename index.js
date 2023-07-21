function alternarPhoto()
{
    var cards = document.getElementsByClassName('photo');
    cards = Array.from(cards);

    for(let i = 0; i < cards.length; i++)
    {
        cards[i].classList.toggle('photo')
    }
}



