var fruits = [];
var contS;
var contA;
var contB;
var contC;
var contD;
var contE;
var contF;
var contInitial;

window.onload = init;

function init() {
    console.log('hey');
    contS = document.getElementById('contS');
    contA = document.getElementById('contA');
    contB = document.getElementById('contB');
    contC = document.getElementById('contC');
    contD = document.getElementById('contD');
    contE = document.getElementById('contE');
    contF = document.getElementById('contF');
    contInitial = document.getElementById('contInitial');

    fruits.push(
        JSON.parse('{"name":"apple", "img":"https://cdn.pixabay.com/photo/2016/09/29/08/33/apple-1702316_1280.jpg"}'),
        JSON.parse('{"name":"pear", "img":"https://cdn.pixabay.com/photo/2018/05/27/09/56/pear-3433161_1280.jpg"}'),
        JSON.parse('{"name":"banana", "img":"https://cdn.pixabay.com/photo/2016/09/03/20/48/bananas-1642706_1280.jpg"}'),
        JSON.parse('{"name":"strawberry", "img":"https://cdn.pixabay.com/photo/2016/03/05/19/11/berry-1238295_1280.jpg"}'),
        JSON.parse('{"name":"mango", "img":"https://cdn.pixabay.com/photo/2013/11/20/23/02/mango-cut-open-214268_1280.jpg"}'),
        JSON.parse('{"name":"avocado", "img":"https://cdn.pixabay.com/photo/2016/03/05/19/03/appetite-1238257_1280.jpg"}'),
        JSON.parse('{"name":"orange", "img":"https://cdn.pixabay.com/photo/2016/03/05/22/17/food-1239233_1280.jpg"}'),
        JSON.parse('{"name":"watermelon", "img":"https://cdn.pixabay.com/photo/2015/06/19/16/48/watermelon-815072_1280.jpg"}'),
        JSON.parse('{"name":"grapes", "img":"https://cdn.pixabay.com/photo/2020/01/30/07/00/grapes-4804531_960_720.jpg"}'),
        JSON.parse('{"name":"pineapple", "img":"https://cdn.pixabay.com/photo/2015/02/14/18/10/pineapple-636562_1280.jpg"}'),
        JSON.parse('{"name":"peach", "img":"https://cdn.pixabay.com/photo/2017/08/01/08/11/food-2563403_1280.jpg"}'),
        JSON.parse('{"name":"rapsberry", "img":"https://cdn.pixabay.com/photo/2010/12/13/10/05/raspberry-2276_1280.jpg"}'),
        JSON.parse('{"name":"cherry", "img":"https://cdn.pixabay.com/photo/2016/06/18/22/36/cherries-1465801_1280.jpg"}'),
        JSON.parse('{"name":"plum", "img":"https://cdn.pixabay.com/photo/2018/08/30/10/21/plums-3641830_1280.jpg"}'),
        JSON.parse('{"name":"blueberry", "img":"https://cdn.pixabay.com/photo/2015/03/26/09/40/blueberries-690072_1280.jpg"}'),
        JSON.parse('{"name":"tangerine", "img":"https://cdn.pixabay.com/photo/2015/07/18/14/34/tangerine-850432_1280.jpg"}'),
        JSON.parse('{"name":"blackberry", "img":"https://cdn.pixabay.com/photo/2018/07/03/10/46/berry-3513546_1280.jpg"}'),
        JSON.parse('{"name":"pomegranate", "img":"https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_1280.jpg"}'),
        JSON.parse('{"name":"kiwi", "img":"https://cdn.pixabay.com/photo/2016/03/05/23/02/breakfast-1239438_1280.jpg"}'),
        JSON.parse('{"name":"papaya", "img":"https://cdn.pixabay.com/photo/2017/03/07/04/32/fruit-2123166_1280.jpg"}'),
        JSON.parse('{"name":"fig", "img":"https://cdn.pixabay.com/photo/2018/08/24/22/52/fruit-3629058_1280.jpg"}'),
        JSON.parse('{"name":"purple fig", "img":"https://cdn.pixabay.com/photo/2017/08/10/08/26/figs-2619978_1280.jpg"}'),
        JSON.parse('{"name":"grapefruit", "img":"https://cdn.pixabay.com/photo/2016/02/24/17/31/fruit-1220367_1280.png"}')
    );

    fruits.forEach(fruit => {
        contInitial.appendChild(createFruitNode(fruit));
    });

    document.querySelectorAll('.container').forEach(container => {
        container.ondragover = function(ev) {
            ev.preventDefault();
        }
        container.ondrop = function(ev) {
            ev.preventDefault();
            let fruit = JSON.parse(ev.dataTransfer.getData('fruit'));

            container.appendChild(createFruitNode(fruit));
            removeFruit(document.getElementById(ev.dataTransfer.getData('prevParentId')), fruit.name);
        }
    });
}

function createFruitNode(fruit) {
    let node = document.createElement('div');
    let img = document.createElement('div');

    img.style.backgroundImage = `url('${fruit.img}')`;

    node.classList.add('fruit');
    node.appendChild(img);
    node.innerHTML += `${fruit.name}`;
    node.draggable = 'true';
    node.ondragstart = function(ev) {
        ev.dataTransfer.setData('fruit', JSON.stringify(fruit));
        ev.dataTransfer.setData('prevParentId', node.parentElement.id);
    }

    return node;
}

function removeFruit(container, fruitName) {
    let fruitNodes = container.childNodes;

    fruitNodes.forEach(node => {
        if (node.innerHTML && node.innerHTML.includes(fruitName)) {
            node.remove();
        }
    });
}