document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'baseballman',
            img: 'ima/baseballman.png',
        },
        {
            name: 'baseballwoman',
            img: 'images/baseballwoman.png',
        },
        {
            name: 'hurdleman',
            img: 'images/hurdleman.png',
        },
        {
            name: 'baseballman',
            img: 'images/hurdlewoman.png',
        },
        {
            name: 'marathonman',
            img: 'images/marathonman.png',
        },
        {
            name: 'paralympicrunner',
            img: 'images/paralympicrunner.png',
        },
        {
            name: 'rikujouhabatobi',
            img: 'images/rikujouhabatobi.png',
        },
        {
            name: 'soccerman',
            img: 'images/soccerman.png',
        },
        {
            name: 'soccerwoman',
            img: 'images/soccerwoman.png',
        },
    ]
    const grid =document.querySelector('.grid')
    //create your board
    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            var card =document.createElement('img')
            card.setAttribute('src','images/blanks.png')
            card.setAttribute('data-id',i)
            grid.appendChild(card) 
        }
    }
    //check
})