(()=> {

    const imgDb = [
        'https://robertelliotthomes.com/wp-content/uploads/2020/11/Luxury-homes-in-Dallas.jpg',
        'https://static01.nyt.com/images/2022/04/17/realestate/17selling-ORANGE-COUNTY/oakImage-1648591069013-superJumbo.jpg',
        'https://nelson-homes.com/media/images/Chestermere_house_plan_nelson_home.2e16d0ba.fill-860x550.jpg',
        'https://thrivehomes.com.au/-/media/thrive-homes/brand/home-page/thive-homepage-banner-2168x1355.ashx',
        'https://nelson-homes.com/media/images/Chestermere_house_plan_nelson_home.2e16d0ba.fill-860x550.jpg',
    ]

        const render = ()=> {

            const imageList = document.getElementById('imageList');

            let imgTag;
            for (const i in imgDb) {
                imgTag = document.createElement('img');
                imgTag.style.width = '80px';
                imgTag.style.height = '80px';
                imgTag.style.margin = '5px';
                imgTag.style.backgroundColor = 'grey';
                imgTag.style.cursor = 'pointer';
                imgTag.setAttribute('src', imgDb[i])
                imageList.appendChild(imgTag);
            }
            console.log(imageList);


            const alertZoneDiv = document.getElementById('alertZone');
            const alertContentDiv = document.getElementById('alertContent');
            const imgContent = document.getElementById('imageContent');
            const sourceContent = document.getElementById('sourceContent');

            imageList.addEventListener('click', (event)=>{
                const source = event.target.getAttribute('src')
                if(source)
                    imgContent.setAttribute('src', source);
                    sourceContent.textContent = source;
                    alertZoneDiv.classList.remove('hide');
                    alertContentDiv.classList.remove('hide')
            })
            alertContentDiv.addEventListener('click', (event)=>{
                if(event.target.id === 'close')
                    alertZoneDiv.classList.add('hide')
                    alertContentDiv.classList.add('hide')
            })
        }
        render();

})();