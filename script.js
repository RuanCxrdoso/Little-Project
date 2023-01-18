function addPlayer() {
    const name = document.getElementById('playerName').value
    const number = document.getElementById('playerNumber').value
    const position = document.getElementById('playerPosition').value

    const confirmation = confirm(`Deseja adicionar o jogador: ${name}, camisa: ${number} como: ${position} ?`)

    if (confirmation) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.innerText = `Jogador: ${name} / / Número: ${number} / / Posição: ${position}`
        playerItem.id = `player-${number}`
        const row = document.createElement('hr')
        row.id = `hr-${number}`

        teamList.append(playerItem, row)

        document.getElementById('playerName').value = ''
        document.getElementById('playerNumber').value = ''
        document.getElementById('playerPosition').value = ''
    }
}

function removePlayer() {
    const teamList = document.getElementById('teamList')
    const playerToRemove = document.getElementById('playerToRemove').value
    const playerItem = document.getElementById(`player-${playerToRemove}`)
    const hr = document.getElementById(`hr-${playerToRemove}`)

    confirmation = confirm(`Deseja remover o jogador de número ${playerToRemove} ?`)

    if (confirmation) {
        teamList.removeChild(playerItem)
        teamList.removeChild(hr)
        document.getElementById('playerToRemove').value = ''
    }

}