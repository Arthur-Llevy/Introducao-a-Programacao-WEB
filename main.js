const randomNumber = Math.floor(Math.random() * 500 + 1);
console.log(randomNumber);

const tryNumber = () => {
    const userNumber = document.getElementById("userNumber").value;

    if (userNumber != randomNumber) {
        const message = userNumber < randomNumber ? "menor" : "maior";
        return alert(`Você errou. O número que você digitou é ${message}`);
    }

    return alert('Você acertou!');
}
