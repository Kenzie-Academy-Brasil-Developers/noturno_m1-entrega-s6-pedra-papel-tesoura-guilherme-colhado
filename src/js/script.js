(function() {
    const texto = document.querySelector('#texto')
    const botao = document.querySelector('#escolha')
    const vocePlacar = document.querySelector('#vocePlacar')
    const pcPlacar = document.querySelector('#pcPlacar')
    const empatePlacar = document.querySelector('#empatePlacar')
    botao.addEventListener('click', e => {
        e.preventDefault
        const imgEu = document.querySelector('#you img')
        const imgPc = document.querySelector('#pc img')
        const imagens = {
            '1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADGklEQVRoge2Xu09TcRTHP+dCS5USJBoQIoqvRFolcTHGzcXEwcU4GFwcjEYHAxpjFKgk+Fp8LK4uRk1cdHAhDpr4B+gAFQ1qFAPII1jE1kpvfw4+gr23+vvd9hpN7mfq/eb0nPPtPb9HISAgICAg4D9G/Ej6urclkrYWnxOhHVAKboVrv3StPzqcLXetynInBMhY1RdEVMePZ4Hj86mQBRwrd62S3oC6Q8Wzofh5RB0EMgKXNnQnLw+djY0rqC8If7/ITreU+81UlGJgb1ssgdAFRIAaYMf04/rZj+nc7nDIKgyP5iQcFaETiAI1AtvyWav62sOpfq89OKqYoOBQoZZXqnN88rNrvIhqd1FdNH1KXQONhYLAirGpDOtWRR3BH+bm62ujoUK5oZRFX9IbKMZcOsdcOufQR8bTrvHfFj3HgOVA4/dFf0Gnli8GANzGaHQiQ85WDn0qldnvzKA3Wr4ZGJvKODTbVoxOOvVXb9NLXFI06NTxxUBdbZhQpXvqd2POMZpOZZlOedtJfTnItrYtddXrasPgnCAAXr75xNK2KuNavhgoxu+M5VURZ3/Ak4F7R9Y2z05+euSpogvFjOlgvAbuHmg5PDqSejWZyq7xXLWMGBlInm3tmJlJX8tk7b86er9D20CyL34SJVdWNlX7cgX3ipaBwb74HlAXARqXRYhU+XZ8GKPViaBO/fxsCc0N1f51ZIjuT7l64cPKpkVY1r8xSboGBhY+hEMVLF8W8aEdc/RGKC/nCrVVTf/GGGkZaD0z2A/q9kJtSY3jXl9upnWCtLeTrF11BBjx3I45WrW0DWzuffpBKfYBec8tGSEPdKKMNvR4IvlYwRVvDRmhlPp1ZIthfCLFupMnUHLVvCcjbsYTySc6gcYGRFCxxGAnqD7zvnQKMCwV+Y4/B37D850g1vMsIVi7gPdeczhQvFA52dl6ekhrB4IS/1K29gzcn7cr20BugNjeM4mNcL0q/HlLvHdw2Oib3ov+yoveTWtylbl2UbId2KigDih2WChgAngDqt8if3NDz/Pn5eolICAgICDgv+ErFybyRPb98F0AAAAASUVORK5CYII=',
            '2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADQElEQVRoge2ZTUhUURTH/+e+0Ygsyt5zNHRl0qKNfcFA2jRQixbVImwXShiIoDNWqz7AFoGE4owuAkNom21cuHMxKn6AEFrQKpCIKKQ3JhWoOe+eVsI4DjNzr8+Zqea3u+/ec8//z3tz7rkMUKTInkBubzjSBMNbabayYB8xzS1/tYdvvobjdp5kPG5v6D1m9oIRIiYAaKmsMk8A9j238yQjXN+R0bx9iBbXc6RA+43MdlXv34ivnYch7ED422LC1JGkpeWJg2jIqocjTfw8OB14+XFdN38yWm9kps1bsemsvxVE40LywlSHOZRN3ESn+UJIXhBE4+LQr3czbd4Knfyp0DISL5VdAOq2xky4Ew1Z9eliJjusUwS0Jjyqc0riQZ38qdAyQuDa5GeGg+PpY7AjBkR1KZZq4dqPXYr0pTzT/G5xvfzqkqZ4ZIX75VcD3eKRSEEY0SkeyRSEEZ3ikUxBGEmFanEoWCOqFI0UGkUjhYZrJ7tg9k0ELYB5x9xE0GoSzL7kGQbVTAStJmbUADvjVHDNCAN3KYUJACDmkdQz7CPGiBv5/5lPq2ik0CgaKTQ8ABBtt8rIkLeI6AzABKZ5acRfBcKrq/kWmC2eaLtVKTw8BWzdnwkg3BbS0zPZaYb3sez3Da78yK/MzAjhkU+RcKlJ4DCA7g0yliY7reBIE4wca1NCAHQp/RI+CnDYW2XOTYXM07mRpY4wyGkEeDaLtedYYn4yaPYzoWzPlSkiGiLfP8nymB/AEwAyw3oDjBAYV3KgTQkBAIFuxP0DdrcgXAcolm9ROmw7Rxoj9phkpx6EmXwJ0mXHgRgYXPl8YM0OABzJhyBdUp7sZ4ew6R+IhQAM51iPNmlbFLPcbgcwlSMtuyKtkZPd+C1LSm8AWMqRHm0yNo2Bvi+2YchrAHLapgiQUr6sut+G/pX3JLgZmc8Z1yBBH1TWZ93GXwjHRkH8UF2SFouN/ctKn7PSfcQfifWA0aemSR1BeKwcoxrgH7TvA/QIwKZqbDYQ8KwxYo9pxOkx3VV+Ujqil4HLgCst/iozP7g4GHuuE7zr//Wi7VYllfBVAtWCuZqAUpV4Zlom4I1jbI7+TTfSIv8NfwDSPgSXy+DxUwAAAABJRU5ErkJggg==',
            '3': 'data:image/png;base64,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'
        }
        imgEu.src = imagens['1']
        imgPc.src = imagens['1']
        const radios = document.querySelectorAll('.jokenpo')
        let you = undefined
        radios.forEach((joken, index) => {
            if (joken.checked) {
                you = index + 1
            }
        })
        if (!you) {
            texto.innerHTML = 'Escolha um por favor'
            return 0
        }
        pc = Math.floor(Math.random() * (4 - 1) + 1)
        const seuBraco = document.querySelector('#you')
        const pcBraco = document.querySelector('#pc')
        seuBraco.classList.add('animaBracoEu')
        pcBraco.classList.add('animaBracoPc')
        const animacao = setInterval(() => {
            seuBraco.classList.remove('animaBracoEu')
            pcBraco.classList.remove('animaBracoPc')
            imgEu.src = imagens[you]
            imgPc.src = imagens[pc]
            if (empatou(you, pc)) {
                texto.innerHTML = 'O jogo empatou'
                empatePlacar.innerHTML = Number(empatePlacar.innerHTML) + 1
            } else if (vericaVencedor(you, pc)) {
                texto.innerHTML = 'Voce venceu'
                vocePlacar.innerHTML = Number(vocePlacar.innerHTML) + 1
            } else {
                texto.innerHTML = 'Pc venceu'
                pcPlacar.innerHTML = Number(pcPlacar.innerHTML) + 1
            }
            clearInterval(animacao)
        }, 1500);

    })
})()

function empatou(you, pc) {
    return you === pc
}

function vericaVencedor(you, pc) {
    teste = false
    if (you == 1 && pc == 3) teste = true
    else if (you == 2 && pc == 1) teste = true
    else if (you == 3 && pc == 2) teste = true
    return teste
}

/*      
    '1': 'pedra',
    '2': 'papel',
    '3': 'tesoura'
*/