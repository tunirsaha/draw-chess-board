const drawBoard = (_boardDef) => {
    let size = _boardDef.sizeInPx
    let colors = _boardDef.colors
    let el = document.createElement('style')
    el.innerText = `#chess-board{width:${size}px;height:${size}px;}#chess-board .tile{width:${size / 8}px;height:${size / 8}px;}#chess-board .tile.black{background-color:${colors[0]}}#chess-board .tile.white{background-color:${colors[1]}}`
    document.head.appendChild(el)
    buildTiles()
}

const buildTiles = () => {
    let flag = true
    let tileHtmlArr = ''
    for (let i = 1; i <= 64; i++) {
        flag = !flag
        if (i % 8 == 1) flag = !flag
        tileHtmlArr += `<div class="tile ${flag ? 'white' : 'black'}"></div>`
    }
    document.getElementById('chess-board').innerHTML = tileHtmlArr
}